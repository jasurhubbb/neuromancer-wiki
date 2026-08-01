import type { Metadata } from "next";
import Link from "next/link";
import { allArticles, searchRecords } from "@/content";
import { priorityResearchArticles } from "@/lib/wiki";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Research and editorial policy",
  description: "How Neuromancer Atlas researches, labels, cites, and illustrates its 175+ reader-focused articles.",
};

export default function AboutPage() {
  const proseCounts = allArticles.map((article) =>
    [...article.intro, ...article.sections.flatMap((section) => section.body)]
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length,
  );
  const totalProseWords = proseCounts.reduce((sum, count) => sum + count, 0);
  const quotationCount = allArticles.filter((article) => article.quote).length;

  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="about-page">
        <div className="page-frame">
          <header className="page-hero">
            <div><p className="eyebrow">Editorial protocol</p><h1>Trace the source.</h1></div>
            <div className="page-hero__aside"><p>A wiki should make uncertainty visible. This is how the atlas avoids turning repetition into canon.</p><div className="page-stat"><strong>{allArticles.length}</strong><span>substantive articles</span></div></div>
          </header>
          <div className="about-grid">
            <aside className="about-rail">
              <p className="eyebrow">Audit snapshot</p>
              <dl>
                <div><dt>Priority dossiers</dt><dd>{priorityResearchArticles.length}</dd></div>
                <div><dt>Queries per dossier</dt><dd>10+</dd></div>
                <div><dt>Fetched reads per dossier</dt><dd>20+</dd></div>
                <div><dt>Article prose</dt><dd>{totalProseWords.toLocaleString()} words</dd></div>
                <div><dt>Shortest article</dt><dd>{Math.min(...proseCounts)} words</dd></div>
                <div><dt>Located quotations</dt><dd>{quotationCount}</dd></div>
                <div><dt>First-reader glossary</dt><dd>24</dd></div>
                <div><dt>Chapter guides</dt><dd>24</dd></div>
                <div><dt>Canon layers</dt><dd>5</dd></div>
              </dl>
            </aside>
            <div className="about-copy">
              <section>
                <p className="eyebrow">01 / Research depth</p>
                <h2>The first twenty dossiers go unusually deep.</h2>
                <p>Each priority article begins with at least ten distinct internet searches and at least twenty fetched pages. The source shelf mixes official records, author interviews, academic criticism, reference works, teaching notes, and community discussions. A query and source ledger is retained so the claim can be audited.</p>
                <p>Community posts reveal recurring reader questions and competing interpretations. They do not overrule the novel or replace scholarship. Multiple pages may consult the same foundational source, but every priority dossier receives its own topical search record.</p>
                <p>Depth is tested mechanically as well as edited by hand. Every article contains at least 450 words of overview and section prose; priority dossiers contain at least 650. Descriptions, facts, tags, citations, and navigation do not count toward those floors.</p>
              </section>
              <section>
                <p className="eyebrow">02 / Evidence layers</p>
                <h2>Five labels prevent canon drift.</h2>
                <ol>
                  <li><strong>Novel canon</strong> — directly established by <i>Neuromancer</i>.</li>
                  <li><strong>Novel + Sprawl</strong> — information that requires “Johnny Mnemonic,” “Burning Chrome,” <i>Count Zero</i>, or <i>Mona Lisa Overdrive</i>.</li>
                  <li><strong>Ambiguous</strong> — an inference, reconstructed history, simulated event, or claim from a compromised witness.</li>
                  <li><strong>Critical interpretation</strong> — a reading of themes, form, politics, or representation.</li>
                  <li><strong>Publication history</strong> — real-world editions, awards, adaptations, and influence.</li>
                </ol>
              </section>
              <section>
                <p className="eyebrow">Reader glossary</p>
                <h2>Small details deserve full explanations.</h2>
                <p>Twenty-four additional field notes address the compressed names, objects, places, slang, drugs, weapons, computers, money, and music that often interrupt a first reading. Each page contains at least 650 words, records at least three targeted searches, and separates what the novel states from what readers or adaptations infer.</p>
                <p><Link href="/glossary">Browse the first-reader glossary →</Link></p>
              </section>
              <section className="about-callout">
                <p className="eyebrow">Quotations and copyright</p>
                <h2>Commentary, not a substitute for the book.</h2>
                <p><i>Neuromancer</i> remains copyrighted. The atlas paraphrases most passages and uses only a very short quotation when the exact wording is the subject of commentary. Citations prefer part and chapter because page numbers vary by edition. The site never assembles consecutive excerpts or chapter-by-chapter quotation banks.</p>
              </section>
              <section>
                <p className="eyebrow">03 / Images</p>
                <h2>Context is not canon.</h2>
                <p>Licensed photographs and public-domain historical concept art provide context for real cities and orbital design. Captions state when an image is non-canonical and include title, creator, source, and license. Book covers, panels, television stills, and fan art are not silently reused.</p>
              </section>
              <section>
                <p className="eyebrow">Priority set</p>
                <h2>The twenty audited dossiers.</h2>
                <ul>
                  {priorityResearchArticles.map((article) => <li key={article.slug}><Link href={`/wiki/${article.slug}`}>{article.title} →</Link></li>)}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
