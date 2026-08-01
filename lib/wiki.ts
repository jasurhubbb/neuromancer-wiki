import type { ArticleCategory, WikiArticle } from "@/content/types";
import { allArticles, articleBySlug } from "@/content";

export interface CategoryDefinition {
  name: ArticleCategory;
  shortName: string;
  code: string;
  description: string;
  prompt: string;
}

export const categories: CategoryDefinition[] = [
  { name: "Characters", shortName: "People", code: "CHR", description: "Cowboys, mercenaries, AIs, clones, operators, and the masks they wear.", prompt: "Who is running whom?" },
  { name: "Places", shortName: "Places", code: "PLC", description: "From Chiba’s night streets to the orbital maze of Villa Straylight.", prompt: "Follow the route." },
  { name: "Organizations", shortName: "Power", code: "ORG", description: "Corporations, registries, subcultures, families, and criminal networks.", prompt: "Map the leverage." },
  { name: "Technology", shortName: "Matrix", code: "TEC", description: "Decks, ICE, simstim, constructs, medicine, weapons, and synthetic worlds.", prompt: "Learn the system." },
  { name: "Themes", shortName: "Ideas", code: "THM", description: "Embodiment, memory, labor, identity, perception, and artificial freedom.", prompt: "Read beneath the run." },
  { name: "Chapter guide", shortName: "Read-along", code: "CHP", description: "Twenty-four spoiler-scoped guides that clarify action without replacing the book.", prompt: "Keep your place." },
  { name: "Publication & influence", shortName: "Context", code: "PUB", description: "Writing, editions, awards, criticism, adaptations, and cultural afterlives.", prompt: "Trace the signal." },
];

export const categoryByName = new Map(categories.map((category) => [category.name, category]));

export function articlesForCategory(category: ArticleCategory): WikiArticle[] {
  return allArticles.filter((article) => article.category === category);
}

export function featuredArticles(): WikiArticle[] {
  const explicitlyFeatured = allArticles.filter((article) => article.featured);
  const fallbacks = ["henry-dorsett-case", "molly", "wintermute", "cyberspace-matrix", "chiba-city", "villa-straylight"]
    .flatMap((slug) => {
      const article = articleBySlug.get(slug);
      return article ? [article] : [];
    });
  return [...new Map([...explicitlyFeatured, ...fallbacks].map((article) => [article.slug, article])).values()].slice(0, 6);
}

export const routeArticles = ["chiba-city", "sprawl-bama", "istanbul", "freeside", "villa-straylight"]
  .flatMap((slug) => {
    const article = articleBySlug.get(slug);
    return article ? [article] : [];
  });

export const priorityResearchArticles = allArticles.filter((article) => article.priorityResearch);
