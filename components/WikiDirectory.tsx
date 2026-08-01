"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { SearchBox, type SearchRecord } from "./SearchBox";

function subscribeToHistory(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function queryFromLocation() {
  return new URLSearchParams(window.location.search).get("q")?.trim() ?? "";
}

function sortLetter(title: string) {
  const normalized = title.replace(/^(the|a|an)\s+/i, "").replace(/^[“\"']/g, "");
  const first = normalized.charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : "#";
}

export function WikiDirectory({ records }: { records: SearchRecord[] }) {
  const query = useSyncExternalStore(subscribeToHistory, queryFromLocation, () => "");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    if (!normalized) return records;
    return records.filter((article) =>
      `${article.title} ${article.description} ${article.tags.join(" ")} ${article.category}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [query, records]);

  const groups = new Map<string, SearchRecord[]>();
  for (const article of filtered) {
    const letter = sortLetter(article.title);
    groups.set(letter, [...(groups.get(letter) ?? []), article]);
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <header className="page-hero">
        <div>
          <p className="eyebrow">Full archive</p>
          <h1>{query ? "Search results" : "A–Z index"}</h1>
        </div>
        <div className="page-hero__aside">
          <p>
            {query ? (
              <>Matching <strong>“{query}”</strong> across titles, tags, descriptions, and categories.</>
            ) : (
              "Every field note in one quiet index. Definite articles are ignored when alphabetizing."
            )}
          </p>
          <div className="page-stat"><strong>{filtered.length}</strong><span>{query ? "matches" : "articles"}</span></div>
        </div>
      </header>

      <div className="index-tools">
        <SearchBox records={records} />
        <nav className="alphabet-nav" aria-label="Alphabet index">
          {alphabet.map((letter) => groups.has(letter)
            ? <a key={letter} href={`#letter-${letter}`}>{letter}</a>
            : <span key={letter} aria-disabled="true">{letter}</span>)}
        </nav>
      </div>

      {[...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([letter, articles]) => (
        <section className="index-group" id={`letter-${letter}`} key={letter} aria-labelledby={`heading-${letter}`}>
          <h2 className="index-letter" id={`heading-${letter}`}>{letter}</h2>
          <div className="index-list">
            {articles.map((article) => (
              <Link href={`/wiki/${article.slug}`} className="index-item" key={article.slug}>
                <div><h2>{article.title}</h2><p>{article.description}</p></div>
                <small>{article.category}</small>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="about-callout"><p className="eyebrow">No signal</p><p>Try a character name, place, technology, or concept such as “identity,” “matrix,” or “heist.”</p></div>
      )}
    </>
  );
}
