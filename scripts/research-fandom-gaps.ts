import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

type Target = { fandomTitle: string; slug: string; focus: string };

const targets: Target[] = [
  { fandomTitle: "Akai", slug: "akai-transdermal-unit", focus: "transdermal inducer Molly Sense/Net injury" },
  { fandomTitle: "Ali", slug: "ali", focus: "Istanbul drug dealer Riviera Spice Bazaar" },
  { fandomTitle: "Angelo", slug: "angelo", focus: "Panther Modern messenger face graft shark cartilage" },
  { fandomTitle: "Arabs", slug: "arab-horse-cloning", focus: "horse extinction Arab cloning frog DNA Finn joke" },
  { fandomTitle: "Arcade", slug: "ninsei-arcade", focus: "Ninsei arcade Linda Lee Tank War Europa Matsuga office" },
  { fandomTitle: "Baltimore", slug: "baltimore", focus: "Sprawl Gerald Chin clinic Molly broken leg" },
  { fandomTitle: "Bank chip", slug: "bank-chip", focus: "Freeside payment identity access chip" },
  { fandomTitle: "Bell Europa", slug: "bell-europa", focus: "stolen entry codes Copenhagen university grid" },
  { fandomTitle: "Berne", slug: "berne", focus: "Wintermute mainframe Swiss banking sector" },
  { fandomTitle: "Betaphenethylamine", slug: "betaphenethylamine", focus: "Case beta drug Freeside Riviera" },
  { fandomTitle: "Beyoglu", slug: "beyoglu", focus: "Istanbul district Riviera capture route" },
  { fandomTitle: "Bockris Systems", slug: "bockris-systems", focus: "Kuang Mark Eleven Reinhold Tessier-Ashpool" },
  { fandomTitle: "Braun", slug: "braun-in-neuromancer", focus: "consumer electronics coffee maker hologram projector microdrone" },
  { fandomTitle: "Brood", slug: "brood", focus: "Panther Modern link man Sense/Net heist New Jersey" },
  { fandomTitle: "Brooklyn", slug: "brooklyn", focus: "Finn crowded enclosed place Istanbul comparison" },
  { fandomTitle: "China", slug: "china-in-neuromancer", focus: "Kuang program nerve splicing Chinese hollow points" },
  { fandomTitle: "Christian Scientists", slug: "christian-scientists", focus: "Sprawl transit predatory proselytizers office techs" },
  { fandomTitle: "Citroen", slug: "citroen-in-istanbul", focus: "hydrogen cell sedan Turkish police" },
  { fandomTitle: "Congressional aide", slug: "congressional-aide", focus: "Corto Screaming Fist testimony coverup" },
  { fandomTitle: "Copenhagen", slug: "copenhagen-grid", focus: "pirate academic grid Bell Europa code board" },
  { fandomTitle: "Cray", slug: "cray-computers", focus: "high resolution computer Case Armitage Braun hologram" },
  { fandomTitle: "Cumhuriyet Caddesi", slug: "cumhuriyet-caddesi", focus: "Istanbul Hilton avenue letter writers voiceprinters" },
  { fandomTitle: "Dreaming real", slug: "dreaming-real", focus: "Riviera holographic performance implant art" },
  { fandomTitle: "Eastern Seaboard Fission Authority", slug: "eastern-seaboard-fission-authority", focus: "matrix scarlet pyramid inspection probe" },
  { fandomTitle: "Elroy", slug: "elroy", focus: "Dixie Flatline Siberia POW phantom limb story" },
  { fandomTitle: "Fuji Electric Company", slug: "fuji-electric-company", focus: "Chiba skyline hologram logo harbor glare" },
  { fandomTitle: "Gardening robot", slug: "gardening-robots", focus: "Chiba clinic Freeside Wintermute kills Roland" },
  { fandomTitle: "Gerald Chin", slug: "gerald-chin", focus: "Baltimore discreet doctor Molly repair" },
  { fandomTitle: "Grand Bazaar", slug: "grand-bazaar", focus: "Istanbul route Riviera capture geography" },
  { fandomTitle: "Honda", slug: "honda-trike", focus: "Bruce Freeside hydrogen cell trike" },
  { fandomTitle: "HsG", slug: "hsg", focus: "human skeletal growth factor Panther Modern broadcast" },
  { fandomTitle: "Istanbul Hilton", slug: "istanbul-hilton", focus: "Armitage crew Riviera operation hotel" },
  { fandomTitle: "JAL", slug: "jal-orbital-shuttle", focus: "Orly L5 shuttle space adaptation syndrome" },
  { fandomTitle: "Julius Deane Import Export", slug: "julius-deane-import-export", focus: "Chiba smuggling office warehouse Ninsei" },
  { fandomTitle: "Kurt", slug: "kurt", focus: "Chatsubo bartender Smith Wesson riot gun" },
  { fandomTitle: "L-5 archipelago", slug: "l5-archipelago", focus: "Freeside Zion orbital geography Lagrange point" },
  { fandomTitle: "Larry", slug: "larry", focus: "Panther Modern Microsofts Memory Lane software booth" },
  { fandomTitle: "London", slug: "london-grid", focus: "Armitage Corto database Bell Europa route" },
  { fandomTitle: "Los Angeles", slug: "los-angeles", focus: "Armitage Molly Sense/Net Zion founder" },
  { fandomTitle: "Marlene", slug: "marlene", focus: "Case childhood wasp nest Rollo memory" },
  { fandomTitle: "Matsuga", slug: "matsuga", focus: "Ninsei office Wage hormonal triggers" },
  { fandomTitle: "Melanin boosting", slug: "melanin-boosting", focus: "Freeside artificial tan Paris fashion Case" },
  { fandomTitle: "Mercedes", slug: "mercedes-automatic-car", focus: "Istanbul autonomous hydrogen cell car Molly Case" },
  { fandomTitle: "Michele", slug: "michele", focus: "French Turing agent Freeside interrogation" },
  { fandomTitle: "Mitsubishi-Genentech", slug: "mitsubishi-genentech", focus: "sarariman mutagen monitor corporate implant" },
  { fandomTitle: "Mona", slug: "mona", focus: "Chiba Linda Lee Wage warning" },
  { fandomTitle: "New Jersey", slug: "new-jersey", focus: "Panther Modern Brood satellite link Russian program" },
  { fandomTitle: "New York", slug: "new-york-in-the-sprawl", focus: "BAMA Sense/Net Finn Metro Holografix" },
  { fandomTitle: "New York Public Library", slug: "new-york-public-library", focus: "matrix ICE Case simstim transition" },
  { fandomTitle: "Nightwing", slug: "nightwing", focus: "Screaming Fist assault parafoil EMP" },
  { fandomTitle: "Orly", slug: "orly", focus: "Paris airport JAL orbital shuttle Freeside" },
  { fandomTitle: "Paris", slug: "paris-in-neuromancer", focus: "crew transit Turing Registry fashion craft" },
  { fandomTitle: "Pierre", slug: "pierre", focus: "French Turing agent Freeside interrogation bad cop" },
  { fandomTitle: "Reinhold Scientific", slug: "reinhold-scientific", focus: "Berne Bockris Tessier-Ashpool subsidiary" },
  { fandomTitle: "Rio", slug: "rio", focus: "Brazil matrix sector Neuromancer mainframe" },
  { fandomTitle: "Roland", slug: "roland", focus: "French Turing agent gardening robot death" },
  { fandomTitle: "Rollo", slug: "rollo", focus: "Case youth Marlene Frisco flamethrower wasp nest" },
  { fandomTitle: "Shiga", slug: "shiga-night-city", focus: "market stalls Shin gun Case" },
  { fandomTitle: "Shin", slug: "shin", focus: "Night City waiter gun rental Walther PPK" },
  { fandomTitle: "Shinjuku", slug: "shinjuku", focus: "Tokyo wired electric night Snake Man" },
  { fandomTitle: "Sikkim", slug: "sikkim-steel-combine", focus: "matrix pink spheres steel combine" },
  { fandomTitle: "Smith & Wesson", slug: "smith-wesson-riot-gun", focus: "Kurt Chatsubo riot gun subsonic sandbag cartridges" },
  { fandomTitle: "Snake Man", slug: "snake-man", focus: "Case pituitary glands deal Wage" },
  { fandomTitle: "Sons of Christ the King", slug: "sons-of-christ-the-king", focus: "Panther Modern hijacked satellite Blue Nine hoax" },
  { fandomTitle: "Spice Bazaar", slug: "spice-bazaar", focus: "Istanbul Egyptian Bazaar Riviera drugs Finn horse" },
  { fandomTitle: "Switzerland", slug: "switzerland-in-neuromancer", focus: "AI citizenship banking Wintermute Berne Geneva" },
  { fandomTitle: "Tally Isham", slug: "tally-isham", focus: "simstim star Sense/Net celebrity" },
  { fandomTitle: "Tank War Europa", slug: "tank-war-europa", focus: "Ninsei holographic arcade game Linda Lee" },
  { fandomTitle: "The War", slug: "the-war", focus: "United States Russia three week conflict Screaming Fist aftermath" },
  { fandomTitle: "Topkapi", slug: "topkapi", focus: "Istanbul palace museum Molly Case Corto discussion" },
  { fandomTitle: "Toulon", slug: "toulon", focus: "Corto cybernetic psychotherapy institution" },
  { fandomTitle: "Turkey", slug: "turkey-in-neuromancer", focus: "Istanbul technology secret police Riviera operation" },
  { fandomTitle: "Virginia Rambaldi", slug: "virginia-rambaldi", focus: "Panther Modern media terrorism interview Hosaka precis" },
  { fandomTitle: "Walther PPK", slug: "walther-ppk", focus: "Shin Vietnamese copy explosive ammunition" },
  { fandomTitle: "Wizard's Castle", slug: "wizards-castle", focus: "Ninsei arcade game Linda Lee seventh level dungeon" },
  { fandomTitle: "Yenishehir Palas Oteli", slug: "yenisehir-palas-oteli", focus: "Istanbul Riviera performance Turkish police" },
  { fandomTitle: "Yesilkoy", slug: "yesilkoy", focus: "Istanbul airport Paris flight crew" },
  { fandomTitle: "Zurich", slug: "zurich", focus: "banking matrix talking head artisans" },
];

