import { characters } from "./characters";
import { places } from "./places";
import { organizationArticles } from "./organizations";
import { technologyArticles } from "./technology";
import { themeArticles } from "./themes";
import { chapterArticles } from "./chapters";
import { publicationArticles } from "./publication";
import { bridgeArticles } from "./bridges";
import { microtechnologyArticles } from "./microtechnology";
import { microplacesLoreArticles } from "./microplaces-lore";
import { mycotoxinArticles } from "./mycotoxin";
import { flipFlopSwitchArticles } from "./flip-flop-switch";
import { memoryLaneArticles } from "./memory-lane";
import { precisArticles } from "./precis";
import { minorCharacterArticles } from "./minor-characters";
import { fandomMicroPeopleArticles } from "./fandom-micro-people";
import { fandomMicroPlaceArticles } from "./fandom-micro-places";
import { fandomMicroSystemArticles } from "./fandom-micro-systems";
import { quotationBySlug } from "./quotes";
import { editorialCodaBySlug, editorialExpansionBySlug } from "./editorial-expansions";
import type { WikiArticle } from "./types";

export const priorityResearchSlugs = new Set([
  "neuromancer-novel",
  "henry-dorsett-case",
  "molly",
  "armitage-willis-corto",
  "wintermute",
  "neuromancer-ai",
  "dixie-flatline",
  "peter-riviera",
  "lady-3jane",
  "linda-lee",
  "chiba-city",
  "sprawl-bama",
  "freeside",
  "villa-straylight",
  "cyberspace-matrix",
  "artificial-intelligence-sprawl",
  "tessier-ashpool-sa",
  "screaming-fist-task-force",
  "body-modification-razorgirl",
  "straylight-run",
]);

const rawArticles = [
  ...characters,
  ...places,
  ...organizationArticles,
  ...technologyArticles,
  ...themeArticles,
  ...chapterArticles,
  ...publicationArticles,
  ...bridgeArticles,
  ...microtechnologyArticles,
  ...microplacesLoreArticles,
  ...mycotoxinArticles,
  ...flipFlopSwitchArticles,
  ...memoryLaneArticles,
  ...precisArticles,
  ...minorCharacterArticles,
  ...fandomMicroPeopleArticles,
  ...fandomMicroPlaceArticles,
  ...fandomMicroSystemArticles,
];

export const microLoreSlugs = new Set(
  [
    ...microtechnologyArticles,
    ...microplacesLoreArticles,
    ...mycotoxinArticles,
    ...flipFlopSwitchArticles,
    ...memoryLaneArticles,
    ...precisArticles,
    ...technologyArticles.filter((article) => article.slug === "microsofts"),
    ...minorCharacterArticles,
    ...fandomMicroPeopleArticles,
    ...fandomMicroPlaceArticles,
    ...fandomMicroSystemArticles,
  ].map((article) => article.slug),
);

const relatedMicroLoreBySlug: Record<string, string[]> = {
  "henry-dorsett-case": ["mycotoxin", "ram-hot-memory", "case-hitachi-pocket-computer"],
  "linda-lee": ["ram-hot-memory", "case-hitachi-pocket-computer"],
  "neuromancer-ai": ["ram-hot-memory"],
  "dixie-flatline": ["ram-hot-memory"],
  "case-neural-repair": ["mycotoxin"],
  "case-biomedical-controls": ["mycotoxin"],
  "chapter-01": ["mycotoxin"],
  "chapter-02": ["mycotoxin"],
  "cyberspace-decks": ["flip-flop-switch"],
  "simstim-sensorium": ["flip-flop-switch", "memory-lane"],
  "ono-sendai-cyberspace-seven": ["flip-flop-switch"],
  "the-finn": ["flip-flop-switch", "smith", "jimmy"],
  "chapter-03": ["flip-flop-switch", "mycotoxin"],
  "chapter-04": ["memory-lane", "flip-flop-switch", "precis", "microsofts"],
  "chapter-05": ["smith", "jimmy", "microsofts"],
  "chapter-24": ["mycotoxin"],
  wintermute: ["mycotoxin"],
  "cheap-hotel": ["chiba-hilton", "case-hitachi-pocket-computer"],
  "chiba-city": ["chiba-hilton", "jarre-de-the", "namban"],
  "armitage-willis-corto": ["chiba-hilton"],
  freeside: ["intercontinental-freeside", "desiderata-street", "vingtieme-siecle"],
  "sprawl-bama": ["memory-lane"],
  microsofts: ["memory-lane", "smith"],
  smith: ["jimmy", "microsofts", "cloisonne-head-terminal"],
  jimmy: ["smith", "cloisonne-head-terminal", "villa-straylight"],
  "cloisonne-head-terminal": ["smith", "jimmy"],
  hideo: ["jimmy", "smith"],
  "villa-straylight": ["jimmy", "smith"],
  "tessier-ashpool-sa": ["smith", "jimmy"],
  "tessier-ashpool-family": ["smith", "jimmy"],
  "panther-moderns": ["memory-lane", "precis"],
  johnny: ["memory-lane"],
  "hosaka-computers": ["precis"],
  "mimetic-polycarbon-suit": ["precis"],
};

const contextualImageBySlug: Record<string, string> = {
  "chiba-city": "tokyo-night",
  "night-city": "tokyo-night",
  "ninsei": "tokyo-night",
  "chiba-medical-underground": "tokyo-night",
  "sammis-arena": "tokyo-night",
  "chiba-hilton": "tokyo-night",
  "jarre-de-the": "tokyo-night",
  namban: "tokyo-night",
  "freeside": "orbital-colony",
  "rue-jules-verne": "orbital-colony",
  "freeside-hospitality-nightlife": "orbital-colony",
  "villa-straylight": "orbital-colony",
  "straylight-central-terminal": "orbital-colony",
  "vingtieme-siecle": "orbital-colony",
  "emergency-club": "orbital-colony",
  "desiderata-street": "orbital-colony",
  "intercontinental-freeside": "orbital-colony",
};

export const allArticles: WikiArticle[] = rawArticles
  .map((article) => ({
    ...article,
    priorityResearch: priorityResearchSlugs.has(article.slug),
    imageKey: article.imageKey ?? contextualImageBySlug[article.slug],
    quote: article.quote ?? quotationBySlug[article.slug],
    related: [
      ...(relatedMicroLoreBySlug[article.slug] ?? []),
      ...article.related,
    ].filter((slug, index, related) => related.indexOf(slug) === index),
    tags: microLoreSlugs.has(article.slug)
      ? [...new Set([...article.tags, "reader glossary"])]
      : article.tags,
    sections: editorialExpansionBySlug[article.slug]
      ? [
          ...article.sections,
          {
            ...editorialExpansionBySlug[article.slug],
            body: editorialCodaBySlug[article.slug]
              ? [...editorialExpansionBySlug[article.slug].body, editorialCodaBySlug[article.slug]]
              : editorialExpansionBySlug[article.slug].body,
          },
        ]
      : article.sections,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

export const articleBySlug = new Map(allArticles.map((article) => [article.slug, article]));

export const microLoreArticles = allArticles.filter((article) => microLoreSlugs.has(article.slug));

export const searchRecords = allArticles.map(({ slug, title, category, description, tags }) => ({
  slug,
  title,
  category,
  description,
  tags,
}));
