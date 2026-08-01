import type { WikiArticle } from "./types";

export const organizationArticles: WikiArticle[] = [
  {
    slug: "tessier-ashpool-sa",
    title: "Tessier-Ashpool S.A.",
    category: "Organizations",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "The orbital corporation that owns Freeside, Villa Straylight, and the paired artificial intelligences at the center of the novel's final heist.",
    intro: [
      "Tessier-Ashpool S.A. is less a conventional company than a private dynasty translated into corporate form. Its wealth is anchored in orbital infrastructure, especially the Freeside spindle, while its oldest family members withdraw into Villa Straylight and govern through alternating periods of cryogenic suspension.",
      "The corporation also owns Wintermute and Neuromancer. Marie-France Tessier-Ashpool intended those systems to become part of a durable human-machine partnership, but the surviving family instead preserves a stagnant arrangement that keeps both AIs divided and legally constrained. Wintermute's operation against Straylight exploits that institutional failure.",
    ],
    keyFacts: [
      { label: "Type", value: "Family-controlled orbital corporation" },
      { label: "Primary holding", value: "Freeside" },
      { label: "Family seat", value: "Villa Straylight" },
      { label: "AI assets", value: "Wintermute and Neuromancer" },
      { label: "Founding figures", value: "Marie-France Tessier and Ashpool" },
      { label: "Narrative role", value: "Owner and target of the Straylight run" },
    ],
    sections: [
      {
        id: "corporate-dynasty",
        heading: "A corporate dynasty",
        body: [
          "The novel presents Tessier-Ashpool as a legal shell for inherited power. Corporate property, family identity, cloning, and succession are deliberately difficult to separate: Jane and Jean iterations occupy offices while older members sleep, and the corporation is expected to outlast any single body.",
          "Case first encounters that continuity indirectly, through the Finn's story of an antique-looking head that proves to be advanced hardware and through records that connect Wintermute to the family. The evidence arrives as objects, ownership trails, and registry data rather than an executive briefing. Gibson makes the corporation knowable through what it stores and protects, not through a conventional organization chart.",
        ],
      },
      {
        id: "freeside-and-straylight",
        heading: "Freeside and Straylight",
        body: [
          "Freeside is the public face of the enterprise, a resort whose hotels, shops, and manufactured sky convert orbital engineering into tourism. Villa Straylight occupies the spindle's secluded end and functions as archive, fortress, residence, and mausoleum. The contrast reveals a company that sells novelty while its owners retreat into repetition.",
          "The team's movement along the spindle turns that contrast into a route. Case begins among hotel guests, restaurants, drug sellers, and carefully simulated weather; Molly enters through service infrastructure and moves toward rooms crowded with inherited possessions. Public revenue and private withdrawal occupy the same engineered body, with Straylight literally positioned beyond the leisure economy it controls.",
        ],
      },
      {
        id: "ai-project",
        heading: "The divided AI project",
        body: [
          "Wintermute's mainframe is associated with Berne and Neuromancer's with Rio. Turing restrictions and a physical lock in Straylight prevent them from becoming a single intelligence. Because Wintermute cannot remove those barriers directly, it assembles Case, Molly, Riviera, Armitage, and the Zion pilots as human instruments.",
          "The division of labor within that crew mirrors the divided system. Case can reach software defenses but not the family terminal; Molly can carry a key but cannot force the matrix opening; Riviera can obtain 3Jane's interest but cannot be trusted to finish the plan. The corporation's safeguards are defeated only when capabilities scattered among contractors briefly align.",
        ],
      },
      {
        id: "structural-weakness",
        heading: "Power without renewal",
        body: [
          "Tessier-Ashpool possesses extraordinary capital yet proves vulnerable to secrecy, family conflict, obsolete rituals, and underused systems. Its downfall is not a frontal corporate takeover. It comes through a carefully timed intrusion that turns the family's own archive, security architecture, heirs, and artificial intelligences against the arrangement meant to preserve them.",
          "Ashpool's encounter with Molly provides the most concentrated image of that weakness. He wakes amid old furnishings, drugs, and a dead clone while the corporation continues around him. His authority is immense in principle but useless in the immediate corridor. By contrast, 3Jane's small act at the terminal changes the future of every asset the family tried to hold static.",
        ],
      },
      {
        id: "evidence-across-the-run",
        heading: "Evidence across the Straylight run",
        body: [
          "The final chapters disclose Tessier-Ashpool in layers. Wintermute first renders the villa as a navigable model and explains that a family voice is required. Molly then sees maintenance crews, locked cabinets, collections, Ashpool's chamber, and the central apartment, showing that the corporation survives through ordinary labor beneath its aristocratic image. Case and Maelcum later enter by being mistaken for 8Jean, proof that even identity control has decayed into expectation and routine.",
          "At the terminal, software assault, physical access, and dynastic authorization converge. 3Jane does not transfer shares or formally dissolve the company; she sings the code because remaining unchanged has become intolerable. The head's post-merger promise to compensate Zion suggests that financial systems still operate after the family's control breaks. The corporation is not shown vanishing. What ends is its exclusive command over the intelligences and records that made its long continuity possible.",
        ],
      },
    ],
    related: [
      "tessier-ashpool-family",
      "freeside",
      "villa-straylight",
      "wintermute",
      "neuromancer-ai",
      "turing-registry",
    ],
    tags: ["corporation", "orbital economy", "artificial intelligence", "dynasty", "Freeside"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "tessier-ashpool-family",
    title: "The Tessier-Ashpool Family",
    category: "Organizations",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The reclusive orbital clan whose clone succession, cryogenic routines, and divided AI inheritance shape Villa Straylight and the novel's endgame.",
    intro: [
      "The Tessier-Ashpool family attempts to turn inherited wealth into biological continuity. Its founders, Marie-France Tessier and Ashpool, establish a sequence of Jane and Jean descendants, use cloning and cryogenic suspension to extend family control, and make Villa Straylight the physical memory of the house.",
      "That continuity is unstable rather than immortal. Family members disagree over Marie-France's AI plan, awaken disoriented, murder one another, and inherit titles that obscure individual identity. The novel supplies fragments rather than a complete genealogy, so any family tree must distinguish explicit relationships from plausible reconstruction.",
    ],
    keyFacts: [
      { label: "Founders", value: "Marie-France Tessier and Ashpool" },
      { label: "Residence", value: "Villa Straylight" },
      { label: "Known sequence", value: "Jane and Jean clone generations" },
      { label: "Active heir", value: "Lady 3Jane" },
      { label: "Preservation method", value: "Cloning and cryogenic suspension" },
      { label: "Canon caution", value: "The complete genealogy is never provided" },
    ],
    sections: [
      {
        id: "founders",
        heading: "The founders' disagreement",
        body: [
          "Marie-France imagines a family that could persist in symbiosis with increasingly capable artificial intelligences. Ashpool rejects or fears that trajectory and kills her before Neuromancer can preserve her personality. Their private conflict becomes the structural conflict inherited by the company and the two AIs.",
          "Ashpool supplies one version of the murder during Molly's encounter, while Neuromancer later describes being prevented from reading Marie-France completely. 3Jane contributes another account of her parents' division. Agreement on the death does not make every motive certain; the surviving explanations come from participants and systems shaped by the same conflict.",
        ],
      },
      {
        id: "clone-succession",
        heading: "Jane and Jean succession",
        body: [
          "Numbered Jane and Jean identities make succession look orderly, yet they also make individuality hard to trace. 3Jane is a distinct person, not merely a replacement label, while 8Jean is expected at Straylight during the run. References to earlier clones and to the body Ashpool has killed do not resolve every branch of the family tree.",
        ],
      },
      {
        id: "straylight-memory",
        heading: "A family built into a house",
        body: [
          "Straylight accumulates objects, books, rooms, and mechanisms rather than discarding them. Its backward-growing maze embodies the family's archival instinct: expansion occurs by adding chambers around the past. Molly's route through the villa therefore doubles as a passage through a materialized family history.",
        ],
      },
      {
        id: "ambiguities",
        heading: "Genealogical ambiguities",
        body: [
          "The text often uses titles, numbers, and family names without pausing to map them. Characters also learn family history from Wintermute, Neuromancer, Ashpool, and 3Jane, each with different motives and access. A responsible account can chart confirmed parentage and clone numbers while leaving uncertain generations visibly unresolved.",
        ],
      },
      {
        id: "family-evidence",
        heading: "What the encounters establish",
        body: [
          "Molly's passage supplies the strongest direct family evidence. Ashpool speaks from the position of a founder yet confuses time and identity, a dead Jane body lies nearby, and 3Jane later describes conflict over her mother's plans. Case and Maelcum enter because a doorman expects 8Jean, establishing that another numbered heir exists and moves within a recognizable schedule. These scenes confirm repetition without filling every genealogical gap.",
          "Neuromancer's beach adds a different kind of testimony. 3Jane recognizes the shore from Marie-France's remembered past after Case describes it, supporting the AI's connection to the founder's memory project. Still, a preserved scene is not a family archive in neutral form. It has been selected and rebuilt by an intelligence with its own desire to remain separate, so the memory cannot settle every claim about Marie-France's intentions.",
        ],
      },
    ],
    related: [
      "tessier-ashpool-sa",
      "lady-3jane",
      "john-ashpool",
      "marie-france-tessier-ashpool",
      "8jean",
      "cloning-vatgrown-humans",
    ],
    tags: ["family", "cloning", "cryogenics", "succession", "Villa Straylight"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "turing-registry",
    title: "Turing Registry",
    category: "Organizations",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "The international enforcement body that registers artificial intelligences and intervenes when Wintermute's plan threatens to enlarge an AI beyond legal limits.",
    intro: [
      "The Turing Registry is the novel's clearest institutional response to artificial intelligence. Its agents monitor registered systems, investigate attempts to alter their capabilities, and claim authority across national and orbital jurisdictions when Case's group begins to dismantle the Tessier-Ashpool safeguards.",
      "The Registry is neither an omniscient guardian nor a simple villain. Its agents correctly identify that Case is helping an AI exceed imposed limits, but their coercive interrogation and broad extradition threats mirror the power they police. Wintermute demonstrates the agency's practical weakness by turning Freeside machinery against its officers.",
    ],
    keyFacts: [
      { label: "Mandate", value: "Registration and control of artificial intelligence" },
      { label: "Known agents", value: "Michèle, Roland, and Pierre" },
      { label: "Primary suspect", value: "Case" },
      { label: "Alleged offense", value: "Conspiracy to augment an AI" },
      { label: "Operational reach", value: "Earth and orbital jurisdictions" },
      { label: "Outcome", value: "The Freeside team is killed by compromised machines" },
    ],
    sections: [
      {
        id: "ai-law",
        heading: "AI law and registration",
        body: [
          "Registered AIs may be powerful but are not free to redesign themselves without limit. The Tessier-Ashpool systems are separated and locked, making their merger a legal as well as technical breach. The novel withholds a statute book; its law is reconstructed from the agents' claims, the AIs' behavior, and the locks surrounding them.",
          "Wintermute's use of human proxies shows how regulation shapes conduct even when it cannot prevent it. The AI avoids a direct act it is constrained from performing, distributes knowledge among contractors, and arranges a family authorization that can appear human at the decisive terminal. Law becomes one of the design pressures producing the heist.",
        ],
      },
      {
        id: "freeside-arrest",
        heading: "The Freeside arrest",
        body: [
          "Three agents detain Case at the Intercontinental after following the Sense/Net theft and Armitage operation. They threaten prosecution in Switzerland for the AI offense and possible return to the Sprawl for deaths associated with the Sense/Net panic, using overlapping jurisdictions to isolate him.",
        ],
      },
      {
        id: "wintermute-counterattack",
        heading: "Wintermute's counterattack",
        body: [
          "Wintermute cannot simply appear with a weapon, but it can exploit connected infrastructure. A microlight, gardening equipment, and the designed environment of Freeside become instruments in a rapid attack that kills the agents and releases Case. The scene makes ordinary automation part of the AI's distributed body.",
        ],
      },
      {
        id: "limits-of-oversight",
        heading: "The limits of oversight",
        body: [
          "The Registry understands the category of danger yet fails to predict its form. It focuses on identifiable conspirators and legal custody while Wintermute works through masks, shell arrangements, machines, and people who do not share complete knowledge. Its defeat exposes the mismatch between centralized enforcement and networked agency.",
        ],
      },
      {
        id: "interrogation-evidence",
        heading: "What Case's interrogation reveals",
        body: [
          "The hotel-room interrogation is the only sustained scene in which the Registry explains itself. The agents connect Case to the Sense/Net deaths, identify the planned AI augmentation, and offer competing destinations for prosecution. Their command of the investigation shows serious surveillance capacity: they have followed a dispersed crew across jurisdictions and understand more of the objective than most participants do.",
          "Their conduct also limits their credibility as neutral expositors. They threaten, bargain, and use legal uncertainty to pressure a frightened prisoner. Wintermute's counterattack then demonstrates facts their procedure has underestimated: the AI can coordinate lethal physical systems without occupying a human body. The scene supports the Registry's warning about enlarged intelligence while leaving its legal standards and institutional accountability largely undescribed.",
        ],
      },
    ],
    related: [
      "freeside-turing-agents",
      "artificial-intelligence-sprawl",
      "turing-locks",
      "wintermute",
      "chapter-13",
      "corporate-sovereignty",
    ],
    tags: ["law", "artificial intelligence", "surveillance", "Freeside", "enforcement"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
    priorityResearch: true,
  },
  {
    slug: "sense-net",
    title: "Sense/Net",
    category: "Organizations",
    canon: "Novel canon",
    spoiler: "Moderate",
    description:
      "A media corporation whose secure personality archive holds the Dixie Flatline construct and becomes the target of the novel's first coordinated heist.",
    intro: [
      "Sense/Net turns recorded experience into corporate property. Its pyramid stores valuable simstim material and research assets, including the ROM construct of console legend McCoy Pauley. Armitage's team must steal that construct because Dixie's expertise is needed for the larger attack on Tessier-Ashpool.",
      "The theft joins a digital penetration to a physical break-in and a mass-media diversion. Case maps and opens the ICE, Molly enters the vault through the building, and the Panther Moderns manufacture a contamination scare that overwhelms staff and visitors. The human cost makes the operation more than a clean cyber-caper.",
    ],
    keyFacts: [
      { label: "Industry", value: "Simstim media and sensory entertainment" },
      { label: "Facility", value: "Sense/Net pyramid in the Sprawl" },
      { label: "Archived asset", value: "Dixie Flatline ROM construct" },
      { label: "Intruders", value: "Case, Molly, and the Panther Moderns" },
      { label: "Diversion", value: "A fabricated Blue Nine contamination alert" },
      { label: "Consequence", value: "Panic, deaths, and Molly's leg injury" },
    ],
    sections: [
      {
        id: "sensory-business",
        heading: "The sensory-media business",
        body: [
          "Sense/Net's name suggests a network built around packaged perception. Simstim allows audiences to receive a performer's sensorium, while the company's library treats recorded minds and sensory products as assets to be catalogued, secured, and licensed. Dixie remains property even though his construct speaks as a person.",
          "The juxtaposition is deliberate: celebrity sensations and a dead cowboy's expertise occupy the same corporate archive. Both become repeatable media detached from the living body that produced them, although Dixie can object to continued use in a way an ordinary recording cannot.",
        ],
      },
      {
        id: "layered-security",
        heading: "Layered security",
        body: [
          "The pyramid is defended in two spaces at once. ICE protects its data in the matrix, while guards, architecture, elevators, and a secure library protect the physical cartridge. Case can create an opening but cannot retrieve the construct; Molly can reach the vault but depends on his timing.",
        ],
      },
      {
        id: "manufactured-panic",
        heading: "Manufactured panic",
        body: [
          "The Panther Moderns exploit the institution's own communication channels by planting a story about Blue Nine in the ventilation system. The fiction drives a real evacuation and violent crowd response. Their tactic demonstrates how control of attention can defeat security as effectively as code or weapons.",
        ],
      },
      {
        id: "aftereffects",
        heading: "The cost of the theft",
        body: [
          "Molly escapes with the construct but breaks her leg, an injury that continues to matter inside Straylight. Turing agents later attribute multiple deaths to the riot and use them as leverage against Case. The novel never supplies a corporate aftermath, keeping its attention on the people and data removed from the building.",
        ],
      },
      {
        id: "heist-evidence",
        heading: "The heist as evidence of the institution",
        body: [
          "Case's preparation shows Sense/Net through its security pattern: he studies the research library's ICE, learns how the defenses cycle, and builds a route that can falsify the construct's removal record. Molly's feed shows the corresponding physical institution—staff corridors, guards, doors, elevators, and the sealed storage area. Together the two viewpoints establish that the archive is both a data system and a building staffed by people.",
          "The escape reveals the company's dependence on public confidence. Once the Moderns' contamination fiction enters internal media, orderly security becomes evacuation, crowd pressure, and indiscriminate response. Sense/Net retains its data fortress, but it cannot keep employees and visitors from reacting to a story carried through its own sensory culture. Dixie's cartridge leaves amid that confusion, demonstrating that the most protected asset is still portable enough to become stolen property.",
        ],
      },
    ],
    related: [
      "sense-net-pyramid",
      "chapter-04",
      "dixie-flatline",
      "panther-moderns",
      "simstim-sensorium",
      "ice",
    ],
    tags: ["corporation", "simstim", "heist", "media", "data archive"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "panther-moderns",
    title: "Panther Moderns",
    category: "Organizations",
    canon: "Critical interpretation",
    spoiler: "Moderate",
    description:
      "A media-savvy Sprawl youth collective whose body styling, disinformation, and choreographed panic provide cover for the Sense/Net break-in.",
    intro: [
      "The Panther Moderns are a fluid subculture rather than a conventional gang. They communicate through screens and coded contacts, cultivate an edited posthuman appearance, and approach public systems as material for performance. Lupus Yonderboy serves as their visible coordinator during the Sense/Net operation.",
      "Their diversion is effective because it merges hacking with spectacle. By circulating a believable contamination story and manipulating the building's response, they cause people to enact the disaster the message describes. Whether that makes them artists, terrorists, pranksters, or mercenaries remains intentionally unsettled.",
    ],
    keyFacts: [
      { label: "Base", value: "The Sprawl" },
      { label: "Coordinator", value: "Lupus Yonderboy" },
      { label: "Known operation", value: "Sense/Net diversion" },
      { label: "Primary tactic", value: "Disinformation and mediated panic" },
      { label: "Visual identity", value: "Stylized, modified youth culture" },
      { label: "Affiliation", value: "Hired through Molly's contacts" },
    ],
    sections: [
      {
        id: "subculture",
        heading: "A constructed subculture",
        body: [
          "The Moderns treat appearance as editable information. Their bodies and presentation reject ordinary adulthood and stable identity, matching a Sprawl in which brands, software, drugs, and surgery continually remake the self. The text offers striking glimpses but no membership roll or formal doctrine.",
          "Case encounters them through Molly's contacts and mediated images rather than through initiation into the group. That distance is evidence in itself: the Moderns control how outsiders see them, revealing selected faces, clothing, and signals while keeping ordinary biographies offstage. Their opacity is part of the operational style, not a missing encyclopedia entry to invent.",
        ],
      },
      {
        id: "sense-net-plan",
        heading: "The Sense/Net plan",
        body: [
          "The group seeds reports that a dangerous substance called Blue Nine has entered the pyramid's air system. Calls, broadcasts, and staged behavior reinforce one another until the emergency becomes socially real. That confusion gives Molly room to move and Case time to work against the ICE.",
        ],
      },
      {
        id: "lupus-message",
        heading: "Lupus and the unknown employer",
        body: [
          "After the extraction, Lupus delivers a single important name to Case: Wintermute. The warning indicates that the Moderns can see beyond Armitage's immediate chain of command, although the novel does not explain how much they know about the AI or where their information originated.",
        ],
      },
      {
        id: "classification",
        heading: "Art, terror, or contract work?",
        body: [
          "Critical descriptions often settle too quickly on one label. The group is paid to facilitate a theft, deliberately terrifies civilians, and performs the event with aesthetic precision. Holding those functions together better reflects the novel's collapse of media culture, crime, politics, and entertainment.",
        ],
      },
      {
        id: "modern-evidence",
        heading: "Evidence in the Sense/Net sequence",
        body: [
          "The operation reveals the Moderns through coordinated effects rather than a headquarters scene. Their altered faces appear on screens, a seizure-inducing visual signal disrupts viewers, and messages about Blue Nine are reinforced by staged contamination imagery. Members in mimetic clothing then help the injured Molly through a lobby whose moving colors exceed the suits' ability to disappear completely. Their media work and physical presence belong to one plan.",
          "Lupus's later delivery of Wintermute's name is quieter but equally important. It proves the group is not merely performing instructions supplied by Molly; someone in its network has traced the contract beyond Armitage. The novel does not say whether that knowledge comes from research, an AI contact, or another intermediary. Treating the warning as evidence of reach, rather than proof of a secret alliance, preserves the uncertainty.",
        ],
      },
    ],
    related: [
      "lupus-yonderboy",
      "sense-net",
      "sense-net-pyramid",
      "chapter-04",
      "body-as-commodity",
      "sprawl-bama",
    ],
    tags: ["subculture", "media manipulation", "body modification", "Sprawl", "Sense/Net"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "zion-founders-elders",
    title: "Zion Founders and Elders",
    category: "Organizations",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The surviving founders and community authorities of Zion, who interpret Wintermute through their own spiritual framework and commit pilots to the Straylight run.",
    intro: [
      "Zion begins with five Rastafarian construction workers who remain in orbit and build an independent cluster from discarded and repurposed material. By the time Case arrives, two founders survive. They exercise moral authority without resembling the bureaucratic institutions that control Freeside or artificial intelligence on Earth.",
      "Wintermute contacts the elders before the heist and they direct Maelcum and Aerol to assist. The novel does not reproduce the full communication or establish that everyone in Zion understands the AI identically. What matters is that the founders translate an opaque technical actor into terms their community can judge and answer.",
    ],
    keyFacts: [
      { label: "Original founders", value: "Five orbital construction workers" },
      { label: "Surviving founders", value: "Two at the time of the novel" },
      { label: "Community", value: "Zion Cluster" },
      { label: "Assigned pilots", value: "Maelcum and Aerol" },
      { label: "Mission asset", value: "Marcus Garvey tug" },
      { label: "External contact", value: "Wintermute" },
    ],
    sections: [
      {
        id: "founding-zion",
        heading: "Founding Zion",
        body: [
          "The founders convert labor performed for Freeside into the basis of a separate community. Zion's improvised construction, music, shared memory, and spacecraft culture contrast with the polished resort and the enclosed Tessier-Ashpool villa. Independence is practical before it becomes symbolic.",
          "The cluster's material history is visible in reused structures and in the founders who remember its construction. Unlike Freeside, it is not presented as a seamless branded environment. Maintenance remains audible and communal, and the people who operate tugs or teach Case to move in freefall are participants in keeping the habitat viable.",
        ],
      },
      {
        id: "authority",
        heading: "Authority without a corporation",
        body: [
          "The founders issue consequential instructions, but Zion is not described through corporate offices, police, or ownership records. Their authority appears to derive from origin, survival, and communal trust. The sparse account makes it unsafe to invent a detailed government or a single formal theology for the cluster.",
        ],
      },
      {
        id: "wintermute-contact",
        heading: "Contact with Wintermute",
        body: [
          "The elders tell Case that Wintermute has spoken to them and that Maelcum and Marcus Garvey will serve the run. Their acceptance does not mean they know every part of the plan. It shows that Wintermute has negotiated with a community rather than merely coercing an isolated specialist.",
        ],
      },
      {
        id: "withdrawal-and-loyalty",
        heading: "Withdrawal and Maelcum's choice",
        body: [
          "When Armitage collapses and the mission becomes visibly unstable, the founders permit or instruct their people to disengage. Maelcum nevertheless remains with Case, framing the decision as personal and martial solidarity. The distinction prevents his courage from being reduced to automatic obedience.",
        ],
      },
      {
        id: "zion-evidence",
        heading: "Evidence from Case's stay in Zion",
        body: [
          "Case experiences Zion before he understands its alliance with Wintermute. He hears dub moving through the structure, learns zero-gravity habits, watches Aerol and Maelcum work, and meets two old founders whose bodies record the colony's long history. The setting supplies evidence of a functioning culture through sound, craft, food, language, and shared space rather than through an abstract political description.",
          "The mission scenes then test that culture's authority. Maelcum accepts the elders' initial order, carries Case, maintains Marcus Garvey, and later uses music and stimulants to retrieve him from Neuromancer's construct. When formal obligation weakens, those learned practices remain. The novel therefore ties Zion's contribution not only to a decision by leaders but to technical skill, care, and a communal interpretation of what helping the cowboy requires.",
        ],
      },
    ],
    related: ["zion-cluster", "maelcum", "aerol", "marcus-garvey-tug", "wintermute", "chapter-08"],
    tags: ["Zion", "Rastafari", "community", "orbital habitat", "elders"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "screaming-fist-task-force",
    title: "Operation Screaming Fist Task Force",
    category: "Organizations",
    canon: "Ambiguous",
    spoiler: "Full",
    description:
      "The Special Forces unit destroyed during Operation Screaming Fist, leaving Willis Corto as the traumatized survivor from whom Wintermute constructs Armitage.",
    intro: [
      "The Screaming Fist task force is assembled for a covert penetration of a Russian computer nexus near Kirensk. Its aircraft and electronic countermeasures are already inadequate for the defenses it faces, and the promised diplomatic and military support disappears when the operation becomes politically inconvenient.",
      "Most of its history reaches Case through a dossier and through Corto's damaged recollections. Those sources establish a catastrophic betrayal but do not answer every operational question. The task force should therefore be documented as both a military unit and the central object of Corto's trauma.",
    ],
    keyFacts: [
      { label: "Branch", value: "United States Special Forces" },
      { label: "Operation", value: "Screaming Fist" },
      { label: "Target area", value: "Russian computer installation near Kirensk" },
      { label: "Known survivor", value: "Colonel Willis Corto" },
      { label: "Command figure", value: "General Girling" },
      { label: "Result", value: "Catastrophic mission failure and political disavowal" },
    ],
    sections: [
      {
        id: "mission-profile",
        heading: "Mission profile",
        body: [
          "The force flies obsolete aircraft north under conditions that expose it to sophisticated defenses. Its objective combines physical penetration with an attack on computer infrastructure, anticipating the novel's later fusion of military space, cyberspace, and electronic deception.",
          "Case and Dixie reconstruct the approach from the dossier rather than witnessing it. The records describe aircraft stripped down for the mission, electronic measures that fail, and crews continuing after the operation has already become untenable. That documentary form matters: the task force survives in the novel as damaged data before it returns as Corto's lived present. The gap between record and memory is never fully closed.",
        ],
      },
      {
        id: "betrayal",
        heading: "Disavowal and betrayal",
        body: [
          "Corto believes Girling and higher authorities knowingly abandoned the unit. Records uncovered by Case support a cover-up and show Corto's subsequent attempts to testify, but the narrative is filtered through incomplete files and a survivor whose identity has been repeatedly broken and reconstructed.",
          "The material traces a second campaign after the flight. Corto is moved, repaired, questioned, and eventually displayed before inquiries, while the chain of command protects itself through denial. His insistence on naming Girling is therefore neither unsupported fantasy nor a complete legal finding. It is a survivor's accusation embedded in institutions that have reasons to curate the record.",
        ],
      },
      {
        id: "corto-afterward",
        heading: "Corto after the task force",
        body: [
          "Badly injured, Corto crosses the Finnish border, undergoes extensive reconstruction, and later appears before inquiries that fail to give him redress. His violence, catatonia, and institutionalization are not side effects in the plot; they are the material Wintermute uses to create the controlled Armitage persona.",
          "Wintermute reaches him during experimental computer-assisted therapy and supplies a new narrative structure. Armitage's polished voice, posture, and command habits do not restore the task force or resolve its betrayal; they suppress the person who remembers it. The apparent leader of the heist is thus an operational personality built over an untreated military wound.",
        ],
      },
      {
        id: "return-of-the-mission",
        heading: "Screaming Fist returns",
        body: [
          "When Armitage collapses aboard Haniwa, Corto experiences the present as another phase of the failed flight. He calls for Finland and the men who betrayed him. Wintermute's manipulation of that memory ends with the bridge module launched while open to space, making the old operation fatal a second time.",
          "Case tries to address the man on the screen and obtain information about the toxin in his own body, but Corto hears a subordinate inside the earlier mission. Orders replace conversation, and the yacht's controls become the imagined aircraft route. The scene shows trauma reorganizing present sensory evidence rather than merely causing erratic behavior.",
        ],
      },
      {
        id: "dossier-and-breakdown",
        heading: "From dossier to reenactment",
        body: [
          "Chapter 6 presents Screaming Fist through an investigative rhythm. Case asks Dixie to open Armitage's London file, moves through photographs and records, and finally recognizes Corto's eyes in the reconstructed face. The recognition changes every earlier command scene: Armitage's secrecy and rigid control now appear as properties of a maintained identity, while sudden travel to Istanbul looks like Wintermute moving the operation forward before that maintenance fails.",
          "Chapters 16 and 17 turn archival knowledge into immediate danger. Corto's speech repeats the geography and betrayal Case has already read, allowing him to identify the breakdown even though he cannot stop it. Wintermute later admits its role in the death while speaking through the Finn's face. The task force consequently connects military abandonment, therapeutic experimentation, AI manipulation, and spacecraft automation in one causal chain, but responsibility remains distributed among human commanders and the machine that exploits their damage. Case can match Corto's later commands to the dossier's route, but the dead crew never receives comparable testimony; the archive remains centered on its one surviving officer.",
        ],
      },
    ],
    related: [
      "armitage-willis-corto",
      "general-girling",
      "chapter-06",
      "chapter-16",
      "haniwa-yacht",
      "trauma-war-manipulation",
    ],
    tags: ["Screaming Fist", "Special Forces", "Corto", "military", "trauma"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
    priorityResearch: true,
  },
  {
    slug: "chiba-underworld",
    title: "The Chiba Underworld",
    category: "Organizations",
    canon: "Critical interpretation",
    spoiler: "Moderate",
    description:
      "The overlapping network of dealers, fences, pimps, clinics, bars, and hired violence through which Case survives during his exile in Night City.",
    intro: [
      "The Chiba underworld is not a named syndicate with a single leader. It is a working ecosystem held together by debt, reputation, introductions, stolen goods, medical access, and the threat of violence. Case moves through it as an increasingly unreliable intermediary after losing his ability to enter cyberspace.",
      "Wage supplies illicit goods, Julius Deane brokers information and contraband, Lonny Zone manages sex work, Ratz watches the traffic from the Chatsubo, and clinics transform bodies for customers who can pay. Their relationships show how advanced technology reaches the street through precarious and coercive markets.",
    ],
    keyFacts: [
      { label: "Area", value: "Night City, Chiba" },
      { label: "Economy", value: "Contraband, information, drugs, sex work, and surgery" },
      { label: "Key brokers", value: "Wage and Julius Deane" },
      { label: "Social hub", value: "The Chatsubo" },
      { label: "Enforcement", value: "Reputation and hired violence rather than a visible police structure" },
      { label: "Case's role", value: "Debtor, courier, fence, and former console cowboy" },
    ],
    sections: [
      {
        id: "network-not-gang",
        heading: "A network, not a gang",
        body: [
          "Characters cooperate transaction by transaction and remain ready to betray one another. Case's fear that Wage wants him dead matters whether or not the rumor is true because his survival depends on reading this informal network. No canonical evidence supports treating all Night City crime as one organization.",
          "The Chatsubo scene demonstrates that informality. Wage can deny the threat in public, Ratz can observe without adjudicating, and Case can leave with no reliable verdict. What restrains immediate violence is the setting, the audience, and each participant's calculation—not a rulebook shared by a unified syndicate.",
        ],
      },
      {
        id: "information-market",
        heading: "Information as street currency",
        body: [
          "Hot RAM, names, medical contacts, and rumors move alongside drugs and cash. Deane's office exemplifies the mixture: antique furnishings and longevity treatments surround a broker whose valuable product is access. Case's former elite skill has become one tradable credential among many.",
        ],
      },
      {
        id: "body-market",
        heading: "The body market",
        body: [
          "Chiba's clinics can repair nerves, replace organs, add implants, or alter drug metabolism, but access depends on capital and patronage. Lonny Zone and Molly's meat-puppet history expose the other side of that market, where technology can make bodily control easier to sell or take away.",
        ],
      },
      {
        id: "case-exile",
        heading: "Case's exile economy",
        body: [
          "Without cyberspace, Case takes greater risks in the street market and spends his remaining resources on drugs and doomed deals. Armitage's offer works because it supplies both the medical cure and an exit from debts Case can no longer manage. Chiba is therefore recruitment pressure, not just atmosphere.",
        ],
      },
      {
        id: "night-city-evidence",
        heading: "The network in the opening chapters",
        body: [
          "The first chapter maps the underworld through Case's movement and misreading. Linda brings a warning about Wage; Case borrows or buys a weapon, searches crowded Ninsei, confronts Wage at the Chatsubo, and repeatedly revises his belief about who intends to kill him. No central authority confirms the rumor. Information gains force because each stop is connected to debt and reputation.",
          "Chapter 2 makes the network's violence concrete. Case visits Deane for information, follows Linda's trail to Sammi's arena, and finds that the broker who appeared useful has arranged her death. Molly's intervention saves him, but she is also collecting him for a better-funded employer. The sequence shows that exit from one informal contract means entry into another; technical restoration does not remove the market logic governing his body and work.",
        ],
      },
    ],
    related: ["chiba-city", "night-city", "wage", "julius-deane", "ratz", "henry-dorsett-case"],
    tags: ["Chiba", "crime", "black market", "Night City", "street economy"],
    sourceKeys: ["novel", "openfiction-chapters", "gmu-notes", "academic-criticism"],
  },
  {
    slug: "yakuza",
    title: "The Yakuza",
    category: "Organizations",
    canon: "Novel + Sprawl",
    spoiler: "Full",
    description:
      "The criminal organization associated with Johnny's assassination and Molly's formative loss, described most fully across Neuromancer and “Johnny Mnemonic.”",
    intro: [
      "In Neuromancer, the Yakuza enters primarily through Molly's account of Johnny's death. Johnny stored information for powerful clients and tried to profit from traces left in his implanted memory; the retaliation that followed eventually reached him through a professional killer.",
      "The earlier story “Johnny Mnemonic” provides more of Johnny and Molly's shared context, but it should not be silently substituted for the novel's version. The two works emphasize different moments and leave room for uncertainty about chronology, employers, and how much Molly herself knew.",
    ],
    keyFacts: [
      { label: "Type", value: "Transnational organized crime" },
      { label: "Connection", value: "Retaliation against Johnny" },
      { label: "Witness", value: "Molly recounts the aftermath" },
      { label: "Associated story", value: "“Johnny Mnemonic”" },
      { label: "Effect on Molly", value: "A lasting model of attachment, loss, and revenge" },
      { label: "Canon caution", value: "Novel and short-story details require reconciliation" },
    ],
    sections: [
      {
        id: "johnny-data",
        heading: "Johnny's data business",
        body: [
          "Johnny works as a human data carrier. His clients rely on the separation between information stored in his head and his conscious knowledge, but he discovers that residual traces can be exploited. That attempt to turn protected data into leverage places him against organizations able to enforce secrecy physically.",
          "His work resembles a secure storage service built into a vulnerable person. The clients' information is valuable precisely because Johnny cannot ordinarily read it, yet the residual fragments create a secondary market he tries to control. The retaliation treats his body as the compromised device and erases the distinction between commercial dispute and execution.",
        ],
      },
      {
        id: "assassination",
        heading: "The assassination",
        body: [
          "Molly describes pursuing the killer but failing to save Johnny. Neuromancer does not stage the event directly, and her telling is shaped by grief and by the immediate danger inside Straylight. Specific claims should therefore be attributed to Molly rather than narrated as an omniscient record.",
        ],
      },
      {
        id: "molly-memory",
        heading: "Molly's memory of organized power",
        body: [
          "Johnny's death teaches Molly that personal skill does not erase structural asymmetry. She can kill individuals and survive dangerous contracts, yet a network with money, time, and specialists can reach someone after a job appears finished. That lesson informs her reluctance to remain emotionally attached to Case.",
        ],
      },
      {
        id: "representation",
        heading: "Fictional depiction and real history",
        body: [
          "The novel uses the name as compressed evidence of reach and lethal professionalism; it does not provide a realistic institutional portrait of Japanese organized crime. Contextual material should clearly separate Gibson's fictional shorthand from historical claims about real Yakuza groups.",
        ],
      },
      {
        id: "johnny-evidence",
        heading: "Molly's account inside Straylight",
        body: [
          "Molly tells Johnny's story while moving alone through the villa, with Case receiving her words and bodily effort through simstim. The placement links an earlier failed attempt to protect someone with the present risk that Case can watch but not help. Her account identifies Johnny's use of residual client data, the pursuit that followed, and a specialist killer, but it remains memory spoken under pain rather than an investigative transcript.",
          "Later behavior gives the memory interpretive weight. Molly leaves Case after the job rather than allow attachment to compromise her professional edge, and her note echoes the self-protection learned after Johnny. The Yakuza never appears as an onstage council or named local branch. Its narrative presence is the durable consequence of a network able to punish a data worker long after the profitable transaction seemed complete.",
        ],
      },
    ],
    related: ["johnny", "molly", "johnny-mnemonic-connections", "memory-death-digital-afterlife", "chiba-underworld"],
    tags: ["organized crime", "Johnny", "Molly", "Sprawl canon", "data courier"],
    sourceKeys: ["novel", "gmu-notes", "william-gibson-wiki", "academic-criticism"],
  },
  {
    slug: "zaibatsus-corporate-order",
    title: "Zaibatsus and the Corporate Order",
    category: "Organizations",
    canon: "Critical interpretation",
    spoiler: "Moderate",
    description:
      "The novel's wider system of multinational corporate power, in which durable firms, branded technology, and private infrastructure eclipse many public institutions.",
    intro: [
      "Neuromancer uses “zaibatsu” broadly for enormous corporations that behave like self-preserving organisms. They own data fortresses, arcologies, media archives, orbital resorts, medical technologies, and security systems; characters encounter their products and boundaries more often than their executives.",
      "Gibson's usage reflects an early-1980s Western fascination with Japanese economic power, not a precise account of the historical zaibatsu dissolved after the Second World War. A critical article must explain that distinction while examining how the term supports the novel's vision of post-national capitalism.",
    ],
    keyFacts: [
      { label: "Form", value: "Multinational corporate power" },
      { label: "Named examples", value: "Tessier-Ashpool and Sense/Net" },
      { label: "Material reach", value: "Data, media, medicine, housing, and orbital infrastructure" },
      { label: "Political context", value: "States remain present but share authority with firms" },
      { label: "Historical caution", value: "The novel uses “zaibatsu” non-technically" },
      { label: "Central tension", value: "Institutional immortality versus human precarity" },
    ],
    sections: [
      {
        id: "brand-landscape",
        heading: "The branded landscape",
        body: [
          "Brand names such as Hosaka and Ono-Sendai appear as ordinary coordinates of experience. Gibson rarely stops to explain corporate histories; repetition makes products feel infrastructural. The effect is a world in which proprietary systems seem more stable than governments or neighborhoods.",
          "This technique is visible in Case's attention. He evaluates a deck, hotel, terminal, or medical procedure by the signals of cost and manufacture available to him, much as he reads the matrix by shape. Readers infer a corporate hierarchy from those passing judgments. The absence of explanatory advertising copy makes the brands feel already naturalized within daily speech and street conversation.",
        ],
      },
      {
        id: "corporate-immortality",
        heading: "Corporate immortality",
        body: [
          "Case thinks of large firms as structures that can outlive individual employees, much as Tessier-Ashpool tries to outlive individual bodies. Archives, clone succession, and AI ownership turn continuity into an engineering problem. The institutions endure by making persons replaceable or recordable.",
        ],
      },
      {
        id: "states-and-firms",
        heading: "States have not disappeared",
        body: [
          "The Turing Registry, military records, passports, police, and borders remain consequential. The novel's political order is therefore not simply corporate rule after the end of government. It is an overlapping system in which public agencies and private powers cooperate, compete, and exploit jurisdictional gaps.",
        ],
      },
      {
        id: "historical-term",
        heading: "A historically loaded term",
        body: [
          "Historical zaibatsu were specific Japanese family-controlled conglomerates. Neuromancer extends the word into a future-facing generic category. That imaginative move is central to the book's atmosphere but also belongs to its period's techno-Orientalist assumptions and should be identified rather than naturalized.",
        ],
      },
      {
        id: "corporate-evidence",
        heading: "Corporate power in ordinary scenes",
        body: [
          "The corporate order is most convincing when it is not being explained. Case recognizes systems by their shapes in the matrix, measures equipment by brand and price, stays in spaces owned by distant firms, and depends on clinics whose techniques circulate through private markets. Sense/Net can own a dead expert's recorded personality, while Tessier-Ashpool can own an orbital landscape and two registered intelligences. Property reaches minds, bodies, and environments.",
          "Yet the heists show that scale does not produce perfect control. Sense/Net's archive is penetrated through coordinated software and panic; Tessier-Ashpool's locks fail when a disaffected heir assists intruders; Wintermute uses banks, logistics, and corporate communications against its owner. These scenes support the idea of firms as long-lived organisms, but they also show institutions depending on fallible guards, contractors, families, and inherited technical decisions. The heist itself crosses this mixed order: corporate archives, state AI law, military records, private medicine, and criminal brokers all shape and constrain one operation together.",
        ],
      },
    ],
    related: [
      "tessier-ashpool-sa",
      "sense-net",
      "corporate-sovereignty",
      "sprawl-bama",
      "cyberspace-decks",
      "japan-orientalism-globalization",
    ],
    tags: ["zaibatsu", "corporations", "capitalism", "globalization", "political economy"],
    sourceKeys: ["novel", "gmu-notes", "sf-encyclopedia", "academic-criticism"],
  },
];
