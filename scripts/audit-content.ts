import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { allArticles, microLoreSlugs, priorityResearchSlugs } from "../content/index";
import { sourceByKey } from "../content/sources";

const failures: string[] = [];
const warn = (condition: boolean, message: string) => {
  if (!condition) failures.push(message);
};
const words = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;

warn(allArticles.length >= 101, `Expected at least 101 pages; found ${allArticles.length}`);
warn(new Set(allArticles.map((article) => article.slug)).size === allArticles.length, "Article slugs are not unique");
warn(priorityResearchSlugs.size === 20, `Expected 20 priority slugs; found ${priorityResearchSlugs.size}`);
warn(allArticles.filter((article) => article.priorityResearch).length === 20, "Exactly 20 rendered articles must carry the research badge");

const articleSlugs = new Set(allArticles.map((article) => article.slug));
const proseCounts: number[] = [];

for (const article of allArticles) {
  const label = `${article.slug} (${article.title})`;
  const prose = [...article.intro, ...article.sections.flatMap((section) => section.body)].join(" ");
  const proseCount = words(prose);
  proseCounts.push(proseCount);

  warn(article.intro.length >= 2, `${label}: fewer than 2 intro paragraphs`);
  warn(article.keyFacts.length >= 4, `${label}: fewer than 4 key facts`);
  warn(article.sections.length >= 4, `${label}: fewer than 4 sections`);
  warn(article.related.length >= 4, `${label}: fewer than 4 related links`);
  warn(article.tags.length >= 4, `${label}: fewer than 4 tags`);
  warn(article.sourceKeys.length >= 2, `${label}: fewer than 2 source notes`);
  warn(proseCount >= 450, `${label}: ${proseCount} prose words; minimum is 450`);
  if (article.priorityResearch) {
    warn(proseCount >= 650, `${label}: ${proseCount} prose words; priority minimum is 650`);
  }
  if (microLoreSlugs.has(article.slug)) {
    warn(proseCount >= 650, `${label}: ${proseCount} prose words; glossary minimum is 650`);
    warn(article.tags.includes("reader glossary"), `${label}: missing reader glossary tag`);
  }

  for (const relatedSlug of article.related) {
    warn(articleSlugs.has(relatedSlug), `${label}: missing related article ${relatedSlug}`);
  }
  for (const sourceKey of article.sourceKeys) {
    warn(sourceByKey.has(sourceKey), `${label}: missing source key ${sourceKey}`);
  }
  if (article.quote) {
    warn(article.quote.text.length <= 90, `${label}: quotation exceeds 90 characters`);
    warn(words(article.quote.text) <= 15, `${label}: quotation exceeds 15 words`);
    warn(/Neuromancer,/.test(article.quote.citation), `${label}: quotation lacks a Neuromancer locator`);
  }
}

const researchDirectory = join(process.cwd(), "research", "priority");
const researchFiles = (await readdir(researchDirectory)).filter((name) => name.endsWith(".json") && name !== "summary.json");
warn(researchFiles.length === 20, `Expected 20 priority research ledgers; found ${researchFiles.length}`);

for (const name of researchFiles) {
  const ledger = JSON.parse(await readFile(join(researchDirectory, name), "utf8"));
  warn(ledger.searchCount >= 10, `${name}: only ${ledger.searchCount} searches`);
  warn(ledger.searches?.length >= 10, `${name}: fewer than 10 recorded search attempts`);
  warn(ledger.accessibleFetchCount >= 20, `${name}: only ${ledger.accessibleFetchCount} accessible pages`);
  warn(ledger.sources?.filter((source: { ok?: boolean }) => source.ok).length >= 20, `${name}: fewer than 20 successful source records`);
  warn(ledger.requirementMet === true, `${name}: requirementMet is not true`);
}

const summary = JSON.parse(await readFile(join(researchDirectory, "summary.json"), "utf8"));
warn(summary.priorityArticleCount === 20, "Research summary does not cover 20 articles");
warn(summary.totalSearches >= 200, "Research summary records fewer than 200 searches");
warn(summary.totalAccessibleFetches >= 400, "Research summary records fewer than 400 accessible fetches");
warn(summary.allRequirementsMet === true, "Research summary requirements are not all met");

const microResearchDirectory = join(process.cwd(), "research", "microlore");
const microResearchFiles = (await readdir(microResearchDirectory)).filter((name) => name.endsWith(".json"));
warn(
  microResearchFiles.length === microLoreSlugs.size,
  `Expected ${microLoreSlugs.size} micro-lore research ledgers; found ${microResearchFiles.length}`,
);

let microSearches = 0;
let microConsultedLinks = 0;
const researchedMicroSlugs = new Set<string>();

for (const name of microResearchFiles) {
  const ledger = JSON.parse(await readFile(join(microResearchDirectory, name), "utf8"));
  const queries: unknown[] = Array.isArray(ledger.queries) ? ledger.queries : [];
  const consulted: Array<{ title?: unknown; url?: unknown }> = Array.isArray(ledger.consulted)
    ? ledger.consulted
    : [];
  researchedMicroSlugs.add(ledger.slug);
  microSearches += queries.length;
  microConsultedLinks += consulted.length;

  warn(microLoreSlugs.has(ledger.slug), `${name}: ledger slug ${ledger.slug} has no glossary article`);
  warn(name === `${ledger.slug}.json`, `${name}: filename does not match ledger slug ${ledger.slug}`);
  warn(queries.length >= 3, `${name}: fewer than 3 targeted searches`);
  warn(new Set(queries).size === queries.length, `${name}: repeated search queries`);
  warn(consulted.length >= 3, `${name}: fewer than 3 consulted source links`);
  warn(ledger.searchCount === queries.length, `${name}: searchCount does not match its query log`);
  warn(ledger.consultedCount === consulted.length, `${name}: consultedCount does not match its source log`);
  warn(ledger.researchStandard?.minimumQueries === 3, `${name}: glossary query floor is not documented`);
  warn(ledger.researchStandard?.minimumConsultedLinks === 3, `${name}: glossary source floor is not documented`);
  warn(ledger.researchStandard?.met === true, `${name}: documented glossary research floor is not met`);
  for (const source of consulted) {
    warn(typeof source.title === "string" && source.title.trim().length > 0, `${name}: consulted source lacks a title`);
    warn(typeof source.url === "string" && /^https?:\/\//.test(source.url), `${name}: consulted source has an invalid URL`);
  }
}

for (const slug of microLoreSlugs) {
  warn(researchedMicroSlugs.has(slug), `${slug}: missing micro-lore research ledger`);
}

warn(microSearches >= 72, `Micro-lore ledgers record only ${microSearches} searches`);
warn(microConsultedLinks >= 72, `Micro-lore ledgers record only ${microConsultedLinks} consulted links`);

if (failures.length) {
  console.error(`Content audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

const totalProseWords = proseCounts.reduce((sum, count) => sum + count, 0);
const quoteCount = allArticles.filter((article) => article.quote).length;
console.log(
  [
    "Content audit passed.",
    `${allArticles.length} articles`,
    `${totalProseWords.toLocaleString()} article-prose words`,
    `${Math.min(...proseCounts)}-word shortest article`,
    `${allArticles.filter((article) => article.priorityResearch).length} deep-research dossiers`,
    `${summary.totalSearches} searches`,
    `${summary.totalAccessibleFetches} accessible source fetches`,
    `${microLoreSlugs.size} first-reader glossary articles`,
    `${microSearches} glossary searches`,
    `${microConsultedLinks} glossary source links`,
    `${quoteCount} brief, located novel quotations`,
  ].join(" · "),
);
