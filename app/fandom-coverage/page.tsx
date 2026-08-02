import type { Metadata } from "next";
import Link from "next/link";
import coverage from "@/research/fandom-coverage.json";
import { articleBySlug, searchRecords } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "William Gibson Wiki coverage",
  description: "An auditable map from every Neuromancer topic discovered in the William Gibson Wiki categories to its Neuromancer Atlas article.",
};

const rows = coverage.results.map((result) => {
  const article = result.localSlug ? articleBySlug.get(result.localSlug) : undefined;
  if (!article) throw new Error(`Fandom coverage mapping has no local article: ${result.fandomTitle}`);
  return { ...result, article };
});

export default function FandomCoveragePage() {
  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="coverage-page">
        <div className="page-frame">
          <header className="page-hero coverage-page__hero">
            <div>
              <p className="eyebrow">Cross-wiki coverage audit</p>
              <h1>141 topics. 141 local destinations.</h1>
            </div>
            <div className="page-hero__aside">
              <p>
                This ledger maps the Neuromancer category tree at the William Gibson Wiki to this
                site’s independently researched pages.
              </p>
              <div className="page-stat">
                <strong>{coverage.coveredTopicCount}/{coverage.fandomTopicCount}</strong>
                <span>topics covered</span>
              </div>
            </div>
          </header>

          <section className="coverage-method" aria-labelledby="coverage-method-title">
            <div>
              <p className="eyebrow">Discovery boundary</p>
              <h2 id="coverage-method-title">Topic categories, not every incidental hyperlink.</h2>
              <p>
                The crawl follows four Neuromancer categories, including two sparsely used character
                category variants. It excludes unrelated real-world people, awards, publishers, and
                software linked only from footnotes or navigation. Fandom supplied discovery, not copy:
                local prose was checked against the novel and outside research.
              </p>
            </div>
            <dl className="coverage-metrics">
              <div><dt>New long-form pages</dt><dd>{coverage.newPageCount}</dd></div>
              <div><dt>Existing pages or aliases</dt><dd>{coverage.existingOrAliasCount}</dd></div>
              <div><dt>Unmatched topics</dt><dd>{coverage.fandomTopicCount - coverage.coveredTopicCount}</dd></div>
            </dl>
          </section>

          <div className="coverage-actions">
            <a href={coverage.sourceWiki} target="_blank" rel="noreferrer">
              Open the source Neuromancer page <span aria-hidden="true">↗</span>
            </a>
            <Link href="/research">Read the research method <span aria-hidden="true">→</span></Link>
          </div>

          <section className="coverage-ledger" aria-labelledby="coverage-ledger-title">
            <div className="coverage-ledger__heading">
              <div>
                <p className="eyebrow">Complete mapping</p>
                <h2 id="coverage-ledger-title">William Gibson Wiki → Neuromancer Atlas</h2>
              </div>
              <p>Checked {coverage.checkedAt.slice(0, 10)} · alphabetized by source title</p>
            </div>

            <div className="coverage-table" role="table" aria-label="Fandom topic coverage">
              <div className="coverage-table__head" role="row">
                <span role="columnheader">Source topic</span>
                <span role="columnheader">Local destination</span>
                <span role="columnheader">Coverage</span>
              </div>
              {rows.map((row, index) => (
                <div className="coverage-table__row" role="row" key={row.fandomTitle}>
                  <span className="coverage-table__source" role="cell">
                    <span className="coverage-table__index">{String(index + 1).padStart(3, "0")}</span>
                    <a href={row.fandomUrl} target="_blank" rel="noreferrer">{row.fandomTitle} ↗</a>
                  </span>
                  <span className="coverage-table__destination" role="cell">
                    <Link href={`/wiki/${row.article.slug}`}>{row.article.title}</Link>
                    <small>{row.article.description}</small>
                  </span>
                  <span role="cell">
                    <span className={`coverage-badge coverage-badge--${row.coverageType}`}>
                      {row.coverageType === "new-page"
                        ? "New page"
                        : row.coverageType === "semantic-alias"
                          ? "Mapped alias"
                          : "Existing page"}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
