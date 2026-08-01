import Link from "next/link";
import Image from "next/image";
import type { WikiArticle } from "@/content/types";
import { sourceByKey } from "@/content/sources";
import { imageByKey } from "@/content/images";
import { ArticleCard } from "./ArticleCard";
import { SpoilerGate } from "./SpoilerGate";

function FullArticleBody({ article }: { article: WikiArticle }) {
  return (
    <>
      {article.quote && (
        <figure className="book-quote">
          <blockquote>“{article.quote.text}”</blockquote>
          <figcaption>
            <cite>{article.quote.citation}</cite>
            {article.quote.note && <span>{article.quote.note}</span>}
          </figcaption>
        </figure>
      )}
      <div className="article-main-grid">
        <div className="article-prose">
          {article.sections.map((section) => (
            <section id={section.id} key={section.id} className="article-section">
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
          ))}
        </div>
        <aside className="fact-panel" aria-label={`${article.title} quick facts`}>
          <p className="eyebrow">Field data</p>
          <dl>
            {article.keyFacts.map((fact) => (
              <div key={`${fact.label}-${fact.value}`}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="tag-list" aria-label="Article tags">
            {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </aside>
      </div>
    </>
  );
}

export function ArticlePage({ article, allArticles }: { article: WikiArticle; allArticles: WikiArticle[] }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const articleWordCount = [...article.intro, ...article.sections.flatMap((section) => section.body)]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(articleWordCount / 230));
  const related = article.related
    .map((slug) => allArticles.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is WikiArticle => Boolean(candidate))
    .slice(0, 4);
  const sourceNotes = article.sourceKeys
    .map((key) => sourceByKey.get(key))
    .filter((source) => Boolean(source));
  const articleImage = article.imageKey ? imageByKey.get(article.imageKey) : undefined;

  return (
    <main id="main-content" className="article-page">
      <div className="article-page__frame">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Atlas</Link><span aria-hidden="true">/</span>
          <Link href={`/category/${encodeURIComponent(article.category)}`}>{article.category}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>

        <header className="article-hero">
          <div className="article-hero__copy">
            <div className="article-badges">
              <span>{article.canon}</span>
              <span className={`spoiler-badge spoiler-badge--${article.spoiler.toLowerCase()}`}>{article.spoiler} spoilers</span>
              <span>{articleWordCount} words · {readingMinutes} min read</span>
              {article.priorityResearch && <span className="research-badge">Deep research · 10 searches / 20+ reads</span>}
            </div>
            <h1>{article.title}</h1>
            <p className="article-dek">{article.description}</p>
          </div>
          <div className="article-hero__index" aria-hidden="true">
            <span>{article.category.slice(0, 3).toUpperCase()}</span>
            <strong>{String(allArticles.findIndex((candidate) => candidate.slug === article.slug) + 1).padStart(3, "0")}</strong>
          </div>
        </header>

        {articleImage && (
          <figure className="article-image">
            {/* License and source are rendered immediately below. */}
            <Image
              src={`${basePath}${articleImage.src}`}
              width={articleImage.width}
              height={articleImage.height}
              sizes="(max-width: 1200px) 100vw, 1180px"
              alt={articleImage.alt}
            />
            <figcaption>
              <span>{articleImage.caption}</span>
              <a href={articleImage.sourceUrl} rel="noreferrer">{articleImage.credit} · {articleImage.license} ↗</a>
            </figcaption>
          </figure>
        )}

        <div className="article-reading-grid">
          <aside className="contents-panel">
            <p className="eyebrow">On this page</p>
            <ol>
              {article.sections.map((section, index) => (
                <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.heading}</a></li>
              ))}
            </ol>
          </aside>
          <div className="article-intro">
            {article.intro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>

        {article.spoiler === "Full" ? (
          <SpoilerGate title={article.title}><FullArticleBody article={article} /></SpoilerGate>
        ) : <FullArticleBody article={article} />}

        <section className="source-notes" aria-labelledby="source-heading">
          <div>
            <p className="eyebrow">Trace the signal</p>
            <h2 id="source-heading">Source notes</h2>
            <p>Novel facts are checked against the text; interpretation and publication claims are separated by source type.</p>
          </div>
          <ol>
            {sourceNotes.map((source) => source && (
              <li key={source.key}>
                <span>{source.kind}</span>
                {source.url ? <a href={source.url} rel="noreferrer"><strong>{source.title}</strong> — {source.publisher} ↗</a> : <strong>{source.title} — {source.publisher}</strong>}
                <p>{source.note}</p>
              </li>
            ))}
          </ol>
        </section>

        {related.length > 0 && (
          <section className="related-section">
            <div className="section-heading">
              <div><p className="eyebrow">Keep moving</p><h2>Related field notes</h2></div>
              <Link href="/wiki">Browse A–Z <span aria-hidden="true">→</span></Link>
            </div>
            <div className="card-grid card-grid--four">
              {related.map((candidate) => <ArticleCard key={candidate.slug} article={candidate} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
