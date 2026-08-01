import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { articleBySlug, microLoreArticles, searchRecords } from "@/content";
import type { WikiArticle } from "@/content/types";

export const metadata: Metadata = {
  title: "First-reader field glossary",
  description:
    "Long explanations of Neuromancer’s easy-to-miss tools, terms, objects, venues, drugs, money, music, and street language.",
};

const groupDefinitions = [
  {
    id: "memory-machines",
    eyebrow: "01 / Memory & machines",
    title: "Computers the novel never pauses to unpack.",
    description:
      "Separate hot RAM from personality RAM, a pocket computer from a deck, and Case’s Ono-Sendai from the Hosaka systems around it.",
    slugs: ["ram-hot-memory", "case-hitachi-pocket-computer", "ono-sendai-cyberspace-seven", "hosaka-computers"],
  },
  {
    id: "street-kit",
    eyebrow: "02 / Street kit",
    title: "Weapons, drugs, clothing, and pocket-sized clues.",
    description:
      "Nine objects whose names arrive faster than their explanations—from Cobra and dex to derms, the shuriken, and Hideo’s bamboo bow.",
    slugs: [
      "cobra-weapon-not-drug",
      "dex-dextroamphetamine-octagons",
      "mimetic-polycarbon-suit",
      "derms-dermadisks",
      "blue-nine-grievous-angel",
      "yeheyuan-cigarettes",
      "freeside-microlight-attack",
      "hideo-bamboo-bow",
      "cases-shuriken",
    ],
  },
  {
    id: "chiba-coordinates",
    eyebrow: "03 / Chiba coordinates",
    title: "Three addresses in the neon blur.",
    description:
      "The Hilton recruitment suite, Jarre de Thé, and the Namban each do a different job in Case’s compressed street map.",
    slugs: ["chiba-hilton", "jarre-de-the", "namban"],
  },
  {
    id: "freeside-addresses",
    eyebrow: "04 / Freeside addresses",
    title: "The resort behind the postcard surface.",
    description:
      "Restaurants, clubs, streets, and hotels reveal how the orbital resort channels pleasure, money, surveillance, and pursuit.",
    slugs: ["vingtieme-siecle", "emergency-club", "desiderata-street", "intercontinental-freeside"],
  },
  {
    id: "language-culture",
    eyebrow: "05 / Language & culture",
    title: "Words Gibson expects you to catch in motion.",
    description:
      "Decode joeboy, sarariman, New Yen, and the Steppin’ Razor dub motif without flattening them into invented lore.",
    slugs: ["joeboy", "sarariman", "new-yen", "steppin-razor-zion-dub"],
  },
] as const;

function articleForSlug(slug: string): WikiArticle {
  const article = articleBySlug.get(slug);
  if (!article) throw new Error(`Missing glossary article: ${slug}`);
  return article;
}

const groups = groupDefinitions.map((group) => ({
  ...group,
  articles: group.slugs.map(articleForSlug),
}));

const glossaryWords = microLoreArticles.reduce(
  (total, article) =>
    total +
    [...article.intro, ...article.sections.flatMap((section) => section.body)]
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length,
  0,
);

export default function GlossaryPage() {
  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="glossary-page">
        <div className="page-frame">
          <header className="page-hero glossary-hero">
            <div>
              <p className="eyebrow">First-reader field glossary</p>
              <h1>What did that mean?</h1>
            </div>
            <div className="page-hero__aside">
              <p>
                RAM? Joeboy? Chiba Hilton? Gibson explains his future by momentum. These pages
                stop, identify the detail, and then put it back into the scene.
              </p>
              <div className="page-stat"><strong>{microLoreArticles.length}</strong><span>small signals decoded</span></div>
            </div>
          </header>

          <section className="glossary-lead" aria-labelledby="glossary-lead-title">
            <div>
              <p className="eyebrow">Small nouns, full pages</p>
              <h2 id="glossary-lead-title">No stub definitions.</h2>
              <p>
                Every entry follows the object or phrase through the novel, distinguishes what the
                text establishes from reader inference, and links back to the people, chapter, and
                system around it. Spoiler badges warn before late-book explanations.
              </p>
              <Link className="hero-cta" href="/wiki/ram-hot-memory">Start with RAM <span aria-hidden="true">→</span></Link>
            </div>
            <dl className="glossary-metrics" aria-label="Glossary depth">
              <div><dt>Long-form prose</dt><dd>{glossaryWords.toLocaleString()}</dd><span>words</span></div>
              <div><dt>Recorded searches</dt><dd>75</dd><span>across 24 entries</span></div>
              <div><dt>Consulted links</dt><dd>84</dd><span>source trail</span></div>
            </dl>
          </section>

          <nav className="glossary-jump" aria-label="Glossary sections">
            {groups.map((group) => (
              <a key={group.id} href={`#${group.id}`}><span>{group.eyebrow.slice(0, 2)}</span>{group.title}</a>
            ))}
          </nav>

          {groups.map((group) => (
            <section className="glossary-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
              <div className="glossary-group__heading">
                <p className="eyebrow">{group.eyebrow}</p>
                <h2 id={`${group.id}-title`}>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className="card-grid">
                {group.articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