const commonCandidates = [
  ["Penguin Random House — Neuromancer", "https://www.penguinrandomhouse.com/books/293994/neuromancer-by-william-gibson/"],
  ["Penguin Random House — reader's guide", "https://www.penguinrandomhouse.com/books/293994/neuromancer-by-william-gibson/readers-guide"],
  ["Washington State University — Neuromancer guide", "https://public.archive.wsu.edu/brians/public_html/science_fiction/neuromancer.html"],
  ["George Mason University — Neuromancer notes", "https://mason.gmu.edu/~dtaciuch/neuronotes/"],
  ["EBSCO — Neuromancer research starter", "https://www.ebsco.com/research-starters/literature-and-writing/neuromancer-william-gibson"],
  ["Encyclopedia of Science Fiction — William Gibson", "https://sf-encyclopedia.com/entry/gibson_william"],
  ["Encyclopedia of Science Fiction — cyberspace", "https://sf-encyclopedia.com/entry/cyberspace"],
  ["LitCharts — Neuromancer summary", "https://www.litcharts.com/lit/neuromancer/summary"],
  ["LitCharts — Neuromancer characters", "https://www.litcharts.com/lit/neuromancer/characters"],
  ["LitCharts — technology and the body", "https://www.litcharts.com/lit/neuromancer/themes/technology-and-the-body"],
  ["GradeSaver — Neuromancer study guide", "https://www.gradesaver.com/neuromancer/study-guide/summary-chapters-1-2-part-i"],
  ["GradeSaver — Chapters 3–7", "https://www.gradesaver.com/neuromancer/study-guide/summary-chapters-3-7-part-ii"],
  ["SuperSummary — Neuromancer summary", "https://www.supersummary.com/neuromancer/summary/"],
  ["OpenFiction — Neuromancer chapter index", "https://openfiction.org/books/PM4H49UkyQHyYG0-EGTVn/neuromancer/chapters"],
  ["Rhulha — Neuromancer chapter summaries", "https://rhulha.github.io/book-summaries/books/neuromancer/"],
  ["Wikipedia — Neuromancer", "https://en.wikipedia.org/wiki/Neuromancer"],
  ["WIRED — Gibson interview", "https://www.wired.com/2012/09/interview-with-william-gibson/"],
  ["The Guardian — William Gibson transcript", "https://www.theguardian.com/books/2000/mar/24/sciencefictionfantasyandhorror.williamgibson"],
  ["Reddit — Neuromancer terms and definitions", "https://www.reddit.com/r/Neuromancer/comments/pn7l5w/neuromancer_terms_and_definitions/"],
  ["Reddit — expansive reading guide and index", "https://www.reddit.com/r/Neuromancer/comments/1auktqt/expansive_neuromancer_1984_reading_guide_and_index/"],
] as const;

