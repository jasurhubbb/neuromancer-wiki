"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface SearchRecord {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export function SearchBox({ records, compact = false }: { records: SearchRecord[]; compact?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (normalized.length < 2) return [];
    return records
      .map((record) => {
        const title = record.title.toLowerCase();
        const tags = record.tags.join(" ").toLowerCase();
        const description = record.description.toLowerCase();
        let score = 0;
        if (title === normalized) score += 100;
        if (title.startsWith(normalized)) score += 40;
        if (title.includes(normalized)) score += 20;
        if (tags.includes(normalized)) score += 8;
        if (description.includes(normalized)) score += 2;
        return { record, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title))
      .slice(0, 6)
      .map(({ record }) => record);
  }, [normalized, records]);

  return (
    <div className={`search-box ${compact ? "search-box--compact" : ""}`}>
      <form action={`${basePath}/wiki/`} role="search" className="search-box__form">
        <span className="search-box__glyph" aria-hidden="true">⌕</span>
        <label className="sr-only" htmlFor={compact ? "header-search" : "hero-search"}>Search the Neuromancer Atlas</label>
        <input
          id={compact ? "header-search" : "hero-search"}
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setQuery("");
          }}
          placeholder={compact ? `Search ${records.length} articles` : "Search Case, cyberspace, Straylight…"}
          autoComplete="off"
        />
        {!compact && <button type="submit">Search atlas</button>}
      </form>
      {normalized.length >= 2 && (
        <div className="search-box__results" role="listbox" aria-label="Search suggestions">
          {matches.length ? matches.map((record) => (
            <Link key={record.slug} href={`/wiki/${record.slug}`} className="search-result" role="option">
              <span>
                <strong>{record.title}</strong>
                <small>{record.category}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          )) : <p>No close match. Try the A–Z index.</p>}
        </div>
      )}
    </div>
  );
}
