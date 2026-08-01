import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { searchRecords } from "@/content";
import type { ArticleCategory } from "@/content/types";
import { articlesForCategory, categories, categoryByName } from "@/lib/wiki";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";

export function generateStaticParams() {
  return categories.map(({ name }) => ({ category: name }));
}
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory) as ArticleCategory;
  const definition = categoryByName.get(category);
  return definition ? { title: definition.shortName, description: definition.description } : { title: "Category" };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory) as ArticleCategory;
  const definition = categoryByName.get(category);
  if (!definition) notFound();
  const articles = articlesForCategory(category);

  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="category-page">
        <div className="page-frame">
          <header className="page-hero">
            <div><p className="eyebrow">Category / {definition.code}</p><h1>{definition.shortName}</h1></div>
            <div className="page-hero__aside"><p>{definition.description}</p><div className="page-stat"><strong>{articles.length}</strong><span>articles</span></div></div>
          </header>
          <div className="category-intro">
            <p>{definition.prompt} Move through concise overviews, structured facts, source notes, and carefully labeled interpretation.</p>
            <div className="category-note"><strong>Canon discipline</strong>Novel facts remain distinct from wider Sprawl continuity, adaptation details, and critical arguments.</div>
          </div>
          <div className="card-grid card-grid--four">
            {articles.map((article, index) => <ArticleCard key={article.slug} article={article} numbered index={index} />)}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
