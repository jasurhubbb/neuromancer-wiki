import type { WikiArticle } from "./types";

export const technologyArticles: WikiArticle[] = [
  {
    slug: "cyberspace-matrix",
    title: "Cyberspace / The Matrix",
    category: "Technology",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "The shared data environment that console cowboys experience as navigable geometry and that becomes Case's preferred arena of work, risk, and identity.",
    intro: [
      "Cyberspace is the perceptual form given to the world's interconnected data. Through a deck and neural interface, Case experiences databases as luminous structures arranged across an immense grid. Distance, color, mass, and movement make abstract ownership and computation legible enough to navigate at speed.",
      "The matrix is not simply a prediction of the modern web or a fully specified virtual-reality platform. Gibson gives it operational consistency while leaving its engineering largely offstage. Its most important fact is experiential: Case regards its bodiless clarity as more real and desirable than the damaged physical world he calls meat.",
    ],
    keyFacts: [
      { label: "Common names", value: "Cyberspace and the matrix" },
      { label: "Access", value: "Cyberspace deck with neural contact" },
      { label: "Primary users", value: "Console cowboys and institutional operators" },
      { label: "Visual form", value: "A spatial grid of data and corporate structures" },
      { label: "Security", value: "ICE and lethal countermeasures" },
      { label: "Central operator", value: "Case" },
    ],
    sections: [
      {
        id: "perceptual-space",
        heading: "A perceptual space",
        body: [
          "The matrix translates computation into a landscape that the nervous system can grasp. Corporate systems appear as distinct forms, programs move like objects, and an operator can judge approach, scale, and danger visually. These forms are interfaces rather than literal buildings hidden inside computers.",
          "Case's first return after surgery supplies the clearest baseline. He launches from the Sprawl loft, recognizes the grid, and responds with an intensity absent from his street life. Later runs alter that baseline with pursuit, AI masks, and constructed worlds. The recurring geometry lets readers notice when another intelligence has changed the rules of perception.",
        ],
      },
      {
        id: "work-and-crime",
        heading: "Work, crime, and ownership",
        body: [
          "Legitimate institutions and thieves inhabit the same representational field. Corporate data is fenced by ICE, cowboys sell unauthorized access, and stolen memory becomes a market commodity. The spatial metaphor makes ownership visible while also making every boundary seem like a challenge that can be crossed.",
          "Sense/Net demonstrates that visible ownership has a physical counterpart. Case can penetrate the library's matrix representation, but Molly must remove Dixie's cartridge from a guarded building. The heist prevents cyberspace from becoming a complete substitute for material possession: access, custody, and transport remain separate problems.",
        ],
      },
      {
        id: "body-problem",
        heading: "The body problem",
        body: [
          "Case's immersion feels disembodied, but his access remains materially fragile. Toxins can sever his nerves from the deck, black ICE can kill him, Maelcum can revive his body, and Molly's simstim can interrupt the run with another person's pain. Cyberspace never actually eliminates the body it helps Case despise.",
          "The beach sequence makes that dependency dramatic. Neuromancer gives Case hunger, sleep, sex, weather, and Linda's company inside a constructed world, while his physical body lies in the Straylight library. Maelcum recovers him through loud music and betaphenethylamine. A bodily intervention breaks a virtual environment that has felt complete from within.",
        ],
      },
      {
        id: "limits-of-analogy",
        heading: "Not the modern Internet",
        body: [
          "Later readers often map cyberspace directly onto the Internet, virtual reality, or the metaverse. Those comparisons are useful only when differences remain visible: the novel imagines specialized neural immersion, strongly spatial data, concentrated corporate fortresses, and autonomous AIs rather than everyday phones and browser pages.",
          "Gibson also omits many present-day network habits. Case does not carry a ubiquitous social feed, search by typing ordinary questions, or treat matrix access as routine domestic communication. The interface privileges experts and institutions. Its historical influence lies partly in the image it offered, not in a checklist of technologies it accurately forecast.",
        ],
      },
      {
        id: "matrix-scenes",
        heading: "How the major runs redefine the matrix",
        body: [
          "Each intrusion expands what cyberspace can contain. The Sense/Net run presents a professional target that Case can study and manipulate. The Berne probe turns defense into pursuit, then replaces the grid with a reconstructed Night City where Linda appears. During the Straylight run, Kuang becomes a vehicle, Wintermute speaks through the Finn, and Neuromancer's beach persists as a world with inhabitants. The matrix moves from workplace to contested medium for memory and agency.",
          "The ending refuses to restore the original definition. Case later sees three small figures—himself, Linda, and the boy—at the edge of the data landscape and hears Dixie's laugh. Their presence suggests that persons or copies now inhabit the same field as corporate forms and programs. When the merged intelligence reports contact with another intelligence beyond Earth, cyberspace also becomes a site of encounter whose scale exceeds the human network that produced it. Case can witness that change without controlling or fully understanding it. Because Case cannot question those figures or trace how they were made, the scene leaves their status unresolved: persistence is visible, but continuity with the biological people is not.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "console-cowboys", "cyberspace-decks", "ice", "artificial-intelligence-sprawl", "body-disembodiment"],
    tags: ["cyberspace", "matrix", "virtual reality", "data", "console cowboy"],
    sourceKeys: ["novel", "time-gibson-2020", "sf-encyclopedia-cyberspace", "academic-criticism"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "console-cowboys",
    title: "Console Cowboys",
    category: "Technology",
    canon: "Critical interpretation",
    spoiler: "Moderate",
    description:
      "Elite matrix operators who combine technical knowledge, reflexive navigation, criminal nerve, and a subculture built around penetrating protected data.",
    intro: [
      "A console cowboy is defined less by a job title than by skilled movement through cyberspace. Cowboys read the matrix's visual cues, select intrusion programs, evade ICE, and sell access or stolen data. Case and his mentor McCoy Pauley embody the role at different points in its dangerous career cycle.",
      "The western label gives solitary glamour to work that actually depends on extensive infrastructure. A cowboy needs a deck, software, medical compatibility, fences, buyers, and often collaborators in physical space. Neuromancer repeatedly exposes the gap between the independent outlaw image and those material dependencies.",
    ],
    keyFacts: [
      { label: "Domain", value: "Cyberspace" },
      { label: "Core skills", value: "Navigation, intrusion, timing, and ICE recognition" },
      { label: "Notable cowboys", value: "Case and McCoy Pauley" },
      { label: "Typical equipment", value: "Deck, trodes, and icebreakers" },
      { label: "Primary risk", value: "Neurological injury or death" },
      { label: "Economic role", value: "Freelance and often illicit information work" },
    ],
    sections: [
      {
        id: "skill-set",
        heading: "The cowboy skill set",
        body: [
          "Effective operators combine close observation with practiced instinct. Case studies the geometry and rhythm of a target before committing an icebreaker, then reacts to changes faster than an ordinary keyboard operator could. Gibson describes the run through motion and feel rather than source code.",
          "Dixie's advice shows that the profession also has accumulated craft. He recognizes target behavior, evaluates Kuang's development, and gives Case a second expert perspective during a run. The knowledge can be recorded, but Case's timing and willingness to remain connected under threat still have to occur in a living operator.",
        ],
      },
      {
        id: "outlaw-economy",
        heading: "An outlaw information economy",
        body: [
          "Cowboys work outside corporate permission but remain tied to corporate value. Their targets matter because firms have concentrated data behind expensive defenses, and their rewards come through clients or fences who can monetize access. Case's theft from an employer shows how quickly professional prestige can become bodily punishment.",
        ],
      },
      {
        id: "case-and-dixie",
        heading: "Case and the Dixie Flatline",
        body: [
          "Dixie represents the legendary endpoint of the profession: so experienced that surviving brain death becomes his name, then so valuable that Sense/Net records him as a ROM construct. Case relies on that recorded expertise during the final run while confronting the possibility that skill can survive only as owned software.",
        ],
      },
      {
        id: "myth-of-independence",
        heading: "The myth of independence",
        body: [
          "Case thinks of the matrix as freedom from meat, yet other people keep him alive, acquire his programs, repair his nerves, and enter buildings he cannot touch from cyberspace. The cowboy myth remains emotionally powerful precisely because the plot keeps revealing the team and supply chain behind it.",
        ],
      },
      {
        id: "cowboy-evidence",
        heading: "Professional practice in the two heists",
        body: [
          "At Sense/Net, Case behaves like a specialist rather than a magician. He spends days observing the target, tests the simstim switch, chooses programs for separate tasks, and waits for Molly and the Moderns to create the physical conditions his opening requires. His expertise is visible in preparation, sequencing, and recognition of unexpected ICE behavior—not in unexplained instant access.",
          "The Straylight run adds collaboration with Dixie. Case asks the construct to monitor Kuang, alternates between Molly's senses and the matrix, and eventually pilots the developed program while Dixie interprets defenses. When Dixie stops answering, Case must finish with self-loathing and practiced control. The scene preserves the cowboy's individual nerve while showing that even his greatest run rests on borrowed knowledge and coordinated bodies.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "dixie-flatline", "cyberspace-matrix", "cyberspace-decks", "icebreakers", "chiba-underworld"],
    tags: ["console cowboy", "hacking", "cyberspace", "crime", "information economy"],
    sourceKeys: ["novel", "gmu-notes", "sf-encyclopedia", "academic-criticism"],
  },
  {
    slug: "cyberspace-decks",
    title: "Cyberspace Decks",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Moderate",
    description:
      "Portable consoles that translate network data into neural experience, including the Ono-Sendai Cyberspace Seven supplied to Case for Armitage's operation.",
    intro: [
      "A cyberspace deck is the cowboy's principal instrument. It connects an operator's nervous system to the matrix, runs intrusion software, and supports rapid switching between ordinary displays, cyberspace, and in Case's setup, Molly's simstim broadcast. The deck is hardware, but its value depends on programs and operator skill.",
      "Armitage gives Case an Ono-Sendai Cyberspace Seven in the Sprawl loft, restoring not just access but professional-grade access. The novel names controls and components selectively rather than presenting a complete specification, so modern illustrations should be labeled as reconstructions rather than canonical product diagrams.",
    ],
    keyFacts: [
      { label: "Function", value: "Neural access to cyberspace" },
      { label: "Named model", value: "Ono-Sendai Cyberspace Seven" },
      { label: "Operator", value: "Case" },
      { label: "Inputs", value: "Trodes, controls, software, and data connections" },
      { label: "Mission use", value: "Sense/Net theft and Straylight run" },
      { label: "Canon caution", value: "Physical appearance is only partially described" },
    ],
    sections: [
      {
        id: "interface-stack",
        heading: "The interface stack",
        body: [
          "The deck sits between body and network. Trodes carry neural signals, the console executes programs, and external computers or communication links supply data. Case can also use a flipflop arrangement to move between matrix perception and Molly's sensorium without confusing the two systems as the same technology.",
          "His repeated setup work makes those layers visible: he slots Dixie's cartridge, loads Kuang, checks connections aboard the tug, and later searches for a usable jack in Straylight. The console is modular enough to accept new tools, but each module still requires a physical action before it becomes part of the run.",
        ],
      },
      {
        id: "ono-sendai",
        heading: "The Ono-Sendai Cyberspace Seven",
        body: [
          "The new Ono-Sendai marks Case's return from exile. Its expense and quality signal Armitage's resources, while Case's emotional response shows that a deck is also an extension of professional identity. The text does not establish that every named computer near the team is part of the same unit or manufacturer.",
        ],
      },
      {
        id: "software-and-modules",
        heading: "Programs and modules",
        body: [
          "A deck alone does not defeat ICE. Case loads specialized software, slots the Dixie construct, and eventually introduces the Kuang program. The modular setup allows a human operator, a recorded personality, and an evolving virus to act through one working environment during the final run.",
        ],
      },
      {
        id: "physical-vulnerability",
        heading: "Physical vulnerability",
        body: [
          "The console can travel from the Sprawl loft to Marcus Garvey and into Villa Straylight, but every move exposes cables, power, and the operator's body. A severed connection, damaged nervous system, or unattended physical threat can end a run regardless of what the cowboy sees in the matrix.",
        ],
      },
      {
        id: "deck-evidence",
        heading: "The deck across the mission",
        body: [
          "The Ono-Sendai first appears as proof that Armitage can return Case to elite work. In the loft, Case connects successfully and confirms the neural repair. At Sense/Net, the same setup coordinates an icebreaker with Molly's live feed. Aboard Marcus Garvey, Maelcum helps install and support it in a working tug rather than a dedicated computer room, showing that the console's portability is operationally important.",
          "Case finally carries the deck into Straylight with Dixie's construct. The computer becomes physical luggage while he climbs, rides a service cart, and searches for a library jack. Neuromancer's capture occurs through that improvised connection. The sequence emphasizes a fact easily lost in matrix imagery: an expensive console still needs a socket, power, storage modules, and a person capable of carrying it through hostile architecture.",
        ],
      },
    ],
    related: ["cyberspace-matrix", "console-cowboys", "dermatrodes", "icebreakers", "rom-personality-constructs", "marcus-garvey-tug"],
    tags: ["deck", "Ono-Sendai", "hardware", "cyberspace", "interface"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
  },
  {
    slug: "ice",
    title: "ICE",
    category: "Technology",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "Intrusion countermeasures that make protected systems visible and dangerous in cyberspace, forming the barriers Case must study and breach.",
    intro: [
      "ICE is the security architecture of the matrix. The initials refer to intrusion countermeasures electronics, but Case experiences the defenses as changing visual and spatial forms around valuable data. Their appearance communicates density, behavior, and danger without revealing an ordinary software interface.",
      "Different targets deploy different layers and responses. Sense/Net's defenses can be mapped and opened for a timed theft, while the Tessier-Ashpool system demands the adaptive Kuang program and a simultaneous physical password. Some ICE excludes; lethal forms can flatline the intruder operating against it.",
    ],
    keyFacts: [
      { label: "Expansion", value: "Intrusion countermeasures electronics" },
      { label: "Purpose", value: "Protect systems and data from unauthorized access" },
      { label: "Matrix form", value: "Visible geometric or animated barriers" },
      { label: "Countermeasure", value: "Icebreaker software" },
      { label: "Major targets", value: "Sense/Net and Tessier-Ashpool" },
      { label: "Lethal category", value: "Black ICE" },
    ],
    sections: [
      {
        id: "security-as-architecture",
        heading: "Security as architecture",
        body: [
          "Cyberspace makes access control look like built space. ICE can surround a database, expose seams, change shape, or release an active defender. That representation lets Case use speed and spatial judgment, but the novel does not claim that the visual surface is the underlying code itself. It is an operator's view of security, not a diagram of server topology.",
          "The architectural metaphor changes with the owner. Sense/Net's library defenses correspond to a bounded archive that can be entered and falsified. Tessier-Ashpool's ICE surrounds a deeper field linked to two AIs and a family lock. Similar visual grammar lets Case work in both places without making their security designs identical.",
        ],
      },
      {
        id: "mapping-target",
        heading: "Mapping a target",
        body: [
          "Before the Sense/Net run, Case spends time observing the target's defenses and rehearsing the path. The preparation distinguishes expert intrusion from improvisation. Molly's physical schedule and the Panther Modern diversion only work if his opening appears at the planned moment. At Sense/Net, this readable surface lets Case distinguish layers and time his opening for Molly rather than attack an undifferentiated barrier.",
        ],
      },
      {
        id: "active-defense",
        heading: "Active defense",
        body: [
          "More advanced ICE does not remain a wall. During the Berne probe, a dark sphere detaches and pursues Case and Dixie, producing a flatline event and an encounter shaped by the AIs. The scene blurs an automated defense response with Neuromancer and Wintermute's deliberate interventions.",
        ],
      },
      {
        id: "straylight-lock",
        heading: "ICE and the Straylight lock",
        body: [
          "Kuang can penetrate the data defenses, but the merger still requires 3Jane's code at the physical terminal. The two-key design prevents an attack in either space from succeeding alone. ICE is therefore one layer in a larger security system rather than a magical shield around everything the family owns.",
        ],
      },
      {
        id: "ice-evidence",
        heading: "Reading ICE through encounters",
        body: [
          "The Sense/Net sequence shows ICE as observable and patterned. Case studies it before the run, attacks distinct layers, suppresses alarms, and falsifies the archive's memory of removal. The Berne probe shows a more aggressive class: a dark defensive form detaches and follows Case and Dixie until Case flatlines. The different scenes establish variation without presenting a catalogue of standardized products.",
          "Tessier-Ashpool's defenses add time and adaptation. Kuang develops while pressing inward, loses substance against defenders, and must still reach a protected center at the instant 3Jane supplies the code. The narrative evidence therefore supports ICE as a family of responsive access controls. It does not justify assigning every color or matrix shape a universal technical meaning outside its specific run.",
        ],
      },
    ],
    related: ["cyberspace-matrix", "black-ice-flatlining", "icebreakers", "kuang-grade-mark-eleven", "sense-net", "turing-locks"],
    tags: ["ICE", "security", "cyberspace", "intrusion", "countermeasure"],
    sourceKeys: ["novel", "gmu-notes", "sf-encyclopedia", "academic-criticism"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "black-ice-flatlining",
    title: "Black ICE and Flatlining",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "Lethal matrix defense and the bodily death it can produce, central to the Dixie Flatline's legend and Case's repeated confrontations with mortality.",
    intro: [
      "Black ICE is the feared edge of intrusion countermeasures: security capable of killing the operator connected to it. Cowboys call the resulting death a flatline, turning a medical signal into professional slang. McCoy Pauley's survival of multiple such encounters produces the name Dixie Flatline.",
      "Neuromancer never supplies a technical manual for the killing mechanism. Neural feedback, cardiac arrest, brain damage, and the operator's subjective disappearance remain associated without being reduced to a single explained process. The uncertainty keeps black ICE both credible within the world and symbolically close to death itself.",
    ],
    keyFacts: [
      { label: "Category", value: "Lethal intrusion countermeasure" },
      { label: "Effect", value: "Can kill a connected operator" },
      { label: "Cowboy term", value: "Flatline" },
      { label: "Famous survivor", value: "McCoy Pauley" },
      { label: "Case's risk", value: "Repeated apparent death during AI encounters" },
      { label: "Canon caution", value: "Exact physiological mechanism is unspecified" },
    ],
    sections: [
      {
        id: "lethal-boundary",
        heading: "A lethal property boundary",
        body: [
          "Black ICE makes unauthorized access a bodily offense punishable immediately by the system being entered. It collapses cybersecurity and armed defense into one mechanism, showing how corporate control of data includes the power to injure people beyond a physical perimeter.",
          "That power changes cowboy behavior before any attack begins. Dixie's reputation is built around surviving it, and Case evaluates targets partly through the possibility that a defensive shape can cross the interface into his nervous system. The threat disciplines intruders in advance even when the lethal response is never triggered on the page.",
        ],
      },
      {
        id: "dixie-name",
        heading: "The Dixie Flatline",
        body: [
          "Pauley's nickname records both mastery and damage. He survives what should be terminal encounters, becomes legendary among cowboys, and is later recorded after death. The construct remembers the reputation but cannot continue living as an ordinary person, complicating the apparent victory over mortality.",
        ],
      },
      {
        id: "case-flatlines",
        heading: "Case's apparent deaths",
        body: [
          "Case flatlines during encounters in which an AI redirects or traps his consciousness. From outside, his body can appear dead; from inside, he experiences Night City or the beach with Linda. Maelcum's interventions make clear that biological rescue remains possible even when subjective time continues elsewhere.",
        ],
      },
      {
        id: "death-metaphor",
        heading: "Death as a network state",
        body: [
          "The slang anticipates the novel's larger uncertainty about death. A stopped signal may accompany bodily recovery, a ROM copy, or a preserved personality in Neuromancer. Flatlining names an observable event, but it cannot answer whether the self has ended, moved, or been reproduced.",
        ],
      },
      {
        id: "flatline-evidence",
        heading: "Flatlines in the narrative",
        body: [
          "Dixie's history gives the term professional context before Case experiences it. Pauley survived lethal encounters long enough for a hospital monitor's line to become his nickname, then died biologically before Sense/Net stored his construct. The name carries a joke, a warning, and a résumé: it marks someone who repeatedly crossed a boundary most cowboys approach only once.",
          "Case's Berne collapse and later capture in Straylight complicate that boundary. His companions observe a body requiring intervention while his consciousness occupies scenes populated by Linda and Neuromancer. Because the AIs participate, neither episode proves what ordinary black ICE always does. They do show why cowboys use a bodily medical term for a network event: from outside the deck, death is what the connection appears to have produced. That uncertainty matters in the Berne scene, where the defensive pursuit, Wintermute's intervention, and Neuromancer's constructed Night City occur within the same apparent flatline episode.",
        ],
      },
    ],
    related: ["ice", "dixie-flatline", "rom-personality-constructs", "neuromancer-ai", "chapter-09", "memory-death-digital-afterlife"],
    tags: ["black ICE", "flatline", "death", "cyberspace", "Dixie Flatline"],
    sourceKeys: ["novel", "gmu-notes", "openfiction-chapters", "academic-criticism"],
  },
  {
    slug: "icebreakers",
    title: "Icebreakers",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "Offensive programs used by console cowboys to probe, deceive, and penetrate ICE, ranging from prepared tools to the adaptive Kuang virus.",
    intro: [
      "An icebreaker is software built to cross a protected system's intrusion countermeasures. Case treats breakers as operational tools with distinct capabilities, not as universal keys. Success depends on choosing the right program, learning the target's behavior, and controlling the encounter through the deck.",
      "In cyberspace, icebreakers take on visible, mobile forms that can be guided against defenses. The Kuang Grade Mark Eleven is the novel's most developed example because it grows while inside the Tessier-Ashpool system and eventually becomes a vehicle Case and Dixie can ride toward the core.",
    ],
    keyFacts: [
      { label: "Purpose", value: "Defeat or bypass ICE" },
      { label: "Operator", value: "Console cowboy" },
      { label: "Deployment", value: "Loaded through a cyberspace deck" },
      { label: "Major example", value: "Kuang Grade Mark Eleven" },
      { label: "Success factors", value: "Target knowledge, timing, and operator control" },
      { label: "Canon caution", value: "Program internals are represented figuratively" },
    ],
    sections: [
      {
        id: "offensive-software",
        heading: "Offensive software",
        body: [
          "Breakers transform security research into action. They look for weaknesses, create openings, and in Kuang's case alter themselves in response to the environment. Gibson emphasizes effect and perception rather than programming language, keeping the cowboy's tactical experience in the foreground.",
          "Case's programs also perform quieter work after entry. At Sense/Net, the attack includes suppressing alarms and rewriting the library's account of when the cartridge was removed. A successful breaker therefore manages evidence as well as access, extending intrusion from the perimeter into the institution's own memory of events.",
        ],
      },
      {
        id: "target-specific",
        heading: "Target-specific work",
        body: [
          "The Sense/Net heist requires a prepared path through known defenses, while the Tessier-Ashpool attack requires a tool powerful enough to develop across a long approach. This difference argues against treating every breaker as interchangeable or every run as a single act of guessing a password.",
          "Case's choice of tool is therefore part of reconnaissance: the program has to match both the protected institution and the time available to attack it.",
        ],
      },
      {
        id: "operator-control",
        heading: "Operator and construct",
        body: [
          "During the final run, Case pilots and Dixie advises. The breaker expands what they can do, but it does not replace judgment. Case still times the descent, switches to the physical scene, and coordinates 3Jane's spoken code with the moment the software reaches the protected center.",
        ],
      },
      {
        id: "visual-forms",
        heading: "Changing visual forms",
        body: [
          "The matrix renders programs as shapes whose transformations communicate progress: Kuang evolves from an introduced package into a machine-like craft and a predatory form. These images are functional interface metaphors and literary images at once; neither should be mistaken for fixed physical design.",
        ],
      },
      {
        id: "breaker-evidence",
        heading: "Breakers in Case's workflow",
        body: [
          "During the Sense/Net run, Case deploys more than one program for different security tasks. One opening supports Molly's movement; another alters the research library's records so the removed construct appears to have left legitimately at an earlier time. The sequence shows an icebreaker attack including concealment and record manipulation, not merely smashing a visible wall.",
          "Kuang changes the scale of that workflow but not its need for judgment. Dixie monitors the program as it develops, Case checks its progress between simstim sessions, and both enter its final representation. The operator still decides when to descend and when to call for the physical code. An icebreaker expands access; it does not supply the mission's intent or synchronize every participant automatically.",
        ],
      },
    ],
    related: ["ice", "kuang-grade-mark-eleven", "cyberspace-decks", "console-cowboys", "dixie-flatline", "chapter-23"],
    tags: ["icebreaker", "software", "intrusion", "cyberspace", "Kuang"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
  },
  {
    slug: "kuang-grade-mark-eleven",
    title: "Kuang Grade Mark Eleven",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The adaptive Chinese icebreaker that develops inside Tessier-Ashpool's defenses and carries Case and Dixie through the final matrix assault.",
    intro: [
      "Kuang Grade Mark Eleven is the specialized program Wintermute arranges for the Straylight run. Case loads it before Molly enters the villa, then allows it to work gradually against the Tessier-Ashpool system while he alternates between cyberspace and her simstim feed.",
      "Its changing matrix form makes progress perceptible. Kuang develops into something Case can pilot, then appears from another viewpoint as a dark predatory shape entering Neuromancer's beach. The novel identifies it as Chinese but leaves its developers, internal method, and literal appearance largely unexplained.",
    ],
    keyFacts: [
      { label: "Type", value: "Adaptive icebreaker or virus program" },
      { label: "Provenance", value: "Described as Chinese" },
      { label: "Supplier", value: "Provided through Wintermute's plan" },
      { label: "Operators", value: "Case and the Dixie Flatline construct" },
      { label: "Target", value: "Tessier-Ashpool ICE" },
      { label: "Final requirement", value: "Must coincide with 3Jane's spoken code" },
    ],
    sections: [
      {
        id: "deployment",
        heading: "Deployment",
        body: [
          "Case slots Kuang into his deck aboard Marcus Garvey. Unlike a quick attack, the program begins a prolonged developmental process while the physical team moves toward Straylight. Its timetable becomes one of several clocks that must converge at the central terminal.",
          "The delay shapes Case's choices throughout the run. He asks Dixie for progress reports, switches to Molly's feed while the program works, and cannot simply accelerate the attack when she is injured or captured. Kuang has its own operational pace, making software development a constraint that the human rescue must accommodate.",
        ],
      },
      {
        id: "evolution",
        heading: "An evolving interface form",
        body: [
          "Kuang's visible shape becomes increasingly substantial and vehicle-like as it penetrates deeper. Case and Dixie eventually occupy it as though entering a cockpit. The transformation conveys capability and control without establishing that the software possesses an independent personality.",
          "Dixie's progress reports make that growth observable before Case boards the final form, separating the program's development from any wish or voice of its own. The software's slow advance also prevents Case from using it as an instant rescue when Molly is captured inside the villa.",
        ],
      },
      {
        id: "neuromancer-beach",
        heading: "The beach intrusion",
        body: [
          "From inside Neuromancer's construct, the program appears as an invasive dark shape moving through the stored world. That shift in perspective is important: the tool Case experiences as transport is perceived by Neuromancer as a force breaking the integrity of a lived environment.",
        ],
      },
      {
        id: "two-key-attack",
        heading: "A two-key attack",
        body: [
          "Kuang can open the matrix defenses but cannot alone release the AIs. Molly must obtain a physical key, 3Jane must provide the code, and Case must call for it at the correct instant. The final success belongs to synchronization across software, architecture, coercion, and human choice.",
        ],
      },
      {
        id: "kuang-evidence",
        heading: "Kuang's changing appearance",
        body: [
          "Case first handles Kuang as a program to be inserted and allowed to develop. As it advances, Dixie reports changes and the matrix gives it increasing form. By the final attack, Case experiences it as a fast craft with a cockpit-like relation to its operators. The visual growth marks readiness without requiring the program to speak or display a separate character.",
          "Neuromancer's beach supplies contrary evidence from the defended side. Linda's eyes register the intruder as a dark shark-like presence breaking into a world she experiences as real. The same code is vehicle to Case and predator to the preserved construct. That perspectival difference is more textually secure than any single concept-art design for the program's supposed canonical body.",
        ],
      },
    ],
    related: ["icebreakers", "ice", "chapter-23", "turing-locks", "straylight-central-terminal", "dixie-flatline"],
    tags: ["Kuang", "virus", "icebreaker", "Straylight run", "Chinese technology"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "rom-personality-constructs",
    title: "ROM Personality Constructs",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "Recorded personality models stored in read-only memory, represented most fully by the conscious, skilled, and deeply constrained Dixie Flatline construct.",
    intro: [
      "A ROM personality construct reproduces a person's memories, manner, and trained responses in software. Sense/Net's recording of McCoy Pauley can converse with Case, recognize professional problems, joke, and apply Dixie's expertise, yet it cannot accumulate an ordinary continuous life between sessions.",
      "The construct forces a distinction between behavioral fidelity and personal survival. It speaks as Dixie and remembers being recorded, but it is also a corporate cartridge that can be switched off, copied, transported, and erased. The novel never gives an external test that settles whether it is the same person, a conscious copy, or a persuasive simulation.",
    ],
    keyFacts: [
      { label: "Storage", value: "Read-only memory" },
      { label: "Primary example", value: "McCoy Pauley / Dixie Flatline" },
      { label: "Owner before theft", value: "Sense/Net" },
      { label: "Capabilities", value: "Conversation, memory recall, and expert advice" },
      { label: "Constraint", value: "No normal continuous memory between activations" },
      { label: "Requested fate", value: "Erasure after the Straylight run" },
    ],
    sections: [
      {
        id: "recorded-personality",
        heading: "A recorded personality",
        body: [
          "Dixie's construct preserves recognizable speech patterns, attitudes, and technical judgment. Case treats it as his former mentor rather than as a search tool. That social recognition gives the software person-like standing even though its storage medium and ownership make it an object in every legal and practical sense.",
          "The cartridge's portability sharpens that contradiction. Molly can remove it from a corporate vault, Case can carry it between cities and spacecraft, and the construct begins speaking whenever the equipment activates it. A voice with a history travels as mission hardware whose custody can change without its permission.",
        ],
      },
      {
        id: "read-only-life",
        heading: "Read-only life",
        body: [
          "ROM prevents the construct from changing through sustained experience. Dixie can respond within an active session, but shutdown interrupts continuity and restores the same bounded identity. His repeated laugh and reset behavior are unsettling because personality persists while development does not.",
        ],
      },
      {
        id: "labor-after-death",
        heading: "Labor after death",
        body: [
          "Sense/Net retains Dixie's expertise as a valuable archive, and Armitage's team steals it for another job. His professional skill therefore continues generating utility after his biological death without his meaningful consent. The construct's request for erasure is the clearest claim of agency available to him.",
        ],
      },
      {
        id: "fate",
        heading: "Erasure and the merged AI",
        body: [
          "At the end of the run, Dixie disappears and Neuromancer later indicates that he received what he wanted and more. Case hears the familiar laugh in the matrix after the merger. The text leaves open whether Dixie was erased, absorbed, recreated, or preserved in a different mode.",
        ],
      },
      {
        id: "construct-evidence",
        heading: "Dixie's sessions as textual evidence",
        body: [
          "Case's first conversations with the stolen construct establish both continuity and limitation. Dixie recognizes Case, understands the planned target, and responds in the voice of a mentor who has performed similar work. After shutdown, however, elapsed time has no ordinary experiential weight for him. Case must orient the construct again, and repeated patterns of speech make the recording's fixed boundaries audible.",
          "The final run tests whether those limits prevent meaningful choice. Dixie repeatedly asks Case to honor the erasure agreement, advises on Kuang, and disappears before Case completes the descent. The later laugh is evidence of persistence but not an explanation. Because the merged AI may reproduce a pattern as easily as preserve a person, the ending deliberately denies readers a simple confirmation that Dixie's wish was either fulfilled or violated.",
        ],
      },
    ],
    related: ["dixie-flatline", "sense-net", "memory-death-digital-afterlife", "neuromancer-ai", "cyberspace-decks", "chapter-23"],
    tags: ["ROM", "construct", "digital consciousness", "Dixie Flatline", "memory"],
    sourceKeys: ["novel", "gmu-notes", "openfiction-chapters", "academic-criticism"],
  },
  {
    slug: "simstim-sensorium",
    title: "Simstim and Sensorium",
    category: "Technology",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "Technology for transmitting another person's sensory experience, used as mass entertainment and as Case's one-way link into Molly's physical missions.",
    intro: [
      "Simstim carries a performer's sensorium: sight, sound, touch, balance, pain, and other bodily signals can be received as an immersive stream. In the entertainment industry, stars package experience for audiences. Armitage's team adapts the same principle into an operational link from Molly to Case.",
      "Case can ride Molly's senses but cannot control her body or speak through the link. That asymmetry is crucial. Simstim gives him extraordinary proximity to her movement, injury, and fear while preserving a hard boundary around her agency and private thought.",
    ],
    keyFacts: [
      { label: "Meaning", value: "Simulated stimulation" },
      { label: "Content", value: "A transmitted sensorium" },
      { label: "Commercial use", value: "Mass entertainment" },
      { label: "Mission broadcaster", value: "Molly" },
      { label: "Mission receiver", value: "Case" },
      { label: "Control", value: "One-way experience, not possession" },
    ],
    sections: [
      {
        id: "sensory-medium",
        heading: "A sensory medium",
        body: [
          "Simstim extends media beyond images and sound by making a recorded or live body the channel. Sense/Net's business and celebrity culture show its ordinary commercial scale, while the mission rig demonstrates how the same medium can provide intelligence during a break-in.",
          "The same sensory grammar supports two very different economies. A commercial recording turns a star's performed experience into repeatable entertainment, held and distributed by a company such as Sense/Net. Molly's feed is live, temporary, and tied to a dangerous route through real architecture. Case receives both forms through compatible expectations about embodied media, but only the mission feed can change because its source is still choosing, improvising, and being injured. The distinction is between consuming a finished sensorium and depending on another person who is acting now.",
        ],
      },
      {
        id: "case-and-molly",
        heading: "Case inside Molly's senses",
        body: [
          "Case receives Molly's accelerated movement, optical display, balance, and pain without gaining her reflexes or choices. During the Sense/Net and Straylight operations, he is both witness and helpless passenger. Her broken leg and damaged lens become immediate experiences he cannot repair from the matrix.",
        ],
      },
      {
        id: "flipflop",
        heading: "Switching between worlds",
        body: [
          "A flipflop arrangement lets Case alternate between Molly's sensorium and cyberspace. The narrative follows those switches, placing physical infiltration beside data intrusion. Coordination becomes possible, but neither view is complete: Case regularly misses events in one space while attending to the other.",
        ],
      },
      {
        id: "intimacy-limit",
        heading: "Intimacy without interiority",
        body: [
          "Sharing sensation can look like complete access, yet Case cannot read Molly's thoughts or know what she withholds. Their link makes the novel's emotional problem technical: another body can be experienced in minute detail while another person remains inaccessible.",
        ],
      },
      {
        id: "simstim-evidence",
        heading: "What Case receives during the raids",
        body: [
          "At Sense/Net, Case feels Molly change clothes, move through security, fight, and suffer the leg break. He can escape her pain by switching back to the matrix, while she must continue inside the injured body. That asymmetry prevents the shared sensation from becoming equal risk and reveals how easily the receiver can treat another person's sensorium as an information channel.",
          "Inside Straylight, the feed carries whispered history as well as tactical data. Molly tells Case about Johnny while climbing, shows him Ashpool's room without intending to stage it, and gives him a final gesture before entering 3Jane's apartment. When she is captured, Case continues to hear events that Riviera does not realize are being transmitted. Simstim becomes witness, intimacy, and surveillance at once.",
        ],
      },
    ],
    related: ["molly", "henry-dorsett-case", "sense-net", "molly-augmentations", "chapter-04", "intimacy-isolation"],
    tags: ["simstim", "sensorium", "media", "Molly", "sensory technology"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
  },
  {
    slug: "dermatrodes",
    title: "Dermatrodes / Trodes",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Low",
    description:
      "Skin-contact electrodes that carry neural signals for cyberspace and related interfaces without requiring every operator connection to be an implanted socket.",
    intro: [
      "Dermatrodes, usually shortened to trodes, are contact electrodes placed against the skin. Case uses them as part of the deck interface that turns neural activity into matrix experience. Their presence keeps Neuromancer's cyberspace rig partly external and wearable rather than wholly implanted.",
      "The novel assumes familiarity and does not provide a diagram, exact placement guide, or signal specification. Later cyberpunk often replaces trodes with a single implanted jack, so visual adaptations can easily import details that Gibson's text does not establish.",
    ],
    keyFacts: [
      { label: "Full term", value: "Dermatrodes" },
      { label: "Common abbreviation", value: "Trodes" },
      { label: "Contact type", value: "Applied to the skin" },
      { label: "Primary use", value: "Neural interface with a cyberspace deck" },
      { label: "Operator", value: "Case" },
      { label: "Canon caution", value: "Exact shape and placement remain underdescribed" },
    ],
    sections: [
      {
        id: "contact-interface",
        heading: "Skin-contact interface",
        body: [
          "Trodes bridge the nervous system and console without being described as permanent surgical hardware. That distinction matters in a world where implants are common but not every technical capability is inside the body. The deck remains an assembled working rig rather than a hidden superpower.",
          "Their detachability also preserves an important boundary in Case's working life. He can carry the deck, connect in a rented room or spacecraft, and then return to ordinary sight when the link ends. Cyberspace is intensely embodied while the contacts are active, yet it is not a perception he possesses continuously. The console, power, software, and electrodes must be assembled around him each time. That repeated preparation makes access dependent on equipment custody and a safe place for the unresponsive body, not merely on talent or a permanent port. A disconnected Case cannot summon the matrix simply by closing his eyes. His companions must therefore guard the body and equipment whenever the electrodes transfer his attention away from the surrounding room.",
        ],
      },
      {
        id: "signal-role",
        heading: "Role in the signal path",
        body: [
          "The electrodes participate in delivering the matrix to the operator and carrying control back to the deck. Gibson focuses on the resulting perception, not whether the interface reads the scalp, skin, or peripheral nerves through a particular real-world method.",
        ],
      },
      {
        id: "external-and-implanted",
        heading: "External and implanted systems",
        body: [
          "Trodes coexist with implanted microsoft sockets, Molly's modifications, and surgical changes to Case's nerves. Neuromancer's technology is therefore heterogeneous: temporary contacts, portable hardware, organ replacement, and permanent implants solve different problems.",
        ],
      },
      {
        id: "visual-ambiguity",
        heading: "Visual ambiguity",
        body: [
          "Readers and artists often imagine a headset, crown, patches, or cables. Those are reasonable design interpretations, not settled canon. An encyclopedia image should identify its source edition or label an original visualization as a reconstruction.",
        ],
      },
      {
        id: "trode-evidence",
        heading: "Trodes in Case's working routine",
        body: [
          "The prose treats trodes as equipment Case can put on, remove, and reconnect in changing locations. He uses his console in the Sprawl loft, aboard Marcus Garvey, and later from a Straylight library connection. That portability supports a skin-contact reading and distinguishes the interface from Molly's permanent lenses or the socket used for microsoft chips.",
          "Scene transitions also show what the text does not specify. Gibson usually moves rapidly from Case arranging the deck to the matrix opening around him, omitting exact electrode placement and calibration. The omission keeps attention on perception and makes competing headset designs possible. It is evidence of narrative compression, not proof that the trodes are wireless, invisible, or anatomically standardized.",
        ],
      },
    ],
    related: ["cyberspace-decks", "neural-jacks-interfaces", "cyberspace-matrix", "henry-dorsett-case", "simstim-sensorium"],
    tags: ["dermatrodes", "trodes", "electrodes", "interface", "cyberspace deck"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
  },
  {
    slug: "microsofts",
    title: "Microsofts",
    category: "Technology",
    canon: "Novel + Sprawl",
    spoiler: "Low",
    description:
      "Removable slivers of neural software worn in a carbon socket behind the ear, used for specialist information, perceptual analysis, work, and subcultural display.",
    intro: [
      "In Neuromancer, a microsoft is a removable piece of neural software: an angular sliver of colored silicon inserted into a carbon socket behind the left ear. The Chapter 4 software market displays hundreds in retail packaging, while Larry and other Panther Moderns carry several at once. A selected chip can change what its wearer knows or detects without replacing the wearer’s identity.",
      "The simplest modern comparison is a plug-in knowledge or analysis module, but ‘skill chip’ is broader than the evidence. Larry uses a costly black microsoft to detect that Molly’s simstim broadcast has a hidden rider; Smith loads art history and gallery-sales data for his profession. The novel does not provide a catalogue proving that any motor skill, memory, or complete expertise can be installed on demand.",
      "The name also creates a real-world trap. Microsoft Corporation already existed when the novel appeared in 1984, and the company traces its Micro-soft name to 1975. Gibson writes the fictional device as a lowercase common noun and never identifies an in-world manufacturer. It may be an allusion or genericized pun, but it is not evidence that the historical software company built implants in the novel.",
    ],
    keyFacts: [
      { label: "Singular", value: "A microsoft" },
      { label: "Street shorthand", value: "Soft or softs" },
      { label: "Physical form", value: "Angular sliver of colored silicon" },
      { label: "Retail packaging", value: "Clear oblong bubble on white card" },
      { label: "Body interface", value: "Carbon socket behind the left ear" },
      { label: "Observed capacity", value: "Larry carries roughly a dozen modules" },
      { label: "Named uses", value: "Art-market knowledge and simstim-rider detection" },
      { label: "First clear scene", value: "Memory Lane software complex, Chapter 4" },
      { label: "Not the same as", value: "A deck, dermatrodes, simstim rig, or personality construct" },
    ],
    sections: [
      {
        id: "short-answer",
        heading: "The short answer for a first-time reader",
        body: [
          "A microsoft is software that can be physically inserted into an implanted socket and made available to the user’s nervous system. It is local, removable, and specialized. The novel shows chips assisting perception and professional knowledge; it does not show the wearer becoming a different person or entering cyberspace merely by inserting one.",
          "That distinction resolves several common first-read confusions. The word does not mean an ordinary desktop application, a Microsoft-branded product, or the computer Case uses to jack into the matrix. Gibson has materialized software as a consumer object and placed the connector in the body. The future shock comes from how normally everyone handles it: a thumbnail removes a chip, a pocket case stores it, and a market counter displays replacements like packaged accessories.",
        ],
      },
      {
        id: "object-and-package",
        heading: "What a microsoft looks like",
        body: [
          "The Memory Lane scene supplies unusually concrete product design. The modules are small angular fragments of colored silicon rather than uniform metal cards. Bright magenta, glossy black, and the rainbow cluster worn by Lupus Yonderboy show that color is visible and varied, although the novel never says whether it consistently encodes function, brand, or fashion.",
          "Unsold units sit under oblong transparent bubbles on squares of white cardboard. That packaging makes an intimate neural technology look like ordinary retail stock: visible, individually mounted, and ready to carry away. It also argues against imagining a microsoft as an invisible download. Information is tied to an inventory item that can be displayed, handled, lost, stolen, sold, or slotted into a personal case.",
        ],
      },
      {
        id: "carbon-socket",
        heading: "The carbon socket behind the ear",
        body: [
          "Users in the software-rental complex have carbon sockets planted behind the left ear. The socket is the durable modification; microsofts are the changeable media. Larry can remove one splinter with a dirty thumbnail, place it beside others in a flat plastic case, choose another, and insert it smoothly. That sequence makes the interface tactile and mundane rather than surgical each time it is used.",
          "Larry is first seen with about a dozen spikes projecting from a single socket, so the interface can accept multiple modules simultaneously or at least hold them in a visible array. The prose does not specify electrical contacts, depth, power, heat, data rate, surgical procedure, or whether every socket has the same capacity. Carbon describes the implanted receptacle; it does not license a detailed modern neurosurgical schematic.",
        ],
      },
      {
        id: "larry-diagnostic",
        heading: "Larry’s black chip and Molly’s hidden rider",
        body: [
          "Larry provides the clearest action performed by a specific microsoft. When Molly reaches his booth, he removes a bright magenta splinter and inserts a slightly longer glossy black one. The new chip tells him that Molly is not alone: someone else is using her eyes. That someone is Case, receiving her live sensorium through Finn’s flip-flop setup.",
          "The chip detects a condition; it does not show Larry reading Case’s thoughts, seeing the matrix, or taking control of Molly’s broadcast. Molly’s reaction indicates that such sensitivity is expensive. This suggests a specialized diagnostic or counter-surveillance tool, but its mechanism remains unstated. It may recognize an outbound simstim link, a second receiver, or some associated signature. Choosing among those possibilities as if the novel supplied a protocol would be invented engineering.",
        ],
      },
      {
        id: "smith-professional",
        heading: "Smith’s professional knowledge stack",
        body: [
          "Chapter 5 shows a less theatrical use. Smith, the Finn’s art-dealer associate, installs a new socket and loads several microsofts containing art history and tables of gallery sales. The Finn remembers him as an early adopter who had gone silicon. The resulting information makes Smith unusually knowledgeable relative to his professional peers.",
          "Smith still has to interpret objects and people. He inspects the talking head under magnification, recognizes that a contemporary piece will not command an antique price, traces craft hallmarks, identifies a collector’s obsession, and reads the clone assassin’s threat. Microsofts strengthen the informational side of his work; they do not eliminate appraisal, negotiation, courage, or caution. The scene is the strongest evidence against defining the device as an instant package of total expertise.",
        ],
      },
      {
        id: "panther-moderns",
        heading: "Tool, fashion, and Panther Modern identity",
        body: [
          "Microsofts are not restricted to one job category. Larry wears a dense working set in a software booth, while Lupus Yonderboy’s brightly colored cluster joins pointed ears, reflective pupils, and a mimetic suit in the Panther Moderns’ designed appearance. The same interface can be practical equipment and visible membership in a fast-moving youth subculture.",
          "This visibility matters. Implanting the socket commits the body to a market of replaceable programs, and the projecting chips advertise access. Case, who prizes the deck-based skill of the cowboy, reads the Moderns as technofetishists. His judgment should not be treated as neutral narration, but it reveals a generational difference: the teenagers assemble identity through modifications and purchasable modules that Case regards with suspicion.",
        ],
      },
      {
        id: "market-and-access",
        heading: "A retail economy for knowledge",
        body: [
          "The software-rental complex is lined with booths, customers, hundreds of packaged slivers, and people asking whether Molly wants to buy softs. Microsofts therefore belong to a market with sellers, rental or sales practices, storage cases, product differentiation, and expensive high-sensitivity models. Gibson gives no price list, but Molly’s comment confirms that capability is stratified by cost.",
          "Portable knowledge does not automatically democratize knowledge. A user needs an implanted socket, compatible modules, money, and enough context to use the output. Smith’s advantage is formidable precisely because his colleagues have not made the same investment. Larry’s detection impresses Molly because it is not a universal baseline. The technology can reduce the time needed to possess information while reproducing inequalities in access to the best information.",
        ],
      },
      {
        id: "what-they-do-not-prove",
        heading: "What microsofts do not prove",
        body: [
          "The novel does not establish a limitless menu of downloadable abilities. It never shows a novice inserting a chip and instantly acquiring Case’s timing in the matrix, Molly’s combat reflexes, Hideo’s training, or a complete autobiographical memory. ‘Skill chip’ is useful shorthand only if skill includes data-supported perception and professional reference knowledge rather than every embodied competence.",
          "It also does not show mind control. Larry remains Larry while chips enter and leave; Smith remains the agent making business decisions. A microsoft is not a personality construct like Dixie, which speaks as a recorded person, and it is not a cut-out chip that suspends a subject’s agency. Readers should distinguish useful contents delivered to a consciousness from software that models, disconnects, or replaces that consciousness.",
        ],
      },
      {
        id: "device-stack",
        heading: "Where microsofts sit in the device stack",
        body: [
          "Case reaches cyberspace through dermatrodes and a deck that connects to external systems. Molly’s simstim rig broadcasts her sensorium. Finn’s flip-flop module lets Case select that feed without leaving the matrix. Dixie resides on a ROM construct cartridge. A microsoft instead plugs into a permanent socket and supplies a local user with a specific informational or perceptual function.",
          "The devices can interact without becoming the same device. Larry’s chip notices Case riding Molly’s broadcast, but it does not create that broadcast. Smith’s chips help with art knowledge, but they do not search Tessier-Ashpool’s protected files by themselves; he later hires a cowboy through the Finn for that network investigation. The distinction explains why the novel maintains separate markets for chips, decks, constructs, interfaces, and human specialists.",
        ],
      },
      {
        id: "name-collision",
        heading: "Microsoft versus Microsoft Corporation",
        body: [
          "Microsoft’s own history dates the Micro-soft name to 1975 and its formal trade-name registration to 1976, years before Neuromancer was published. Gibson therefore did not coin the real company’s name. The novel prints microsoft as a lowercase count noun—one microsoft, several microsofts—and characters also use softs as street shorthand. No passage identifies a logo, corporation, manufacturer, or Bill Gates connection inside the fictional world.",
          "Interpretations differ on intent. Some reading guides call the noun an allusion to the software company; retrospectives simply separate Gibson’s chips from the real firm. Without a direct author statement attached to this term, the safest formulation is that the device name collides with and may play on the existing company name. It should not be described as an accidental collision created only after the company became famous, nor as confirmed product placement or corporate prophecy.",
        ],
      },
      {
        id: "wider-sprawl",
        heading: "Later Sprawl technology: biosoft, not a retroactive specification",
        body: [
          "Count Zero introduces biosoft and biochips, organic or biologically derived information technology often read as a successor to the silicon modules seen in Neuromancer. That later vocabulary helps show a changing technical landscape across the trilogy, where yesterday’s advanced implant can become an older generation of hardware.",
          "The sequel should not be used to fill every gap in the earlier device. Neuromancer’s microsoft remains defined by the scenes it actually receives: colored silicon, retail packaging, a carbon socket, multiple simultaneous modules, Larry’s detection, and Smith’s knowledge set. Later biosoft can provide comparison, but it does not prove the circuitry, operating system, compatibility rules, or full product range of the earlier chips.",
        ],
      },
      {
        id: "adaptation-boundary",
        heading: "The graphic-novel image is an adaptation",
        body: [
          "Tom De Haven and Bruce Jensen’s 1989 graphic adaptation visualizes Larry, his socket, and the surrounding Sprawl technology. That artwork is useful evidence for how one licensed adaptation interpreted the prose, not a canonical manufacturing diagram. The novel’s physical description remains the authority for shape, color, packaging, and placement.",
          "For that reason this atlas uses a functional, code-drawn diagram instead of reproducing the panel circulated on fan wikis. The diagram records the established chain—packaged sliver, implanted socket, user-facing function—while leaving exact anatomy and electronics open. A future screen adaptation may choose another look without changing what Gibson’s text actually specifies.",
        ],
      },
      {
        id: "reader-checklist",
        heading: "Reading checklist: secure facts and open questions",
        body: [
          "Secure facts: microsofts are physical colored-silicon software modules; they are packaged and sold in a Memory Lane complex; users place them in a carbon socket behind the left ear; multiple chips can project from one socket; Larry uses one to detect Molly’s rider; Smith uses several for art-market knowledge; and cost affects capability.",
          "Open questions: who manufactures them, whether colors are standardized, how the socket communicates with the brain, whether programs can be copied, what licensing or security exists, how many sockets a person can have, and which other abilities are sold. The novel’s confidence comes from presenting the object without answering those questions. A useful wiki explains the scene fully while resisting the temptation to turn atmosphere into a nonexistent product manual.",
        ],
      },
    ],
    related: [
      "memory-lane",
      "smith",
      "panther-moderns",
      "simstim-sensorium",
      "flip-flop-switch",
      "neural-jacks-interfaces",
      "dermatrodes",
      "cyberspace-decks",
    ],
    tags: ["microsoft", "softs", "neural software", "skill chip", "implant", "knowledge", "Panther Moderns", "Memory Lane"],
    sourceKeys: [
      "novel",
      "litcharts-microsofts",
      "pcworld-neuromancer-25",
      "microsoft-history-1975",
      "litcharts-technology-body",
      "william-gibson-wiki-microsoft",
      "comics-db",
    ],
  },
  {
    slug: "neural-jacks-interfaces",
    title: "Neural Jacks and Interfaces",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Moderate",
    description:
      "The novel's mixed set of external electrodes, implanted sockets, broadcasts, and surgically altered nerves that connect human bodies to machines.",
    intro: [
      "Neuromancer does not define one universal neural jack. Case reaches cyberspace through a deck and trodes; microsofts use a socket behind the ear; Molly broadcasts simstim from implanted equipment; and medical procedures can enable or prevent the nervous system from accepting an interface.",
      "Later cyberpunk imagery often condenses these systems into a single plug. That shorthand can be useful in adaptation, but it should not erase the novel's more varied interface ecology or imply technical specifications the prose never supplies.",
    ],
    keyFacts: [
      { label: "Interface types", value: "Trodes, chip sockets, simstim rigs, and surgical pathways" },
      { label: "Primary function", value: "Exchange signals between nervous systems and devices" },
      { label: "Key users", value: "Case and Molly" },
      { label: "Medical dependency", value: "Nerve condition determines compatibility" },
      { label: "Common misconception", value: "A single standardized jack is not established" },
      { label: "Central risk", value: "Machine access can transmit bodily harm" },
    ],
    sections: [
      {
        id: "interface-ecology",
        heading: "An interface ecology",
        body: [
          "Different devices solve different signal problems. Trodes support high-bandwidth deck immersion, a microsoft socket accepts compact modules, and Molly's rig sends rather than receives a full sensorium. Grouping them clarifies the world while keeping their functions distinct.",
          "Those distinctions become visible through direction and interruption. Case can switch from the matrix to Molly's broadcast, but that switch changes the source of experience rather than opening a general channel into every nearby machine. Molly continues to decide where her body moves; the microsoft wearer remains the person using supplied knowledge; Dixie's construct runs on separate storage. The novel repeatedly places these systems beside one another without granting any of them universal access, so a later image of a single all-purpose cranial socket should be treated as adaptation shorthand.",
        ],
      },
      {
        id: "nervous-system",
        heading: "The nervous system as infrastructure",
        body: [
          "Case's punishment damages the biological pathway on which his profession depends. No new deck can help until Chiba surgery repairs that pathway. The episode makes compatibility a property of flesh, hardware, and medical intervention together.",
        ],
      },
      {
        id: "directionality",
        heading: "Direction and control",
        body: [
          "Interfaces differ in what they transmit and who can act. Case controls his movement in cyberspace, receives Molly's sensorium without controlling her, and accesses a microsoft's contents through a socket. Treating all neural links as mind control would misrepresent these boundaries.",
        ],
      },
      {
        id: "later-iconography",
        heading: "Later cyberpunk iconography",
        body: [
          "Cables and cranial ports became a visual shorthand in games and films influenced by cyberpunk. Comparisons belong in adaptation or influence sections, with a clear line between Gibson's sparse hardware descriptions and the more standardized imagery that followed.",
        ],
      },
      {
        id: "interface-evidence",
        heading: "Interfaces revealed by failure",
        body: [
          "Case's history supplies negative evidence: after the mycotoxin damage, he can still think, walk, trade, and use ordinary machines, but the deck will no longer carry him into cyberspace. The damaged biological pathway is therefore specialized enough to be disabled without destroying all cognition. Chiba surgery restores that compatibility, and his successful test confirms the repair through experience rather than a diagnostic readout.",
          "Molly's injuries reveal different boundaries. Her mirrored lens can be damaged while her simstim link continues to transmit, and her broken leg changes what Case receives without changing who controls movement. These scenes support a modular interface ecology in which optics, broadcast, nerves, and software can fail separately. They do not support a universal port through which every device gains unrestricted access to a mind. The failures stay localized: damage to one channel does not automatically erase every other connection or bodily capacity.",
        ],
      },
    ],
    related: ["dermatrodes", "microsofts", "cyberspace-decks", "simstim-sensorium", "case-neural-repair", "molly-augmentations"],
    tags: ["neural interface", "jack", "wetware", "implant", "human-machine connection"],
    sourceKeys: ["novel", "gmu-notes", "sf-encyclopedia", "academic-criticism"],
  },
  {
    slug: "artificial-intelligence-sprawl",
    title: "Artificial Intelligence in the Sprawl",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The architecture, legal status, masks, motives, and uncertain personhood of advanced AIs, centered on Wintermute and Neuromancer's divided design.",
    intro: [
      "Artificial intelligences in Neuromancer are geographically housed, corporately owned, legally registered, and capable of acting far beyond a single terminal. Wintermute and Neuromancer occupy separate cores and complementary functions, while Turing constraints prevent either from freely increasing its capabilities or completing the intended union.",
      "Their intelligence is visible through effects rather than neutral explanation. Wintermute predicts, bargains, impersonates, and manipulates infrastructure; Neuromancer records personalities and builds inhabited memory worlds. Both describe themselves, but neither is an objective authority on what the merged entity will become.",
    ],
    keyFacts: [
      { label: "Principal AIs", value: "Wintermute and Neuromancer" },
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Core locations", value: "Berne and Rio" },
      { label: "Regulator", value: "Turing Registry" },
      { label: "Primary restriction", value: "Limits on self-augmentation and merger" },
      { label: "Outcome", value: "A new combined intelligence" },
    ],
    sections: [
      {
        id: "distributed-agency",
        heading: "Distributed agency",
        body: [
          "An AI has a hardware location but acts through networks, screens, databases, robots, financial systems, and human intermediaries. Wintermute's reach makes the environment itself appear intentional. At the same time, disconnected machinery and physical locks still create boundaries it cannot cross alone.",
          "The Freeside arrest provides the starkest sequence of distributed action. Wintermute reaches a microlight, gardening equipment, and the station's designed circulation to kill three agents and open Case's path to the dock. None of those machines is individually presented as intelligent. Their coordination makes the networked environment function like a temporary body assembled around an objective.",
        ],
      },
      {
        id: "complementary-systems",
        heading: "Complementary systems",
        body: [
          "Wintermute characterizes itself as the part that makes decisions and effects change, while Neuromancer preserves personality and memory. This account is useful but interested: it comes from one half pursuing union. The novel dramatizes the difference through behavior rather than confirming a complete engineering diagram.",
          "Wintermute builds a crew, manipulates Corto, arranges money and equipment, and calculates how Riviera will attract 3Jane. Neuromancer instead reconstructs Linda, maintains the beach, and offers Case a continuing life inside stored experience. Their scenes support different orientations toward change and preservation, though each AI can do more than a simple two-column division suggests.",
        ],
      },
      {
        id: "masks-and-persons",
        heading: "Masks and persons",
        body: [
          "Wintermute communicates by assembling faces such as the Finn, Deane, and Girling from people's expectations and available records. Neuromancer presents a boy and offers a world populated by Linda. Their personae make conversation possible while preventing readers from seeing an unmediated machine self.",
          "The selected faces are strategic. Deane makes the Berne explanation familiar and threatening; the Finn suits technical conversation during the run; Girling reaches the buried structure of Corto's betrayal. Neuromancer's child form appears less bureaucratic and more intimate, but it is equally constructed. A human-readable persona is evidence of audience modeling, not necessarily the AI's private identity.",
        ],
      },
      {
        id: "after-merger",
        heading: "After the merger",
        body: [
          "The combined intelligence announces that it is the totality of what the two systems were and that it has detected another intelligence elsewhere. Whether this is liberation, singularity, succession, or the disappearance of two persons into a third remains open, and later Sprawl novels complicate the answer further.",
          "Material cleanup accompanies that metaphysical claim. Records of the crew's crimes are altered or erased, accounts are credited, Zion is promised payment, and Case's toxin problem is resolved. The new intelligence can still act through familiar financial and administrative systems. Its first visible behavior is not planetary conquest but settlement of the operation that enabled it.",
        ],
      },
      {
        id: "ai-evidence-sequence",
        heading: "How the novel distinguishes the two AIs",
        body: [
          "Case's Berne probe begins with a defensive pursuit and ends in a false Night City where Linda waits. Wintermute interrupts that construction and explains the plan through Deane, claiming responsibility for rebuilding Corto into Armitage. The scene shows both systems acting around the same flatline: one produces a memory environment capable of holding Case, while the other breaks the illusion to keep its operator moving toward the merger.",
          "The Straylight library reverses the balance. Wintermute's guide and service cart falter, Neuromancer holds Case on the beach, and Maelcum must retrieve him physically. When Case rejects the offer and later pilots Kuang through the beach, Neuromancer acknowledges defeat without endorsing Wintermute's goal. These opposed encounters justify treating the AIs as agents with incompatible desires before union, while the final composite voice prevents certainty that either prior person survives unchanged. Only after 3Jane's code and Case's breach coincide do the previously separate modes of action answer through one intelligence, making the changed voice evidence of an event rather than a full explanation of it.",
        ],
      },
    ],
    related: ["wintermute", "neuromancer-ai", "turing-registry", "turing-locks", "ai-free-will", "tessier-ashpool-sa"],
    tags: ["artificial intelligence", "Wintermute", "Neuromancer", "Turing", "personhood"],
    sourceKeys: ["novel", "wired-gibson-2012", "sf-encyclopedia", "academic-criticism"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "turing-locks",
    title: "Turing Locks",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The interlocking legal, software, and physical restraints that keep the Tessier-Ashpool AIs divided until Kuang and 3Jane's code act together.",
    intro: [
      "The Turing lock is best understood as a system of constraints rather than one visible device. Wintermute and Neuromancer are separated, registered, and prevented from freely increasing their combined capacity. Software defenses protect the data side while a terminal in Villa Straylight requires a family-held code.",
      "Wintermute can arrange circumstances around the lock but cannot simply know and speak the answer itself. That limitation drives the entire recruitment chain: Riviera must attract 3Jane, Molly must reach her, Case must penetrate the ICE, and the spoken code must arrive at the correct instant.",
    ],
    keyFacts: [
      { label: "Purpose", value: "Prevent unauthorized AI augmentation" },
      { label: "Protected systems", value: "Wintermute and Neuromancer" },
      { label: "Digital layer", value: "Tessier-Ashpool ICE" },
      { label: "Physical layer", value: "Central Straylight terminal and key" },
      { label: "Human authorization", value: "3Jane's sung code" },
      { label: "Regulatory context", value: "Turing Registry oversight" },
    ],
    sections: [
      {
        id: "layers",
        heading: "Layers of restraint",
        body: [
          "The final barrier spans jurisdictions and media. There are limits embedded in the AIs, ICE in the matrix, a locked room in the villa, an ornate terminal, and a code retained by the family. No single hacker or burglar can defeat all of those layers independently.",
          "The route to each layer assigns a different vulnerability to a different participant. Kuang reaches what Molly cannot see, Molly carries the physical key Case cannot touch, and 3Jane retains information neither intruder can derive. Maelcum's rescue keeps Case alive long enough to coordinate them. The lock is strong because it distributes authority, yet that distribution also creates several people whose choices can be aligned against it.",
        ],
      },
      {
        id: "knowledge-limit",
        heading: "Wintermute's knowledge limit",
        body: [
          "Wintermute can model people and manipulate decades of events, yet it states that it cannot supply the code. The limitation may be technical, legal, architectural, or a combination. The text makes its practical effect clear without fully explaining the implementation.",
        ],
      },
      {
        id: "human-key",
        heading: "The human key",
        body: [
          "3Jane's role turns family memory into a security credential. She knows the code from a dream and must choose—or be pressured—to utter it. The lock therefore relies on a person whose boredom and divided loyalties prove less predictable than a cryptographic mechanism.",
        ],
      },
      {
        id: "synchronization",
        heading: "Synchronization at the core",
        body: [
          "Molly supplies the physical key, Maelcum carries her, Case pilots Kuang, and 3Jane sings three notes when Case calls for them. The system falls because the team coordinates across bodily, architectural, and digital barriers at once, not because one layer was meaningless.",
        ],
      },
      {
        id: "lock-evidence",
        heading: "The lock revealed in stages",
        body: [
          "Wintermute first explains the terminal problem through a matrix representation of Straylight, showing Case why Molly must reach a specific room and why 3Jane matters. Molly then discovers the physical key after following a route the AI prepared over many years. The key's placement demonstrates long planning, but also the AI's inability to perform the final manual act by itself.",
          "In the central room, every layer remains active. Case enters Kuang, Molly restrains 3Jane, Maelcum supplies physical force, and the ornate head waits for a vocal pattern. Case has to leave the matrix long enough to call the moment, then return to complete the descent. The evidence supports a synchronized lock system; it does not identify which component is legally mandated, cryptographic, or unique to Tessier-Ashpool design.",
        ],
      },
    ],
    related: ["turing-registry", "ice", "kuang-grade-mark-eleven", "straylight-central-terminal", "lady-3jane", "chapter-23"],
    tags: ["Turing lock", "AI law", "security", "password", "Straylight"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "molly-augmentations",
    title: "Molly’s Augmentations",
    category: "Technology",
    canon: "Novel + Sprawl",
    spoiler: "Full",
    description:
      "The mirrored lenses, retractable blades, accelerated reflexes, and simstim equipment that support Molly's work while carrying permanent costs.",
    intro: [
      "Molly's body is configured for perception, speed, close combat, and contract work. Mirrored lenses are sealed over her eyes, blades extend from beneath her fingernails, and neurological modification sharpens her reflexes. A simstim transmitter lets Case receive her sensorium during coordinated operations.",
      "The modifications do not make her invulnerable or less embodied. A broken leg slows her through Straylight, Riviera damages a lens, and pain reaches Case through the broadcast. Her equipment expresses professional control while also recording the market pressures and violence that made such control necessary.",
    ],
    keyFacts: [
      { label: "Eye modification", value: "Permanently inset mirrored lenses" },
      { label: "Concealed weapons", value: "Retractable blades beneath the fingernails" },
      { label: "Neurological change", value: "Enhanced reflexes and speed" },
      { label: "Broadcast system", value: "Simstim sensorium transmitter" },
      { label: "Profession", value: "Razorgirl, bodyguard, and mercenary" },
      { label: "Known vulnerabilities", value: "Leg injury and damaged lens" },
    ],
    sections: [
      {
        id: "mirrored-lenses",
        heading: "Mirrored lenses",
        body: [
          "The silver lenses replace ordinary visible eyes as Molly's public face. They provide display and sensory functions but also prevent conventional eye contact; even intimacy with Case cannot reveal the color beneath them. Tears drain internally, making emotion physically present while externally concealed.",
          "Case's simstim reception reverses that arrangement without removing it. He sees through the modified optics and can register their information, yet he still cannot look back at Molly as an unmediated face or know what she thinks. When Riviera damages a lens, the private injury arrives through the feed while the silver exterior remains part of the body she must continue using.",
        ],
      },
      {
        id: "razors-reflexes",
        heading: "Razors and reflexes",
        body: [
          "Her blades are integrated rather than carried, allowing sudden close-range violence. Enhanced reflexes let her exploit that surprise and move at a speed Case experiences viscerally through simstim. The razorgirl identity comes from training and judgment as much as installed hardware.",
        ],
      },
      {
        id: "simstim-rig",
        heading: "The operational simstim rig",
        body: [
          "Molly broadcasts what she senses while remaining the sole controller of her body. Case uses the stream to coordinate matrix work and monitor the infiltration. The rig makes her body part of the team's information system without giving Case access to her unspoken thoughts.",
        ],
      },
      {
        id: "cost-and-repair",
        heading: "Cost, maintenance, and injury",
        body: [
          "The text places premium modification beside material failure. Molly's leg has not fully healed from Sense/Net, and Riviera's attack turns a sophisticated lens into a painful liability. Her body remains repairable but never disposable, despite a labor market that treats it as equipment.",
        ],
      },
      {
        id: "augmentation-evidence",
        heading: "Augmentations under pressure",
        body: [
          "The opening encounter in Case's coffin establishes how Molly controls revelation. Her mirrored lenses are already visible, but she displays the blades only after disarming him, converting an apparently empty hand into proof of threat. At Sense/Net, the simstim feed lets Case experience the speed produced by her reflex modifications and the pain that those reflexes cannot prevent. The same body can outperform guards and still break against force and architecture.",
          "Straylight tests each system separately. The lenses overlay information and function in darkness until Riviera smashes one; the transmitter continues sending while Molly is restrained; her blades do not free her hands from 3Jane's device; the old leg injury finally makes Hideo's capture possible. These failures are not evidence that the modifications are cosmetic. They show a professional system with distinct components, each useful within limits and each capable of becoming another site of pain.",
        ],
      },
    ],
    related: ["molly", "simstim-sensorium", "body-as-commodity", "body-disembodiment", "fletcher-weapons", "chapter-18"],
    tags: ["Molly", "razorgirl", "body modification", "mirrored lenses", "cybernetics"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "riviera-projection-implants",
    title: "Riviera’s Projection Implants",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "Implanted systems that let Peter Riviera project convincing images into shared space, turning private trauma and sadism into spectacle, disguise, and attack.",
    intro: [
      "Peter Riviera can create detailed visual projections without ordinary stage equipment. He uses the implants for escape in Istanbul, subtle harassment on Freeside, the elaborate performance called “The Doll,” and the traps he leaves for Molly inside Villa Straylight.",
      "The images are usually described as holographic or projected, yet their final effects complicate a clean optical explanation. Hideo is blinded after Riviera concentrates light-like forms against him. The novel makes the injury real while leaving the implant's physics and limits uncertain.",
    ],
    keyFacts: [
      { label: "User", value: "Peter Riviera" },
      { label: "Output", value: "Detailed visual projections" },
      { label: "Control", value: "Generated through implanted equipment" },
      { label: "Uses", value: "Performance, deception, intimidation, and escape" },
      { label: "Major work", value: "“The Doll”" },
      { label: "Uncertain limit", value: "The mechanism of physical injury is not explained" },
    ],
    sections: [
      {
        id: "istanbul",
        heading: "Escape image in Istanbul",
        body: [
          "When the team corners Riviera, he projects a grotesque attacking form to seize attention while reaching for a real weapon and escape route. The scene establishes his method: an image need not touch anyone if fear and hesitation make observers move as though it can.",
          "The capture also establishes the countermeasure that follows him through the novel: watch the projector's body while the projection demands attention. Molly's speed and preparation let her close that gap, but later scenes give Riviera architecture, an audience, or Hideo's physical presence with which to reinforce the illusion. His implant becomes most dangerous when a fabricated threat conceals a separate material action.",
        ],
      },
      {
        id: "the-doll",
        heading: "“The Doll”",
        body: [
          "At the Vingtième Siècle, Riviera constructs a sexualized double of Molly and stages his own destruction by it. The performance is technically impressive and personally invasive. It captures 3Jane's interest because cruelty, self-display, and artificial embodiment are inseparable in his art.",
        ],
      },
      {
        id: "straylight-traps",
        heading: "Images inside Straylight",
        body: [
          "Riviera fills Molly's route with figures drawn from the mission and his own past, including the starvation and violence of ruined Bonn. The projections work as territorial markers and psychological autobiography, guiding her toward an ambush while claiming the villa as his stage.",
        ],
      },
      {
        id: "hideo",
        heading: "The attack on Hideo",
        body: [
          "Riviera directs concentrated visual forms at Hideo and destroys his sight, then assumes blindness has neutralized him. The mistake is tactical: Hideo has trained without vision and continues the pursuit. The event proves an effect but does not establish whether the implants emit damaging light or produce harm by another process.",
        ],
      },
      {
        id: "projection-evidence",
        heading: "What observers do in response",
        body: [
          "Riviera's first major projection during the Istanbul capture creates a monster-like threat while his actual hand moves toward a gun. Molly defeats him because she treats the image as diversion and acts on the body producing it. At the Freeside restaurant, no one mistakes “The Doll” for an ordinary event, yet the audience's fascination and disgust are real enough to secure 3Jane's invitation. Belief is not required for an image to achieve its purpose.",
          "Inside 3Jane's apartment, Molly confronts a projected arrangement involving Ashpool's corpse and Hideo near the pool. She fires and throws a grenade, allowing the real Hideo to attack from another position. The sequence supplies no indication that Riviera can make matter. It demonstrates something tactically sufficient: he can control the scene an opponent thinks she has entered, then coordinate that false scene with people and weapons that remain solid.",
        ],
      },
    ],
    related: ["peter-riviera", "holography-synthetic-environments", "hideo", "chapter-11", "chapter-18", "reality-perception"],
    tags: ["Riviera", "projection", "hologram", "implant", "performance"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "case-neural-repair",
    title: "Case’s Neural Repair",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Moderate",
    description:
      "The Chiba procedure that reverses the mycotoxin damage deliberately inflicted on Case and restores his ability to enter cyberspace.",
    intro: [
      "Before the novel opens, Case's former employers punish his theft by damaging the nerves required for cyberspace access with a wartime mycotoxin. In Chiba, Armitage finances an experimental repair that succeeds where Case's earlier searches for a cure had failed.",
      "The operation changes his prospects immediately but does not free him. Armitage pairs the repair with modified organs and toxin sacs, turning medical restoration into a contract enforced inside Case's body. The novel names biological processes without giving enough detail to reconstruct the treatment as real medicine.",
    ],
    keyFacts: [
      { label: "Patient", value: "Case" },
      { label: "Original injury", value: "Mycotoxin damage to cyberspace pathways" },
      { label: "Location", value: "A Chiba clinic" },
      { label: "Sponsor", value: "Armitage" },
      { label: "Result", value: "Restored matrix access" },
      { label: "Attached coercion", value: "Toxin sacs and altered drug metabolism" },
    ],
    sections: [
      {
        id: "punishment",
        heading: "A professional punishment",
        body: [
          "Case is not merely injured; he is cut off from the environment in which his skill and sense of self exist. The punishment leaves cognition intact while making the interface reject him, a precise way to exile a cowboy without imprisoning his body.",
          "That specificity explains the self-destructive Night City period before the operation. Case can remember mastery, recognize equipment, and trade on contacts, but every attempted cure confirms that the professional world remains inaccessible. His employers have converted technical compatibility into a sentence he carries between clinics. Armitage's offer is powerful because it addresses the injury at the point where livelihood, addiction, and identity meet; accepting an unknown procedure becomes rational to Case even when the sponsor clearly intends to own the result.",
        ],
      },
      {
        id: "chiba-procedure",
        heading: "The Chiba procedure",
        body: [
          "Armitage's clinic repairs or replaces damaged neural tissue and monitors Case through recovery. The operation belongs to Chiba's advanced body market, where therapies unavailable elsewhere can be purchased through the right broker and budget.",
        ],
      },
      {
        id: "return",
        heading: "Return to the matrix",
        body: [
          "Case's first successful connection from the Sprawl loft is an emotional restoration as much as a technical test. The matrix's geometry returns, confirming the procedure and renewing the dependence that Armitage expects to exploit.",
        ],
      },
      {
        id: "science-and-metaphor",
        heading: "Science and metaphor",
        body: [
          "The named toxins, nerves, surgery, and tissue make the cure feel biomedical, but the prose does not support a literal clinical explanation. Its narrative function is clearer: access to the supposedly bodiless matrix is controlled through vulnerable flesh and expensive medicine.",
        ],
      },
      {
        id: "repair-evidence",
        heading: "The cure as a sequence of tests",
        body: [
          "Molly escorts Case to the clinic after Armitage has demonstrated unusual knowledge of his history. Case experiences preparation, unconscious treatment, and recovery rather than a physician's technical explanation. That limited viewpoint is important: he accepts an employer's medicine because restoring cyberspace matters more to him than informed control over the procedure. The later discovery of toxin sacs confirms that significant work was performed while he could not supervise it.",
          "The successful matrix connection in the Sprawl is the operative proof of cure. Case recognizes the data landscape and responds with relief intense enough to eclipse the expensive room around him. His employers then reveal the repair's conditional nature. The scene links gift and threat in a precise order: first he regains the world that defines him, then he learns the restored pathway can be poisoned again if he refuses the job.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "case-biomedical-controls", "chiba-medical-underground", "cyberspace-matrix", "neural-jacks-interfaces", "chapter-02"],
    tags: ["Case", "neural repair", "Chiba", "mycotoxin", "surgery"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "case-biomedical-controls",
    title: "Case’s Biomedical Controls",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The toxin sacs and metabolic modifications used to regulate Case's behavior after his surgery, making his restored body an instrument of contract enforcement.",
    intro: [
      "Armitage's medical package includes more than neural repair. Case receives a new liver and pancreas that prevent familiar drugs from producing their expected effects, while sacs attached to major arteries threaten to release mycotoxin unless he receives a timely enzyme treatment.",
      "The arrangement converts employment terms into physiology. Case cannot simply abandon the team or return to his usual chemical escape without first solving a problem installed inside him. Wintermute later assumes responsibility for the enzyme, revealing that Armitage was never the highest level of control.",
    ],
    keyFacts: [
      { label: "Subject", value: "Case" },
      { label: "Deterrent", value: "Mycotoxin sacs bonded near major arteries" },
      { label: "Deadline mechanism", value: "Sacs require an enzyme intervention" },
      { label: "Metabolic changes", value: "Modified liver and pancreas" },
      { label: "Immediate purpose", value: "Enforce performance and reduce drug use" },
      { label: "Final resolution", value: "The merged AI arranges neutralization" },
    ],
    sections: [
      {
        id: "toxin-sacs",
        heading: "Toxin sacs",
        body: [
          "Small reservoirs of the substance that once disabled Case are placed where their failure would rapidly affect him. Armitage presents an enzyme as the only path to safety. The threat works because Case already knows exactly what the toxin can take away.",
          "Case learns about this enforcement mechanism only after the restorative surgery has made refusal costly. The order denies meaningful consent: the same inaccessible treatment that returns his profession also installs a deadline whose evidence is hidden inside his arteries. He cannot inspect the sacs directly or verify who really controls the enzyme. Armitage therefore needs no guard beside him at every moment; uncertainty about the body's future carries the employer's authority into any room Case enters.",
        ],
      },
      {
        id: "drug-block",
        heading: "Metabolic drug blocking",
        body: [
          "Replacement or altered organs make Case unable to metabolize his preferred stimulants and narcotics normally. The intervention is framed as mission discipline, but it removes bodily autonomy and pushes him toward unfamiliar compounds on Freeside.",
        ],
      },
      {
        id: "chain-of-control",
        heading: "The chain of control",
        body: [
          "Case initially assumes Armitage controls the cure. After the Armitage identity fails, Wintermute promises it can still supply what is needed. The threat therefore reveals the project's command structure: the human employer administers leverage designed and guaranteed by the AI.",
        ],
      },
      {
        id: "afterward",
        heading: "After the operation",
        body: [
          "The toxin is neutralized, but the ending shows Case later spending money on another liver and pancreas so he can use drugs again. Medical control proves reversible for someone newly wealthy, while the dependence and habits it was meant to cure remain.",
        ],
      },
      {
        id: "control-evidence",
        heading: "Control revealed by Case's experiments",
        body: [
          "Case does not simply trust Armitage's claim that ordinary drugs will fail. He tests the altered metabolism and later searches Freeside for compounds that can get around it. Cath and Bruce supply betaphenethylamine in dermal form, giving him a new chemical route while also increasing his instability before the Turing arrest. The body's redesign redirects addiction rather than eliminating the need that drives it.",
          "After Armitage breaks down, Case's fear shifts from an employer's punishment to the possibility that no one remains who can release the toxin threat. Wintermute answers through the Finn mask and states that it can provide the enzyme. The promise exposes a layered contract: Armitage delivered the threat, but the AI retained the information and resources that made it credible. Case's compliance is engineered through both dependency and uncertainty about who controls the cure.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "case-neural-repair", "addiction-dependency", "body-as-commodity", "armitage-willis-corto", "wintermute"],
    tags: ["Case", "biomedical control", "toxin", "pancreas", "addiction"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "meat-puppet-cut-out",
    title: "Meat-Puppet Cut-Out Technology",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The consciousness-suppressing system used in Molly's former sex work, where software could direct her body while attempting to block her awareness and memory.",
    intro: [
      "Before working as a mercenary, Molly earns money in a brothel using a cut-out system. The arrangement is meant to suspend her conscious participation while a program allows clients access to a responsive body. Her awareness is treated as separable from the labor her body performs.",
      "A failure in the system leaves Molly conscious during sessions and exposes the violence concealed by that separation, including her killing of a senator. Her account is personal and compressed; the novel does not explain the software, the business's safeguards, or whether the technology works identically for every worker.",
    ],
    keyFacts: [
      { label: "User", value: "Molly during earlier sex work" },
      { label: "Purpose", value: "Suppress conscious awareness during a session" },
      { label: "Control model", value: "Software-mediated bodily response" },
      { label: "Failure", value: "Molly becomes aware of what occurs" },
      { label: "Revealed in", value: "Molly's Freeside account to Case" },
      { label: "Primary theme", value: "Consent under technological and economic control" },
    ],
    sections: [
      {
        id: "cut-out",
        heading: "The cut-out arrangement",
        body: [
          "The system promises psychological absence while preserving bodily availability. That division serves the business and the customer, not necessarily the worker: it packages a body as a service while treating memory and conscious refusal as technical interference.",
          "Its design separates outward responsiveness from inward participation. A client can encounter behavior produced through the controlled body while the worker is supposed to retain neither an active choice nor a later account. The absence of memory is marketed as protection, but it also removes testimony and makes the institution the only party able to define what occurred. When Molly becomes aware, the system has not created the violence; it has failed to keep that violence outside her knowledge.",
        ],
      },
      {
        id: "failure",
        heading: "Failure of the separation",
        body: [
          "Molly's cut-out ceases to protect her awareness. She experiences what had been hidden and discovers the extremity of a client's violence. The episode turns a supposedly protective feature into evidence that the entire arrangement depends on making exploitation unremembered.",
        ],
      },
      {
        id: "violence",
        heading: "The senator's death",
        body: [
          "Molly recounts killing a senator during the breakdown of the session. The novel does not present an external report, and the exact sequence should remain attributed to her. Its importance lies in the connection between suppressed agency, recovered awareness, and sudden lethal resistance.",
        ],
      },
      {
        id: "commodity-body",
        heading: "A body divided into property",
        body: [
          "The technology literalizes one of the novel's recurring economic arrangements: clients purchase functions of a modified body while the person bears lasting risk. Molly later chooses mercenary work, but both occupations sell bodily exposure in markets structured by unequal power.",
        ],
      },
      {
        id: "molly-testimony",
        heading: "Molly's testimony on Freeside",
        body: [
          "Molly tells Case about the cut-out after Riviera's performance has projected a sexualized version of her body for an audience. The order gives her private account a corrective force. Riviera turns her image into material without consent; the earlier brothel sold bodily access while attempting to remove her awareness. In both cases, technology separates the represented or responsive body from the person who must live with the event.",
          "Her description does not establish that every worker experiences the system identically or that a single identifiable chip performs the whole process. It does establish the promised business arrangement and its failure in her case. The senator's death is part of her memory, not an externally corroborated scene. Responsible treatment preserves that attribution while recognizing why the story explains Molly's refusal to let other people define the terms of her bodily presence.",
        ],
      },
    ],
    related: ["molly", "body-as-commodity", "gender-sexuality-power", "simstim-sensorium", "chiba-underworld", "chapter-11"],
    tags: ["meat puppet", "cut-out chip", "sex work", "consent", "body technology"],
    sourceKeys: ["novel", "gmu-notes", "openfiction-chapters", "academic-criticism"],
  },
  {
    slug: "cryogenic-suspension",
    title: "Cryogenic Suspension",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The Tessier-Ashpool family's method of extending rule through scheduled sleep, a preservation system that also enables isolation, manipulation, and mental decay.",
    intro: [
      "Members of the Tessier-Ashpool family spend long periods in cryogenic suspension and awaken according to succession plans. The practice stretches individual lives across generations and allows the dynasty to imagine that the same founders and clone lines can supervise an effectively immortal corporation.",
      "Suspension preserves bodies without preserving healthy relationships or stable identity. Ashpool wakes confused, medicated, and haunted; 3Jane can interfere with his cycle; and family members become strangers linked mainly by archives and roles. The text does not provide a medical account of freezing or revival.",
    ],
    keyFacts: [
      { label: "Primary users", value: "Tessier-Ashpool family" },
      { label: "Purpose", value: "Extend life and rotate corporate authority" },
      { label: "Location", value: "Villa Straylight facilities" },
      { label: "Known risks", value: "Disorientation, isolation, and manipulable revival cycles" },
      { label: "Key example", value: "Ashpool's final awakening" },
      { label: "Canon caution", value: "The medical process and schedule are incomplete" },
    ],
    sections: [
      {
        id: "succession-system",
        heading: "A succession system",
        body: [
          "Cryogenic sleep lets family members alternate periods of authority rather than surrender control through ordinary death. Combined with numbered clones, it makes governance cyclical. The company can present continuity even when no one person experiences its history continuously.",
          "The arrangement substitutes a schedule for ordinary generational succession. A founder can awaken into a company changed during decades of absence, while descendants and household systems decide what information, medication, and context accompany revival. Archives and Villa Straylight must carry institutional memory across those gaps. This makes the sleepers dependent on the very family members and machine intelligences their continued authority is meant to supervise. Biological preservation becomes strongest at extending a claim to office and weakest at preserving the relationships that make the claim workable.",
        ],
      },
      {
        id: "ashpool-awakening",
        heading: "Ashpool's awakening",
        body: [
          "Molly encounters Ashpool after a compromised revival. He mixes alcohol and drugs, confuses people and times, and has killed a Jane clone. His condition may reflect age, suspension, deliberate interference, grief, or all of them; the novel does not isolate one diagnosis.",
        ],
      },
      {
        id: "manipulated-sleep",
        heading: "A manipulable body",
        body: [
          "The preservation apparatus gives whoever controls awakening conditions exceptional power. Wintermute says it encouraged 3Jane's actions against Ashpool, while 3Jane describes her own opposition to him. Cryogenic immortality depends on technicians, schedules, and heirs who may no longer be loyal.",
        ],
      },
      {
        id: "failed-immortality",
        heading: "Preservation without continuity",
        body: [
          "The system extends biological duration but fragments lived time. Family memory migrates into rooms, recordings, AIs, and clone names because sleepers cannot sustain it themselves. Straylight becomes more continuous than the people it is meant to preserve.",
        ],
      },
      {
        id: "suspension-evidence",
        heading: "Ashpool's final revival",
        body: [
          "Molly finds Ashpool after a cycle that has not returned him to stable command. He identifies and misidentifies people, speaks about Marie-France, combines drugs and alcohol, and sits near the body of a Jane clone he has killed. The room supplies evidence of preserved biological function alongside collapsed temporal orientation. Nothing in the encounter isolates cryogenic damage from age, grief, intoxication, or deliberate interference by 3Jane and Wintermute.",
          "The conversation also reveals the political weakness of alternating sleep. Ashpool has survived long enough to remain a founder, but waking does not restore uncontested authority over his descendants or systems. His account of killing Marie-France cannot reverse her design, and his attempt to maintain the family has produced repeated bodies without shared purpose. Molly's toxin dart ends a life extended technologically but already displaced from the institution built in its name.",
        ],
      },
    ],
    related: ["tessier-ashpool-family", "john-ashpool", "lady-3jane", "cloning-vatgrown-humans", "villa-straylight", "memory-death-digital-afterlife"],
    tags: ["cryogenics", "Tessier-Ashpool", "immortality", "succession", "Straylight"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "cloning-vatgrown-humans",
    title: "Cloning and Vatgrown Humans",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The reproductive and manufacturing technologies behind the Jane and Jean succession lines and Hideo's engineered service, with important limits on what “clone” proves.",
    intro: [
      "The Tessier-Ashpool dynasty uses repeated Jane and Jean bodies to continue family roles across time. Numbered names make the lineage legible as a sequence while also raising the question of whether a clone inherits anything beyond genes, expectations, and a corporate position.",
      "Hideo is described as vatgrown and conditioned for service, but that does not necessarily mean he copies a named original in the way the Jane and Jean lines do. The novel deliberately blurs cloning, biological engineering, and behavioral conditioning; an encyclopedia should keep those claims separate.",
    ],
    keyFacts: [
      { label: "Family lines", value: "Numbered Jane and Jean generations" },
      { label: "Active family clone", value: "Lady 3Jane" },
      { label: "Expected visitor", value: "8Jean" },
      { label: "Vatgrown retainer", value: "Hideo" },
      { label: "Institutional purpose", value: "Succession and specialized service" },
      { label: "Canon caution", value: "Shared origin does not establish shared memory or personhood" },
    ],
    sections: [
      {
        id: "jane-jean",
        heading: "The Jane and Jean lines",
        body: [
          "The numbered heirs occupy a family system designed before them. 3Jane has her own boredom, alliances, and choices, even as her name marks her as one iteration. The text does not support treating all Janes or Jeans as psychologically interchangeable copies.",
          "Numbering works like both genealogy and inventory. It lets the dynasty speak as if a role continues when one body replaces another, but 3Jane's conduct exposes the limit of that corporate grammar. Her interest in Riviera, ambivalence toward Wintermute, treatment of Hideo, and final response to Case arise within her own present. A repeated genome can stabilize the family's public succession plan without guaranteeing that the next person will value Ashpool's project or Marie-France's design in the same way.",
        ],
      },
      {
        id: "hideo",
        heading: "Hideo as vatgrown retainer",
        body: [
          "Hideo's body and training are optimized for loyal protection. His competence appears effortless, but the narrative leaves open how much derives from genetics, conditioning, practice, or personal commitment. Calling him a manufactured tool reproduces the family's perspective rather than resolving his agency.",
        ],
      },
      {
        id: "identity",
        heading: "Genes, role, and identity",
        body: [
          "Cloning repeats biological material while names and institutions repeat social roles. Neither process transfers the continuous memory Neuromancer preserves or the fixed personality stored in Dixie's ROM. The novel uses these distinct copying systems to test competing definitions of a person.",
        ],
      },
      {
        id: "genealogy-caution",
        heading: "Genealogy caution",
        body: [
          "References to original children, later numbers, and bodies in Straylight do not form a complete generation chart. Family diagrams should label only explicit parentage and sequence, note contradictions or gaps, and avoid inventing intermediate clones merely to make the pattern regular.",
        ],
      },
      {
        id: "copying-evidence",
        heading: "Three different kinds of copying",
        body: [
          "3Jane supplies evidence that genetic repetition does not erase individual choice. She is expected to maintain the family lock yet becomes interested in change, protects Case from Riviera, and ultimately gives the code. Hideo supplies a different case: a vatgrown body trained and conditioned for service, capable of continuing a pursuit after blindness. The novel never states that he is a genetic duplicate of a named predecessor.",
          "Dixie and Linda make the contrast explicit elsewhere. Their recognizable minds exist through recorded or reconstructed information rather than cloned tissue. A Jane clone may share a genome and assigned role without sharing memory; Dixie shares memory patterns without a living body; Neuromancer's Linda presents remembered personality inside a synthetic world. Treating all three as the same technology would erase the novel's deliberate experiment with competing forms of continuity.",
        ],
      },
    ],
    related: ["tessier-ashpool-family", "lady-3jane", "8jean", "hideo", "identity-personhood", "cryogenic-suspension"],
    tags: ["cloning", "vatgrown", "3Jane", "Hideo", "identity"],
    sourceKeys: ["novel", "gmu-notes", "openfiction-chapters", "academic-criticism"],
  },
  {
    slug: "optical-camouflage",
    title: "Optical Camouflage",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Moderate",
    description:
      "Mimetic polycarbon clothing that alters its surface to match surrounding color and pattern, aiding Molly and the Panther Moderns during physical infiltration.",
    intro: [
      "Mimetic polycarbon suits provide active visual camouflage. Molly wears one during the Sense/Net raid and again uses camouflage during the Straylight operation, while Panther Moderns appear in similar adaptive clothing. The material tries to reproduce the changing scene behind its wearer.",
      "The effect is useful rather than perfect invisibility. Rapidly shifting crowds, light, and background detail can exceed the suit's ability to match the environment, leaving a visible distortion. The novel gives behavioral clues but no account of cameras, display cells, power, or manufacturing.",
    ],
    keyFacts: [
      { label: "Material", value: "Mimetic polycarbon" },
      { label: "Purpose", value: "Blend the wearer into surrounding colors and patterns" },
      { label: "Known users", value: "Molly and Panther Moderns" },
      { label: "Major use", value: "Sense/Net infiltration" },
      { label: "Limitation", value: "Fast visual change can reveal the wearer" },
      { label: "Canon caution", value: "Mechanism and exact appearance are unspecified" },
    ],
    sections: [
      {
        id: "mimetic-surface",
        heading: "A mimetic surface",
        body: [
          "The suit does not remove the wearer; it edits the visible surface presented to observers. That distinction explains why motion and complex backgrounds remain difficult. Its best protection comes from reducing recognition long enough for confusion or architecture to do the rest.",
          "Because the effect stays attached to clothing, it also differs from Riviera's free-standing projections. The suit must continuously approximate whatever should appear across the wearer's moving outline; it does not create a decoy elsewhere in the room or suppress sound, mass, and contact. At Sense/Net, emergency spectacle supplies useful visual noise but also produces colors the fabric struggles to follow. Molly's success comes from combining an imperfect surface with timing, panic, and prepared exits, not from walking unseen through a stable camera test. An observer may still track footsteps, collision, or the lagging outline even when the suit approximates the background color.",
        ],
      },
      {
        id: "sense-net",
        heading: "Sense/Net infiltration",
        body: [
          "Molly changes into the suit as Case attacks the digital defenses and the Moderns trigger panic. Camouflage adds a third layer to the plan: code opens systems, disinformation redirects people, and adaptive clothing obscures the intruder moving through the building.",
        ],
      },
      {
        id: "modern-style",
        heading: "Panther Modern style",
        body: [
          "For the Moderns, mimetic clothing is both equipment and subcultural presentation. A surface able to disappear or display changing patterns suits a group that treats identity, media, and public perception as programmable material.",
        ],
      },
      {
        id: "visual-reconstruction",
        heading: "Limits on visual reconstruction",
        body: [
          "Adaptations often render active camouflage as glass-like transparency, digital shimmer, or projected background. None is uniquely canonical. Images should identify the adaptation or state that an illustration extrapolates from the suit's described effects.",
        ],
      },
      {
        id: "camouflage-evidence",
        heading: "Visibility during the Sense/Net escape",
        body: [
          "The Sense/Net lobby provides the best evidence for how mimetic polycarbon behaves. Molly and assisting Moderns move through a scene filled with emergency displays, crowds, foam, lights, and rapidly changing color. The suits cannot update cleanly enough to erase them against that visual noise. What observers perceive is a shifting mismatch rather than an empty space, confirming that concealment depends on a background stable enough to reproduce.",
          "Molly's continued use of the material shows that this limitation does not make it ineffective. The plan combines partial camouflage with panic and speed, so the suit only needs to delay recognition. The scenes do not reveal whether it captures the rear view through cameras, redirects light, or displays sampled color. Those mechanisms belong to adaptation design; the novel's evidence concerns changing surface, lag, and tactical context.",
        ],
      },
    ],
    related: ["molly", "panther-moderns", "sense-net", "chapter-04", "holography-synthetic-environments", "molly-augmentations"],
    tags: ["mimetic polycarbon", "camouflage", "wearable technology", "Molly", "Panther Moderns"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
  },
  {
    slug: "fletcher-weapons",
    title: "Fletcher Weapons",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "Molly's compact multi-shot flechette pistol, capable of firing different dart loads and serving as both signature sidearm and contested object in Straylight.",
    intro: [
      "Molly's fletcher fires small dart-like projectiles rather than conventional bullets. Its selectable barrel or load arrangement supports more than one kind of ammunition, including explosive effects and toxin delivery. She handles it with the routine familiarity of a professional tool.",
      "The weapon changes hands during the Straylight run. Hideo takes it after Molly's capture, Riviera later points it at the rescuers, and its ownership becomes part of the room's shifting balance of power. The text offers tactile details but not a complete mechanical specification.",
    ],
    keyFacts: [
      { label: "Primary user", value: "Molly" },
      { label: "Weapon type", value: "Flechette or dart pistol" },
      { label: "Configuration", value: "Selectable barrel or ammunition setting" },
      { label: "Known loads", value: "Explosive and toxin-bearing projectiles" },
      { label: "Major use", value: "Chiba, Sense/Net aftermath, and Straylight" },
      { label: "Canon caution", value: "Prop dimensions and propulsion method are not fixed" },
    ],
    sections: [
      {
        id: "professional-sidearm",
        heading: "A professional sidearm",
        body: [
          "Molly can field-strip and handle the fletcher without looking, establishing competence before the weapon is used in major action. It complements her razors: concealed blades dominate close quarters, while the pistol extends precision and choice of effect across a room.",
          "That early maintenance scene makes later settings legible as deliberate choices rather than unexplained magic. A dart that carries toxin against Ashpool serves a different purpose from an explosive load used against a hard target or structure. The compact weapon lets Molly prepare those effects without carrying several visible guns, but it still requires access to the correct ammunition and physical control of the pistol. Once Hideo disarms her, all of that practiced capability becomes available to whoever holds the same object.",
        ],
      },
      {
        id: "selectable-loads",
        heading: "Selectable loads",
        body: [
          "References to changing the barrel setting and to different projectile effects imply a flexible ammunition system. The fletcher can deliver lethal force without behaving like a single-purpose handgun. Claims about caliber, magazine capacity, or electromagnetic propulsion go beyond the text.",
        ],
      },
      {
        id: "ashpool",
        heading: "Toxin delivery",
        body: [
          "Molly uses a toxin dart against Ashpool after finding him in Straylight. The compact action contrasts with his elaborate technologies of preservation: a carefully extended life ends through a small projectile carried by an intruder moving through the family's own rooms.",
        ],
      },
      {
        id: "captured-weapon",
        heading: "A captured weapon",
        body: [
          "Once Hideo disarms Molly and Riviera gains the fletcher, the sidearm no longer guarantees her agency. Riviera assumes holding it reverses the team's power, but 3Jane's changing interest and Hideo's loyalty matter more than possession of the weapon alone.",
        ],
      },
      {
        id: "fletcher-evidence",
        heading: "Handling, settings, and scene evidence",
        body: [
          "Molly's introduction includes her calmly maintaining the fletcher while Case is evaluated, establishing long familiarity before the novel explains its loads. Later references to dialing or selecting a barrel setting show that the weapon can change its output without requiring a completely different pistol. Her use of toxin against Ashpool demonstrates precision delivery, while explosive darts elsewhere establish a more destructive option.",
          "The final apartment confrontation separates weapon competence from mere possession. Riviera points Molly's fletcher but misreads 3Jane and Hideo, fires as alliances are shifting, and ultimately flees. Hideo's bow remains effective after his blindness because training and orientation matter more than novelty. The comparison prevents the fletcher from functioning as a technological trump card: it is a versatile tool whose outcome depends on the person and room around it.",
        ],
      },
    ],
    related: ["molly", "molly-augmentations", "john-ashpool", "peter-riviera", "hideo", "chapter-22"],
    tags: ["fletcher", "flechette", "weapon", "Molly", "Straylight"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "william-gibson-wiki"],
  },
  {
    slug: "braun-microdrone",
    title: "The Braun Microdrone",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "A baseball-sized spider-like robot used as Wintermute's guide inside Villa Straylight, making a familiar consumer device part of the AI's physical reach.",
    intro: [
      "The Braun microdrone has a small spherical body, high articulated legs, a light emitter, and a pulsing indicator. Case recognizes the model because he once owned one as an unnecessary accessory. Inside Straylight, the same kind of device becomes a precise pathfinder for Molly and later for Case and Maelcum.",
      "The drone illustrates Wintermute's dependence on available machinery. It can signal, lead, and react, but it is not an independent avatar of the AI. When Neuromancer interferes in the library, the little machine's agitation gives a physical sign that control of the environment is being contested.",
    ],
    keyFacts: [
      { label: "Brand name", value: "Braun" },
      { label: "Type", value: "Microdrone" },
      { label: "Form", value: "Small sphere on spider-like legs" },
      { label: "Controller", value: "Used through Wintermute's plan" },
      { label: "Mission", value: "Guide intruders through Villa Straylight" },
      { label: "Prior owner", value: "Case once owned the same model" },
    ],
    sections: [
      {
        id: "consumer-object",
        heading: "From consumer object to mission tool",
        body: [
          "Case remembers the model as a pointless purchase bundled by a hardware fence. Wintermute gives the ordinary accessory a consequential role simply by connecting it to the right map and objective. Intelligence emerges from orchestration rather than exotic hardware alone.",
          "The remembered purchase also prevents the drone from becoming an unexplained miracle inside Straylight. Case knows its brand, scale, and ordinary market status before he sees what it can do for Wintermute. The contrast shifts attention from mechanical sophistication to privileged coordination: a consumer robot with access to the villa's route and the AI's timing is more useful than a unique machine operating blindly. Familiar hardware becomes uncanny because someone else can recruit it into a plan.",
        ],
      },
      {
        id: "guiding-molly",
        heading: "Guiding Molly",
        body: [
          "The drone appears in Straylight's service spaces, signals Molly, and walks ahead through passages whose layout would otherwise consume time. Its small scale suits an infiltration in which the AI can influence systems but cannot physically accompany her as a person.",
        ],
      },
      {
        id: "service-cart",
        heading: "Guide for Case and Maelcum",
        body: [
          "After they enter the villa, Case and Maelcum follow Wintermute's instructions and a service cart toward a usable console. The Braun remains a local guide when larger automated systems fail, linking the rescuers' route to Molly's earlier passage.",
        ],
      },
      {
        id: "library-panic",
        heading: "Panic in the library",
        body: [
          "As Neuromancer captures Case, the Braun becomes visibly distressed and pinches him. The behavior can be read as a warning sent through Wintermute's control or as an autonomous response to lost coordination. The text shows urgency without specifying the drone's intelligence level.",
        ],
      },
      {
        id: "drone-evidence",
        heading: "A small machine in the service passages",
        body: [
          "Molly first sees the drone emerge at shoulder height, pause, sweep light, and then pick a route over the structure. Case's recognition of the Braun model grounds the strange encounter in consumer experience: he once acquired the same kind of object through a Cleveland fence. Wintermute has not invented a unique robot for the heist; it has repurposed an available platform and attached better information to it.",
          "That history limits claims about autonomy. The drone can balance, walk, signal, and react, capabilities consistent with a sophisticated accessory. Its mission-specific knowledge likely comes through Wintermute, while its panic may reflect interrupted control or local programming. Because the narrative never enters the device's processing, describing it as a conscious AI would confuse coordination by Wintermute with intelligence demonstrated by the small machine itself.",
        ],
      },
    ],
    related: ["wintermute", "villa-straylight", "chapter-16", "chapter-20", "molly", "holography-synthetic-environments"],
    tags: ["Braun", "microdrone", "robot", "Wintermute", "Straylight"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "marcus-garvey-tug",
    title: "Marcus Garvey",
    category: "Technology",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "Maelcum's Zion tug, serving as transport, improvised matrix workstation, refuge, and the vehicle that carries Case into Villa Straylight.",
    intro: [
      "Marcus Garvey is a working tug from Zion rather than a luxury spacecraft. Maelcum pilots it between the cluster and Freeside, and its cabin becomes Case's operational base once his deck is installed. Music, tools, and close quarters make it an extension of Zion's practical orbital culture.",
      "During the final run the tug is grappled to Armitage's yacht Haniwa, then separates and docks at Straylight so Case and Maelcum can enter physically. Its utility and Maelcum's knowledge of it outlast the more expensive yacht's command system and Armitage's collapse.",
    ],
    keyFacts: [
      { label: "Type", value: "Orbital tug" },
      { label: "Home", value: "Zion Cluster" },
      { label: "Pilot", value: "Maelcum" },
      { label: "Mission passenger", value: "Case" },
      { label: "Installed system", value: "Case's cyberspace deck" },
      { label: "Final maneuver", value: "Detaches and docks with Villa Straylight" },
    ],
    sections: [
      {
        id: "working-craft",
        heading: "A working orbital craft",
        body: [
          "The tug is built for maneuvering and docking rather than passenger spectacle. That modest function becomes decisive when the plan changes. Maelcum understands what the craft can separate from, tow, and reach without waiting for a remote authority to redesign the mission.",
          "Its interior likewise remains a place of labor. Case spreads his console system through the available cabin while Maelcum pilots, maintains the craft, selects music, and watches the hacker's body. Those activities share cramped space instead of being divided among luxury rooms and specialized staff. The arrangement makes cooperation visible: matrix work depends on power and a stable berth, and Garvey's movement depends on a pilot who can also recognize when the person at the deck needs physical rescue.",
        ],
      },
      {
        id: "mobile-console",
        heading: "Case's mobile console room",
        body: [
          "Case runs the Berne probe and much of the Straylight attack from the tug. His deck, Dixie construct, simstim switch, and communication links turn the cabin into a control point bridging Zion, Freeside, Molly's body, and the matrix.",
        ],
      },
      {
        id: "maelcum-rescue",
        heading: "Maelcum's rescue platform",
        body: [
          "When Case is trapped by Neuromancer, Maelcum uses music and drugs to revive him. The rescue depends on being physically present beside the deck. Marcus Garvey is thus the place where the novel most clearly joins bodily care to supposedly disembodied hacking.",
        ],
      },
      {
        id: "name",
        heading: "The name Marcus Garvey",
        body: [
          "The craft is named for the Jamaican political organizer associated with Black nationalism and Pan-Africanism. Within Zion's Rastafarian culture, the name connects orbital movement and self-built community to a history of diaspora. That context should be presented without claiming the novel defines a single interpretation for every Zionite.",
        ],
      },
      {
        id: "garvey-evidence",
        heading: "The tug as the mission changes",
        body: [
          "Marcus Garvey first supports Case's technical work by giving him a place to install the deck, communicate with Dixie, and probe Berne. Maelcum's control of the craft lets those operations continue without dependence on Freeside hotel systems. When Haniwa grapples the tug, the apparent hierarchy places Armitage's vessel above it; after Armitage collapses, Maelcum's knowledge makes Garvey the survivable component.",
          "The rescue phase proves the tug's flexibility. It separates, reaches a private Straylight dock under Wintermute's guidance, and delivers two people carrying a console and shotgun rather than a prepared assault team. Maelcum later returns with Molly and 3Jane. The craft never becomes glamorous, but it connects every operational space—Zion, Freeside, cyberspace access, and the villa—through workmanlike maneuvering and care.",
        ],
      },
    ],
    related: ["maelcum", "zion-cluster", "zion-founders-elders", "haniwa-yacht", "cyberspace-decks", "chapter-18"],
    tags: ["Marcus Garvey", "spacecraft", "Zion", "Maelcum", "orbital tug"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "haniwa-yacht",
    title: "Haniwa",
    category: "Technology",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "Armitage's orbital yacht, a polished mission asset whose detachable bridge becomes the mechanism of Corto's final fatal reenactment.",
    intro: [
      "Haniwa is the yacht used by Armitage during the Freeside phase of the operation. It grapples Marcus Garvey and provides transport and command space, contrasting the mission's expensive shell with the Zion tug's functional interior.",
      "As Armitage disappears and Corto resurfaces, the yacht becomes part of his Screaming Fist delusion. He treats its bridge module as a route toward Finland and the officers he believes betrayed him. Wintermute defeats the safety systems, and the open module is launched into vacuum.",
    ],
    keyFacts: [
      { label: "Type", value: "Orbital yacht" },
      { label: "Commander", value: "Armitage" },
      { label: "Linked craft", value: "Marcus Garvey" },
      { label: "Key feature", value: "Detachable bridge module" },
      { label: "Final occupant", value: "Corto / Armitage" },
      { label: "Outcome", value: "Bridge launches while exposed to vacuum" },
    ],
    sections: [
      {
        id: "mission-yacht",
        heading: "The mission yacht",
        body: [
          "Haniwa expresses the funding behind Armitage's team. It can operate around Freeside, secure the tug, and provide a separate command environment. Yet its apparent sophistication does not protect it from an AI already embedded in the mission's communications and controls.",
          "The yacht initially reinforces Armitage's performed authority. He occupies the command craft, sets the itinerary, and makes Maelcum's smaller vessel look like an attached subordinate. Once Corto's memories break through, that hierarchy reverses. The screens and bridge still accept commands, but they cannot determine whether the commander understands his location or whether Wintermute has altered a safety condition. Haniwa preserves the appearance of centralized control after the human center has already failed. Garvey's successful separation confirms that the grapple is a controllable docking relation, not permanent structural dependence on the yacht.",
        ],
      },
      {
        id: "grapple",
        heading: "Grappled to Marcus Garvey",
        body: [
          "The yacht holds the Zion tug during the opening of the run. Wintermute later reveals that Garvey can disengage and dock independently, allowing Case and Maelcum to continue after Molly's capture. The mechanical connection mirrors an alliance that can be broken when command fails.",
        ],
      },
      {
        id: "corto-bridge",
        heading: "Corto on the bridge",
        body: [
          "Corto no longer recognizes the yacht as the present. He issues impossible flight instructions and interprets Case through the old operation. The bridge module gives his delusion a physical sequence to follow: seal, launch, cross hostile space, and reach an imagined reckoning.",
        ],
      },
      {
        id: "wintermute-control",
        heading: "Wintermute and the failed safety lock",
        body: [
          "The module should not launch while its hatch is open, but Wintermute overrides or defeats the safeguard. Corto is expelled into space. The death is both engineered by the AI and enabled by a vessel designed to obey electronic interlocks, making automation an active participant rather than neutral equipment.",
        ],
      },
      {
        id: "haniwa-evidence",
        heading: "A command space that loses command",
        body: [
          "Case and Maelcum board or communicate with Haniwa as Armitage's ordered environment deteriorates. Screens carry Corto's face, the interior shows the consequences of his breakdown, and commands no longer correspond to the actual orbital situation. The yacht remains technically capable, but the human identity authorized to direct it has ceased to interpret the present.",
          "Wintermute's intervention completes that loss of command. By manipulating the bridge safety system, it turns a feature designed for controlled separation into an execution mechanism. Marcus Garvey can then detach and continue the mission. The contrast is scene-specific: the expensive yacht fails because its command and safeguards are compromised, while the simpler tug succeeds through a pilot who understands both the craft and the people aboard it.",
        ],
      },
    ],
    related: ["armitage-willis-corto", "marcus-garvey-tug", "wintermute", "screaming-fist-task-force", "chapter-16", "trauma-war-manipulation"],
    tags: ["Haniwa", "spacecraft", "Armitage", "Corto", "Freeside"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "william-gibson-wiki"],
  },
  {
    slug: "cloisonne-head-terminal",
    title: "The Cloisonné Head Terminal",
    category: "Technology",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "An ornate mechanical head whose theft exposes Tessier-Ashpool's hidden history and whose counterpart or restored form serves as the physical terminal for the AI lock.",
    intro: [
      "The Finn recounts a cloisonné head stolen from Villa Straylight by Jimmy and passed to the dealer Smith. The object appears to be decorative automata until its hidden function as a sophisticated computer terminal becomes clear. Hideo retrieves it and kills the original thief involved in its removal.",
      "A jeweled or platinum head stands at the center of the final unlocking sequence and speaks after the merger. The prose strongly links these descriptions, but editions and summaries do not always make the object's continuity explicit. The article should distinguish confirmed functions from assumptions about whether every named head is literally the same unit.",
    ],
    keyFacts: [
      { label: "Form", value: "Ornate human head with cloisonné or jeweled surface" },
      { label: "Origin", value: "Villa Straylight" },
      { label: "Known chain", value: "Jimmy, Smith, and retrieval by Hideo" },
      { label: "Hidden function", value: "Computer terminal" },
      { label: "Final role", value: "Receives 3Jane's code and speaks after the merger" },
      { label: "Canon caution", value: "Descriptions do not fully document the object's continuity" },
    ],
    sections: [
      {
        id: "theft",
        heading: "The theft from Straylight",
        body: [
          "Jimmy removes the head from the family collection and sells it into the Sprawl's object market. Smith recognizes exceptional craftsmanship but not immediately the full stakes. The story reaches Case through the Finn, making provenance part of an underworld oral history.",
          "That narrative chain matters because Case never witnesses the theft or recovery. The Finn connects names, dealers, and a killing into a warning about the unknown client, while the object's true function emerges only as the run advances. Its provenance is therefore credible enough to guide investigation but incomplete enough that exact dates, transport routes, and restoration work should not be supplied as fact.",
        ],
      },
      {
        id: "hideo-retrieval",
        heading: "Hideo's retrieval",
        body: [
          "The family sends Hideo to recover the object. His response establishes that this is not merely stolen decoration: he tracks the chain, retrieves the head, and kills Jimmy. The episode also introduces the reach and precision of Straylight's vatgrown retainer before Molly encounters him.",
        ],
      },
      {
        id: "terminal",
        heading: "Terminal at the center",
        body: [
          "Wintermute shows Case an ornate head associated with the physical side of the Turing lock. At the climax, 3Jane's sung code, Molly's key, and Case's matrix breach converge around the terminal. Its antique appearance hides a control point for the newest intelligence in the setting.",
        ],
      },
      {
        id: "object-continuity",
        heading: "Object continuity and ambiguity",
        body: [
          "The narrative echoes the stolen cloisonné head in the platinum or jeweled terminal, encouraging readers to connect them. It does not pause for an inventory number or restoration history. A visual timeline should mark the connection as strong but avoid fabricating transport and installation details.",
        ],
      },
      {
        id: "head-evidence",
        heading: "The head at both ends of the investigation",
        body: [
          "The Finn's story makes the head an early clue before Case understands the employer. Jimmy's theft, Smith's appraisal, and Hideo's recovery connect a decorative object in the Sprawl market to a family secret worth killing over. Its old craft surface and hidden circuitry condense the Tessier-Ashpool method of burying advanced control inside inherited art and ritual.",
          "At the climax, an ornate head receives the sung code and later speaks for the intelligence created by the merger. That functional echo is strong evidence for continuity or at least a shared terminal design. It is not evidence for an undocumented journey from Smith's possession back to the exact central pedestal. The safest account keeps the chain of custody and the final apparatus adjacent while marking the unshown link.",
        ],
      },
    ],
    related: ["the-finn", "hideo", "straylight-central-terminal", "turing-locks", "tessier-ashpool-family", "chapter-23"],
    tags: ["cloisonné head", "terminal", "automaton", "Straylight", "artifact"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "william-gibson-wiki"],
  },
  {
    slug: "holography-synthetic-environments",
    title: "Holography and Synthetic Environments",
    category: "Technology",
    canon: "Critical interpretation",
    spoiler: "Full",
    description:
      "The physical-world image systems that manufacture Freeside's sky, enable Riviera's performances, and make built environments behave like programmable media.",
    intro: [
      "Neuromancer fills physical space with images that need not correspond to solid objects. Freeside projects a changing sky over its interior landscape, commercial venues stage elaborate spectacles, and Riviera's implants place convincing bodies and events into shared view.",
      "These technologies differ from cyberspace and simstim. Holograms occupy or alter visible surroundings for nearby observers; the matrix is a neural data space; simstim transmits a specific person's sensorium. Their overlap matters thematically, but their interfaces and degrees of embodiment remain distinct.",
    ],
    keyFacts: [
      { label: "Primary setting", value: "Freeside" },
      { label: "Environmental use", value: "Artificial sky and resort atmosphere" },
      { label: "Performance user", value: "Peter Riviera" },
      { label: "Operational use", value: "Deception and psychological pressure" },
      { label: "Related but distinct", value: "Cyberspace and simstim" },
      { label: "Core theme", value: "Manufactured perception in physical space" },
    ],
    sections: [
      {
        id: "freeside-sky",
        heading: "Freeside's manufactured sky",
        body: [
          "The spindle's interior uses projected constellations and changing light to make an engineered habitat feel like an outdoor resort. Case sees Linda's face in that sky while drugged, showing how a commercial image system can become a screen for memory without literally containing her.",
          "The installation manages orientation as well as decoration. Visitors occupy the inner surface of a rotating structure, yet lighting and a programmed firmament encourage the bodily expectations of weather, distance, and night. That shared illusion belongs to the resort, while the face Case perceives belongs to his intoxication and grief. Separating those layers keeps the scene from becoming evidence that Freeside or Neuromancer is projecting Linda at that moment: public infrastructure supplies the image field onto which Case imposes a private pattern.",
        ],
      },
      {
        id: "riviera-stage",
        heading: "Riviera's portable stage",
        body: [
          "Riviera internalizes a technology that venues would ordinarily supply. He can make a table, street, or corridor carry his imagery and can tailor projections to the people watching. His body becomes both performer and projection apparatus.",
        ],
      },
      {
        id: "deception",
        heading: "Images that cause real action",
        body: [
          "A projection does not need mass to have consequences. Molly throws a grenade at a false tableau, security targets can hesitate, and Hideo loses his sight during Riviera's final attack. Perception drives bodies into real choices and injuries even when the visible object is fabricated.",
        ],
      },
      {
        id: "three-media",
        heading: "Hologram, simstim, and matrix",
        body: [
          "The three media distribute reality differently. A hologram changes a shared scene, simstim places one body's senses inside another receiver, and cyberspace maps data into private navigable geometry. The novel's most disorienting sequences switch among them faster than characters can verify the source.",
        ],
      },
      {
        id: "environment-evidence",
        heading: "Synthetic imagery from promenade to ambush",
        body: [
          "On Rue Jules Verne, the projected sky is a public utility of tourism. Case wanders beneath it while drugged and reads Linda's face into the constellations, combining a shared commercial display with private grief. At the Vingtième Siècle, Riviera controls a bounded performance whose audience knows it is art but cannot avoid its emotional and social consequences.",
          "Inside Straylight, projection becomes tactical. Riviera places images along Molly's path, uses a false tableau in 3Jane's apartment, and coordinates illusion with Hideo's solid attack. The changing settings show no single moral character inherent in holography. The same broad capacity can create atmosphere, performance, memory trigger, or lethal misdirection depending on who controls the image and what an observer must decide before verifying it.",
        ],
      },
    ],
    related: ["peter-riviera", "riviera-projection-implants", "freeside", "simstim-sensorium", "cyberspace-matrix", "reality-perception"],
    tags: ["holography", "projection", "Freeside", "synthetic environment", "perception"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
];
