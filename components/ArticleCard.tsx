import Link from "next/link";
import type { WikiArticle } from "@/content/types";

export function ArticleCard({ article, numbered = false, index = 0 }: { article: WikiArticle; numbered?: boolean; index?: number }) {
  return (
    <Link href={`/wiki/${article.slug}`} className="article-card">
      <span className="article-card__meta">
        {numbered ? String(index + 1).padStart(2, "0") : article.category}
      </span>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span className="article-card__link">Open field note <span aria-hidden="true">↗</span></span>
    </Link>
  );
}
