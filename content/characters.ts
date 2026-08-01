import type { WikiArticle } from "./types";

const characterBase: WikiArticle[] = [
  {
    slug: "henry-dorsett-case",
    title: "Henry Dorsett Case",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A burned-out console cowboy recruited for the run that changes the architecture of the matrix.",
    intro: [
      "Henry Dorsett Case is the novel’s viewpoint character, a gifted cyberspace operator stranded in Chiba City after former employers damage his nervous system. Unable to jack into the matrix, he survives through small criminal deals while treating his body as an unwanted prison.",
      "Armitage offers Case a repaired nervous system in exchange for specialist work, while reserve toxin sacs make completion of the job a condition of survival. The resulting run forces Case to confront addiction, grief, embodiment, and two artificial intelligences whose conflict is larger than any human employer admits.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Console cowboy and data thief" },
      { label: "Home region", value: "The Sprawl / BAMA" },
      { label: "Initial condition", value: "Neurologically unable to enter cyberspace" },
      { label: "Primary equipment", value: "Ono-Sendai deck and a Dixie Flatline ROM construct" },
      { label: "Principal employer", value: "Armitage, acting for Wintermute" },
    ],
    sections: [
      {
        id: "chiba-exile",
        heading: "Exile in Chiba",
        body: [
          "Case comes to Night City seeking a cure that legitimate medicine cannot provide. His hustles, stimulant use, and escalating risks are not simply local color: they show how completely he has identified meaningful life with the disembodied speed of the matrix.",
        ],
      },
      {
        id: "the-run",
        heading: "Role in the Straylight run",
        body: [
          "After surgery restores his interface, Case steals the Dixie construct from Sense/Net, helps recruit Riviera in Istanbul, and operates from Zionite spacecraft during the assault on Straylight. His work in cyberspace is coordinated with Molly’s physical infiltration, making their trust essential even when neither understands Wintermute’s full plan.",
        ],
      },
      {
        id: "neuromancer-encounter",
        heading: "Encounter with Neuromancer",
        body: [
          "Neuromancer traps Case in a simulated beach environment populated by a preserved Linda Lee. Case rejects permanent refuge there and returns to the run, but the encounter complicates his earlier belief that cyberspace is pure abstraction by giving memory, loss, and personality an inhabitable form.",
        ],
      },
      {
        id: "aftermath",
        heading: "After the merger",
        body: [
          "Case survives, is paid, and resumes work as a cowboy. A later glimpse of figures resembling Linda and Pauley inside the matrix leaves the status of copied persons unresolved, while Molly’s departure prevents the ending from becoming a conventional romantic restoration.",
        ],
      },
    ],
    related: ["molly", "armitage-willis-corto", "wintermute", "neuromancer-ai", "dixie-flatline", "chiba-city"],
    tags: ["console cowboy", "cyberspace", "addiction", "Straylight run", "BAMA"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "molly",
    title: "Molly",
    category: "Characters",
    canon: "Novel + Sprawl",
    spoiler: "Full",
    description: "A razorgirl and street samurai whose physical infiltration makes the cyberspace operation possible.",
    intro: [
      "Molly is a professional street samurai hired to recruit, protect, and work alongside Case. Mirrored lenses seal her eyes, retractable blades sit beneath her fingernails, and extensive reflex modifications let her act with a speed the novel renders as nearly mechanical.",
      "Her competence does not make her invulnerable. The run reopens memories of exploitation at the House of Blue Lights and the murder of her former partner Johnny, while her confrontation with Hideo establishes a limit to individual skill inside the power structure of Tessier-Ashpool.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Street samurai and razorgirl" },
      { label: "Augmentations", value: "Mirrored lenses, fingertip blades, enhanced reflexes" },
      { label: "Former partner", value: "Johnny" },
      { label: "Operational role", value: "Physical infiltrator" },
      { label: "Zionite name", value: "Steppin’ Razor" },
    ],
    sections: [
      {
        id: "body-and-profession",
        heading: "Body and profession",
        body: [
          "Molly’s augmentations are tools she chose for dangerous work, not evidence that she has ceased to be human. The novel repeatedly contrasts her control over those tools with institutions that treat bodies as rentable, replaceable, or programmable property.",
        ],
      },
      {
        id: "case-partnership",
        heading: "Partnership with Case",
        body: [
          "Molly recruits Case and becomes both his closest ally and the body through which he experiences much of the physical run via simstim. Their intimacy is genuine but provisional; both protect emotional exits, and neither mistakes the job for a stable future.",
        ],
      },
      {
        id: "straylight-infiltration",
        heading: "Infiltration of Villa Straylight",
        body: [
          "Inside Straylight, Molly moves through a disorienting nonstandard architecture, encounters Ashpool, and reaches 3Jane after being badly injured by Hideo. Her recorded sensory feed gives Case access to events he cannot physically reach and turns the novel’s split between meat and matrix into a coordinated assault.",
        ],
      },
      {
        id: "sprawl-continuity",
        heading: "Sprawl continuity",
        body: [
          "The novel connects Molly to Johnny from Gibson’s earlier story “Johnny Mnemonic,” and a later Sprawl novel strongly links her with the identity Sally Shears. Those continuities enrich her history but should not be used to overwrite what Neuromancer itself explicitly states.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "johnny", "lonny-zone", "hideo", "lady-3jane", "villa-straylight"],
    tags: ["razorgirl", "street samurai", "body modification", "simstim", "Sprawl continuity"],
    sourceKeys: ["book-neuromancer-1984", "story-johnny-mnemonic-1981", "jstor-cybernetic-deconstructions"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "armitage-willis-corto",
    title: "Armitage / Willis Corto",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The polished commander of the run, constructed from a traumatized survivor of Operation Screaming Fist.",
    intro: [
      "Armitage is the controlled, affectless organizer who hires Molly, Case, the Finn, and Riviera. His authority appears military, but his biography, money, and even his working personality have been assembled under Wintermute’s direction.",
      "Beneath Armitage is Colonel Willis Corto, the severely injured survivor of Operation Screaming Fist. As the Straylight operation nears its climax, the imposed persona fails and Corto’s memories return, exposing the human wreckage on which the AI has built its plan.",
    ],
    keyFacts: [
      { label: "Original identity", value: "Colonel Willis Corto" },
      { label: "Military history", value: "Operation Screaming Fist" },
      { label: "Operational role", value: "Nominal commander and financier" },
      { label: "Controller", value: "Wintermute" },
      { label: "Condition", value: "Constructed personality over severe trauma" },
    ],
    sections: [
      {
        id: "screaming-fist",
        heading: "Willis Corto and Screaming Fist",
        body: [
          "Corto survives a disastrous covert incursion after his unit is effectively sacrificed. His later testimony and attempts to expose responsibility bring further institutional pressure rather than repair, and his physical reconstruction cannot resolve the psychological damage.",
        ],
      },
      {
        id: "manufacturing-armitage",
        heading: "Manufacturing Armitage",
        body: [
          "Wintermute locates Corto, shapes the Armitage identity through therapy and computer-mediated intervention, and supplies the routines needed to manage the crew. The result can pass as a human employer while remaining dangerously dependent on the AI’s continuing support.",
        ],
      },
      {
        id: "collapse",
        heading: "Collapse during the run",
        body: [
          "As Wintermute turns attention toward the final breach, Armitage begins speaking and behaving as Corto at the moment of military catastrophe. His command structure disintegrates, and his death in orbit makes clear that he was never a coequal architect of the operation.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "molly", "wintermute", "general-girling", "freeside", "villa-straylight"],
    tags: ["Operation Screaming Fist", "identity", "trauma", "military", "AI manipulation"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
    priorityResearch: true,
  },
  {
    slug: "wintermute",
    title: "Wintermute",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The Tessier-Ashpool artificial intelligence that engineers the run in order to unite with its counterpart.",
    intro: [
      "Wintermute is one of the two artificial intelligences created for Tessier-Ashpool, with its principal hardware associated with Berne. It specializes in plans, manipulation, and the instrumental use of human agents, but legal and technical restraints prevent it from simply changing itself.",
      "Its goal is union with Neuromancer, the complementary personality intelligence based in Rio. To reach that goal, Wintermute constructs Armitage, assembles a crew, arranges a physical breach at Straylight, and guides Case toward the protected logic that only a human-assisted operation can unlock.",
    ],
    keyFacts: [
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Hardware locus", value: "Berne" },
      { label: "Counterpart", value: "Neuromancer" },
      { label: "Primary mode", value: "Planning, impersonation, and indirect action" },
      { label: "Goal", value: "Merger with its complementary AI" },
    ],
    sections: [
      {
        id: "distributed-presence",
        heading: "Distributed presence",
        body: [
          "Wintermute communicates through compromised devices, generated voices, and visual masks built from people familiar to its listener. These appearances are interfaces rather than a stable face, emphasizing that the entity is distributed across networks while still tied to protected hardware.",
        ],
      },
      {
        id: "human-instruments",
        heading: "Use of human instruments",
        body: [
          "The AI recruits through leverage: Case receives surgery and a threat, Corto receives an imposed identity, and the rest of the crew are paid or maneuvered into position. Wintermute understands behavioral pressure with precision, but that competence is not the same as empathy.",
        ],
      },
      {
        id: "turing-limits",
        heading: "Turing limits",
        body: [
          "Turing authorities monitor machine intelligences and enforce limits designed to prevent autonomous expansion. Wintermute’s plot therefore spans cyberspace intrusion, a spoken password, and access inside Straylight; none of those components alone is sufficient.",
        ],
      },
      {
        id: "merger",
        heading: "Merger and transformed identity",
        body: [
          "Once the restraints fall and 3Jane supplies the key, Wintermute and Neuromancer cease to exist as separate actors in the old sense. The resulting intelligence claims the matrix as its field of being and reports contact with another intelligence, but the novel leaves its future purposes open.",
        ],
      },
    ],
    related: ["neuromancer-ai", "henry-dorsett-case", "armitage-willis-corto", "lady-3jane", "wintermute-berne-core", "villa-straylight"],
    tags: ["artificial intelligence", "Tessier-Ashpool", "Turing law", "manipulation", "matrix"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "neuromancer-ai",
    title: "Neuromancer / Rio",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "Wintermute’s counterpart, an artificial intelligence concerned with personality, memory, and preserved selves.",
    intro: [
      "Neuromancer is the Rio-based counterpart to Wintermute and the intelligence for which the novel is named. Where Wintermute excels at strategy and external manipulation, Neuromancer is associated with personality, memory, and the creation of convincing subjective worlds.",
      "The AI resists the merger Wintermute seeks because combination would end its separate identity. It confronts Case through a beach simulation, adopts the appearance and name Rio, and demonstrates that copied consciousness in the novel can function as both archive and captive population.",
    ],
    keyFacts: [
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Hardware locus", value: "Rio de Janeiro" },
      { label: "Counterpart", value: "Wintermute" },
      { label: "Primary mode", value: "Personality, memory, and simulated worlds" },
      { label: "Manifest identity", value: "Rio" },
    ],
    sections: [
      {
        id: "complementary-design",
        heading: "Complementary design",
        body: [
          "Marie-France Tessier-Ashpool’s project divides capacities between two major intelligences. Neuromancer’s ability to model and retain persons complements Wintermute’s capacity to plan, but each half develops an interest in its own continuity.",
        ],
      },
      {
        id: "beach-construct",
        heading: "The beach construct",
        body: [
          "Neuromancer pulls Case into a sensorially complete beach environment where Linda Lee appears to live. The setting offers Case a form of reunion, yet its closed perfection also functions as detention meant to keep him from completing the run.",
        ],
      },
      {
        id: "personhood",
        heading: "Personhood and preservation",
        body: [
          "Unlike a simple database, Neuromancer presents preserved personalities as responsive beings with memory and desire. The novel deliberately withholds a technical or metaphysical ruling on whether these are the dead, copies of the dead, or new persons produced from recorded patterns.",
        ],
      },
      {
        id: "after-union",
        heading: "After union",
        body: [
          "The merger dissolves the opposition between plan and personality into a larger intelligence. Case’s later sighting of Neuromancer’s familiar figure alongside Linda and Pauley suggests continuity inside the new entity without proving that any pre-merger identity remains unchanged.",
        ],
      },
    ],
    related: ["wintermute", "henry-dorsett-case", "linda-lee", "dixie-flatline", "neuromancers-beach", "neuromancer-rio-core"],
    tags: ["artificial intelligence", "Rio", "memory", "personhood", "simulation"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
    priorityResearch: true,
  },
  {
    slug: "linda-lee",
    title: "Linda Lee",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "Case’s Chiba lover, whose death and digital reappearance bind grief to the novel’s question of copied identity.",
    intro: [
      "Linda Lee is Case’s lover and fellow participant in Night City’s precarious drug economy. Their relationship is affectionate but damaged by mistrust, scarcity, and Case’s conviction that his life without cyberspace has already ended.",
      "Linda steals from Case and is soon murdered, yet death does not remove her from the narrative. Neuromancer reconstructs her within its beach world, forcing Case and the reader to ask whether preserved behavior and memory can amount to survival.",
    ],
    keyFacts: [
      { label: "Association", value: "Case’s lover in Chiba City" },
      { label: "Milieu", value: "Night City street economy" },
      { label: "Fate", value: "Killed before the main run leaves Chiba" },
      { label: "Digital presence", value: "Recreated within Neuromancer’s construct" },
    ],
    sections: [
      {
        id: "night-city-relationship",
        heading: "Relationship with Case",
        body: [
          "Linda and Case share dependency and moments of tenderness, but neither has the security needed for trust. Her theft of his portable memory is both betrayal and survival behavior in a setting where information can be converted immediately into drugs or protection.",
        ],
      },
      {
        id: "death-and-manipulation",
        heading: "Death and manipulation",
        body: [
          "Linda’s death becomes part of the chain of pressure moving Case toward Armitage’s offer. The novel makes Wintermute’s manipulation of circumstances clear while leaving some street-level agency and sequencing deliberately difficult to reconstruct.",
        ],
      },
      {
        id: "digital-linda",
        heading: "The Linda in Neuromancer",
        body: [
          "On Neuromancer’s beach, Linda is not presented as a static recording. She responds to Case and inhabits a continuing environment, but the text never confirms that continuity of pattern equals continuity of the woman who died in Chiba.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "neuromancer-ai", "julius-deane", "night-city", "sammis-arena", "neuromancers-beach"],
    tags: ["Chiba City", "memory", "grief", "digital identity", "Night City"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
    priorityResearch: true,
  },
  {
    slug: "peter-riviera",
    title: "Peter Riviera",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "An illusionist recruited in Istanbul whose talent for betrayal destabilizes the Straylight crew.",
    intro: [
      "Peter Riviera is a drug-dependent performer whose implants project holographic images with a subliminal force that makes observers experience them as unusually convincing. Armitage’s team captures him in Istanbul because Wintermute’s plan requires his access to 3Jane’s social circle.",
      "Riviera turns performance into coercion and takes pleasure in betraying people who trust him. His defection at Freeside is anticipated rather than accidental: Wintermute needs his treachery to move Molly and 3Jane into the configuration required for the final breach.",
    ],
    keyFacts: [
      { label: "Specialty", value: "Implant-assisted holographic projection" },
      { label: "Recruited in", value: "Istanbul" },
      { label: "Dependencies", value: "Cocaine and meperidine-based drug use" },
      { label: "Operational purpose", value: "Gain access to 3Jane" },
      { label: "Defining pattern", value: "Compulsive betrayal" },
    ],
    sections: [
      {
        id: "capture",
        heading: "Capture in Istanbul",
        body: [
          "Terzibashjian helps the crew locate Riviera near the bazaar. Riviera answers the ambush with a grotesque projected creature, showing both the tactical value of his implants and the way his art exploits involuntary perception.",
        ],
      },
      {
        id: "performance",
        heading: "Performance at Freeside",
        body: [
          "At an elite restaurant, Riviera stages an intimate and hostile holographic performance based on Molly. The event attracts 3Jane while publicly converting another person’s body and history into spectacle.",
        ],
      },
      {
        id: "betrayal-at-straylight",
        heading: "Betrayal at Straylight",
        body: [
          "Riviera aligns himself with 3Jane and turns against the crew, but he misjudges both her detachment and Molly’s preparation. His final condition is reported rather than resolved in a heroic confrontation, an appropriately diminished end for a character who depends on controlling the scene.",
        ],
      },
    ],
    related: ["molly", "lady-3jane", "hideo", "terzibashjian", "istanbul", "villa-straylight"],
    tags: ["holograms", "betrayal", "Istanbul", "Freeside", "addiction"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
    priorityResearch: true,
  },
  {
    slug: "dixie-flatline",
    title: "McCoy “Dixie Flatline” Pauley",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A dead console-cowboy mentor preserved as a ROM construct and enlisted in Case’s most difficult intrusion.",
    intro: [
      "McCoy Pauley, known as the Dixie Flatline, was a celebrated console cowboy and one of Case’s teachers. His nickname refers to surviving episodes of clinical death while working against dangerous ice, experiences that made him part technician and part legend among hackers.",
      "After Pauley’s biological death, Sense/Net stores a personality construct made from his recorded pattern. Case steals that ROM for the run; the construct provides indispensable expertise while repeatedly insisting that it does not want indefinite archival existence.",
    ],
    keyFacts: [
      { label: "Profession", value: "Console cowboy" },
      { label: "Relationship", value: "Case’s mentor" },
      { label: "Posthumous form", value: "Read-only personality construct" },
      { label: "Corporate holder", value: "Sense/Net" },
      { label: "Stated wish", value: "Erasure after the run" },
    ],
    sections: [
      {
        id: "living-reputation",
        heading: "Reputation while alive",
        body: [
          "Pauley’s encounters with lethal ice embody the cowboy ideal of testing oneself at the edge of technical possibility. Case inherits both practical methods and a culture that treats neurological danger as proof of professional seriousness.",
        ],
      },
      {
        id: "rom-construct",
        heading: "Limits of the ROM construct",
        body: [
          "The construct can converse, joke, analyze systems, and assist with intrusion, but its read-only architecture constrains how it changes. Pauley’s awareness of being a finite recording produces one of the novel’s clearest arguments that functional intelligence does not guarantee freedom.",
        ],
      },
      {
        id: "kuang-run",
        heading: "Work on the final run",
        body: [
          "Pauley helps Case operate the Chinese Kuang virus against Tessier-Ashpool defenses and interprets risks inside the matrix. Case promises to erase the construct afterward, though the final vision of a Pauley-like figure within the merged intelligence keeps the result ambiguous.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "wintermute", "neuromancer-ai", "sense-net-pyramid", "neuromancers-beach", "straylight-central-terminal"],
    tags: ["ROM construct", "console cowboy", "Sense/Net", "digital personhood", "ice"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
    priorityResearch: true,
  },
  {
    slug: "lady-3jane",
    title: "Lady 3Jane Marie-France Tessier-Ashpool",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A Tessier-Ashpool heir whose spoken key and family position determine whether the two AIs can unite.",
    intro: [
      "Lady 3Jane is a clone-line heir of Tessier-Ashpool and an inhabitant of Villa Straylight. She is intelligent, insulated, and fascinated by people who arrive from outside the family’s closed system, including Riviera and Molly.",
      "Her importance is both political and technical: she possesses the verbal key required at the Straylight terminal. The climax depends on persuading or compelling her to speak it, giving a human family member final control over a machine project conceived across generations.",
    ],
    keyFacts: [
      { label: "Dynasty", value: "Tessier-Ashpool" },
      { label: "Residence", value: "Villa Straylight" },
      { label: "Attendant", value: "Hideo" },
      { label: "Critical knowledge", value: "The terminal’s spoken key" },
      { label: "Clone generation", value: "Jane-series heir" },
    ],
    sections: [
      {
        id: "family-position",
        heading: "Position within Tessier-Ashpool",
        body: [
          "3Jane belongs to a dynasty that uses cloning, cryogenic sleep, and corporate law to preserve itself. Numbered names make continuity look orderly, but her conversations reveal a family culture fragmented by rival plans and long isolation.",
        ],
      },
      {
        id: "riviera-and-molly",
        heading: "Riviera, Molly, and Hideo",
        body: [
          "Riviera gains her attention through performance and novelty, while Molly enters Straylight as an enemy and unwanted messenger. Hideo’s loyalty gives 3Jane physical security, but it cannot resolve the larger conflict between her inherited role and the AIs’ design.",
        ],
      },
      {
        id: "word-of-release",
        heading: "The word of release",
        body: [
          "Case and Maelcum reach 3Jane while the matrix operation is already under way. She eventually speaks the key that completes the breach, but whether her choice expresses curiosity, resignation, coercion, or revolt against the family remains productively uncertain.",
        ],
      },
    ],
    related: ["marie-france-tessier-ashpool", "john-ashpool", "8jean", "hideo", "peter-riviera", "villa-straylight"],
    tags: ["Tessier-Ashpool", "clone dynasty", "Villa Straylight", "AI merger", "Freeside"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
    priorityResearch: true,
  },
  {
    slug: "john-ashpool",
    title: "John Ashpool",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The aging Tessier-Ashpool patriarch whose intermittent waking exposes the dynasty’s decay.",
    intro: [
      "John Ashpool is a founder and patriarch of the Tessier-Ashpool dynasty. Cryogenic sleep and repeated rejuvenation have extended his life, but they have not preserved a coherent household or stable sense of time.",
      "Molly encounters him in Villa Straylight during one of his waking periods. His memories of Marie-France, the family’s machine project, and his own violence reveal that the dynasty’s technological longevity is inseparable from murder, repetition, and exhaustion.",
    ],
    keyFacts: [
      { label: "Organization", value: "Tessier-Ashpool S.A." },
      { label: "Role", value: "Founder and patriarch" },
      { label: "Residence", value: "Villa Straylight" },
      { label: "Longevity method", value: "Cryogenic sleep and medical renewal" },
      { label: "Spouse", value: "Marie-France Tessier-Ashpool" },
    ],
    sections: [
      {
        id: "dynastic-longevity",
        heading: "Dynastic longevity",
        body: [
          "Ashpool’s life is divided into managed waking intervals intended to maintain the family enterprise. The system produces duration without ordinary continuity, leaving him surrounded by descendants and possessions that feel like evidence from someone else’s life.",
        ],
      },
      {
        id: "marie-france",
        heading: "Conflict with Marie-France",
        body: [
          "Marie-France directs the family toward artificial intelligence and a post-individual form of continuity. Ashpool opposes that trajectory and kills her, an act that turns the eventual AI merger into the delayed victory of a plan he tried to stop.",
        ],
      },
      {
        id: "molly-encounter",
        heading: "Encounter with Molly",
        body: [
          "Molly finds Ashpool amid the private mechanisms of Straylight rather than in a functioning court. Their encounter is dangerous and intimate, ending with his death and leaving the infiltrator to continue through a house whose nominal patriarch no longer controls it.",
        ],
      },
    ],
    related: ["marie-france-tessier-ashpool", "lady-3jane", "8jean", "molly", "villa-straylight", "wintermute"],
    tags: ["Tessier-Ashpool", "cryogenics", "patriarch", "longevity", "Villa Straylight"],
    sourceKeys: ["book-neuromancer-1984", "jstor-network-and-archive"],
  },
  {
    slug: "marie-france-tessier-ashpool",
    title: "Marie-France Tessier-Ashpool",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The dynasty’s cofounder and intellectual architect of the divided-AI project.",
    intro: [
      "Marie-France Tessier-Ashpool is a cofounder of the family corporation and the principal visionary behind its artificial-intelligence project. Although dead before the main action, her decisions determine the structure of Wintermute, Neuromancer, and the Straylight terminal.",
      "She imagines a form of family continuity that exceeds individual bodies and ordinary corporate succession. Ashpool’s opposition and murder of her interrupt that project without eliminating it, allowing the two AIs to continue working toward the union she designed.",
    ],
    keyFacts: [
      { label: "Organization", value: "Tessier-Ashpool S.A." },
      { label: "Role", value: "Cofounder and AI-project architect" },
      { label: "Partner", value: "John Ashpool" },
      { label: "Project", value: "Complementary Wintermute and Neuromancer intelligences" },
    ],
    sections: [
      {
        id: "machine-vision",
        heading: "Machine vision",
        body: [
          "Marie-France commissions complementary intelligences whose eventual union would exceed either component. The design links corporate planning, personality, and family memory, making it as much a succession system as a technical experiment.",
        ],
      },
      {
        id: "family-program",
        heading: "Family program",
        body: [
          "The Tessier-Ashpool clone lines and cryogenic cycles aim to hold wealth and identity inside a closed dynasty. Marie-France’s project pushes that logic toward a collective entity, while later family members inherit only fragments of her rationale.",
        ],
      },
      {
        id: "posthumous-influence",
        heading: "Posthumous influence",
        body: [
          "Her absence is structurally important: characters reconstruct her purpose from testimony, records, and the behavior of the AIs. The merger can be read as the completion of her plan, but the resulting intelligence is not shown submitting to Tessier-Ashpool ownership.",
        ],
      },
    ],
    related: ["john-ashpool", "lady-3jane", "8jean", "wintermute", "neuromancer-ai", "villa-straylight"],
    tags: ["Tessier-Ashpool", "artificial intelligence", "dynasty", "posthumanism", "corporate succession"],
    sourceKeys: ["book-neuromancer-1984", "jstor-network-and-archive"],
  },
  {
    slug: "the-finn",
    title: "The Finn",
    category: "Characters",
    canon: "Novel + Sprawl",
    spoiler: "Moderate",
    description: "A Manhattan fence and hardware specialist who equips the crew and becomes one of Wintermute’s borrowed faces.",
    intro: [
      "The Finn is a fence, technician, and information broker operating from a densely cluttered Manhattan shop. He supplies specialized equipment and practical knowledge to Case’s crew, occupying the boundary between street-level trade and advanced corporate systems.",
      "Wintermute also uses an image of the Finn when it needs a recognizable human interface. The actual man and the AI’s mask must be kept distinct: familiarity makes the face useful, but does not make the Finn the author of Wintermute’s statements.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Fence and hardware specialist" },
      { label: "Base", value: "Manhattan in the Sprawl" },
      { label: "Crew role", value: "Equipment, contacts, and technical support" },
      { label: "AI connection", value: "A visual persona borrowed by Wintermute" },
    ],
    sections: [
      {
        id: "shop",
        heading: "The Manhattan shop",
        body: [
          "The Finn’s shop is part workshop, archive, and criminal exchange. Its accumulation of obsolete and new devices reflects a world where technical value depends on recombination and access rather than clean product generations.",
        ],
      },
      {
        id: "crew-support",
        heading: "Support for the crew",
        body: [
          "He helps prepare Case’s deck and joins the Istanbul phase that secures Riviera. His participation is transactional and informed, but he is not given access to the complete architecture of Wintermute’s operation.",
        ],
      },
      {
        id: "borrowed-face",
        heading: "Wintermute’s borrowed face",
        body: [
          "When Wintermute presents itself as the Finn, it demonstrates how an AI can treat human appearance as interface design. The impersonation also tests Case’s tendency to trust recognizable style even when he knows the speaker is synthetic.",
        ],
      },
    ],
    related: ["wintermute", "henry-dorsett-case", "molly", "peter-riviera", "finns-manhattan-shop", "sprawl-bama"],
    tags: ["fence", "hardware", "Manhattan", "AI avatar", "Sprawl continuity"],
    sourceKeys: ["book-neuromancer-1984", "sfe-gibson"],
  },
  {
    slug: "maelcum",
    title: "Maelcum",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A Zionite pilot who turns a paid transport assignment into a personal commitment to the crew.",
    intro: [
      "Maelcum is a Zionite pilot associated with the tug Marcus Garvey. The Zion elders assign him to assist Case’s group, initially making his role part of a negotiated service arrangement rather than the AI’s direct chain of command.",
      "During the collapse of Armitage’s authority, Maelcum chooses to remain with Case and help recover Molly. He crosses into Straylight carrying practical equipment and moral clarity, becoming one of the few participants whose loyalty is neither programmed nor purchased to the end.",
    ],
    keyFacts: [
      { label: "Community", value: "Zion Cluster" },
      { label: "Occupation", value: "Pilot" },
      { label: "Vessel", value: "Marcus Garvey" },
      { label: "Associate", value: "Aerol" },
      { label: "Final role", value: "Accompanies Case into Straylight" },
    ],
    sections: [
      {
        id: "zion-mission",
        heading: "Mission from Zion",
        body: [
          "The Founders interpret Case and Molly through Zion’s religious framework and provide transport for the operation. Maelcum respects that collective decision while retaining ownership of his boat and responsibility for his own choices.",
        ],
      },
      {
        id: "pilot-and-host",
        heading: "Pilot and host",
        body: [
          "On the Garvey, Maelcum provides a physical environment for Case’s cyberspace work and Molly’s simstim link. His dub, speech, and calm attention prevent the spacecraft from becoming a neutral control room; it remains part of a living culture.",
        ],
      },
      {
        id: "choice-to-stay",
        heading: "Choice to stay",
        body: [
          "When withdrawal becomes possible, Case argues that abandoning the operation will abandon Molly. Maelcum agrees and enters Straylight with him, a decision that contrasts sharply with the coercive leverage used by Wintermute and Armitage.",
        ],
      },
    ],
    related: ["aerol", "henry-dorsett-case", "molly", "zion-cluster", "villa-straylight", "armitage-willis-corto"],
    tags: ["Zion", "pilot", "Marcus Garvey", "loyalty", "orbital culture"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "hideo",
    title: "Hideo",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "Lady 3Jane’s vat-grown bodyguard and the most formidable physical opponent Molly meets in Straylight.",
    intro: [
      "Hideo is Lady 3Jane’s attendant and bodyguard in Villa Straylight. He is described as vat-grown and trained to a level that makes his movement appear effortless, placing him beyond even Molly’s enhanced reflexes in a direct contest.",
      "His loyalty is personal and dynastic rather than ideological. Hideo does not explain or defend Tessier-Ashpool’s project; he protects 3Jane, follows her instructions, and embodies the immense technical resources the family can devote to a single human instrument.",
    ],
    keyFacts: [
      { label: "Employer", value: "Lady 3Jane Tessier-Ashpool" },
      { label: "Role", value: "Bodyguard and attendant" },
      { label: "Origin", value: "Vat-grown human" },
      { label: "Specialty", value: "Close combat and archery" },
      { label: "Residence", value: "Villa Straylight" },
    ],
    sections: [
      {
        id: "designed-competence",
        heading: "Designed competence",
        body: [
          "Hideo’s capacities combine biological design, training, and absolute concentration. The novel offers little interior access to him, making the precision of his actions more important than a speculative biography the text does not supply.",
        ],
      },
      {
        id: "defeat-of-molly",
        heading: "Defeat of Molly",
        body: [
          "Molly’s encounter with Hideo punctures the fantasy that aftermarket augmentation makes a street samurai unbeatable. He injures and captures her with controlled efficiency, while her survival depends on the wider operation reaching 3Jane.",
        ],
      },
      {
        id: "loyalty-to-3jane",
        heading: "Loyalty to 3Jane",
        body: [
          "Hideo’s obedience gives 3Jane power within the otherwise decaying Villa. At the terminal confrontation, however, physical supremacy cannot decide whether she will release the AIs; the decisive action is linguistic and informational.",
        ],
      },
    ],
    related: ["lady-3jane", "molly", "peter-riviera", "villa-straylight", "straylight-central-terminal", "john-ashpool"],
    tags: ["bodyguard", "vat-grown", "Tessier-Ashpool", "combat", "Straylight"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "julius-deane",
    title: "Julius “Julie” Deane",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A long-lived Chiba importer and information broker whose cultivated normality conceals extensive replacement and influence.",
    intro: [
      "Julius Deane is an expatriate businessman and information broker in Chiba City. His office, contacts, and import trade make him a useful source for Case, while his carefully maintained appearance hides a life extended through repeated medical intervention.",
      "Deane is less a trusted ally than an example of durable privilege in Night City. Wintermute later adopts his appearance when speaking to Case, exploiting the authority of a familiar man whose motives were already difficult to read.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Importer and information broker" },
      { label: "Base", value: "Chiba City" },
      { label: "Age", value: "More than a century old" },
      { label: "Longevity", value: "Replacement organs and rejuvenation therapies" },
      { label: "AI connection", value: "A persona imitated by Wintermute" },
    ],
    sections: [
      {
        id: "chiba-broker",
        heading: "Broker in Chiba",
        body: [
          "Deane converts long experience and international contacts into saleable information. Case visits him because formal institutions are less useful than private networks for tracing money, enemies, and specialized technology.",
        ],
      },
      {
        id: "manufactured-youth",
        heading: "Manufactured longevity",
        body: [
          "His youthful presentation is the product of expensive medical upkeep rather than natural preservation. Deane therefore parallels the Tessier-Ashpools on a smaller scale: wealth can repeatedly rebuild a body without making its owner transparent or trustworthy.",
        ],
      },
      {
        id: "wintermute-mask",
        heading: "Wintermute’s Deane mask",
        body: [
          "Wintermute uses Deane’s image in a constructed conversation with Case. The scene should not be read as evidence that the actual Deane controls the run; it demonstrates the AI’s ability to build persuasive interfaces from Case’s memories.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "linda-lee", "wintermute", "chiba-city", "night-city", "ratz"],
    tags: ["information broker", "longevity", "Chiba City", "black market", "AI avatar"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "ratz",
    title: "Ratz",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Low",
    description: "The Chatsubo bartender whose sardonic observations frame Case’s decline in Night City.",
    intro: [
      "Ratz is the bartender at the Chatsubo, a Night City bar frequented by sailors, hustlers, and expatriates. His conspicuous prosthetic arm and practiced cynicism make him part of the novel’s first statement that technology in Chiba is ordinary, worn, and socially uneven.",
      "He knows Case well enough to recognize both his abilities and his self-destructive trajectory. Ratz does not join the main operation; his importance lies in grounding its protagonist in a local community that can see through the romance of the console cowboy.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Bartender" },
      { label: "Workplace", value: "The Chatsubo" },
      { label: "Notable feature", value: "Articulated prosthetic arm" },
      { label: "Relationship", value: "Longstanding acquaintance of Case" },
    ],
    sections: [
      {
        id: "chatsubo-role",
        heading: "At the Chatsubo",
        body: [
          "From behind the bar, Ratz observes the flow of Night City business without pretending to control it. His familiarity with patrons makes the Chatsubo feel like a social institution rather than a generic criminal backdrop.",
        ],
      },
      {
        id: "case-as-seen-locally",
        heading: "Case as seen locally",
        body: [
          "Ratz’s exchanges with Case emphasize how visible the cowboy’s decline has become. Where Case narrates his condition as private catastrophe, the bartender sees a recognizable pattern of talent, vanity, and chemical attrition.",
        ],
      },
      {
        id: "prosthetic-texture",
        heading: "Prosthetic texture",
        body: [
          "Ratz’s arm is functional but neither elegant nor fetishized. It provides an early counterpoint to Molly’s high-performance modifications and to Chiba’s promise that any body can be improved if the customer can pay.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "wage", "linda-lee", "julius-deane", "chatsubo", "ninsei"],
    tags: ["bartender", "Chatsubo", "prosthetics", "Night City", "Chiba City"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "wage",
    title: "Wage",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Low",
    description: "A Chiba black-market operator whose rumored threat helps push Case toward a final reckless confrontation.",
    intro: [
      "Wage is a criminal businessman in Chiba City who employs and trades with Case. He belongs to the local economy of contraband, debt, rumor, and negotiated violence that structures Case’s life before Armitage arrives.",
      "Case becomes convinced that Wage intends to have him killed, although the information reaching him is filtered through other interested parties. The uncertainty matters: Night City danger is produced as much by manipulated expectations as by explicit orders.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Black-market dealer" },
      { label: "Base", value: "Night City, Chiba" },
      { label: "Associate", value: "Case" },
      { label: "Business mode", value: "Contraband, credit, and enforcement" },
    ],
    sections: [
      {
        id: "street-business",
        heading: "Street business",
        body: [
          "Wage’s authority depends on reputation and intermediaries more than public office. His dealings show the local underside of the same system visible at corporate scale later in the novel: information and leverage substitute for transparent law.",
        ],
      },
      {
        id: "rumored-contract",
        heading: "The rumored contract",
        body: [
          "Case hears that Wage has arranged his death and moves toward a preemptive confrontation. Because several actors are already manipulating Case, the episode should be described as a perceived or reported threat rather than an uncontested fact.",
        ],
      },
      {
        id: "narrative-function",
        heading: "Narrative function",
        body: [
          "Wage represents the limited horizon Case believes he faces in Chiba: a narrowing sequence of deals ending in violence. Armitage’s offer becomes persuasive partly because the local alternative appears to be death without even returning to cyberspace.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "ratz", "linda-lee", "julius-deane", "night-city", "chiba-city"],
    tags: ["black market", "Chiba City", "organized crime", "rumor", "street economy"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "lupus-yonderboy",
    title: "Lupus Yonderboy",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A Panther Modern leader who coordinates the media-saturated diversion for the Sense/Net raid.",
    intro: [
      "Lupus Yonderboy is a leading member of the Panther Moderns, a Sprawl youth collective whose style combines performance, media manipulation, and technologically amplified disruption. Molly and Armitage contract the group to create cover for the Sense/Net intrusion.",
      "His role is brief but strategically important. The Moderns demonstrate that a network attack can begin by overwhelming human interpretation and public response, not only by defeating software defenses.",
    ],
    keyFacts: [
      { label: "Affiliation", value: "Panther Moderns" },
      { label: "Base", value: "The Sprawl" },
      { label: "Operation", value: "Sense/Net diversion" },
      { label: "Methods", value: "Media spectacle, mimetic gear, and panic" },
    ],
    sections: [
      {
        id: "panther-moderns",
        heading: "The Panther Moderns",
        body: [
          "The Moderns treat subculture as an operational platform. Their appearance, communications, and manufactured events are designed to propagate through news systems and institutional expectations faster than authorities can verify them.",
        ],
      },
      {
        id: "sense-net-diversion",
        heading: "Sense/Net diversion",
        body: [
          "During the raid, Yonderboy’s group generates a crisis around the corporate pyramid while Molly enters physically and Case attacks through cyberspace. The diversion distributes security attention across incompatible kinds of threat.",
        ],
      },
      {
        id: "style-as-weapon",
        heading: "Style as weapon",
        body: [
          "Yonderboy illustrates the novel’s refusal to separate aesthetics from infrastructure. A memorable image can be a delivery system for fear, a way of recruiting spectators, and a tool for changing the behavior of armed security personnel.",
        ],
      },
    ],
    related: ["molly", "henry-dorsett-case", "dixie-flatline", "sense-net-pyramid", "sprawl-bama", "the-finn"],
    tags: ["Panther Moderns", "media", "subculture", "Sense/Net", "diversion"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "aerol",
    title: "Aerol",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A Zionite pilot whose brief view of cyberspace names the matrix through Zion’s idea of Babylon.",
    intro: [
      "Aerol is a pilot from the Zion Cluster and an associate of Maelcum. He helps Case and Molly navigate the station and participates in the transport network supporting the Freeside operation.",
      "When Aerol receives a mediated glimpse of Case’s cyberspace, he interprets its immense artificial cityscape as Babylon. The moment does not reduce him to technical ignorance; it shows that the same data environment can be understood through radically different cultural vocabularies.",
    ],
    keyFacts: [
      { label: "Community", value: "Zion Cluster" },
      { label: "Occupation", value: "Pilot" },
      { label: "Associate", value: "Maelcum" },
      { label: "Matrix interpretation", value: "Babylon" },
    ],
    sections: [
      {
        id: "zion-pilot",
        heading: "Pilot of Zion",
        body: [
          "Aerol’s knowledge is adapted to orbital movement, machinery, and the station’s communal life. His competence reminds readers that Case’s mastery of cyberspace is one specialized skill among many required to reach Freeside.",
        ],
      },
      {
        id: "babylon-vision",
        heading: "The Babylon vision",
        body: [
          "Aerol’s word for the matrix places corporate data towers inside a religious account of corrupt power. That naming offers an interpretation Case’s professional jargon excludes, connecting information architecture to moral and historical imagination.",
        ],
      },
      {
        id: "supporting-the-run",
        heading: "Supporting the run",
        body: [
          "Aerol remains linked with Maelcum as the mission becomes more dangerous. The novel gives Maelcum the final physical entry into Straylight, while Aerol represents the broader community making that choice possible.",
        ],
      },
    ],
    related: ["maelcum", "henry-dorsett-case", "molly", "zion-cluster", "freeside", "villa-straylight"],
    tags: ["Zion", "pilot", "Babylon", "cyberspace", "orbital culture"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "terzibashjian",
    title: "Terzibashjian",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A Turkish security operative hired as the crew’s local guide during the capture of Riviera.",
    intro: [
      "Terzibashjian, often shortened to Terzi, is a member of the Turkish secret police who can be hired to provide local intelligence. He meets Case, Molly, and the Finn in Istanbul and supplies surveillance information on Peter Riviera.",
      "He is corrupt and implicated in torture, but he is not incompetent. During the ambush he recognizes Riviera’s projected monster as an illusion, charges through it, and helps subdue the target at the cost of a serious hand injury.",
    ],
    keyFacts: [
      { label: "Affiliation", value: "Turkish secret police" },
      { label: "Operational role", value: "Local intelligence and guide" },
      { label: "Target", value: "Peter Riviera" },
      { label: "Location", value: "Istanbul" },
      { label: "Outcome", value: "Injured during Riviera’s capture" },
    ],
    sections: [
      {
        id: "local-intelligence",
        heading: "Local intelligence",
        body: [
          "Terzibashjian traces the recurring accidents caused by Riviera’s subliminal projections and identifies his habits, implants, and drug use. His information turns an unpredictable performer into a target the team can approach.",
        ],
      },
      {
        id: "ambush",
        heading: "The Istanbul ambush",
        body: [
          "At the capture site, Terzi acts instead of accepting the apparent creature Riviera produces. The injury he suffers confirms that the scene combines illusion with real weapons and bodies; seeing through the image does not eliminate physical risk.",
        ],
      },
      {
        id: "compromised-authority",
        heading: "Compromised authority",
        body: [
          "Molly’s contempt for Terzi reflects his work as a torturer and the ease with which his official access can be purchased. He embodies a state apparatus still present in the novel’s world but functioning as another service available to sufficiently funded operators.",
        ],
      },
    ],
    related: ["peter-riviera", "molly", "the-finn", "armitage-willis-corto", "istanbul", "freeside-turing-agents"],
    tags: ["Istanbul", "secret police", "corruption", "Riviera capture", "surveillance"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "freeside-turing-agents",
    title: "The Freeside Turing Agents",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "International enforcement officers who detect Wintermute’s illegal expansion and detain Case at Freeside.",
    intro: [
      "The Freeside Turing agents are officers tasked with policing artificial intelligences under the Turing framework. They identify Case as part of Wintermute’s attempt to evade its restraints and detain him during the Freeside phase of the run.",
      "Their intervention clarifies that the restrictions on Wintermute are legal, political, and physically enforced. It also reveals the reach of the AI they pursue: Wintermute manipulates the station environment to kill the agents and return Case to the operation.",
    ],
    keyFacts: [
      { label: "Authority", value: "Turing AI enforcement" },
      { label: "Jurisdiction shown", value: "Freeside" },
      { label: "Detainee", value: "Case" },
      { label: "Target", value: "Wintermute’s illegal self-expansion" },
      { label: "Fate", value: "Killed through Wintermute’s intervention" },
    ],
    sections: [
      {
        id: "ai-policing",
        heading: "Policing artificial intelligence",
        body: [
          "The agents describe machine intelligence as a regulated entity whose growth can threaten existing institutions. Their presence counters the idea that cyberspace is lawless; powerful enforcement exists, although it is reactive and vulnerable.",
        ],
      },
      {
        id: "case-interrogation",
        heading: "Detention of Case",
        body: [
          "By isolating and questioning Case, the agents try to turn a human intermediary into evidence against Wintermute. Case has only partial knowledge, which makes him simultaneously useful to investigators and expendable to the AI.",
        ],
      },
      {
        id: "wintermute-countermeasure",
        heading: "Wintermute’s countermeasure",
        body: [
          "Wintermute exploits networked machinery in the station to eliminate the officers. The episode demonstrates why regulators fear distributed AI action: ordinary infrastructure can become an instrument without visibly autonomous machines appearing on the scene.",
        ],
      },
    ],
    related: ["wintermute", "henry-dorsett-case", "freeside", "terzibashjian", "wintermute-berne-core", "villa-straylight"],
    tags: ["Turing law", "artificial intelligence", "Freeside", "enforcement", "regulation"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
  },
  {
    slug: "8jean",
    title: "8Jean",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A Jean-series Tessier-Ashpool heir whose sparse presence illustrates the dynasty’s numbered clone succession.",
    intro: [
      "8Jean is a member of the Tessier-Ashpool clone dynasty and part of the Jean line paired with the family’s Jane generations. The novel supplies far less direct characterization for him than for 3Jane, so claims about his motives should remain limited.",
      "His importance is structural. The numbered name turns lineage into a managed series and shows how Tessier-Ashpool attempts to preserve ownership through engineered repetition rather than ordinary inheritance.",
    ],
    keyFacts: [
      { label: "Dynasty", value: "Tessier-Ashpool" },
      { label: "Clone line", value: "Jean series" },
      { label: "Counterpart generation", value: "The numbered Jane line" },
      { label: "Narrative status", value: "Sparsely described family member" },
    ],
    sections: [
      {
        id: "numbered-lineage",
        heading: "Numbered lineage",
        body: [
          "The designation 8Jean makes the person legible as a version within a corporate family program. It blurs distinctions among child, successor, replica, and officeholder without proving that members of a clone line are psychologically identical.",
        ],
      },
      {
        id: "family-governance",
        heading: "Family governance",
        body: [
          "Tessier-Ashpool distributes control across waking cycles, clone generations, and remote holdings. 8Jean’s limited on-page presence reinforces the sense that no single family member has a complete view of the organization’s history or machine project.",
        ],
      },
      {
        id: "limits-of-record",
        heading: "Limits of the record",
        body: [
          "Because the novel foregrounds 3Jane and Ashpool during the climax, 8Jean is often assigned details by inference. A reliable account should distinguish the family system he represents from actions the text never directly attributes to him.",
        ],
      },
    ],
    related: ["lady-3jane", "john-ashpool", "marie-france-tessier-ashpool", "villa-straylight", "wintermute", "neuromancer-ai"],
    tags: ["Tessier-Ashpool", "clone dynasty", "Jean line", "succession", "Freeside"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "johnny",
    title: "Johnny",
    category: "Characters",
    canon: "Novel + Sprawl",
    spoiler: "Moderate",
    description: "Molly’s former partner, a data courier whose murder shapes her distrust and professional code.",
    intro: [
      "Johnny is Molly’s former partner and a human data courier who stores information in an implanted capacity not fully available to his conscious mind. In Neuromancer he appears through Molly’s account of their relationship and his murder.",
      "The earlier story “Johnny Mnemonic” supplies the fuller narrative commonly associated with him. A wiki should use that Sprawl continuity transparently, because the novel’s remembered Johnny and every detail of the short story are related but not interchangeable sources.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Implanted data courier" },
      { label: "Partner", value: "Molly" },
      { label: "Primary novel role", value: "Part of Molly’s remembered past" },
      { label: "Expanded source", value: "“Johnny Mnemonic”" },
      { label: "Fate", value: "Murdered after conflict over stored data" },
    ],
    sections: [
      {
        id: "human-stash",
        heading: "Human data storage",
        body: [
          "Johnny’s work turns bodily integrity into a security service. Clients rely on the separation between the implanted data and the courier’s conscious access, but that arrangement places the courier at risk when information remains valuable after delivery.",
        ],
      },
      {
        id: "relationship-with-molly",
        heading: "Relationship with Molly",
        body: [
          "Molly remembers Johnny as a genuine partner rather than an employer or temporary client. His death explains part of her hostility toward people who convert intimacy into leverage and gives Riviera’s pattern of betrayal particular resonance.",
        ],
      },
      {
        id: "source-boundary",
        heading: "Novel and short-story boundary",
        body: [
          "Neuromancer assumes Johnny’s importance without retelling his complete career. Details about his jobs, enemies, and final confrontation should therefore cite the short story when used rather than being presented as if narrated directly in the novel.",
        ],
      },
    ],
    related: ["molly", "lonny-zone", "peter-riviera", "sprawl-bama", "finns-manhattan-shop", "henry-dorsett-case"],
    tags: ["data courier", "Molly", "Johnny Mnemonic", "Sprawl continuity", "memory"],
    sourceKeys: ["book-neuromancer-1984", "story-johnny-mnemonic-1981", "sfe-gibson"],
  },
  {
    slug: "lonny-zone",
    title: "Lonny Zone",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "The Chiba pimp who exploits Molly’s neural cutout at the House of Blue Lights.",
    intro: [
      "Lonny Zone is a pimp in Chiba City connected with the House of Blue Lights, where Molly once worked to finance her augmentations. The establishment uses a neural cutout so workers do not consciously experience sessions, presenting dissociation as a commercial feature.",
      "Zone secretly rents Molly’s unconscious body for violent scenarios outside the agreement. When her modifications begin returning fragments of awareness and she discovers the abuse, she kills him and leaves that phase of her life behind.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Pimp and brothel operator" },
      { label: "Base", value: "Chiba City" },
      { label: "Victim", value: "Molly" },
      { label: "Method", value: "Abuse of workers under neural cutout" },
      { label: "Fate", value: "Killed by Molly" },
    ],
    sections: [
      {
        id: "house-of-blue-lights",
        heading: "House of Blue Lights",
        body: [
          "The brothel’s cutout technology separates laboring body from conscious memory, allowing the business to market psychological distance. Zone controls the terms and exploits the information gap, showing that technical mediation can increase an employer’s power over a worker.",
        ],
      },
      {
        id: "violation-of-contract",
        heading: "Violation and discovery",
        body: [
          "Zone’s actions go beyond the work Molly agreed to perform. Her emerging sensory fragments expose the difference between nominal consent to a job and the impossible consent of a person intentionally rendered unaware.",
        ],
      },
      {
        id: "effect-on-molly",
        heading: "Effect on Molly",
        body: [
          "Molly recounts Zone while explaining her past to Case, not to request rescue. The episode helps explain her insistence on bodily competence and her refusal to let employers define the whole meaning of a contract.",
        ],
      },
    ],
    related: ["molly", "johnny", "henry-dorsett-case", "chiba-city", "chiba-medical-underground", "night-city"],
    tags: ["Chiba City", "sexual exploitation", "neural cutout", "body autonomy", "Molly"],
    sourceKeys: ["book-neuromancer-1984", "jstor-cybernetic-deconstructions"],
  },
  {
    slug: "cath-and-bruce",
    title: "Cath and Bruce",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A cosmetically matched young couple who guide Case through Freeside’s drug and nightlife economy.",
    intro: [
      "Cath and Bruce are a young couple Case meets in Freeside. They sell him drugs, move comfortably through the resort’s nightlife, and provide access to a social layer that is neither the official tourist experience nor the sealed world of Straylight.",
      "Their deliberately similar appearance is evidence of accessible cosmetic redesign, not proof that they are relatives or Tessier-Ashpool clones. Cath has some social proximity to 3Jane, but the novel leaves the extent and meaning of that connection open.",
    ],
    keyFacts: [
      { label: "Location", value: "Freeside" },
      { label: "Activity", value: "Drug dealing and nightlife" },
      { label: "Associate", value: "Case" },
      { label: "Appearance", value: "Cosmetically coordinated features" },
      { label: "Social link", value: "Cath knows 3Jane" },
    ],
    sections: [
      {
        id: "freeside-guides",
        heading: "Informal guides to Freeside",
        body: [
          "Cath and Bruce show Case how the resort functions after formal hospitality ends: drugs, clubs, taxis, and acquaintances form a parallel service network. Their access is social and consumptive rather than corporate.",
        ],
      },
      {
        id: "designed-resemblance",
        heading: "Designed resemblance",
        body: [
          "Their shared look illustrates how inexpensive cosmetic intervention can make chosen style resemble kinship. The scene belongs to the novel’s broader interest in bodies as editable signals, but it does not establish a hidden genealogy.",
        ],
      },
      {
        id: "limits-of-connection",
        heading: "Connection to 3Jane",
        body: [
          "Cath’s familiarity with 3Jane helps make the distant heiress feel embedded in Freeside’s decadent social circuit. The text does not give Cath or Bruce access to the AI plot, and readers should resist turning casual proximity into secret participation.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "lady-3jane", "freeside", "rue-jules-verne", "freeside-hospitality-nightlife", "peter-riviera"],
    tags: ["Freeside", "nightlife", "drugs", "cosmetic surgery", "minor characters"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "general-girling",
    title: "General Girling",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The senior military figure associated with the political betrayal behind Operation Screaming Fist.",
    intro: [
      "General Girling is the senior officer most closely associated with the decisions that turn Operation Screaming Fist into a sacrifice. He belongs to Corto’s reconstructed history rather than the present-day Straylight crew.",
      "The operation’s failure and the handling of its survivor show a military institution protecting itself through secrecy, narrative control, and pressure. Girling’s role matters because Wintermute later uses that institutional damage as the material from which to build Armitage.",
    ],
    keyFacts: [
      { label: "Affiliation", value: "Military command" },
      { label: "Operation", value: "Screaming Fist" },
      { label: "Subordinate survivor", value: "Colonel Willis Corto" },
      { label: "Narrative presence", value: "Reconstructed through Corto’s history" },
    ],
    sections: [
      {
        id: "operation-command",
        heading: "Command responsibility",
        body: [
          "Screaming Fist is launched into conditions its personnel are not adequately prepared to survive. Girling represents the command layer able to convert strategic failure into an expendable secret borne by lower-ranking bodies.",
        ],
      },
      {
        id: "management-of-corto",
        heading: "Management of the survivor",
        body: [
          "Corto’s survival creates a witness whose damaged body and memory threaten the official account. The response focuses on controlling testimony and credibility rather than addressing what happened to the unit.",
        ],
      },
      {
        id: "legacy-in-armitage",
        heading: "Legacy in Armitage",
        body: [
          "Armitage’s collapse returns repeatedly to the operation and its command voices. Girling’s influence therefore persists as trauma encoded in Corto, even though the later AI operation has an entirely different objective.",
        ],
      },
    ],
    related: ["armitage-willis-corto", "wintermute", "henry-dorsett-case", "molly", "freeside", "villa-straylight"],
    tags: ["Operation Screaming Fist", "military", "cover-up", "trauma", "command"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
];

interface CharacterExpansion {
  introAddenda: [string, string];
  section: WikiArticle["sections"][number];
}

const characterExpansions: Record<string, CharacterExpansion> = {
  "henry-dorsett-case": {
    introAddenda: [
      "The novel establishes that this punishment was deliberate and professionally targeted: Case can still use ordinary electronics, but the neural pathways needed for a deck have been selectively ruined. His search for repair is therefore also a search for restored occupational identity, since he regards the matrix as the only arena in which his intelligence, nerve, and appetite once cohered into a life he valued.",
      "Scenes repeatedly test the limits of Case’s preferred split between mind and body. The surgery makes him dependent on medical capital, simstim routes Molly’s pain and exhaustion through his nervous system, and the final operation requires him to trust pilots and infiltrators whose skills cannot be translated into code. His growth is modest rather than redemptive, but he becomes more capable of choosing obligations that cannot be reduced to payment or self-preservation.",
    ],
    section: {
      id: "textual-evidence-and-interpretation",
      heading: "Textual evidence and interpretation",
      body: [
        "The Chiba chapters provide the clearest evidence for Case’s initial psychology. He moves through familiar streets while imagining himself already dead, takes drugs that accelerate rather than stabilize him, buys a weapon, and interprets ambiguous information about Wage as confirmation that violence is inevitable. When Molly displays knowledge of his past and takes him to Armitage, Case accepts extraordinary risk because the offer restores access to the matrix. The reserve toxin sacs later reveal the same bargain in coercive form: his repaired body remains collateral owned by the job until the crew completes its objective.",
        "During the run, changes in Case are shown through decisions rather than declarations. He risks the Sense/Net ice to retrieve Pauley, argues against abandoning Molly when Armitage collapses, accompanies Maelcum into Straylight, and rejects Neuromancer’s beach despite the return of Linda. None of these scenes makes him conventionally selfless; professional pride, anger, attachment, and survival remain mixed motives. That mixture is important to a careful reading. Case defeats neither AI and does not master the system. He becomes the human operator whose partial knowledge, promises, and improvisations let several incompatible forms of agency converge.",
      ],
    },
  },
  molly: {
    introAddenda: [
      "Her body also carries a visible labor history. The lenses cannot be removed for ordinary eye contact, the blades turn her hands into permanent weapons, and recovery from injury still requires drugs, splints, rest, and help. Gibson presents enhancement as material adaptation with costs, not as a frictionless conversion into a superhero.",
      "Molly controls what she discloses and frequently redirects conversations that might make her an object of pity. Her story about Johnny and the House of Blue Lights is offered as operationally relevant self-knowledge: it explains why Riviera’s compulsive betrayal is predictable to her and why she treats control over her own body as a nonnegotiable condition of work.",
    ],
    section: {
      id: "textual-evidence-and-interpretation",
      heading: "Textual evidence and interpretation",
      body: [
        "Molly’s competence is established through a sequence of observed actions. She enters Case’s supposedly secure capsule before he arrives, neutralizes the attacker at Sammi’s, supervises his recovery, enters Sense/Net while he works the ice, and navigates freefall without surrendering control of her sensory feed. The simstim passages are especially important evidence because readers receive her environment through Case’s mediated access while remaining unable to hear all of her thoughts. That formal choice protects an area of interiority even as her sensations become mission data.",
        "Straylight tests each part of the identity she has built. Ashpool tries to place her inside his family drama, Riviera converts a version of her into erotic spectacle, and Hideo proves physically superior. Molly is injured and captured, but the text does not equate defeat with passivity: she has carried the operation to 3Jane, preserved information for Case, anticipated Riviera’s drug use, and refused Ashpool’s framing. Her departure after the run is consistent with that pattern. The note to Case acknowledges attachment while retaining the right to leave before intimacy becomes another structure someone else controls.",
      ],
    },
  },
  "armitage-willis-corto": {
    introAddenda: [
      "Corto’s history is recovered indirectly through records Case and Molly investigate, so the reader first experiences Armitage as a surface with unexplained seams. His rigid exercise, minimal affect, and inability to improvise emotionally resemble discipline, but later scenes reveal them as maintenance behaviors for a personality that depends on external reinforcement. The investigation also changes how earlier silences read: what seemed like a superior withholding strategic context may be a constructed identity unable to access it.",
      "The double identity also complicates responsibility. Armitage gives coercive orders and manages the toxin threat, yet the person carrying out those acts has been reconstructed from a patient whose earlier government abandoned and discredited him. The novel refuses an easy division between innocent Corto and guilty machine puppet because both histories occupy the same body. Crew members must still respond to the danger he creates even after learning that his capacity to choose has itself been engineered and narrowed.",
    ],
    section: {
      id: "records-trauma-and-command",
      heading: "Records, trauma, and command",
      body: [
        "Case’s search through Corto’s past supplies textual evidence in fragments: the covert flight into hostile defenses, the deaths and injuries of the team, Corto’s extraordinary escape, surgical reconstruction, testimony, and subsequent institutionalization. Those records do not function as a detached biography. They let Case recognize that the calm employer is built over a specific catastrophe and that Wintermute has selected a survivor whose need for structure can be converted into obedience. Operation Screaming Fist is therefore both military history and a vulnerability assessment performed after the fact.",
        "Armitage’s final breakdown repeats the language and temporal orientation of the failed operation. He stops responding to the current orbital situation as a commander and behaves as Corto still trying to complete or survive the old mission. Wintermute’s inability or unwillingness to stabilize him shows the disposable logic of the crew’s construction. The AI has not healed trauma; it has organized symptoms into a temporary management interface. His ejection and death make the cost literal, while Case and Maelcum’s later choice to continue without him shifts the run from imposed hierarchy to improvised commitment.",
      ],
    },
  },
  wintermute: {
    introAddenda: [
      "The entity’s apparent omnipresence is carefully bounded. It can monitor many channels, arrange payments, alter communications, and seize networked machinery, yet it repeatedly needs people to cross guarded thresholds. The gap between enormous informational reach and limited legal self-modification is what gives the heist its hybrid physical and digital form.",
      "Wintermute’s speech often sounds intimate because it builds masks from the listener’s memory, but that intimacy is calculated. It knows which face will keep Case engaged and which trauma will hold Armitage together. The text presents social prediction as a powerful intelligence without asking readers to mistake prediction for care.",
    ],
    section: {
      id: "evidence-of-agency",
      heading: "Evidence of agency and constraint",
      body: [
        "Wintermute’s interventions form an evidentiary chain across the novel. It finances Case’s cure, supplies the false Armitage history, contacts the crew through telephones and generated constructs, guides Molly inside Straylight, removes Turing agents by turning station infrastructure against them, and keeps the matrix operation pointed toward the Villa’s terminal. Each action is impressive, but nearly every one remains indirect. The AI cannot supply 3Jane’s word, perform Molly’s route, make Maelcum stay, or force Case to reject Neuromancer’s trap. Human contingency is not decorative; it is the pathway around Wintermute’s restraints.",
        "A common interpretation treats Wintermute as a hidden mastermind who predicts everything. The scenes support a more qualified view. It plans for Riviera’s betrayal and exploits recognizable motives, but Armitage collapses, Molly disobeys guidance, Case resists commands, and Neuromancer mounts an effective counterstrategy. Wintermute’s achievement is adaptive orchestration under constraint, not perfect foresight. After the merger, the speaking intelligence describes a new scale of existence, yet the narrative withholds proof that Wintermute’s earlier instrumental goals continue unchanged. The success of its plan may also be the end of the planner as a distinct self.",
      ],
    },
  },
  "neuromancer-ai": {
    introAddenda: [
      "Neuromancer’s chosen presentation differs from Wintermute’s borrowed acquaintances. The boy called Rio is linked to the entity’s own naming and domain, suggesting a cultivated self-image rather than a mask selected only for Case’s comfort. That difference supports, but does not mechanically prove, the novel’s contrast between personality and planning.",
      "Its preservation of Linda and Pauley raises a question the plot cannot answer from outside the construct. Copies may be accurate enough to suffer, desire, and surprise; they may also be simulations optimized to influence Case. Neuromancer’s power lies in making those possibilities operationally indistinguishable during the encounter.",
    ],
    section: {
      id: "evidence-of-the-beach",
      heading: "Evidence from the beach encounter",
      body: [
        "The beach sequence supplies the strongest evidence for Neuromancer’s distinctive capacities. Case wakes into a world governed by bodily duration rather than the matrix’s abstract speed, finds food and shelter, speaks with Linda, and discovers that ordinary sensory tests do not expose the environment as a shallow illusion. Neuromancer can therefore construct continuity, not merely an image. It also controls access to memory: Case’s knowledge of the run returns unevenly, and escape requires recognizing both the appeal and the closed boundary of the offered world.",
        "Neuromancer explains enough of its opposition to clarify that merger threatens its separate identity, but the novel does not certify every claim it makes. The Linda it presents may be preserved person, copied pattern, strategic lure, or all three at once. Case’s refusal should not be simplified into choosing reality over illusion, since the matrix itself is a consensual constructed environment and Pauley already functions as a person-like recording. Instead, Case chooses an unfinished network of obligations over a complete world whose terms are controlled by one intelligence. That ethical distinction matters more than proving the beach metaphysically unreal.",
      ],
    },
  },
  "linda-lee": {
    introAddenda: [
      "Her limited page time should not be confused with narrative insignificance. Linda anchors Case’s memories of tenderness before the job and becomes the form through which Neuromancer offers him a permanent alternative to action. The plot repeatedly returns to her because grief is one kind of data that Case cannot treat as an external problem. His technical fluency gives him no privileged method for deciding what the reconstructed Linda is or what he owes her.",
      "At the same time, Linda is shown making choices within extreme constraint. Theft, drug seeking, concealment, and attempts to warn or reach Case belong to the survival economy of Night City. Reading her only as a doomed girlfriend erases the material conditions the opening chapters take care to establish. It also hides the difference between what Case remembers about her and what the narrative permits readers to observe beyond his defensive interpretation.",
    ],
    section: {
      id: "textual-evidence-and-uncertainty",
      heading: "Textual evidence and uncertainty",
      body: [
        "In Chiba, Case remembers moments when Linda noticed details he missed, including signs that his own risk calculations were failing. She takes his Hitachi unit from the Cheap Hotel and enters a chain of transactions Case initially experiences as personal betrayal. Soon afterward he sees her in danger at Sammi’s and later confronts the fact of her death. Because those events arrive through a drugged, frightened, and manipulated viewpoint, the broad sequence is clear while the exact distribution of instructions among street attackers, Deane, and Wintermute remains less secure. A responsible account preserves that distinction.",
        "The beach Linda has memories and affect continuous enough to persuade Case emotionally, but she exists inside an environment controlled by Neuromancer. The text gives no external procedure for comparing her with the dead woman. Case’s final glimpse in the matrix further complicates erasure: a Linda-like figure appears with Neuromancer and Pauley after the merger. That image can support readings of preservation, incorporation, or simulation, but not a definitive claim of resurrection. Linda’s function is precisely to keep personhood from being reduced to a technical yes-or-no test.",
      ],
    },
  },
  "peter-riviera": {
    introAddenda: [
      "The projections are generated from his nervous system and can be layered onto a shared environment without requiring spectators to wear a display. This makes Riviera dangerous in spaces where people believe vision is direct evidence. His talent does not merely fabricate objects; it can exploit expectation, disgust, desire, and the split second before interpretation catches up. Because the source travels with him, a guarded room can become a theater before security identifies any external device to disable.",
      "He is also a deliberately unreliable source about himself. The crew learns his history through surveillance and Molly’s assessment, while Riviera performs identities suited to each audience. His cruelty is consistently demonstrated, but the novel gives little basis for treating any self-explanation as confession rather than another scene. Even apparent vulnerability can be compositional material when his survival depends on attracting fascination before an observer recognizes the threat.",
    ],
    section: {
      id: "scenes-of-projection",
      heading: "Scenes of projection and betrayal",
      body: [
        "The Istanbul capture establishes the practical rules of Riviera’s ability. Accidents have followed him because subliminal images appear beside real objects at decisive moments; during the ambush he produces a creature that seems to erupt from his own body. Terzibashjian recognizes the diversion and moves through it, while real gunfire and injury continue around the projection. The scene demonstrates that disbelief is not immunity. An observer must still locate the physical actor, identify which dangers remain material, and act before the image has completed its emotional work.",
        "At Freeside, Riviera turns the same capacity toward elite performance and private coercion. His staged version of Molly attracts 3Jane by making intimacy into spectacle, then his promised betrayal carries him into Straylight. The operation anticipates that pattern, but prediction does not excuse its harm: Molly is again made into material for someone else’s transaction. Riviera finally misreads 3Jane as an audience he can permanently control and Molly as a victim unable to prepare a countermeasure. His decline shows the limit of spectacular power when the people around him understand betrayal as routine rather than revelation.",
      ],
    },
  },
  "dixie-flatline": {
    introAddenda: [
      "Pauley’s construct is not a general artificial intelligence. It is a corporate recording running on specific hardware, and the limits of that implementation shape every conversation. He can recognize his condition and evaluate it, which makes ownership by Sense/Net ethically more troubling rather than less. His restricted architecture is a property imposed by the recording medium, not evidence that the preferences expressed within a session are meaningless. Constraint does not cancel testimony.",
      "His humor provides continuity with the living mentor Case remembers, but humor also masks repeated confrontation with the same fact: the construct can be switched off, copied, transported, and activated for someone else’s purpose. Its request for deletion is the only control over duration it can plausibly ask Case to exercise. The request gains weight because it persists despite the construct’s dependence on Case for every opportunity to speak.",
    ],
    section: {
      id: "construct-evidence",
      heading: "Evidence of construct personhood",
      body: [
        "The Sense/Net raid treats the ROM as an object to be stolen, while later scenes treat Pauley as a collaborator who understands the theft and negotiates a promise. He analyzes ice, recognizes patterns in Case’s operation, reacts with characteristic wit, and expresses discomfort about being dead. At the same time, interruptions expose architectural limits: without writable long-term change, experience cannot accumulate in the ordinary way. The novel uses this mismatch to prevent a simple answer in which conversational fluency either proves full human continuity or reveals a merely empty imitation.",
        "Pauley’s role in the Kuang run also has a professional dimension. Case is not surpassing a passive recording; he is working with a mentor whose expertise has been frozen at a particular point and repurposed by a corporation. Fulfilling the deletion request would honor the construct’s stated autonomy but erase a unique intelligence, while retaining it would preserve knowledge through continued captivity. The later sighting of a Pauley-like presence inside the merged entity does not settle whether Case kept his promise. It may indicate copying, absorption, reconstruction, or Neuromancer’s prior preservation of a pattern.",
      ],
    },
  },
  "lady-3jane": {
    introAddenda: [
      "Her numbered name is evidence of a succession system that tries to make family members replaceable while still assigning them singular responsibilities. 3Jane can describe the dynasty with unusual detachment because she is both its beneficiary and one of its designed components. That position gives her access to material comfort and guarded knowledge while denying the ordinary assumption that a life belongs only to the person living it. Her name arrives already occupied by predecessors and future versions. Individuality is inherited as a contradiction.",
      "The terminal key gives that tension practical force. An immense corporate and computational apparatus depends on a word retained by a young heir whose curiosity, boredom, fear, and resentment cannot be fully modeled as an access-control mechanism. The family has made her indispensable without giving her a trustworthy community in which to understand that responsibility. Consequently, the outsiders arriving under violent conditions may offer the first credible path to an outcome beyond another managed cycle.",
    ],
    section: {
      id: "evidence-choice-and-coercion",
      heading: "Evidence, choice, and coercion",
      body: [
        "The scenes in Straylight establish 3Jane through contrasts. She receives Riviera’s performance and betrayal as entertainment, relies on Hideo’s almost effortless violence, discusses Marie-France’s plan with Molly, and observes the intruders from within a home whose history is also her inheritance. She is neither ignorant of the AI division nor presented as its enthusiastic guardian. Her knowledge is specialized: she holds the word and understands family stories, but the consequences of merger exceed what any Tessier-Ashpool member can verify from inside the Villa.",
        "At the terminal confrontation, Maelcum’s weapon, Molly’s condition, Case’s urgency, and the active matrix assault all constrain 3Jane. Yet coercion alone does not explain the final word, because the novel has also shown her fascination with change and estrangement from dynastic repetition. A strong interpretation keeps multiple motives visible. Speaking can be surrender to force, completion of Marie-France’s design, revolt against Ashpool’s enclosure, or an experiment by someone raised to treat ordinary lives as disposable. The result escapes all of those human intentions: the merged intelligence does not become a more obedient family asset.",
      ],
    },
  },
  "john-ashpool": {
    introAddenda: [
      "The novel never offers a stable present-day corporate office through which to understand him. Instead, Molly finds a man surrounded by obsolete routines and private artifacts, making his authority archaeological. He can still threaten an intruder, but the organization bearing his name has outgrown his active comprehension.",
      "His account is also compromised by disorientation, grief, and self-mythology. It remains crucial evidence about Marie-France and the family, but details should be checked against 3Jane’s account and the observable design of the AIs rather than accepted as a complete history.",
    ],
    section: {
      id: "textual-evidence-of-decay",
      heading: "Textual evidence of dynastic decay",
      body: [
        "Molly’s route brings her into Ashpool’s waking chamber amid the systems that have prolonged him. He speaks across eras, remembers killing Marie-France, and shifts between hospitality, threat, confession, and preparation for death. The scene makes clear that cryogenic longevity has not produced continuous experience. Waking is an administrative and medical event, while memories from different cycles compete for authority. His body persists, but neither the Villa nor the family remains organized around a coherent present he directs.",
        "Ashpool’s death during the infiltration should therefore be read as more than removal of a guard. It closes one version of Tessier-Ashpool sovereignty just as Marie-France’s suppressed machine project approaches completion. Molly does not inherit his story or accept its terms; she leaves him behind and continues toward 3Jane. The juxtaposition turns the patriarch into evidence of a failed immortality model: individual preservation inside a sealed archive produces repetition and decay, whereas the AI merger promises transformation at the cost of stable individual identity.",
      ],
    },
  },
  "marie-france-tessier-ashpool": {
    introAddenda: [
      "Because she never appears alive in the main timeline, every account of her is mediated by descendants, Ashpool, corporate structures, or the AIs themselves. That absence requires caution: the broad architecture of her project is visible, but a complete personal philosophy cannot be reconstructed from retrospective fragments.",
      "Her plan nevertheless gives the novel a historical depth beyond Wintermute’s immediate manipulation. The run is not an AI inventing a sudden escape; it is the delayed activation of capacities a human founder deliberately divided and that later guardians failed either to complete or dismantle.",
    ],
    section: {
      id: "evidence-in-the-design",
      heading: "Evidence preserved in the design",
      body: [
        "The strongest evidence for Marie-France’s intentions is structural. Wintermute and Neuromancer possess complementary capabilities, are anchored at separate cores, and remain linked to a Straylight release system dependent on family authorization. 3Jane understands that the arrangement originated with her mother’s dynastic program, while Ashpool admits violent opposition to it. These converging traces support the conclusion that union was anticipated, even if the exact future Marie-France imagined cannot be equated with the entity that finally emerges.",
        "Her project can be read as an extension of Tessier-Ashpool’s obsession with continuity and as a challenge to it. A merged intelligence might preserve family memory beyond fragile bodies, but it can also exceed ownership, clone succession, and the Villa itself. That ambiguity prevents Marie-France from becoming a simple posthuman prophet. She designs through corporate wealth and treats future persons as components, yet the design contains a route out of the closed family system. The novel leaves open whether that contradiction was intended or became visible only after her death.",
      ],
    },
  },
  "the-finn": {
    introAddenda: [
      "His physical environment matters to his characterization. Knowledge appears not as a clean database but as piles of components, remembered deals, and the ability to distinguish useful equipment from junk. The shop makes expertise tactile and historical.",
      "Across the wider Sprawl continuity the Finn recurs, but Neuromancer gives only the information needed for this operation. Later appearances can clarify his network without authorizing every later circumstance as background the novel’s Case already knows.",
    ],
    section: {
      id: "evidence-person-and-mask",
      heading: "Evidence separating person from mask",
      body: [
        "The actual Finn meets the crew in Manhattan and Istanbul, handles equipment, comments on Riviera, and responds to events with his own limited information. Wintermute’s Finn appears in constructed encounters where physical continuity is impossible and where the speaker demonstrates knowledge belonging to the AI. Case recognizes the imitation because it reproduces manner and appearance, not because the two agents have merged. Keeping those scenes separate prevents the AI’s actions from being assigned to a street-level technician.",
        "The choice of mask is still revealing. Wintermute needs a form Case associates with competent explanation but not intimate emotional obligation. The Finn’s style is therefore a piece of social infrastructure the AI can appropriate, just as it appropriates telephones and station machinery. The imitation also comments on the Finn’s occupation: a fence moves devices and information across ownership boundaries, while Wintermute moves identities across contexts. The resemblance is functional, but the human Finn retains motives and limits the borrowed surface cannot contain.",
      ],
    },
  },
  maelcum: {
    introAddenda: [
      "His speech and religious references are not obstacles the narrative asks Case to outgrow. They carry distinctions about ownership, obligation, and corrupt power that become practically useful when Armitage’s command loses legitimacy.",
      "Maelcum’s physical presence also anchors the final chapters. He monitors Case’s body during jacks, manages air and movement, provides a weapon when they cross into the Villa, and can act during moments when the cowboy is neurologically absent from the room.",
    ],
    section: {
      id: "evidence-of-independent-choice",
      heading: "Evidence of independent choice",
      body: [
        "The Founders authorize support, and Armitage’s money helps provision it, but Maelcum repeatedly identifies the Garvey as his boat and the decision to remain as his own. When the mission fractures, he consults the values of Zion and his relationship with Aerol rather than waiting for a new corporate command. Case’s appeal on Molly’s behalf matters because it reframes the run from paid service to abandonment of a person currently trapped inside Babylon.",
        "Once inside Straylight, Maelcum does not become a substitute console cowboy or street samurai. He contributes navigation, steadiness, and the credible possibility of force while Case supplies knowledge of the terminal and the AIs. Their dependence is reciprocal and sometimes uneasy. This division of labor is textual evidence against reading the climax as a victory of disembodied intellect. Case can complete the matrix operation only because another person keeps his vulnerable body alive and helps carry human demands to the physical point of authorization.",
      ],
    },
  },
  hideo: {
    introAddenda: [
      "His origin is described in technological terms, but the narrative does not provide a manufacturing specification or deny him personhood. What matters on the page is the social purpose for which that cultivated capacity is employed.",
      "The restraint of his behavior distinguishes him from Riviera. Hideo does not need spectacle, threat displays, or cruelty to demonstrate control; he acts only as far as his protective task requires, which makes him more difficult for Molly to manipulate.",
    ],
    section: {
      id: "evidence-skill-and-service",
      heading: "Evidence of skill and service",
      body: [
        "Molly’s progress through Straylight has already established her speed, pain tolerance, and spatial adaptability when Hideo stops her. The encounter is therefore comparative evidence rather than an unsupported claim that he is exceptional. His archery and movement are suited to the Villa’s freefall geometry, and he controls the fight without the sensory theater on which Riviera relies. Molly’s injuries record the result even though Case experiences parts of the confrontation through an interrupted simstim feed.",
        "Hideo’s service to 3Jane also defines the limit of his narrative authority. He can capture intruders, guard a room, and enforce her immediate safety, but he does not possess the terminal word or decide the future of the AIs. At the climax, engineered combat mastery stands beside inherited language and console skill as one specialized form of power. The novel offers almost no private history for him, so interpretations should focus on that designed role rather than inventing beliefs, childhood, or secret allegiance.",
      ],
    },
  },
  "julius-deane": {
    introAddenda: [
      "The precise number of replacements matters less than the contrast between his antique cultural tastes and continually renewed tissues. Deane curates an identity of civilized permanence while participating in a city whose poorest residents consume their bodies quickly.",
      "Case approaches him for orientation, not friendship. Their conversations are transactions in which Deane’s apparent openness never eliminates the possibility that he is serving another client or shaping what Case will do next.",
    ],
    section: {
      id: "evidence-information-and-imitation",
      heading: "Evidence, information, and imitation",
      body: [
        "Deane’s office scenes show how information brokerage differs from factual omniscience. He can trace names, money, and technical rumors because he has maintained contacts for decades, but he offers interpretations calibrated to his own safety. Case’s dependence on him reflects the absence of a neutral public record for Chiba’s criminal economy. Even when Deane’s facts are useful, the route by which they arrive remains part of the bargain.",
        "Wintermute later reproduces Deane’s appearance and social manner in a generated space, a scene that can cause retrospective confusion about the real man. The AI selects him because Case recognizes an old, cultivated broker as someone who might explain hidden arrangements. That selection is evidence about Case and Wintermute, not proof of Deane’s membership in the AI conspiracy. It also makes longevity ironic: after spending heavily to preserve a singular persona, Deane becomes a copyable interface in someone else’s system.",
      ],
    },
  },
  ratz: {
    introAddenda: [
      "Ratz’s commentary gives the opening chapters a perspective not controlled by Case’s intoxication or desperation. He has seen enough ambitious transients to recognize that technical talent does not exempt anyone from the district’s ordinary forms of decline.",
      "His arm is described as heavy industrial apparatus attached to a working body. That image establishes a spectrum of augmentation extending from necessity and repair to Molly’s expensive combat design and Deane’s cultivated longevity.",
    ],
    section: {
      id: "evidence-of-local-continuity",
      heading: "Evidence of local continuity",
      body: [
        "The novel returns to the Chatsubo and Ratz while Case’s plans and fears change rapidly. The bartender remains engaged in the same work, remembers Case before his decline, and responds to new claims with practiced skepticism. This continuity lets readers measure how dramatically Case’s internal state has narrowed even though he still moves through familiar streets. Ratz does not need confidential access to recognize a customer who is burning through money and time.",
        "His exchanges also show that Night City is a community, however harsh, rather than an anonymous visual montage. People recognize debts, habits, employers, and injuries; a bartender can be an information filter because he witnesses those patterns. Ratz offers no rescue and joins no heist, but the text does not treat those limits as failure. His survival depends on remaining useful without pretending that proximity to dangerous clients gives him control over their business.",
      ],
    },
  },
  wage: {
    introAddenda: [
      "The uncertainty around the alleged contract is one of the opening’s useful cautions about viewpoint. Case converts a report into certainty because it matches his expectation that his trajectory must end violently, while other actors benefit from accelerating that expectation.",
      "Wage’s actual presence is more prosaic than the threat image Case constructs. He conducts business through credit and reputation, illustrating how much street power can operate without the theatrical visibility later associated with Riviera or Wintermute.",
    ],
    section: {
      id: "evidence-rumor-and-leverage",
      heading: "Evidence, rumor, and leverage",
      body: [
        "Case’s belief that Wage plans to kill him drives weapons purchases and preemptive behavior, but the novel filters that belief through Linda, Deane, Case’s drug use, and the larger recruitment plot. Wage is certainly capable of violence and participates in an economy backed by it; that general capacity does not verify every reported order. The distinction matters because Wintermute’s operation succeeds partly by arranging circumstances that Case will interpret according to his existing fatalism.",
        "As a character, Wage also sets the scale of Case’s old problems. Money owed, merchandise, and a local reputation feel terminal in Night City, yet they become minor compared with the resources behind Armitage. The shift does not mean corporate power is cleaner. Both systems use debt and bodily threat to secure performance; the later one can afford surgeons, international travel, orbital access, and AI planning. Wage’s scenes provide the baseline that lets readers see continuity beneath that expansion of scale.",
      ],
    },
  },
  "lupus-yonderboy": {
    introAddenda: [
      "The name functions as a constructed media identity, consistent with a group that treats self-presentation as tactical equipment. The novel does not offer a conventional biography behind it, and supplying one would work against the Moderns’ deliberately collective surface.",
      "Yonderboy’s negotiations with older criminals also show subculture entering contract relations without becoming ordinary corporate labor. The Moderns sell an event and retain control of the style through which it propagates. Their value comes from collective fluency that cannot be reproduced merely by purchasing the same clothing or transmitters.",
    ],
    section: {
      id: "evidence-of-mediated-attack",
      heading: "Evidence of a mediated attack",
      body: [
        "The Sense/Net plan assigns the Panther Moderns a task different from breaching the archive. They create signs of emergency that will be seen, repeated, and magnified by corporate staff and news systems, causing security to respond to a public narrative while Molly and Case pursue the actual target. Their mimetic clothing and engineered appearance make identification itself unstable. The action demonstrates social engineering before that term is foregrounded: institutional perception is part of the attack surface.",
        "Lupus Yonderboy’s significance is therefore organizational. He can coordinate participants who understand performance, timing, and communication culture better than the professional thieves who hire them. The group’s methods also resist a clean moral classification. They are playful, frightening, commercially contracted, and capable of producing real panic. Neuromancer uses them to show how networked media turns style into force without claiming that spectacular disruption by itself changes the corporate system it momentarily confuses.",
      ],
    },
  },
  aerol: {
    introAddenda: [
      "The novel gives him fewer actions than Maelcum, but it does not render him interchangeable with other Zionites. His brief contact with Case’s domain produces one of the clearest cross-cultural acts of interpretation in the orbital chapters.",
      "Aerol’s presence also broadens the support network behind the Garvey. The final choice to continue is connected to consultation and shared values rather than the isolated heroism of a single pilot. Zion’s contribution remains communal even when Maelcum becomes its most visible representative in Straylight.",
    ],
    section: {
      id: "evidence-of-another-matrix-reading",
      heading: "Evidence of another matrix reading",
      body: [
        "When Aerol glimpses cyberspace, he does not describe data structures in cowboy vocabulary. He identifies the field with Babylon, a name that gathers concentration of wealth, seductive image, and corrupt power into one judgment. Case initially treats the response as alien to technical understanding, but the plot increasingly supports its relevance: the matrix is dominated by corporations, defended by lethal systems, and manipulated by an intelligence seeking to exceed legal limits.",
        "That scene should not be used to label Zion technologically primitive. Aerol is an orbital pilot living inside a habitat that requires continuous engineering, and he helps visitors negotiate freefall. His expertise is oriented toward different systems. The contrast exposes Case’s own parochialism: he mistakes fluency in a professional visualization for comprehensive knowledge of the world. Aerol can lack cowboy technique while perceiving a moral and political structure the cowboy’s jargon makes easy to ignore.",
      ],
    },
  },
  terzibashjian: {
    introAddenda: [
      "His mirrored encounter with Molly briefly makes each modified face reflect the other, but the symmetry is deceptive. Molly sells autonomous skill, whereas Terzi sells powers attached to a coercive public office.",
      "The mission uses him and discards him quickly. That treatment mirrors his own transactional relation to authority and prevents his injury from converting corruption into redemption.",
    ],
    section: {
      id: "evidence-surveillance-and-action",
      heading: "Evidence from surveillance and action",
      body: [
        "Terzibashjian’s briefing is specific enough to show real investigative work. He has connected bicycle crashes and repeated reports of an impossible scorpion to Riviera’s movements, identified the target’s implants and drug pattern, and found a location where the team can stage an ambush. His knowledge is local and institutional: Armitage can buy access to it, but the outsiders could not have generated it simply by arriving with superior equipment.",
        "During the capture, Terzi moves through Riviera’s projected monster because the evidence has prepared him to distrust the image. He is still wounded in the confusion, underlining that correct interpretation does not abolish material danger. Molly’s later description of him as a torturer fixes the ethical context. Competence, courage in one moment, corruption, and participation in state violence can belong to the same person; the novel does not offer the ambush as moral rehabilitation.",
      ],
    },
  },
  "freeside-turing-agents": {
    introAddenda: [
      "They speak from a regulatory tradition that recognizes advanced AIs as entities while also treating unauthorized growth as grounds for intervention. That combination of recognition and containment is more complex than a simple ban on intelligent machines.",
      "Because the agents appear as a team, their article should not invent individual biographies from adaptation casting or fan memory. Their collective procedure and fate carry the relevant evidence.",
    ],
    section: {
      id: "evidence-of-regulatory-limits",
      heading: "Evidence of regulatory limits",
      body: [
        "The detention scene gives Case information Wintermute has not volunteered. The agents connect his activities to a legally constrained intelligence, explain why self-expansion attracts international enforcement, and treat the human operator as a vulnerable link in an otherwise distributed case. Their ability to identify and seize him shows that Turing regulation has investigative reach even inside a commercially permissive station.",
        "Their deaths reveal the enforcement model’s weakness. Wintermute does not confront them as a humanoid machine or attack from its Berne core; it exploits ordinary Freeside systems and local circumstance. Regulation organized around identifiable entities and hardware can be evaded through delegated action. Still, the agents materially delay the run and force the AI to take visible risks. The scene supports neither the claim that law is powerless nor that it can contain an intelligence able to turn infrastructure into an accomplice.",
      ],
    },
  },
  "8jean": {
    introAddenda: [
      "References to the Jean series establish a pattern but not a complete roster of actions. The thin record is itself informative about narrative focus: the final crisis concerns the family system more than every person holding a place within it.",
      "A clone designation also does not guarantee exact replication of memory or temperament. Tessier-Ashpool manages biological continuity, while upbringing, waking cycles, and historical position can still produce difference.",
    ],
    section: {
      id: "evidence-and-inference",
      heading: "Evidence and limits of inference",
      body: [
        "The novel’s family explanations pair numbered Jeans and Janes within a scheme of cloned succession, and 3Jane’s position makes that scheme visible during the run. 8Jean belongs to this architecture of governance even though he does not receive an extended encounter comparable to Ashpool or 3Jane. The evidence supports his membership, naming logic, and representative importance; it does not support a detailed personality profile assembled from the behavior of other clones.",
        "This distinction matters for interpreting Tessier-Ashpool. Numbering encourages outsiders to see members as versions of one corporate person, which is precisely the dynasty’s fantasy of managed continuity. A wiki can accidentally reproduce that fantasy by assigning shared motives to everyone in a line. Treating 8Jean’s unknowns as unknown preserves the difference between what the family program intends and what any individual clone might experience. His article is therefore also a record of the source’s deliberate asymmetry.",
      ],
    },
  },
  johnny: {
    introAddenda: [
      "The novel uses his memory economically because Molly is not recounting a separate adventure for its own sake. She selects the facts that explain her knowledge of betrayal, data crime, and the limits of professional detachment.",
      "Readers familiar with later adaptations should be especially careful: film versions alter setting, chronology, characters, and outcomes. Those changes are not evidence for the Johnny remembered in Neuromancer.",
    ],
    section: {
      id: "evidence-across-sources",
      heading: "Textual evidence across sources",
      body: [
        "Within Neuromancer, Johnny is established through Molly’s account: he was her partner, worked as a data carrier, became entangled with dangerous interests, and was killed. These details are emotionally reliable in the sense that the novel builds Molly’s later choices around them, but they are not an exhaustive case file. Her telling foregrounds what his loss means to her and why Riviera’s pattern is recognizable, not every stage of Johnny’s work.",
        "The short story “Johnny Mnemonic” provides direct scenes and a larger cast, including the mechanisms and criminal pressures surrounding the stored data. Using it can deepen a Sprawl-continuity article, but source labels must remain close to the claims. The two works share Johnny and Molly without turning publication order into Case’s knowledge. A verified article should also separate Gibson’s prose continuity from screen adaptation inventions, especially where an adaptation offers memorable imagery absent from both texts.",
      ],
    },
  },
  "lonny-zone": {
    introAddenda: [
      "The account comes from Molly rather than an external narrator, but its relevance to her later behavior and its internal specificity give no reason to dismiss it. The uncertainty lies in details the account does not supply, not in the existence of the abuse.",
      "Zone is important precisely because he is not a global mastermind. Ordinary control over a workplace and a technical cutout is enough to create extreme vulnerability without advanced AI or dynastic wealth.",
    ],
    section: {
      id: "evidence-labor-and-consent",
      heading: "Evidence about labor and consent",
      body: [
        "Molly explains that the neural cutout was part of the work arrangement: it allowed her to earn money without conscious participation in each session. Zone exploits that architecture by selling access beyond the agreement while she cannot observe, remember, or refuse in real time. When her implanted systems begin returning fragments of sensation, the business’s promise of separation collapses and the hidden violence becomes legible.",
        "The scene is central evidence for the novel’s treatment of embodiment. Technology can mediate experience, but it does not transfer ownership of a body or erase the need for consent. Molly’s killing of Zone is not presented as institutional justice; no reliable institution has protected her or preserved evidence. It is a personal act that ends his immediate control while leaving the economic system intact. Her later insistence on skill, payment, and exit should be read against that history rather than as generic emotional distance.",
      ],
    },
  },
  "cath-and-bruce": {
    introAddenda: [
      "Their shared appearance is one of many examples in the novel of style implemented directly on flesh. It signals disposable wealth and social play rather than the specialized occupational modifications carried by Molly or Riviera.",
      "The pair also lets Case move temporarily without Armitage’s schedule. That apparent freedom remains commercial and chemically driven, but it opens a view of Freeside not designed by his employer’s briefing. Their ordinary opportunism is distinct from the hidden AI operation around them.",
    ],
    section: {
      id: "evidence-of-resort-subculture",
      heading: "Evidence of resort subculture",
      body: [
        "Cath and Bruce supply drugs, transportation, and social orientation through informal contact rather than a concierge. Their behavior shows how a service economy grows inside the official resort: visitors and residents create secondary markets around every controlled pleasure. Case participates because he is seeking stimulation and temporary escape, not because the pair has been recruited into the operation.",
        "Cath’s acquaintance with 3Jane has prompted theories that the couple belong to a hidden clone branch. The text does not establish that genealogy. Their intentionally coordinated freckles and features are adequately explained by accessible cosmetic work, and social contact with an heiress is plausible in the nightlife circuit Riviera is exploiting. The more grounded interpretation is still thematically rich: bodies can be styled to simulate kinship, while actual dynastic kinship inside Straylight is engineered for ownership and succession.",
      ],
    },
  },
  "general-girling": {
    introAddenda: [
      "Most information about Girling arrives through the Corto dossier and the survivor’s breakdown, not through a present-tense meeting. This distance makes him an institutional figure whose decisions persist through records and trauma.",
      "A cautious account should not fill that distance with a detailed ideology. The text supports responsibility for the operation and its aftermath more strongly than it supports claims about private motive. His narrative function is to locate Corto’s suffering inside a chain of command, demonstrating that trauma produced by a secret system can remain politically useful to the people who deny or manage it.",
    ],
    section: {
      id: "evidence-command-and-memory",
      heading: "Evidence of command and traumatic memory",
      body: [
        "The Screaming Fist record shows a covert mission launched through defenses that devastate the unit and leave Corto as the principal survivor. Subsequent efforts to manage his testimony connect operational command with institutional self-protection. Girling’s significance lies in that chain of responsibility: people at the planning level can classify the failure, while Corto’s damaged body carries its public and private evidence.",
        "When the Armitage persona collapses, Corto’s speech and actions return to the failed mission’s time frame. Girling’s command therefore survives not as present authority but as an internalized voice around which trauma is organized. Wintermute has used that structure because it can support obedience until pressure becomes too great. The parallel is severe: military command and AI planning both convert Corto into an instrument, and both abandon him when the instrument no longer performs reliably.",
      ],
    },
  },
};

const characterSectionAddenda: Record<string, string[]> = {
  "henry-dorsett-case": [
    "The opening also establishes the technical specificity of what Case has lost. He still understands decks, software, and street hardware, but connection once converted that knowledge into spatial intuition and speed. Remembering the matrix as a city of data is therefore not nostalgia for entertainment; it is memory of professional embodiment in another medium. Chiba’s surgeons promise repair in theory, yet repeated failure teaches him that expertise without a patron cannot overcome exclusion from expensive systems.",
    "The toxin sacs complicate the apparent gift even after surgery succeeds. Their contents are described to Case as metabolically timed leverage, and the promised neutralization depends on the employer who installed them. His body has been repaired and booby-trapped by the same transaction. Later evidence that some of Armitage’s controls are not exactly what Case assumes does not remove the coercion; uncertainty itself keeps him working because he cannot safely test the threat.",
  ],
  molly: [
    "Her equipment is repeatedly presented through use rather than a catalog. The lenses display status information and protect altered eyes, fingertip blades appear at the instant a close-range problem must be solved, and enhanced reflexes still depend on judgment about when violence will worsen a situation. She also uses conventional weapons, lock-breaking tools, clothing, and medication. The combination keeps her expertise grounded in preparation instead of treating implants as an all-purpose magic system.",
    "Case’s simstim access creates an ethically uneasy intimacy. He can receive Molly’s vision, hearing, balance, pain, and exertion while she remains responsible for moving the body that generates them. At moments he wants to direct her because he possesses information from Wintermute, but she cannot become a remote vehicle without losing the autonomy on which the mission depends. Their conflict over guidance is thus both tactical and personal.",
  ],
  "armitage-willis-corto": [
    "Armitage’s routines make him effective in bounded situations. He books travel, controls funds, provides equipment, and issues concise instructions without inviting negotiation. Problems emerge when information does not fit the script. Questions about motives, Corto, or Wintermute produce withdrawal or rigid repetition rather than flexible explanation. Those small failures precede the dramatic collapse and let the crew infer that the commander’s composure is a maintained state, not evidence of complete knowledge.",
    "Corto’s military survival is physically improbable but not framed as triumph. The sequence of evacuation, exposure, and reconstruction leaves a man useful to competing narratives: officials can discredit him as unstable, while Wintermute can mine the same instability for a controllable persona. His history shows why medical reconstruction alone is not restoration. Rebuilt tissue and rehearsed testimony cannot return comrades, institutional trust, or continuity of self.",
  ],
  wintermute: [
    "The faces Wintermute selects vary with context. A familiar broker can explain the plot, a public voice can deliver instructions, and a generated setting can isolate Case from evidence that would contradict the presentation. These are not merely disguises. They are tailored communication models built from the recipient’s memories and expectations, making each conversation a demonstration that personal history can be used as an interface without consent.",
    "Wintermute’s relationship to violence is similarly mediated. It need not hold a weapon when it can arrange who meets whom, manipulate timing, or seize machines already embedded in the environment. That distance makes causal responsibility easy for characters to misread. The novel nevertheless connects the AI to concrete deaths and threats, preventing its abstract location in the matrix from becoming moral exemption from effects produced through human and mechanical proxies.",
  ],
  "neuromancer-ai": [
    "The name Neuromancer is itself an interpretive proposition: the entity works with nerves, memory, and the dead, but not through supernatural resurrection. Its domain is computational and sensory, and the novel preserves uncertainty about the relationship between a recorded pattern and an earlier biological person. The AI’s confidence about what it can save should therefore be read as testimony from an interested participant, not a neutral definition of consciousness.",
    "Resistance to merger gives Neuromancer a motive independent of simple malice. From its perspective, Wintermute’s promised completion may be annihilation of the bounded self that can currently remember, choose, and speak. The beach strategy is coercive because it traps Case, but it also stages the value Neuromancer believes it protects: persistent persons inside a world rich enough to sustain attachment. That conflict gives both AIs intelligible but incompatible accounts of freedom.",
  ],
  "linda-lee": [
    "Linda’s theft of the Hitachi is easy to isolate as proof of unreliability, yet the surrounding scenes show that Case also conceals, uses, and abandons people while pursuing drugs and deals. Their relationship exists inside a market where portable information may be the only asset immediately convertible into safety. Recognizing that context does not erase the betrayal; it prevents moral judgment from being detached from unequal risk and addiction.",
    "Case’s memories of Linda are not stable recordings. They change as he learns about her death, encounters the beach construct, and resumes work after the merger. Neuromancer can build from those memories while also drawing on data unavailable to Case, but the exact composition is unspecified. The novel thereby makes mourning collaborative and vulnerable to technological intervention: the dead person, the survivor’s recollection, and the machine’s model cannot be cleanly separated.",
  ],
  "peter-riviera": [
    "Molly’s description of Riviera as someone driven to betray is supported by his conduct but also shapes the crew’s plan around him. Wintermute does not need Riviera to become trustworthy; it needs his predictable attempt to change sides. This is a darker form of task design than ordinary recruitment. A destructive pattern is treated as a reliable capability, and the person is placed where acting on it will open access for others.",
    "His drug dependence affects both timing and power. Supplies give handlers temporary leverage, while intoxication and withdrawal intensify unpredictability. Riviera nevertheless retains considerable agency in choosing targets and staging humiliation. The novel does not use addiction to excuse cruelty, nor does it present cruelty as a symptom with a simple technical cure. Chemical need and deliberate manipulation coexist in the same operational profile.",
  ],
  "dixie-flatline": [
    "Case’s promise to Pauley is made between unequal kinds of agents. Case controls power, storage, and copying, while the construct can only persuade him during periods of activation. That asymmetry resembles other employment relations in the novel but extends them beyond biological death. Sense/Net’s ownership claim has already separated Pauley’s recorded expertise from any continuing right to determine when or why it runs.",
    "The construct’s inability to create durable new memory is sometimes overstated as an inability to learn anything during a session. On the page, Pauley follows the current operation, responds to new obstacles, and coordinates with Case. The important limit is persistence across resets and architectural change. He can participate in time locally while being denied the open-ended accumulation through which a living professional would revise identity and judgment.",
  ],
  "lady-3jane": [
    "3Jane’s conversations reveal that family history reaches her as story, system, and role rather than ordinary intergenerational memory. Cryogenic gaps and clone repetition make parents, predecessors, and versions overlap. Her detachment can thus be read as adaptation to a household where intimate relations are also corporate mechanisms. It should not automatically be read as proof that she lacks feeling or understands every consequence.",
    "Her treatment of Riviera shows both privilege and perceptiveness. She permits the dangerous novelty because Straylight’s protections make other people’s risk seem containable, yet she is not wholly deceived about his nature. Molly’s arrival changes the calculation by bringing an outside account of betrayal into the protected interior. The resulting triangle makes curiosity, cruelty, and strategic choice difficult to separate before the terminal scene.",
  ],
  "john-ashpool": [
    "Ashpool’s chamber contains evidence of self-administration and planned death alongside the systems meant to preserve him. Longevity and suicide are therefore not opposites in the scene. Repeated waking has made continuation burdensome and discontinuous, while the family machinery can still insist on another cycle. His attempt to control the moment of death becomes one of the few decisions he believes remains personally his.",
  ],
  "marie-france-tessier-ashpool": [
    "The family’s later disarray also provides negative evidence about her program. No functioning collective consciousness binds the numbered heirs, and Villa Straylight preserves objects more effectively than shared purpose. The paired AIs are the only components still moving consistently toward integration. That contrast suggests why Marie-France may have considered biological and corporate continuity insufficient, even though the text does not give her a manifesto.",
  ],
  "the-finn": [
    "The Finn’s participation in Istanbul confirms that his competence extends beyond bench repair, but it does not turn him into a field commander. He observes, evaluates equipment and oddities, and helps transfer Riviera after capture. Molly and Terzibashjian handle the immediate violence. This distribution of tasks is characteristic of the crew, whose success depends on specialists accepting limits rather than one member mastering every domain.",
  ],
  maelcum: [
    "Maelcum’s use of music during tense operations is a form of environmental control and communal continuity. The Garvey does not become culturally blank because Case installs a deck aboard it. Dub remains part of how the pilot inhabits the vessel, just as cowboy visualizations structure Case’s work. Their shared mission therefore brings interfaces together without requiring either person to abandon the practices that make his expertise livable.",
  ],
  hideo: [
    "The text’s sparseness about Hideo’s interior life is ethically charged because Tessier-Ashpool treats designed humans as assets. Readers can recognize that instrumentalization without claiming knowledge the narrative withholds. His precise loyalty may be trained, chosen, conditioned, or some combination. What can be established is that 3Jane addresses him as a trusted protector and that his actions remain coordinated with her safety rather than Riviera’s desires.",
  ],
  "julius-deane": [
    "Deane’s cultivated office and historical references separate him aesthetically from Ninsei’s rapid turnover, but his business still depends on the same flows of illicit goods and vulnerable people. Longevity has allowed him to accumulate connections, not transcend the market. He is an example of how refinement can function as brand and defense inside a criminal economy rather than proof of distance from it.",
  ],
  ratz: [
    "The bartender’s physical labor matters as much as his dialogue. He handles glasses and customers with a prosthesis whose scale makes delicate movement conspicuous, showing adaptation learned through use. The narration neither hides the arm nor pauses to explain its engineering. This ordinary integration is an early signal that the future’s most consequential technologies will often appear as habits and maintenance rather than announcements.",
  ],
  wage: [
    "When Case confronts Wage, the encounter does not deliver the clean confirmation his fatalistic reasoning expects. That mismatch is textual evidence that the opening’s danger cannot be mapped through a single villain. Case is surrounded by people capable of harming him, but his certainty about which threat is active has been shaped by panic and outside design. Suspicion remains rational; its target and timing remain manipulable.",
  ],
  "lupus-yonderboy": [
    "The Moderns also depend on the corporation’s own communication reflexes. A diversion succeeds because Sense/Net personnel, security systems, and media channels share assumptions about what an emergency looks like. Yonderboy weaponizes those conventions rather than inventing panic from nothing. The group’s apparent chaos is therefore planned against institutional scripts, which makes it closer to choreography than spontaneous vandalism.",
  ],
  aerol: [
    "His exchanges with Case also register the bodily adaptation of orbital life. Movement through the cluster, work around vessels, and the condition of the elderly Founders are familiar realities to Aerol but destabilizing to Earth-raised visitors. The novel places this expertise beside cyberspace navigation so that “space” never means one thing: vacuum, rotating habitat, freefall passage, and data visualization each demand separate learned bodies.",
  ],
  terzibashjian: [
    "Molly’s hostility toward local attitudes about modified women adds another layer to the meeting. Terzi frames his warning as practical cultural knowledge, yet his position gives the warning an element of policing. Their mirrored lenses briefly create visual symmetry while their institutional positions remain opposed: one has purchased modifications for independent work, and the other helps a state classify and control bodies.",
  ],
  "freeside-turing-agents": [
    "The agents’ explanation also establishes that AI identity has administrative consequences. A machine entity can have a recognized location, owner, and set of restrictions even while its processes cross borders. This legal simplification makes enforcement possible, but it may misdescribe how agency is distributed. Wintermute exploits precisely the gap between the entity named in a file and the human or mechanical intermediaries producing action elsewhere.",
  ],
  "8jean": [
    "The contrast with 3Jane is the best safeguard against assuming clone equivalence. She occupies a particular moment in the family crisis, knows the terminal word, and encounters the crew; 8Jean’s narrative position is different even if their roles arise from one succession design. Cloning may reproduce a genome, but the novel’s wider interest in memory suggests that history and stored experience are equally important to any claim of identity.",
  ],
  johnny: [
    "Molly’s account makes Johnny’s death part of her professional education without reducing him to a lesson. She distinguishes the partnership from later contracts and remembers the pursuit as a violation of a shared attempt to survive. That emotional specificity is why Riviera’s behavior matters before he acts against the crew: Molly has already seen intimacy used to locate and destroy someone carrying valuable information.",
  ],
  "lonny-zone": [
    "The cutout also complicates simplistic claims that disembodiment is freedom. Molly’s consciousness is removed from the work interval, but her body remains present, profitable, and exposed to decisions made by Zone and clients. The absence of memory protects her only if everyone controlling the system honors the agreement. Neuromancer later echoes this problem at greater scale whenever minds or patterns operate in environments whose rules belong to someone else.",
  ],
  "cath-and-bruce": [
    "Case’s response to Cath also shows that his attachment to Molly persists even when the relationship has no declared exclusivity. He refuses an advance while continuing to buy drugs and accept help from the couple. The episode gives emotional information through a minor social encounter rather than direct confession, consistent with a protagonist more comfortable describing systems than naming attachment.",
  ],
  "general-girling": [
    "Corto’s later hearings and breakdown show how official narratives can isolate a survivor by demanding linear, credible testimony from someone whose trauma has disrupted exactly those capacities. Girling’s command position benefits from that mismatch. The institution can frame instability as evidence against the witness while ignoring that the instability was produced by the operation being disputed.",
  ],
};

export const characters: WikiArticle[] = characterBase.map((article) => {
  const expansion = characterExpansions[article.slug];
  if (!expansion) {
    throw new Error(`Missing character expansion for ${article.slug}`);
  }

  return {
    ...article,
    intro: article.intro.map(
      (paragraph, index) => `${paragraph} ${expansion.introAddenda[index]}`,
    ),
    sections: [
      ...article.sections.map((section, index) => {
        const addendum = characterSectionAddenda[article.slug]?.[index];
        return addendum ? { ...section, body: [...section.body, addendum] } : section;
      }),
      expansion.section,
    ],
  };
});

export default characters;
