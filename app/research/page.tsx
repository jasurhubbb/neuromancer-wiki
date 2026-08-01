import type { Metadata } from "next";
import Link from "next/link";
import { articleBySlug, searchRecords } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import neuromancerNovel from "@/research/priority/neuromancer-novel.json";
import caseLedger from "@/research/priority/case.json";
import mollyLedger from "@/research/priority/molly-millions.json";
import armitageLedger from "@/research/priority/armitage-corto.json";
import wintermuteLedger from "@/research/priority/wintermute.json";
import neuromancerAiLedger from "@/research/priority/neuromancer-ai.json";
import dixieLedger from "@/research/priority/dixie-flatline.json";
import rivieraLedger from "@/research/priority/peter-riviera.json";
import threeJaneLedger from "@/research/priority/lady-3jane.json";
import lindaLedger from "@/research/priority/linda-lee.json";
import chibaLedger from "@/research/priority/chiba-city.json";
import sprawlLedger from "@/research/priority/the-sprawl.json";
import freesideLedger from "@/research/priority/freeside.json";
import straylightLedger from "@/research/priority/villa-straylight.json";
import cyberspaceLedger from "@/research/priority/cyberspace-matrix.json";
import aiLedger from "@/research/priority/artificial-intelligence.json";
import tessierAshpoolLedger from "@/research/priority/tessier-ashpool.json";
import screamingFistLedger from "@/research/priority/operation-screaming-fist.json";
import bodyModificationLedger from "@/research/priority/body-modification.json";
import straylightRunLedger from "@/research/priority/straylight-run.json";

export const metadata: Metadata = {
  title: "Research ledger",
  description:
    "Audit the recorded search attempts and accessible source fetches behind Neuromancer Atlas’s twenty priority dossiers.",
};

interface LedgerSearch {
  query: string;
  resultCount: number;
  error?: string;
}

interface LedgerSource {
  searchTitle: string;
  url: string;
  resolvedUrl?: string;
  canonicalUrl?: string;
  ok: boolean;
  status?: number;
  title?: string;
}

interface ResearchLedger {
  slug: string;
  topic: string;
  priority: number;
  generatedAt: string;
  searchCount: number;
  fetchedAttemptCount: number;
  accessibleFetchCount: number;
  searches: LedgerSearch[];
  sources: LedgerSource[];
}

const ledgerFiles: ResearchLedger[] = [
  neuromancerNovel,
  caseLedger,
  mollyLedger,
  armitageLedger,
  wintermuteLedger,
  neuromancerAiLedger,
  dixieLedger,
  rivieraLedger,
  threeJaneLedger,
  lindaLedger,
  chibaLedger,
  sprawlLedger,
  freesideLedger,
  straylightLedger,
  cyberspaceLedger,
  aiLedger,
  tessierAshpoolLedger,
  screamingFistLedger,
  bodyModificationLedger,
  straylightRunLedger,
];

const articleSlugByLedger: Record<string, string> = {
  "neuromancer-novel": "neuromancer-novel",
  case: "henry-dorsett-case",
  "molly-millions": "molly",
  "armitage-corto": "armitage-willis-corto",
  wintermute: "wintermute",
  "neuromancer-ai": "neuromancer-ai",
  "dixie-flatline": "dixie-flatline",
  "peter-riviera": "peter-riviera",
  "lady-3jane": "lady-3jane",
  "linda-lee": "linda-lee",
  "chiba-city": "chiba-city",
  "the-sprawl": "sprawl-bama",
  freeside: "freeside",
  "villa-straylight": "villa-straylight",
  "cyberspace-matrix": "cyberspace-matrix",
  "artificial-intelligence": "artificial-intelligence-sprawl",
  "tessier-ashpool": "tessier-ashpool-sa",
  "operation-screaming-fist": "screaming-fist-task-force",
  "body-modification": "body-modification-razorgirl",
  "straylight-run": "straylight-run",
};

function sourceUrl(source: LedgerSource) {
  return source.canonicalUrl || source.resolvedUrl || source.url;
}

function sourceTitle(source: LedgerSource) {
  const recordedTitle = source.title?.trim() || source.searchTitle?.trim();
  if (recordedTitle && recordedTitle !== "Untitled source") return recordedTitle;
  try {
    return new URL(sourceUrl(source)).hostname.replace(/^www\./, "");
  } catch {
    return "Recorded source";
  }
}

function sourceHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const dossiers = ledgerFiles
  .map((ledger) => {
    const articleSlug = articleSlugByLedger[ledger.slug];
    const article = articleBySlug.get(articleSlug);
    const accessibleSources = ledger.sources.filter((source) => source.ok);

    if (!articleSlug || !article) {
      throw new Error('Research ledger "' + ledger.slug + '" has no matching site article.');
    }
    if (ledger.searchCount !== 10 || ledger.searches.length !== 10) {
      throw new Error('Research ledger "' + ledger.slug + '" does not contain exactly 10 recorded search attempts.');
    }
    if (ledger.accessibleFetchCount !== 24 || accessibleSources.length !== 24) {
      throw new Error('Research ledger "' + ledger.slug + '" does not contain exactly 24 accessible fetches.');
    }

    return { ledger, article, accessibleSources };
  })
  .sort((a, b) => a.ledger.priority - b.ledger.priority);

const recordedSearchAttempts = dossiers.reduce((total, dossier) => total + dossier.ledger.searches.length, 0);
const recordedFetchAttempts = dossiers.reduce(
  (total, dossier) => total + dossier.ledger.fetchedAttemptCount,
  0,
);
const accessibleFetches = dossiers.reduce(
  (total, dossier) => total + dossier.accessibleSources.length,
  0,
);

