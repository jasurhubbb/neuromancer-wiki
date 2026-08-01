import type { WikiArticle } from "./types";

export const precisArticles: WikiArticle[] = [
  {
    slug: "precis",
    title: "Précis",
    category: "Technology",
    canon: "Novel canon",
    spoiler: "Moderate",
    description:
      "The five-minute multimedia briefing Case requests from a Hosaka to identify the Panther Moderns before the Sense/Net operation.",
    intro: [
      "In Neuromancer, a précis is a compact research briefing assembled by the Hosaka computer in Case and Molly’s Sprawl loft. Case has just encountered the name Panther Moderns through Molly’s simstim feed and does not recognize it after his time away in Chiba. He asks the machine for a five-minute précis, and the result combines a still image, moving footage, identifying graphics, and an interview excerpt into a short orientation to the subculture.",
      "The word is not the name of a fictional product, program, file type, or artificial intelligence. Précis is an established English noun, borrowed from French, for a concise account of essential points. Gibson applies that ordinary word to a speculative multimedia result. The scene establishes what Case requests, which broad source collections the Hosaka accesses, and several items in the output; it does not reveal the summarization algorithm, the hardware model, or whether the machine selects existing clips, composes new connective material, or combines both methods.",
    ],
    keyFacts: [
      { label: "Standard spelling", value: "précis; precis is a common unaccented form" },
      { label: "Part of speech", value: "A common noun meaning a concise summary" },
      { label: "Requester", value: "Case" },
      { label: "System", value: "A Hosaka computer in the Sprawl loft" },
      { label: "Subject", value: "The Panther Moderns" },
      { label: "Requested length", value: "Five minutes" },
      { label: "Source field", value: "Libraries, journals, and news services" },
      { label: "Output form", value: "A multimedia briefing with still, motion, graphics, and interview material" },
      { label: "Scene", value: "Part Two, Chapter 4, before the Sense/Net theft" },
      { label: "Canon limit", value: "No algorithm, model name, or generative architecture is specified" },
    ],
    sections: [
      {
        id: "word-before-machine",
        heading: "A word before it is a technology",
        body: [
          "Précis entered English long before electronic computing. Dictionaries define the noun as a concise summary that retains essential points, and its French history connects it with material cut short or reduced. The accented spelling is the standard dictionary headword, pronounced approximately PRAY-see. English publications also omit the accent and print precis, including common reproductions of Case’s request. The unaccented form does not turn the word into an invented brand. Conversely, the occasional spelling Precís, with an accent over the i, is not the standard French-derived English form.",
          "The novel uses the noun in lower case because Case is asking for a kind of result. He does not launch an application called Précis, purchase a Précis module, or identify a proprietary Hosaka service by that name. Capitalizing the word in this page title follows encyclopedia style, not fictional branding. This distinction answers the first-reader question efficiently: the unfamiliar mark on the page names a short briefing, while the futuristic element is the computer’s ability to assemble one across media in response to a terse spoken request.",
        ],
      },
      {
        id: "request-in-context",
        heading: "Why Case requests it",
        body: [
          "The request occurs in Chapter 4 during preparation for the Sense/Net theft. Through the new flip-flop switch, Case has been receiving Molly’s sensorium as she travels through Memory Lane. She contacts Larry about work for the Panther Moderns, but Larry detects that another person is riding her senses and insists that the listener leave. Case switches away, removes the trodes, and asks the Hosaka about the unfamiliar name. The précis therefore begins as a practical response to an interruption in the team’s human intelligence network.",
          "Case’s ignorance has a stated reason. The Moderns are a recent Sprawl subculture that emerged while he was in Chiba, and such groups can appear and disappear faster than an absent operator can track them. A broad encyclopedia entry would be less useful than a bounded update. By asking for five minutes, Case calibrates the amount of attention he will spend before returning to operational work. The scene presents summarization as a tool for recovering situational awareness, not as a substitute for every later meeting, judgment, or reconnaissance task.",
        ],
      },
      {
        id: "retrieval-field",
        heading: "What the Hosaka searches",
        body: [
          "The narration identifies three broad source classes behind the briefing: libraries, journals, and news services available to the Hosaka. That range matters. A library can preserve background material, journals can supply analytical or institutional accounts, and news services can contribute recent images and interviews. The finished result therefore draws from a media environment rather than from one secret police file or an internal Panther Modern database. Nothing in the scene says the gang has willingly provided a canonical self-description.",
          "The word array can refer to the information resources the machine can access, but it does not settle their physical location or commercial arrangement. Some may be stored locally, some may be reached through network services, and some may be licensed archives. The novel does not specify subscriptions, indexing standards, search ranking, or geographic coverage. Calling the scene an internet search can help a modern reader grasp its convenience, but it imports a later interface and protocol vocabulary that Gibson does not use here. The safer statement is that the Hosaka retrieves across multiple organized information sources.",
        ],
      },
      {
        id: "multimedia-form",
        heading: "A summary made from several media",
        body: [
          "The précis does not arrive as a page of prose. It opens on a held color image of a young Modern against a marked wall. When the image begins to move, Case understands that the apparent collage effect comes from mimetic polycarbon clothing matching the background around an exposed face. The sequence then cuts to an interview with Dr. Virginia Rambali of New York University, accompanied by alphanumeric identification. Still photography, motion, spoken commentary, and on-screen text all contribute different kinds of evidence.",
          "That construction is why multimedia is more accurate than merely text summary. It also prevents a modern encyclopedia from treating every sentence in the briefing as narration generated by the computer. The moving material and interview can plausibly be retrieved excerpts, while their selection and ordering create the summary. The novel attributes the overall précis to the Hosaka but does not itemize which words, transitions, labels, or edits the system originates. Its achievement may involve retrieval, compression, montage, synthesis, or some combination; the page should preserve that range.",
        ],
      },
      {
        id: "modern-as-image",
        heading: "What the briefing shows about the Moderns",
        body: [
          "The opening visual turns an unfamiliar group into an embodied style. Surgical alteration, adolescent skin, deliberate movement, and a background-matching suit appear together. Case initially misreads the figure because clothing and wall seem to occupy the same visual plane. The report thereby demonstrates a defining technology instead of listing it abstractly. Later, similar material becomes operational camouflage during the Sense/Net raid, so the briefing plants information that the plot will convert into action.",
          "The interview supplies a different frame. Rambali analyzes the Moderns through terrorism and the media environment, arguing that their self-conscious relation to representation distinguishes them from an organization pursuing a stable political program. Case eventually reaches a blunter working judgment: they are mercenary, nihilistic practical jokers whose style repeats older Sprawl subcultures through new hardware. The précis contains the institutional interpretation, but his later conclusion belongs to him. The machine supplies evidence and framing; the operator decides what is useful.",
        ],
      },
      {
        id: "case-edits",
        heading: "Case remains the editor",
        body: [
          "The interaction is compact but not passive. Case names the subject, limits the duration, authorizes playback, and skips material when the academic explanation stops serving his immediate purpose. Those controls show a human shaping the information flow at several stages. A finished five-minute briefing is not necessarily watched for five uninterrupted minutes, and the requested length does not tell us how long the Hosaka took to assemble it. The narration moves quickly, but it provides no benchmark for processing latency.",
          "His intervention also exposes the difference between brevity and neutrality. Every précis is already selective because it reduces a larger source field; Case then performs another selection by cutting forward. What remains in his understanding is shaped by source availability, the Hosaka’s choices, and his impatience. That layered editing matters more than guessing a hidden algorithm. Neuromancer repeatedly shows information becoming actionable only when a situated person filters it, whether Case is reading ICE geometry, Molly is evaluating a contact, or an AI is arranging a persuasive persona.",
        ],
      },
      {
        id: "plot-work",
        heading: "From a name to the Sense/Net plan",
        body: [
          "Structurally, the précis bridges two kinds of reconnaissance. Molly finds a live intermediary in Memory Lane, while Case uses the Hosaka to acquire cultural and technical context after Larry excludes him from the conversation. The routes are complementary rather than competitive. The computer cannot hire the Moderns or establish trust with Larry; the street contact does not give Case an overview of the group’s public image. The operation advances because embodied access and machine-assisted research cover different gaps.",
          "The briefing also prepares the reader for the heist’s methods. Its moving image introduces the camouflage later worn around Sense/Net, and its discussion of media-conscious violence anticipates the Moderns’ use of fabricated communications and institutional panic. An apparently expository pause therefore performs operational work. When the group turns screens, emergency procedures, and public fear into weapons, the action develops the media logic the précis has already raised. The summary does not reveal the exact plan, but it teaches Case and the reader what kind of collaborators have entered it.",
        ],
      },
      {
        id: "authority-and-bias",
        heading: "A polished report is not final truth",
        body: [
          "The Hosaka’s breadth and speed give its presentation authority, yet its source pool is institutional. Libraries, academic commentary, and news services describe a subculture from positions outside it. Rambali’s interpretation is serious evidence, not the group speaking in its own voice, and the editorial sequence turns a living youth culture into a legible research object. Case’s practical assessment may correct some distance while introducing his own generational contempt. Neither viewpoint should be promoted into a complete neutral definition.",
          "The opening image makes this problem visible. A camouflage suit defeats ordinary visual separation, but the briefing restores legibility by holding the frame, exposing the face, and supplying expert commentary. Media can make the Modern difficult to see and then make him available for classification. That double action mirrors the group’s own practice: its members use representation to hide, frighten, and advertise themselves. The précis is useful because it condenses this struggle over visibility, not because a computer has escaped perspective.",
        ],
      },
      {
        id: "not-an-ai",
        heading: "Automation does not make the Hosaka an AI",
        body: [
          "A contemporary reader may compare the exchange with a generative assistant: a short natural-language request produces a tailored overview assembled from many sources. The comparison is illuminating as reception history, especially because automated summarization research predates the novel and modern systems now perform related tasks. It is not a canonical product specification. Neuromancer never says the précis was made by a language model, that the Hosaka predicts tokens, or that it invents connective narration in the manner of a current chatbot.",
          "The scene also does not establish personhood. The Hosaka accepts instructions and signals readiness, but it shows no independent motive, continuing identity, legal status, or strategy beyond the task. Wintermute and Neuromancer reveal agency across conversations, deceptions, plans, and conflicts; the briefing computer performs a bounded service. Voice output and fluent organization are therefore insufficient evidence that an ordinary machine is one of the novel’s regulated artificial intelligences. The distinction preserves the large gap Gibson draws between powerful automation and an entity pursuing its own ends.",
        ],
      },
      {
        id: "publication-context",
        heading: "What was imaginable in 1984",
        body: [
          "The scene combines several technical trajectories visible before Neuromancer appeared. Computer-assisted abstracting had been explored since the 1950s, including statistical selection of significant sentences from scientific writing. Networked information services and electronic news databases were established ideas by the early 1980s. Presentation programs released from 1982 onward could arrange text and graphics into timed screen sequences. These histories make automated research and visual briefing credible roots for comparison without proving that Gibson modeled the Hosaka on one laboratory system or commercial package.",
          "The multimedia detail remained notably speculative at the personal-workstation scale. Early presentation systems could display stored screen images and transitions, while full-motion digital video became broadly practical later and often depended first on external videotape or laserdisc hardware. Gibson does not pause to explain this bottleneck. He treats mixed media as ordinary office output and focuses on what the briefing means for Case. Historical context should therefore locate the imagination, not reduce it to prediction scorekeeping or claim a direct line of influence unsupported by author testimony.",
        ],
      },
      {
        id: "canon-boundaries",
        heading: "What the novel leaves unspecified",
        body: [
          "No passage names a précis application, version, file extension, storage capacity, visual template, or proprietary Hosaka format. The physical display used for every element is not cataloged, and the scene does not state whether the completed sequence can be saved, revised, transmitted, or cited. It gives no accuracy score, fact-checking process, provenance screen, or rule for resolving disagreement among sources. An adaptation must invent those details if it wants to show a complete interface.",
          "A cautious definition can nevertheless be specific. In this scene, the précis is a user-requested, time-bounded, multimedia research summary about the Panther Moderns, assembled through a Hosaka from libraries, journals, and news services before the Sense/Net operation. It informs Case but does not replace his judgment; it includes public analysis but not proven secret intelligence; and it demonstrates sophisticated automation without establishing an autonomous AI. Everything beyond those points should be labeled analogy, historical context, adaptation design, or inference rather than hidden canon.",
        ],
      },
    ],
    related: [
      "hosaka-computers",
      "panther-moderns",
      "mimetic-polycarbon-suit",
      "chapter-04",
      "memory-lane",
      "microsofts",
      "sense-net",
      "henry-dorsett-case",
    ],
    tags: [
      "précis",
      "Hosaka",
      "Panther Moderns",
      "multimedia",
      "information retrieval",
      "automated summary",
      "media analysis",
      "Chapter 4",
    ],
    sourceKeys: [
      "novel",
      "openfiction-chapters",
      "gmu-notes",
      "merriam-webster-precis",
      "chm-slide-logic",
      "william-gibson-wiki-hosaka",
      "reddit-discussions",
    ],
  },
];
