import type { WikiArticle } from "./types";

export const bridgeArticles: WikiArticle[] = [
  {
    slug: "body-modification-razorgirl",
    title: "Body modification and the razorgirl",
    category: "Technology",
    canon: "Critical interpretation",
    spoiler: "Moderate",
    description: "A reader’s map of surgical fashion, workplace modification, black-market medicine, and the razorgirl as both profession and visual type.",
    intro: [
      "Neuromancer treats bodily alteration as ordinary infrastructure. Eyes, nerves, livers, reflexes, sockets, razors, and recorded sensorium are repaired or redesigned according to work, money, risk, and desire.",
      "The razorgirl condenses that economy into a memorable figure: a street mercenary whose enhanced body is weapon, interface, advertisement, and archive of injury. Molly is the novel’s central example, but her specific choices should not be mistaken for a universal technical standard.",
    ],
    keyFacts: [
      { label: "Central example", value: "Molly" },
      { label: "Visible modifications", value: "Mirrored lenses and retractable blades" },
      { label: "Medical center", value: "Chiba’s clinic economy" },
      { label: "Narrative contrast", value: "Case’s repaired nervous system" },
      { label: "Critical question", value: "Agency within commodified bodies" },
    ],
    sections: [
      {
        id: "a-market-in-bodies",
        heading: "A market in bodies",
        body: [
          "Chiba’s medical underground can regrow tissue, alter organs, install interfaces, and maintain specialized augmentations. The same capabilities that restore Case also let employers use medicine as leverage. Technology is neither automatically liberating nor inherently corrupt; access and control decide what it does to a person.",
          "Elsewhere, cloning, cryogenic succession, projection implants, and skill chips show modification at several scales. Gibson rarely pauses to give specifications. Social use—who pays, who profits, who is exposed to pain—carries more meaning than engineering detail.",
        ],
      },
      {
        id: "molly-as-razorgirl",
        heading: "Molly as razorgirl",
        body: [
          "Molly’s sealed mirrored lenses, fingertip blades, reflexes, and simstim link make her exceptionally effective at physical intrusion. They also make privacy complicated: Case can share her sensorium during dangerous work while remaining unable to access her inner life.",
          "Her augmentations require care and can be damaged. The novel repeatedly returns the apparently optimized body to fatigue, pain, memory, and economic history, preventing the razorgirl from becoming a frictionless superhero type.",
        ],
      },
      {
        id: "agency-and-exploitation",
        heading: "Agency and exploitation",
        body: [
          "Molly chose and uses many of her modifications, yet the labor that financed them exposed her to profound exploitation. That tension drives critical disagreement: she can be read as a powerful cyborg professional, a noir figure shaped for a male gaze, or both at once.",
          "The strongest interpretation keeps the contradiction visible. Bodily agency in Neuromancer is real but never outside markets, employers, gendered violence, and the need to survive.",
        ],
      },
      {
        id: "afterlives-of-the-type",
        heading: "Afterlives of the type",
        body: [
          "Later cyberpunk repeatedly borrows mirrored eyes, hidden blades, and the enhanced street operative. Those descendants can document Molly’s cultural influence, but their costumes and capabilities do not retroactively define what Gibson put on the page.",
        ],
      },
    ],
    related: ["molly", "molly-augmentations", "chiba-medical-underground", "meat-puppet-cut-out", "body-as-commodity", "gender-sexuality-power"],
    tags: ["body modification", "razorgirl", "cyborg", "Molly", "medicine", "labor"],
    sourceKeys: ["novel", "academic-criticism", "gmu-notes", "reddit-discussions"],
    priorityResearch: true,
  },
  {
    slug: "straylight-run",
    title: "The Straylight run",
    category: "Chapter guide",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The final operation as a coordinated system: Molly inside the villa, Case and Dixie in the matrix, Maelcum in physical support, and an AI managing the timing.",
    intro: [
      "The “run” is not one breach. It is a linked operation across Freeside, the Villa Straylight interior, a Zion tug, the cyberspace deck, the Kuang icebreaker, and the terminal holding the Tessier-Ashpool lock.",
      "Understanding it requires tracking where each participant is, which channel Case is using, and what Wintermute cannot do for itself. The operation succeeds only when technical intrusion, bodily movement, and a spoken human action coincide.",
    ],
    keyFacts: [
      { label: "Primary target", value: "The Straylight central terminal" },
      { label: "Matrix tool", value: "Kuang Grade Mark Eleven" },
      { label: "Physical infiltrator", value: "Molly" },
      { label: "Console team", value: "Case and Dixie Flatline" },
      { label: "Physical support", value: "Maelcum" },
      { label: "Coordinator", value: "Wintermute" },
    ],
    sections: [
      {
        id: "the-plan",
        heading: "The plan",
        body: [
          "Wintermute assembles specialists who can act in domains closed to it. Molly can penetrate the villa; Case and Dixie can drive Kuang through the matrix; Riviera can gain access through performance and betrayal; Maelcum and the Zion cluster supply orbital movement outside Tessier-Ashpool control.",
          "The plan remains compartmentalized. Crew members receive enough information to perform but not enough to judge the whole design, preserving Wintermute’s leverage and creating multiple points at which personal motives can disrupt timing.",
        ],
      },
      {
        id: "three-linked-battles",
        heading: "Three linked battles",
        body: [
          "Inside Straylight, Molly encounters the family’s human defenses and the consequences of Riviera’s betrayal. In cyberspace, Kuang evolves into the vehicle that carries Case and Dixie toward the locked cores. Outside both, Armitage collapses into Corto and destabilizes the physical platform.",
          "Case eventually leaves the console with Maelcum to enter Straylight. That movement reverses his preferred hierarchy: the cowboy who considers the body “meat” must depend on his body, another person, and crude physical force to return to the abstract fight.",
        ],
      },
      {
        id: "neuromancers-interruption",
        heading: "Neuromancer’s interruption",
        body: [
          "Neuromancer pulls Case into the beach construct and offers a preserved life with Linda. The interruption is strategic and intimate: it attacks the runner through grief and desire rather than through lethal ICE alone. Maelcum’s revival of Case becomes part of the matrix battle even though it occurs through physical care.",
        ],
      },
      {
        id: "the-lock-and-the-code",
        heading: "The lock and the code",
        body: [
          "Kuang’s breach is necessary but insufficient. At the physical terminal, 3Jane supplies and speaks the code while Molly, Case, Maelcum, Hideo, and Riviera’s actions converge. The outcome therefore resists a simple story in which a hacker wins by software skill alone.",
          "What emerges from the merger exceeds Wintermute’s previous personality and Neuromancer’s archive. The run ends the crew’s contract, but it opens the trilogy’s larger uncertainty about distributed intelligence and contact beyond Earth.",
        ],
      },
    ],
    related: ["chapter-14", "chapter-20", "chapter-21", "chapter-22", "chapter-23", "villa-straylight", "kuang-grade-mark-eleven"],
    tags: ["Straylight run", "heist", "ending", "Kuang", "AI merger", "timeline"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
    priorityResearch: true,
  },
];