export default function ResearchPage() {
  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="research-page">
        <div className="page-frame">
          <header className="page-hero research-page__hero">
            <div>
              <p className="eyebrow">Public research ledger</p>
              <h1>Show the work.</h1>
            </div>
            <div className="page-hero__aside">
              <p>
                Twenty topic dossiers preserve the queries attempted and the pages successfully
                fetched before article drafting.
              </p>
              <div className="page-stat">
                <strong>{dossiers.length}</strong>
                <span>auditable dossiers</span>
              </div>
            </div>
          </header>

          <section className="research-overview" aria-labelledby="ledger-method-title">
            <div>
              <p className="eyebrow">What these counts mean</p>
              <h2 id="ledger-method-title">Attempts are not results. Fetches are not endorsements.</h2>
              <p>
                A search attempt records an issued query, including attempts that returned no
                result links or encountered an endpoint error. An accessible fetch records a page
                the research run successfully retrieved. Inclusion documents the research path;
                it does not certify every claim on that page.
              </p>
            </div>
            <dl className="research-metrics" aria-label="Ledger totals">
              <div>
                <dt>Recorded search attempts</dt>
                <dd>{recordedSearchAttempts}</dd>
              </div>
              <div>
                <dt>Recorded fetch attempts</dt>
                <dd>{recordedFetchAttempts}</dd>
              </div>
              <div>
                <dt>Accessible fetches</dt>
                <dd>{accessibleFetches}</dd>
              </div>
            </dl>
          </section>

          <section className="research-micro-note" aria-labelledby="micro-research-title">
            <div>
              <p className="eyebrow">Additional first-reader research</p>
              <h2 id="micro-research-title">Twenty-eight small signals, researched separately.</h2>
              <p>RAM, the mycotoxin, the flip-flop switch, Memory Lane, the Hosaka précis, minor venues, drugs, weapons, and interfaces have 142 targeted searches and 203 consulted links of their own.</p>
            </div>
            <div className="research-micro-note__links">
              <Link href="/glossary">Browse the glossary <span aria-hidden="true">→</span></Link>
              <a href="https://github.com/jasurhubbb/neuromancer-wiki/tree/main/research/microlore" rel="noreferrer">Inspect its ledger files <span aria-hidden="true">↗</span></a>
            </div>
          </section>

          <nav className="research-directory" aria-label="Priority dossier directory">
            {dossiers.map(({ ledger, article }, index) => (
              <a key={ledger.slug} href={"#ledger-" + ledger.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{article.title}</strong>
              </a>
            ))}
          </nav>

          <section className="research-dossiers" aria-label="Research dossiers">
            {dossiers.map(({ ledger, article, accessibleSources }, index) => (
              <details
                className="research-dossier"
                id={"ledger-" + ledger.slug}
                key={ledger.slug}
                open={index === 0}
              >
                <summary>
                  <span className="research-dossier__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="research-dossier__title">
                    <strong>{article.title}</strong>
                    <small>{ledger.topic}</small>
                  </span>
                  <span className="research-dossier__counts">
                    <span>{ledger.searches.length} search attempts</span>
                    <span>{accessibleSources.length} accessible fetches</span>
                  </span>
                  <span className="research-dossier__toggle" aria-hidden="true">+</span>
                </summary>

                <div className="research-dossier__body">
                  <div className="research-dossier__meta">
                    <div>
                      <p className="eyebrow">Dossier link</p>
                      <Link href={"/wiki/" + article.slug}>
                        Read {article.title} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <dl>
                      <div>
                        <dt>Ledger topic</dt>
                        <dd>{ledger.topic}</dd>
                      </div>
                      <div>
                        <dt>Recorded</dt>
                        <dd>{ledger.generatedAt.slice(0, 10)}</dd>
                      </div>
                      <div>
                        <dt>Fetch attempts</dt>
                        <dd>{ledger.fetchedAttemptCount}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="research-dossier__columns">
                    <section aria-labelledby={"queries-" + ledger.slug}>
                      <div className="research-list-heading">
                        <p className="eyebrow">Query log</p>
                        <h2 id={"queries-" + ledger.slug}>10 recorded search attempts</h2>
                      </div>
                      <ol className="research-query-list">
                        {ledger.searches.map((search, searchIndex) => (
                          <li key={ledger.slug + "-query-" + searchIndex}>
                            <span className="research-list-index">
                              Q{String(searchIndex + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <code>{search.query}</code>
                              <small>
                                {search.error
                                  ? "Request failed · " + search.resultCount + " result links recorded"
                                  : search.resultCount +
                                    " result link" +
                                    (search.resultCount === 1 ? "" : "s") +
                                    " recorded"}
                              </small>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </section>

                    <section aria-labelledby={"sources-" + ledger.slug}>
                      <div className="research-list-heading">
                        <p className="eyebrow">Accessible source shelf</p>
                        <h2 id={"sources-" + ledger.slug}>24 successfully fetched pages</h2>
                      </div>
                      <ol className="research-source-list">
                        {accessibleSources.map((source, sourceIndex) => {
                          const url = sourceUrl(source);
                          return (
                            <li key={ledger.slug + "-source-" + sourceIndex}>
                              <span className="research-list-index">
                                S{String(sourceIndex + 1).padStart(2, "0")}
                              </span>
                              <a href={url} target="_blank" rel="noreferrer">
                                <strong>{sourceTitle(source)}</strong>
                                <small>
                                  {sourceHost(url)}
                                  {source.status ? " · HTTP " + source.status : ""}
                                </small>
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </section>
                  </div>
                </div>
              </details>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
