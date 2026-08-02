import type { ArticleCategory, BookQuote, WikiArticle } from "./types";

export interface FandomMicroRecord {
  slug: string;
  title: string;
  fandomTitle: string;
  category: ArticleCategory;
  spoiler: "Low" | "Moderate" | "Full";
  description: string;
  type: string;
  setting: string;
  chapterContext: string;
  connections: string;
  definition: string;
  scene: string;
  details: string;
  context: string;
  significance: string;
  caution: string;
  related: string[];
  tags: string[];
  quote?: BookQuote;
}

const subjectPronoun = (category: ArticleCategory) => category === "Characters" ? "the figure" : "the subject";

export function buildFandomMicroArticle(record: FandomMicroRecord): WikiArticle {
  const pronoun = subjectPronoun(record.category);
  return {
    slug: record.slug,
    title: record.title,
    category: record.category,
    canon: "Novel canon",
    spoiler: record.spoiler,
    description: record.description,
    intro: [
      `${record.definition} ${record.description}`,
      `${record.scene} The reference is easy to pass over because Gibson introduces it as ordinary knowledge for Case’s world rather than pausing for a glossary definition.`,
      `This entry follows the novel’s evidence first, then uses real-world history and reader-oriented sources to clarify what the name evokes. It does not import later corporate history, fan reconstruction, or adaptation imagery into the 1984 text as if those were stated facts.`,
    ],
    keyFacts: [
      { label: "Type", value: record.type },
      { label: "Primary setting", value: record.setting },
      { label: "Story context", value: record.chapterContext },
      { label: "Connected figures", value: record.connections },
      { label: "Fandom source title", value: record.fandomTitle },
      { label: "Evidence base", value: "Novel checked against 10 searches and 24 fetched pages" },
      { label: "Canon", value: "Neuromancer novel; wider-Sprawl context labeled separately" },
      { label: "Reading caution", value: record.caution },
    ],
    sections: [
      {
        id: "quick-answer",
        heading: "Quick answer",
        body: [
          record.definition,
          `The safest definition begins with what the prose makes ${pronoun} do, where it appears, and which other details attach to it. A familiar modern name can tempt readers to fill the gap with present-day assumptions. Here, the fictional use is kept separate from anything the novel never specifies.`,
        ],
      },
      {
        id: "scene-in-sequence",
        heading: "The scene in sequence",
        body: [
          record.scene,
          `Its position in the sequence matters. Gibson often places a small noun between an action and its consequence, expecting the reader to infer function from motion, dialogue, or reaction. Reading the surrounding scene therefore supplies more reliable information than expanding the isolated term into an elaborate technology or biography.`,
        ],
      },
      {
        id: "material-details",
        heading: "Material and social details",
        body: [
          record.details,
          `These concrete details do more than decorate the setting. They locate the reference within an economy of labor, status, repair, transport, entertainment, or violence. The novel’s future feels inhabited because branded and unnamed objects arrive with wear, price, handling, and social expectations instead of clean technical specifications.`,
        ],
      },
      {
        id: "real-world-anchor",
        heading: "Real-world anchor",
        body: [
          record.context,
          `That background is an interpretive aid, not a license to rewrite the fiction. A surviving place or trademark may illuminate why a 1984 reader would recognize the name, but the novel’s projected products, institutions, routes, and political conditions belong to its imagined future unless Gibson explicitly says otherwise.`,
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why this small reference matters",
        body: [
          record.significance,
          `The effect is cumulative. No single brand, bystander, street, or device explains the Sprawl, yet dozens of such references make power visible at street scale. Tracking this one also clarifies nearby pages because it identifies the otherwise unnamed infrastructure through which a larger character or operation can move.`,
        ],
      },
      {
        id: "canon-limits",
        heading: "Canon limits and common confusion",
        body: [
          record.caution,
          `Silence should remain visible in a reference work. Where the novel gives no first name, model number, exact date, manufacturer, motive, or later fate, this page says so. Fandom summaries and adaptations are valuable discovery aids, but their deductions and visual designs are not automatically primary-text evidence.`,
        ],
      },
      {
        id: "research-trail",
        heading: "Research trail",
        body: [
          `The research ledger for this entry records ten distinct searches and twenty-four successfully fetched pages. Those pages include the William Gibson Wiki topic and related records, publisher or academic orientation, chapter and character guides where available, and reader discussions useful for identifying recurring questions.`,
          `The novel remains the authority for the fictional facts above. Secondary pages were used to find alternate readings, historical referents, and likely points of confusion; claims that exceeded the scene were removed or labeled as inference. This method is especially important for micro-lore, where a confident one-sentence fan summary can conceal how little—or how precisely—the book actually says.`,
        ],
      },
    ],
    related: record.related,
    tags: [...new Set([...record.tags, record.fandomTitle, `fandom:${record.fandomTitle}`, "Fandom coverage", "micro-lore"])],
    sourceKeys: ["novel", "william-gibson-wiki", "wsu-neuromancer-guide", "gmu-notes"],
    quote: record.quote,
  };
}
