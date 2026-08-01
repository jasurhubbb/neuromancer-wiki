export type ArticleCategory =
  | "Characters"
  | "Places"
  | "Organizations"
  | "Technology"
  | "Themes"
  | "Chapter guide"
  | "Publication & influence";

export type CanonStatus =
  | "Novel canon"
  | "Novel + Sprawl"
  | "Ambiguous"
  | "Critical interpretation"
  | "Publication history";

export interface WikiSection {
  id: string;
  heading: string;
  body: string[];
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface BookQuote {
  text: string;
  citation: string;
  note?: string;
}

export interface WikiArticle {
  slug: string;
  title: string;
  category: ArticleCategory;
  canon: CanonStatus;
  spoiler: "Low" | "Moderate" | "Full";
  description: string;
  intro: string[];
  keyFacts: KeyFact[];
  sections: WikiSection[];
  related: string[];
  tags: string[];
  sourceKeys: string[];
  quote?: BookQuote;
  imageKey?: string;
  featured?: boolean;
  priorityResearch?: boolean;
}
