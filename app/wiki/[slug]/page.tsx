import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allArticles, articleBySlug, searchRecords } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticlePage } from "@/components/ArticlePage";

export function generateStaticParams() {
  return allArticles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
  };
}

export default async function WikiArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();

  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <ArticlePage article={article} allArticles={allArticles} />
      <SiteFooter />
    </>
  );
}
