import { allArticles } from "../content/index";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

type FandomMember = {
  pageid: number;
  ns: number;
  title: string;
};

const endpoint = "https://williamgibson.fandom.com/api.php";
const discoveryCategories = [
  "Neuromancer",
  "Characters in Neuromancer",
  "Character in the Neuromancer",
  "Neuromancer characters",
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[’‘']/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/\b(?:the|a|an)\b/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

async function categoryMembers(category: string) {
  const url = new URL(endpoint);
  url.search = new URLSearchParams({
    action: "query",
    list: "categorymembers",
    cmtitle: `Category:${category}`,
    cmnamespace: "0",
    cmlimit: "500",
    format: "json",
    formatversion: "2",
  }).toString();

  const response = await fetch(url, { headers: { "user-agent": "NeuromancerAtlasCoverageAudit/1.0" } });
  if (!response.ok) throw new Error(`${category}: ${response.status} ${response.statusText}`);
  const payload = (await response.json()) as { query: { categorymembers: FandomMember[] } };
  return payload.query.categorymembers;
}

const members = (
  await Promise.all(discoveryCategories.map((category) => categoryMembers(category)))
).flat();
const uniqueMembers = [...new Map(members.map((member) => [member.pageid, member])).values()]
  .sort((left, right) => left.title.localeCompare(right.title));

async function pageExtracts(titles: string[]) {
  const extracts = new Map<string, string>();
  for (let index = 0; index < titles.length; index += 40) {
    const url = new URL(endpoint);
    url.search = new URLSearchParams({
      action: "query",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      redirects: "1",
      titles: titles.slice(index, index + 40).join("|"),
      format: "json",
      formatversion: "2",
    }).toString();
    const response = await fetch(url, { headers: { "user-agent": "NeuromancerAtlasCoverageAudit/1.0" } });
    if (!response.ok) throw new Error(`extracts: ${response.status} ${response.statusText}`);
    const payload = (await response.json()) as {
      query: { pages: Array<{ title: string; revisions?: Array<{ slots?: { main?: { content?: string } } }> }> };
    };
    for (const page of payload.query.pages) {
      const content = page.revisions?.[0]?.slots?.main?.content?.trim() ?? "";
      extracts.set(page.title, content);
    }
  }
  return extracts;
}

const extracts = process.argv.includes("--extracts")
  ? await pageExtracts(uniqueMembers.map((member) => member.title))
  : new Map<string, string>();

const localKeys = new Map<string, (typeof allArticles)[number]>();
for (const article of allArticles) {
  localKeys.set(normalize(article.title), article);
  localKeys.set(normalize(article.slug), article);
  for (const tag of article.tags) {
    if (tag.startsWith("fandom:")) localKeys.set(normalize(tag.slice("fandom:".length)), article);
  }
}

const semanticAliases: Record<string, string> = {
  "3Jane Tessier-Ashpool": "lady-3jane",
  Armitage: "armitage-willis-corto",
  "Artificial Intelligence": "artificial-intelligence-sprawl",
  "Blue Nine": "blue-nine-grievous-angel",
  Bruce: "cath-and-bruce",
  Case: "henry-dorsett-case",
  Cath: "cath-and-bruce",
  Dermadisk: "derms-dermadisks",
  "Elders of Zion": "zion-founders-elders",
  "Freeside nightclub": "freeside-hospitality-nightlife",
  "Hitachi Pocket Computer": "case-hitachi-pocket-computer",
  "Hosaka computer": "hosaka-computers",
  Icebreaker: "icebreakers",
  "Kuang Eleven": "kuang-grade-mark-eleven",
  Matrix: "cyberspace-matrix",
  "Meat puppet": "meat-puppet-cut-out",
  Microsoft: "microsofts",
  "Mimetic polycarbon": "mimetic-polycarbon-suit",
  "Molly Millions": "molly",
  "Neuromancer (AI)": "neuromancer-ai",
  "Ono-Sendai Cyberspace VII": "ono-sendai-cyberspace-seven",
  Rastafarians: "zion-rastafari-diaspora",
  "Sammi's": "sammis-arena",
  "Screaming Fist": "screaming-fist-task-force",
  SimStim: "simstim-sensorium",
  "Talking head": "cloisonne-head-terminal",
  "Tessier-Ashpool": "tessier-ashpool-sa",
  "The Doll": "chapter-11",
  "The Sprawl": "sprawl-bama",
  "Turing Police": "turing-registry",
};

const localBySlug = new Map(allArticles.map((article) => [article.slug, article]));

const results = uniqueMembers.map((member) => {
  const aliasSlug = semanticAliases[member.title];
  const match = aliasSlug ? localBySlug.get(aliasSlug) : localKeys.get(normalize(member.title));
  return {
    fandomTitle: member.title,
    fandomUrl: `https://williamgibson.fandom.com/wiki/${encodeURIComponent(member.title.replaceAll(" ", "_"))}`,
    localSlug: match?.slug ?? null,
    localTitle: match?.title ?? null,
    coverageType: match?.tags.includes("Fandom coverage") ? "new-page" : aliasSlug ? "semantic-alias" : "existing-page",
    ...(process.argv.includes("--extracts")
      ? {
          fandomExtract: process.argv.includes("--compact")
            ? (extracts.get(member.title) ?? "").replace(/\s+/g, " ").slice(0, 700)
            : extracts.get(member.title) ?? "",
        }
      : {}),
  };
});

if (process.argv.includes("--write")) {
  const payload = {
    checkedAt: new Date().toISOString(),
    sourceWiki: "https://williamgibson.fandom.com/wiki/Neuromancer",
    discoveryCategories,
    fandomTopicCount: results.length,
    coveredTopicCount: results.filter((result) => result.localSlug).length,
    newPageCount: results.filter((result) => result.coverageType === "new-page").length,
    existingOrAliasCount: results.filter((result) => result.coverageType !== "new-page").length,
    results,
  };
  await writeFile(join(process.cwd(), "research", "fandom-coverage.json"), `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote research/fandom-coverage.json with ${results.length} mappings.`);
  process.exit(0);
}

if (process.argv.includes("--tsv") || process.argv.includes("--all-tsv")) {
  for (const result of results.filter((result) => process.argv.includes("--all-tsv") || !result.localSlug)) {
    console.log(`${result.fandomTitle}\t${result.localSlug ?? "—"}\t${"fandomExtract" in result ? result.fandomExtract : ""}`);
  }
  process.exit(0);
}

console.log(JSON.stringify({
  checkedAt: new Date().toISOString(),
  discoveryCategories,
  fandomTopicCount: results.length,
  exactMatchCount: results.filter((result) => result.localSlug).length,
  unmatchedCount: results.filter((result) => !result.localSlug).length,
  unmatched: results.filter((result) => !result.localSlug),
}, null, 2));