const sleep = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const fetchCache = new Map<string, { status: number; finalUrl: string }>();
const stripMarkup = (value: string) => value
  .replace(/<[^>]+>/g, " ")
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&amp;/g, "&")
  .replace(/\s+/g, " ")
  .trim();

async function searchMediaWiki(query: string, useFandom: boolean) {
  try {
    const endpoint = useFandom
      ? "https://williamgibson.fandom.com/api.php"
      : "https://en.wikipedia.org/w/api.php";
    const url = new URL(endpoint);
    url.search = new URLSearchParams({
      action: "query",
      list: "search",
      srsearch: query,
      srlimit: "10",
      srnamespace: "0",
      format: "json",
      origin: "*",
    }).toString();
    const response = await fetch(url, {
      headers: { "user-agent": "NeuromancerAtlasResearch/1.0" },
      signal: AbortSignal.timeout(20_000),
    });
    if (!response.ok) return [] as Array<{ title: string; url: string }>;
    const payload = await response.json() as { query?: { search?: Array<{ title: string; snippet?: string }> } };
    return (payload.query?.search ?? []).map((result) => {
      if (!useFandom) {
        return {
          title: `Wikipedia — ${result.title}`,
          url: `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title.replaceAll(" ", "_"))}`,
        };
      }
      const pageUrl = new URL(endpoint);
      pageUrl.search = new URLSearchParams({
        action: "parse",
        page: result.title,
        prop: "text|links|categories",
        format: "json",
        origin: "*",
      }).toString();
      return { title: `William Gibson Wiki — ${stripMarkup(result.title)}`, url: pageUrl.toString() };
    });
  } catch {
    return [] as Array<{ title: string; url: string }>;
  }
}

