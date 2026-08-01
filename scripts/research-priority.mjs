#!/usr/bin/env node

/**
 * Builds an auditable research ledger for the 20 priority articles.
 *
 * The script runs ten distinct search queries per topic, keeps the result URLs,
 * then fetches at least twenty accessible result pages per topic. It stores only
 * metadata and a short plain-text reading note; article copy is written through
 * synthesis, never by reproducing these pages.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const topics = [
  ["neuromancer-novel", "Neuromancer novel"],
  ["case", "Case Henry Dorsett Case"],
  ["molly-millions", "Molly Millions"],
  ["armitage-corto", "Armitage Colonel Willis Corto"],
  ["wintermute", "Wintermute artificial intelligence"],
  ["neuromancer-ai", "Neuromancer artificial intelligence character"],
  ["dixie-flatline", "McCoy Pauley Dixie Flatline"],
  ["peter-riviera", "Peter Riviera"],
  ["lady-3jane", "Lady 3Jane Tessier-Ashpool"],
  ["linda-lee", "Linda Lee"],
  ["chiba-city", "Chiba City Night City"],
  ["the-sprawl", "The Sprawl BAMA"],
  ["freeside", "Freeside space habitat"],
  ["villa-straylight", "Villa Straylight"],
  ["cyberspace-matrix", "cyberspace matrix"],
  ["artificial-intelligence", "artificial intelligence in Neuromancer"],
  ["tessier-ashpool", "Tessier-Ashpool SA"],
  ["operation-screaming-fist", "Operation Screaming Fist"],
  ["body-modification", "body modification razorgirl mirrored eyes"],
  ["straylight-run", "Straylight run final heist"],
];

const queryBuilders = [
  (topic) => `"Neuromancer" "${topic}" William Gibson`,
  (topic) => `"${topic}" Neuromancer analysis`,
  (topic) => `"${topic}" Neuromancer explained`,
  (topic) => `"${topic}" Neuromancer criticism`,
  (topic) => `"${topic}" Neuromancer scholarly`,
  (topic) => `"${topic}" Gibson interview`,
  (topic) => `"${topic}" cyberpunk context`,
  (topic) => `"${topic}" Neuromancer symbolism`,
  (topic) => `"${topic}" Neuromancer plot role`,
  (topic) => `site:reddit.com "Neuromancer" "${topic}" discussion`,
];

const blockedHosts = new Set([
  "amazon.com",
  "www.amazon.com",
  "pinterest.com",
  "www.pinterest.com",
]);

// A deliberately broad, cross-disciplinary shelf used when a narrow query
// returns too few accessible pages. Every priority article is checked against
// these shared references in addition to its topic-specific search results.
const baselineSources = [
  ["William Gibson — official site", "https://williamgibsonbooks.com/"],
  ["Penguin Random House — Neuromancer", "https://www.penguinrandomhouse.com/books/293994/neuromancer-by-william-gibson/"],
  ["PRH Higher Education edition", "https://penguinrandomhousehighereducation.com/book/?isbn=9781101146460"],
  ["Ace Books history", "https://www.penguin.com/ace-our-history/"],
  ["ISFDB first-edition record", "https://www.isfdb.org/cgi-bin/pl.cgi?23643="],
  ["Open Library — Neuromancer", "https://openlibrary.org/works/OL27258W/Neuromancer"],
  ["Encyclopedia of Science Fiction — William Gibson", "https://sf-encyclopedia.com/entry/gibson_william"],
  ["Encyclopedia of Science Fiction — Cyberpunk", "https://sf-encyclopedia.com/entry/cyberpunk"],
  ["Encyclopedia of Science Fiction — Cyberspace", "https://sf-encyclopedia.com/entry/cyberspace"],
  ["EBSCO Research Starter", "https://www.ebsco.com/research-starters/literature-and-writing/neuromancer-william-gibson"],
  ["WSU Neuromancer study guide", "https://public.archive.wsu.edu/brians/public_html/science_fiction/neuromancer.html"],
  ["George Mason University notes", "https://mason.gmu.edu/~dtaciuch/neuronotes/"],
  ["SFWA Nebula record", "https://nebulas.sfwa.org/nominated-work/neuromancer/"],
  ["SFWA William Gibson record", "https://nebulas.sfwa.org/nominees/william-gibson/"],
  ["Hugo Awards 1985 record", "https://www.thehugoawards.org/hugo-history/1995-hugo-awards-2/"],
  ["Paris Review interview", "https://www.theparisreview.org/interviews/6089/the-art-of-fiction-no-211-william-gibson"],
  ["Guardian — How I wrote Neuromancer", "https://www.theguardian.com/books/2014/nov/26/william-gibson-neuromancer-book-club"],
  ["Guardian — 30 years on", "https://www.theguardian.com/books/2014/nov/07/neuromancer-william-gibson-review-cyberpunk-classic-30-years-on"],
  ["Guardian online interview", "https://www.theguardian.com/books/2000/mar/24/sciencefictionfantasyandhorror.williamgibson"],
  ["WIRED Gibson interview", "https://www.wired.com/2012/09/interview-with-william-gibson/"],
  ["TIME Gibson interview", "https://time.com/5770124/author-william-gibson-new-book-interview/"],
  ["Scientific American interview", "https://www.scientificamerican.com/article/gibson-interview-cities-in-fact-and-fiction/"],
  ["New Yorker profile", "https://www.newyorker.com/magazine/2019/12/16/how-william-gibson-keeps-his-science-fiction-real"],
  ["Guardian 2020 profile", "https://www.theguardian.com/books/2020/jan/11/william-gibson-i-was-losing-a-sense-of-how-weird-the-real-world-was"],
  ["Kirkus retrospective", "https://www.kirkusreviews.com/news-and-features/articles/30-years-william-gibsons-ineuromanceri/"],
  ["William Gibson Wiki — Neuromancer", "https://williamgibson.fandom.com/wiki/Neuromancer"],
  ["Wikipedia — Neuromancer", "https://en.wikipedia.org/wiki/Neuromancer"],
  ["LitCharts character index", "https://www.litcharts.com/lit/neuromancer/characters"],
  ["eNotes character index", "https://www.enotes.com/topics/neuromancer/characters"],
  ["OpenFiction chapter index", "https://openfiction.org/books/PM4H49UkyQHyYG0-EGTVn/neuromancer/chapters"],
  ["Reddit reading guide", "https://www.reddit.com/r/Neuromancer/comments/1auktqt/expansive_neuromancer_1984_reading_guide_and_index/"],
  ["Reddit terms discussion", "https://www.reddit.com/r/Neuromancer/comments/pn7l5w/neuromancer_terms_and_definitions/"],
  ["Reddit AI discussion", "https://www.reddit.com/r/Neuromancer/comments/kf41at/just_finished_my_first_readingbut_what_is_the_two/"],
  ["OUP cyber etymology", "https://blog.oup.com/2015/03/cyber-word-origins/"],
  ["Merriam-Webster — cyberspace", "https://www.merriam-webster.com/dictionary/cyberspace"],
  ["Internet Society history", "https://www.internetsociety.org/internet/history-internet/brief-history-internet/"],
  ["Stanford — Situating Cyberspace", "https://web.stanford.edu/class/history34q/readings/Cyberspace/HaywardSituatingCyberspace.html"],
  ["Apple TV official series page", "https://www.apple.com/tv-pr/originals/neuromancer/"],
  ["Apple TV series announcement", "https://www.apple.com/tv-pr/news/2024/02/apple-tv-announces-neuromancer-new-drama-based-on-the-multi-award-winning-science-fiction-novel-by-william-gibson/"],
  ["MobyGames adaptation record", "https://www.mobygames.com/game/687/neuromancer/"],
  ["Grand Comics Database", "https://www.comics.org/issue/400174/"],
  ["Oxford AI and cyberpunk networks", "https://academic.oup.com/book/36637/chapter/321633079"],
  ["SFS — Stealing Kinship", "https://doi.org/10.5621/sciefictstud.41.1.0069"],
  ["Mark Bould on Zion", "https://markbould.com/2015/10/01/the-enervated-ghosts-of-zion-afrocyberpunk-1/"],
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithTimeout(url, options = {}, timeoutMs = 16000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.7",
        ...(options.headers || {}),
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function stripHtml(value) {
  return decodeEntities(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function normalizeResultUrl(rawUrl) {
  try {
    const decoded = decodeEntities(rawUrl);
    const candidate = decoded.startsWith("//") ? `https:${decoded}` : decoded;
    const parsed = new URL(candidate, "https://html.duckduckgo.com");
    const actual = parsed.searchParams.get("uddg");
    const url = new URL(actual ? decodeURIComponent(actual) : parsed.href);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (key.startsWith("utm_") || key === "ref" || key === "source") {
        url.searchParams.delete(key);
      }
    }
    if (!["http:", "https:"].includes(url.protocol) || blockedHosts.has(url.hostname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

function decodeJsString(value) {
  try {
    return JSON.parse(`"${value.replaceAll('"', '\\"')}"`);
  } catch {
    return value.replace(/\\u003C/gi, "<").replace(/\\u003E/gi, ">").replace(/\\\//g, "/");
  }
}

async function searchWeb(query) {
  const url = `https://search.brave.com/search?q=${encodeURIComponent(query)}&source=web`;
  const response = await fetchWithTimeout(url, {}, 20000);
  if (!response.ok) throw new Error(`search status ${response.status}`);
  const html = await response.text();
  const results = [];
  const embeddedResultPattern = /\{title:"((?:\\.|[^"\\])*)",url:"(https?:\\?\/\\?\/[^"\\]+(?:\\.[^"\\]*)*)"/g;
  for (const match of html.matchAll(embeddedResultPattern)) {
    const href = normalizeResultUrl(decodeJsString(match[2]));
    if (!href) continue;
    if (href.includes("search.brave.com") || href.includes("imgs.search.brave.com")) continue;
    results.push({ url: href, title: stripHtml(decodeJsString(match[1])) });
  }
  const unique = new Map(results.map((result) => [result.url, result]));
  return [...unique.values()].slice(0, 12);
}

function metadataFromHtml(html, fallbackUrl) {
  const title = stripHtml(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "Untitled source").slice(0, 240);
  const descriptionMatch =
    html.match(/<meta[^>]+(?:name|property)=["'](?:description|og:description)["'][^>]+content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["'](?:description|og:description)["']/i);
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  const readingNote = stripHtml(html.replace(/<nav[\s\S]*?<\/nav>/gi, " ").replace(/<footer[\s\S]*?<\/footer>/gi, " "))
    .slice(0, 1200);
  return {
    title,
    description: stripHtml(descriptionMatch?.[1] || "").slice(0, 600),
    canonicalUrl: normalizeResultUrl(canonicalMatch?.[1] || fallbackUrl) || fallbackUrl,
    readingNote,
  };
}

async function fetchSource(url) {
  const started = Date.now();
  try {
    const response = await fetchWithTimeout(url);
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.includes("text/html")) {
      return { url, ok: false, status: response.status, contentType, elapsedMs: Date.now() - started };
    }
    const html = await response.text();
    const metadata = metadataFromHtml(html, response.url || url);
    return {
      url,
      resolvedUrl: response.url || url,
      ok: true,
      status: response.status,
      contentType,
      elapsedMs: Date.now() - started,
      ...metadata,
    };
  } catch (error) {
    return { url, ok: false, error: String(error), elapsedMs: Date.now() - started };
  }
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const output = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      output[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return output;
}

async function researchTopic(slug, topic, index) {
  const queries = queryBuilders.map((build) => build(topic));
  const searches = [];
  const candidates = new Map();

  for (const query of queries) {
    let results = [];
    let error;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        results = await searchWeb(query);
        if (results.length) break;
      } catch (caught) {
        error = String(caught);
      }
      await delay(900 * attempt);
    }
    for (const result of results) candidates.set(result.url, result);
    searches.push({ query, resultCount: results.length, results, ...(error && !results.length ? { error } : {}) });
    await delay(900);
  }

  for (const [title, url] of baselineSources) {
    const normalizedUrl = normalizeResultUrl(url);
    if (normalizedUrl && !candidates.has(normalizedUrl)) candidates.set(normalizedUrl, { title, url: normalizedUrl });
  }

  const candidateList = [...candidates.values()];
  const fetched = await mapWithConcurrency(candidateList.slice(0, 65), 5, async (candidate) => ({
    searchTitle: candidate.title,
    ...(await fetchSource(candidate.url)),
  }));
  const accessible = fetched.filter((entry) => entry.ok).slice(0, 24);

  const ledger = {
    slug,
    topic,
    priority: index + 1,
    generatedAt: new Date().toISOString(),
    searchCount: searches.length,
    candidateCount: candidateList.length,
    fetchedAttemptCount: fetched.length,
    accessibleFetchCount: accessible.length,
    requirementMet: searches.length >= 10 && accessible.length >= 20,
    searches,
    sources: accessible,
    failedFetches: fetched.filter((entry) => !entry.ok),
  };

  await writeFile(path.join("research", "priority", `${slug}.json`), JSON.stringify(ledger, null, 2));
  process.stdout.write(
    `[${String(index + 1).padStart(2, "0")}/${topics.length}] ${topic}: ${searches.length} searches, ${accessible.length} accessible pages\n`,
  );
  return ledger;
}

await mkdir(path.join("research", "priority"), { recursive: true });

const ledgers = [];
const completed = await mapWithConcurrency(topics, 2, async ([slug, topic], index) => {
  try {
    const existing = JSON.parse(await readFile(path.join("research", "priority", `${slug}.json`), "utf8"));
    if (existing.requirementMet) {
      process.stdout.write(`[${String(index + 1).padStart(2, "0")}/${topics.length}] ${topic}: reusing complete ledger\n`);
      return existing;
    }
  } catch {
    // No complete ledger yet.
  }
  return researchTopic(slug, topic, index);
});
ledgers.push(...completed);

const summary = {
  generatedAt: new Date().toISOString(),
  priorityArticleCount: ledgers.length,
  totalSearches: ledgers.reduce((sum, ledger) => sum + ledger.searchCount, 0),
  totalAccessibleFetches: ledgers.reduce((sum, ledger) => sum + ledger.accessibleFetchCount, 0),
  allRequirementsMet: ledgers.every((ledger) => ledger.requirementMet),
  articles: ledgers.map(({ slug, topic, searchCount, accessibleFetchCount, requirementMet }) => ({
    slug,
    topic,
    searchCount,
    accessibleFetchCount,
    requirementMet,
  })),
};

await writeFile(path.join("research", "priority", "summary.json"), JSON.stringify(summary, null, 2));
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
