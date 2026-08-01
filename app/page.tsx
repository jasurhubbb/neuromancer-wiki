import type { Metadata } from "next";
import Link from "next/link";
import { allArticles, articleBySlug, microLoreArticles, searchRecords } from "@/content";
import { articlesForCategory, categories, featuredArticles, priorityResearchArticles, routeArticles } from "@/lib/wiki";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SearchBox } from "@/components/SearchBox";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Neuromancer Atlas — A field guide to the Sprawl",
  description: "Explore 180 researched pages about William Gibson’s Neuromancer: characters, locations, cyberspace, technology, chapter guides, small details, themes, and influence.",
};

const glossaryHighlights = [
  "ram-hot-memory",
  "mycotoxin",
  "flip-flop-switch",
  "memory-lane",
  "ono-sendai-cyberspace-seven",
  "precis",
].flatMap((slug) => {
  const article = articleBySlug.get(slug);
  return article ? [article] : [];
});

export default function Home() {
  const featured = featuredArticles();
  const quotationCount = allArticles.filter((article) => article.quote).length;

  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="home-main">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero__topline">
            <div className="status-line">Independent reader’s archive · online</div>
            <span>Chiba / BAMA / Freeside / Straylight</span>
          </div>
          <div className="home-hero__body">
            <h1 id="home-title" className="home-title">Neuromancer <span>Atlas</span></h1>
            <div className="home-hero__intro">
              <p className="eyebrow">A field guide to the Sprawl</p>
              <p>Follow the run, decode the matrix, and read the novel’s crowded future without losing the human signal.</p>
              <div className="hero-meta" aria-label="Atlas statistics">
                <div><strong>{allArticles.length}</strong><span>field notes</span></div>
                <div><strong>20</strong><span>deep dossiers</span></div>
                <div><strong>24</strong><span>chapter guides</span></div>
              </div>
            </div>
          </div>
          <div className="home-hero__search">
            <SearchBox records={searchRecords} />
            <p><strong>New to the book?</strong> Use the <Link href="/glossary">first-reader glossary</Link> for RAM, mycotoxin, the flip-flop switch, Memory Lane, and other unexplained signals. Full-book pages are clearly gated.</p>
          </div>
        </section>

        <section className="matrix-banner" aria-labelledby="route-title">
          <div className="matrix-banner__inner">
            <div className="matrix-banner__copy">
              <p className="eyebrow">The physical route</p>
              <h2 id="route-title">Street level to the edge of the matrix.</h2>
              <p>The novel crosses continents and orbit, but every jump advances one operation. Trace the crew’s route without confusing geography, simstim, and cyberspace.</p>
            </div>
            <div className="route-map" aria-label="Route through five key locations">
              {routeArticles.map((article, index) => (
                <Link key={article.slug} href={`/wiki/${article.slug}`} className="route-stop">
                  <span className="route-stop__node">{String(index + 1).padStart(2, "0")}</span>
                  <span><strong>{article.title}</strong><small>{index === 0 ? "Exile" : index === 4 ? "Target" : "Transit"}</small></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame" aria-labelledby="featured-title">
          <div className="section-heading">
            <div><p className="eyebrow">Core dossiers</p><h2 id="featured-title">Start with the signals that matter.</h2></div>
            <Link href="/wiki">Browse all {allArticles.length} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="card-grid">
            {featured.map((article, index) => <ArticleCard key={article.slug} article={article} numbered index={index} />)}
          </div>
        </section>

        <section className="section-frame home-glossary" aria-labelledby="home-glossary-title">
          <div className="section-heading">
            <div><p className="eyebrow">Small signals, full explanations</p><h2 id="home-glossary-title">The details readers search mid-page.</h2></div>
            <Link href="/glossary">{`Open all ${microLoreArticles.length}`} <span aria-hidden="true">→</span></Link>
          </div>
          <p className="home-glossary__intro">What is “hot” RAM? What did the mycotoxin do to Case? What does Finn’s flip-flop switch actually switch? Is Memory Lane a place or a technology? Each answer is a long field note with canon limits, scene context, sources, and links back into the novel.</p>
          <div className="card-grid">
            {glossaryHighlights.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </section>

        <section className="research-strip" aria-labelledby="research-title">
          <div className="research-strip__inner">
            <div>
              <p className="eyebrow">Built for scrutiny</p>
              <h2 id="research-title">Research you can audit, not lore by repetition.</h2>
              <p>The first twenty dossiers each carry a ledger of ten distinct searches and at least twenty fetched sources. Every article separates the novel, wider Sprawl continuity, adaptations, and critical interpretation.</p>
              <Link className="hero-cta" href="/about">Read the editorial method</Link>
            </div>
            <div className="research-ledger" aria-label="Research ledger statistics">
              <div><strong>200+</strong><span>web searches</span></div>
              <div><strong>480+</strong><span>source reads</span></div>
              <div><strong>{priorityResearchArticles.length}</strong><span>audited dossiers</span></div>
              <div><strong>{quotationCount}</strong><span>brief, located quotes</span></div>
            </div>
          </div>
        </section>

        <section className="section-frame" aria-labelledby="category-title">
          <div className="section-heading">
            <div><p className="eyebrow">Browse by system</p><h2 id="category-title">Seven ways into the book.</h2></div>
            <Link href="/wiki">Open A–Z <span aria-hidden="true">→</span></Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => {
              const count = articlesForCategory(category.name).length;
              return (
                <Link key={category.name} href={`/category/${encodeURIComponent(category.name)}`} className="category-tile">
                  <span className="category-tile__code">{category.code}</span>
                  <div>
                    <h3>{category.shortName}</h3>
                    <p>{category.description}</p>
                    <small>{category.prompt}</small>
                  </div>
                  <span className="category-tile__count">{String(count).padStart(2, "0")}</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