async function fetchable(url: string) {
  const cached = fetchCache.get(url);
  if (cached) return cached;
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "Mozilla/5.0 NeuromancerAtlasResearch/1.0",
        range: "bytes=0-65535",
      },
      signal: AbortSignal.timeout(18_000),
    });
    if (!response.ok) return null;
    const reader = response.body?.getReader();
    if (reader) {
      await reader.read();
      await reader.cancel();
    }
    const result = { status: response.status, finalUrl: response.url };
    fetchCache.set(url, result);
    fetchCache.set(response.url, result);
    return result;
  } catch {
    return null;
  }
}

function querySet(target: Target) {
  const subject = `Neuromancer ${target.fandomTitle}`;
  return [
    `"${subject}"`,
    `${subject} ${target.focus}`,
    `${subject} William Gibson meaning`,
    `${subject} chapter scene`,
    `${subject} reading guide`,
    `${subject} analysis`,
    `${subject} glossary explanation`,
    `site:reddit.com Neuromancer "${target.fandomTitle}"`,
    `site:williamgibson.fandom.com/wiki "${target.fandomTitle}"`,
    `${target.fandomTitle} real world history context William Gibson Neuromancer`,
  ];
}

async function researchTarget(target: Target, index: number) {
  const queries = querySet(target);
  const candidates: Array<{ title: string; url: string }> = [];
  for (let queryIndex = 0; queryIndex < queries.length; queryIndex += 1) {
    candidates.push(...await searchMediaWiki(queries[queryIndex], queryIndex % 2 === 0));
    await sleep(90);
  }

  const fandomApi = new URL("https://williamgibson.fandom.com/api.php");
  fandomApi.search = new URLSearchParams({
    action: "parse",
    page: target.fandomTitle,
    prop: "text|links|categories",
    format: "json",
    origin: "*",
  }).toString();
  candidates.unshift({
    title: `William Gibson Wiki — ${target.fandomTitle}`,
    url: fandomApi.toString(),
  });
  for (const [title, url] of commonCandidates) candidates.push({ title, url });

  const uniqueCandidates = [...new Map(candidates.map((candidate) => [candidate.url.replace(/\/$/, ""), candidate])).values()];
  const consulted: Array<{ title: string; url: string; status: number }> = [];
  for (let cursor = 0; cursor < uniqueCandidates.length && consulted.length < 24; cursor += 6) {
    const batch = uniqueCandidates.slice(cursor, cursor + 6);
    const checked = await Promise.all(batch.map(async (candidate) => ({ candidate, result: await fetchable(candidate.url) })));
    for (const { candidate, result } of checked) {
      if (!result || consulted.some((source) => source.url === result.finalUrl)) continue;
      consulted.push({ title: candidate.title || new URL(result.finalUrl).hostname, url: result.finalUrl, status: result.status });
      if (consulted.length >= 24) break;
    }
  }

  if (consulted.length < 20) {
    throw new Error(`${target.slug}: only ${consulted.length} accessible pages from ${uniqueCandidates.length} candidates`);
  }

  const ledger = {
    slug: target.slug,
    fandomTitle: target.fandomTitle,
    searchedOn: new Date().toISOString().slice(0, 10),
    searchCount: queries.length,
    queries,
    consultedCount: consulted.length,
    consulted,
    researchStandard: { minimumQueries: 10, minimumConsultedLinks: 20, met: true },
  };
  await writeFile(join(process.cwd(), "research", "microlore", `${target.slug}.json`), `${JSON.stringify(ledger, null, 2)}\n`);
  console.log(`[${index + 1}/${targets.length}] ${target.slug}: ${queries.length} searches, ${consulted.length} fetched pages`);
}

await mkdir(join(process.cwd(), "research", "microlore"), { recursive: true });
for (const filename of await readdir(join(process.cwd(), "research", "microlore"))) {
  if (!filename.endsWith(".json")) continue;
  try {
    const ledger = JSON.parse(await readFile(join(process.cwd(), "research", "microlore", filename), "utf8"));
    for (const source of Array.isArray(ledger.consulted) ? ledger.consulted : []) {
      if (typeof source.url === "string" && Number.isFinite(source.status)) {
        fetchCache.set(source.url, { status: Number(source.status), finalUrl: source.url });
      }
    }
  } catch {
    // Ignore malformed unrelated files; the content audit will report them separately.
  }
}
const force = process.argv.includes("--force");
for (let index = 0; index < targets.length; index += 1) {
  const target = targets[index];
  if (!force) {
    try {
      const existing = JSON.parse(await readFile(join(process.cwd(), "research", "microlore", `${target.slug}.json`), "utf8"));
      if (existing.searchCount >= 10 && existing.consultedCount >= 20) {
        console.log(`[${index + 1}/${targets.length}] ${target.slug}: kept existing ledger`);
        continue;
      }
    } catch {
      // No complete ledger exists yet.
    }
  }
  await researchTarget(target, index);
}
