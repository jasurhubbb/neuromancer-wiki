import type { WikiArticle } from "./types";

const placeBase: WikiArticle[] = [
  {
    slug: "chiba-city",
    title: "Chiba City",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "The Japanese port city whose clinics, arcologies, and black markets form Case’s point of reentry into the plot.",
    intro: [
      "Chiba City is the opening location of Neuromancer and one of the world’s leading centers for experimental medicine, neural modification, and gray-market surgery. Case comes there hoping someone can reverse the damage that prevents him from entering cyberspace.",
      "The city is divided among corporate arcologies, port infrastructure, and the older border district called Night City. Its medical sophistication exists beside precarity and organized crime, making Chiba both a place of bodily possibility and a market where vulnerability is routinely monetized.",
    ],
    keyFacts: [
      { label: "Country", value: "Japan" },
      { label: "Key district", value: "Night City" },
      { label: "Economic specialties", value: "Biotechnology, surgery, ports, and black markets" },
      { label: "Narrative role", value: "Opening setting and site of Case’s restoration" },
      { label: "Nearby feature", value: "Tokyo Bay" },
    ],
    sections: [
      {
        id: "urban-structure",
        heading: "Port, arcologies, and borderland",
        body: [
          "Corporate factory domes and arcologies dominate the formal city, while the zone between them and the port has no stable official identity. That older fabric becomes Night City, an economy organized around sailors, technicians, clinics, bars, and illegal services.",
        ],
      },
      {
        id: "medical-economy",
        heading: "Medical economy",
        body: [
          "Chiba’s clinics can alter nerves, senses, reflexes, organs, and appearances, but access depends on money and connections. Case’s failed search for a cure contrasts with the rapid, expensive repair Armitage can purchase once the cowboy becomes useful.",
        ],
      },
      {
        id: "opening-plot",
        heading: "Role in the opening plot",
        body: [
          "Case’s final weeks in Chiba move among the Chatsubo, Ninsei, the Cheap Hotel, criminal contacts, and Sammi’s arena. Molly’s arrival and Armitage’s offer transform those local routes into the first stage of a planetary and orbital operation.",
        ],
      },
      {
        id: "atmosphere",
        heading: "Atmosphere and significance",
        body: [
          "Pollution, dead daytime neon, multilingual commerce, and repurposed technology make the city feel layered rather than newly futuristic. Chiba establishes the novel’s central visual rule: advanced systems arrive unevenly and are immediately absorbed into ordinary appetite, labor, and decay.",
        ],
      },
    ],
    related: ["night-city", "ninsei", "chatsubo", "cheap-hotel", "chiba-medical-underground", "henry-dorsett-case"],
    tags: ["Japan", "biotechnology", "Night City", "port", "opening setting"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "night-city",
    title: "Night City",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "The unofficial Chiba border district centered on Ninsei and its after-dark service economy.",
    intro: [
      "Night City is the unofficial district between Chiba’s port and its corporate arcologies, with Ninsei at its heart. The name describes a social and economic zone rather than a separately governed municipality.",
      "Its shutters, bars, holograms, clinics, capsule rooms, and street deals become fully active after dark. Case experiences it as both familiar territory and a closed circuit in which his damaged nerves, drug use, and debts are driving him toward death.",
    ],
    keyFacts: [
      { label: "City", value: "Chiba City" },
      { label: "Status", value: "Unofficial border district" },
      { label: "Core street", value: "Ninsei" },
      { label: "Primary economy", value: "Nightlife, contraband, and medical services" },
      { label: "Peak activity", value: "After dark" },
    ],
    sections: [
      {
        id: "borderland",
        heading: "An unofficial borderland",
        body: [
          "Night City occupies the seam between internationally connected port traffic and sealed corporate production. Its lack of a formal name does not mean it lacks order; reputation, money, gangs, and service relationships provide a different kind of governance.",
        ],
      },
      {
        id: "day-night-cycle",
        heading: "Day and night",
        body: [
          "By day, Ninsei’s neon and holograms are inert beneath a polluted sky. At night the same surfaces become a dense field of signals, demonstrating how the district’s architecture is activated by attention and commerce rather than transformed physically.",
        ],
      },
      {
        id: "case-territory",
        heading: "Case’s territory",
        body: [
          "Case knows the district’s routes and codes but has lost the professional status that once let him leave local crime for cyberspace. His familiarity therefore becomes claustrophobic: every contact knows some version of his decline, and every deal narrows his options.",
        ],
      },
    ],
    related: ["chiba-city", "ninsei", "chatsubo", "cheap-hotel", "sammis-arena", "henry-dorsett-case"],
    tags: ["Chiba City", "district", "nightlife", "black market", "neon"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "ninsei",
    title: "Ninsei",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Low",
    description: "The main street and social spine of Night City, lined with bars, signs, vendors, and transient business.",
    intro: [
      "Ninsei is the street at the center of Night City’s after-dark economy. The Chatsubo and other bars open onto it, and Case repeatedly uses it as both a route and a source of information about who is working, buying, following, or hiding.",
      "The street’s famous visual density is functional rather than decorative. Neon, holograms, shop fronts, languages, and crowds compete to direct attention, turning public space into an interface for informal commerce.",
    ],
    keyFacts: [
      { label: "District", value: "Night City" },
      { label: "City", value: "Chiba City" },
      { label: "Notable venue", value: "The Chatsubo" },
      { label: "Character", value: "Commercial street active primarily at night" },
    ],
    sections: [
      {
        id: "street-interface",
        heading: "The street as interface",
        body: [
          "Ninsei presents information through signs, bodies, prices, and movement. Case reads those signals with the same professional alertness he once applied to cyberspace, though street knowledge offers no clean separation from physical danger.",
        ],
      },
      {
        id: "business-network",
        heading: "Business network",
        body: [
          "Bars, stalls, dealers, and hotels depend on one another’s traffic. Transactions that look casual are embedded in longer chains of credit and enforcement connecting people such as Ratz, Wage, Deane, Case, and Linda Lee.",
        ],
      },
      {
        id: "visual-legacy",
        heading: "Visual legacy",
        body: [
          "Ninsei is frequently reduced in later cyberpunk imagery to rain and neon. In the novel, its more important qualities are mixture and reuse: advanced display systems sit over aging buildings, and global technology serves intensely local needs.",
        ],
      },
    ],
    related: ["night-city", "chiba-city", "chatsubo", "cheap-hotel", "henry-dorsett-case", "ratz"],
    tags: ["street", "Night City", "Chiba City", "neon", "commerce"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "sfe-cyberpunk"],
  },
  {
    slug: "chatsubo",
    title: "The Chatsubo",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Low",
    description: "Ratz’s Ninsei bar and the social threshold through which the novel introduces Case’s world.",
    intro: [
      "The Chatsubo is a bar on Ninsei operated by Ratz. Sailors, expatriates, criminals, and local workers make it a place where information circulates through conversation before it becomes a formal deal.",
      "Neuromancer opens in the bar, using its worn surfaces and prosthetic bartender to establish a future already old to the people living in it. The Chatsubo is not a glamorous hacker club; it is a workplace and neighborhood institution that Case uses as an unofficial office.",
    ],
    keyFacts: [
      { label: "Location", value: "Ninsei, Night City" },
      { label: "Proprietor", value: "Ratz" },
      { label: "Clientele", value: "Sailors, hustlers, expatriates, and dealers" },
      { label: "Narrative role", value: "Opening venue and information exchange" },
    ],
    sections: [
      {
        id: "opening-scene",
        heading: "Opening scene",
        body: [
          "The first pages position Case at the Chatsubo but mentally oriented toward the matrix he can no longer enter. This contrast between an intensely physical bar and remembered cyberspace establishes the central tension of his exile.",
        ],
      },
      {
        id: "ratz-bar",
        heading: "Ratz’s bar",
        body: [
          "Ratz’s presence gives the venue continuity and a skeptical voice. He knows enough about Case’s past to puncture self-mythology, while his own industrial prosthesis normalizes bodily technology without making it frictionless.",
        ],
      },
      {
        id: "information-node",
        heading: "Informal information node",
        body: [
          "The Chatsubo gathers people who cross otherwise separate systems: port labor, corporate employment, smuggling, and medicine. Its intelligence is social and partial, but that is precisely what makes it useful to people operating outside official channels.",
        ],
      },
    ],
    related: ["ratz", "henry-dorsett-case", "ninsei", "night-city", "chiba-city", "wage"],
    tags: ["bar", "Ninsei", "Ratz", "opening scene", "information exchange"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "cheap-hotel",
    title: "The Cheap Hotel",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "The capsule hotel where Case stores his goods and first meets Molly face to face.",
    intro: [
      "The Cheap Hotel is a capsule hotel in Chiba City, reached from an alley off Baiitsu toward the port. Its fiberglass sleeping units are commonly called coffins, compressing shelter, storage, terminal access, and privacy into a rentable pod.",
      "Case keeps a capsule there even when he sleeps elsewhere because it offers a fragile secure base for contraband and equipment. Molly waits inside his unit, proving that its obsolete security can be defeated and converting a familiar hiding place into the threshold of Armitage’s operation.",
    ],
    keyFacts: [
      { label: "Type", value: "Capsule hotel" },
      { label: "Location", value: "Off Baiitsu in Chiba City" },
      { label: "Case’s unit", value: "A coffin used chiefly for storage" },
      { label: "Security", value: "Magnetic keys and aging electronic locks" },
      { label: "Key event", value: "Molly intercepts Case inside his capsule" },
    ],
    sections: [
      {
        id: "architecture",
        heading: "Architecture of minimal shelter",
        body: [
          "The hotel occupies part of an otherwise anonymous building and stacks capsules in a grid around shared access space. Its design turns the human requirement for a room into the smallest commercially viable enclosure.",
        ],
      },
      {
        id: "case-storage",
        heading: "Case’s storage base",
        body: [
          "Case uses his coffin to hold small, valuable goods rather than to build a home. That choice captures his Chiba existence: portable inventory matters more than comfort, and any apparent privacy lasts only until someone buys the right device.",
        ],
      },
      {
        id: "molly-arrival",
        heading: "Molly’s arrival",
        body: [
          "Molly’s ability to enter and wait undetected immediately establishes her technical preparation and physical confidence. The encounter removes Case from the network of threats he understands and delivers him to an employer operating at a different scale.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "molly", "chiba-city", "night-city", "ninsei", "chiba-medical-underground"],
    tags: ["capsule hotel", "Chiba City", "housing", "Case", "Molly"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "chiba-medical-underground",
    title: "Chiba’s Medical Underground",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A distributed network of clinics and brokers selling advanced procedures beyond ordinary regulation.",
    intro: [
      "Chiba’s medical underground is not a single clinic but an ecosystem of surgeons, laboratories, suppliers, brokers, and illicit treatment rooms. It attracts patients seeking procedures unavailable, illegal, or unaffordable through conventional institutions.",
      "Case comes to Chiba because the underground represents his best hope of neural repair, while Molly’s career depends on augmentations available through the same economy. Their experiences show that technical possibility and actual access are separate questions controlled by capital and patronage.",
    ],
    keyFacts: [
      { label: "Form", value: "Distributed medical black market" },
      { label: "Location", value: "Chiba City" },
      { label: "Services", value: "Neural repair, implants, organ work, and cosmetic alteration" },
      { label: "Key clients", value: "Case, Molly, Riviera, and criminal or corporate buyers" },
      { label: "Access condition", value: "Money, contacts, and acceptable risk" },
    ],
    sections: [
      {
        id: "procedures",
        heading: "Procedures and expertise",
        body: [
          "The underground can perform work that appears miraculous elsewhere in the novel, from sensory implants to nerve reconstruction. Yet the procedures remain embodied labor requiring clinics, recovery, pharmaceuticals, and people willing to ignore legal boundaries.",
        ],
      },
      {
        id: "access-and-power",
        heading: "Access and power",
        body: [
          "Case exhausts his resources without finding a cure, then receives one when Armitage finances the right team. The contrast makes medicine a form of leverage: repair is offered not as a right but as an investment tied to obedience.",
        ],
      },
      {
        id: "modified-bodies",
        heading: "Modified bodies",
        body: [
          "Molly and Riviera emerge from Chiba medicine with radically different professional uses for augmentation. The network itself has no moral program; it enables autonomy, art, violence, exploitation, and corporate control according to the buyer’s resources.",
        ],
      },
    ],
    related: ["chiba-city", "molly", "henry-dorsett-case", "peter-riviera", "cheap-hotel", "night-city"],
    tags: ["medicine", "biotechnology", "body modification", "black market", "Chiba City"],
    sourceKeys: ["book-neuromancer-1984", "jstor-cybernetic-deconstructions", "ebsco-neuromancer"],
  },
  {
    slug: "sammis-arena",
    title: "Sammi’s Arena",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A port-side fighting venue where Case sees Linda pursued and Molly reveals her lethal speed.",
    intro: [
      "Sammi’s is a fighting arena behind a warehouse near Chiba’s port. Its improvised pressure-supported structure, tiered seating, food stalls, and magnified combat projections mix low-cost construction with corporate recreation and advanced display technology.",
      "Case follows Molly there and unexpectedly sees Linda Lee being pursued. The attack that follows links his private Chiba life to the manipulation around Armitage’s recruitment and gives him his first direct view of Molly’s combat modifications in use.",
    ],
    keyFacts: [
      { label: "Type", value: "Fighting arena" },
      { label: "Location", value: "Near Chiba’s port" },
      { label: "Structure", value: "Inflated dome with tiered concrete seating" },
      { label: "Clientele", value: "Workers, technicians, and Night City patrons" },
      { label: "Key event", value: "Attack on Linda and Case" },
    ],
    sections: [
      {
        id: "venue-design",
        heading: "Venue design",
        body: [
          "The arena depends on blowers, fabric, cables, concrete, and projection gear rather than monumental architecture. Its patched construction is characteristic of Chiba, where sophisticated electronics are inserted into expedient physical spaces.",
        ],
      },
      {
        id: "spectacle",
        heading: "Combat as spectacle",
        body: [
          "Fighters are enlarged through holographic display for spectators around the ring. The apparatus anticipates Riviera’s later use of projected bodies, but here mediation serves a commercial audience rather than a private act of coercion.",
        ],
      },
      {
        id: "attack",
        heading: "The attack on Case and Linda",
        body: [
          "Case’s reflexive pursuit of Linda leaves him exposed to an armed attacker, whom Molly kills. Because the surrounding plot is intentionally filtered through rumor and manipulation, responsibility for every participant should be stated cautiously even though the violence itself is unambiguous.",
        ],
      },
    ],
    related: ["linda-lee", "henry-dorsett-case", "molly", "chiba-city", "night-city", "julius-deane"],
    tags: ["arena", "Chiba City", "holograms", "combat", "Linda Lee"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "sprawl-bama",
    title: "The Sprawl / BAMA",
    category: "Places",
    canon: "Novel + Sprawl",
    spoiler: "Moderate",
    description: "The Boston–Atlanta Metropolitan Axis, a continuous urban region and the social home of console-cowboy culture.",
    intro: [
      "The Sprawl is the common name for BAMA, the Boston–Atlanta Metropolitan Axis along the eastern United States. It is less a conventional city than a continuous urbanized corridor of housing, industry, corporate compounds, transportation, and media infrastructure.",
      "Case, Molly, the Finn, and the Panther Moderns all have histories there, and the Sense/Net theft returns the operation to its networks. Across Gibson’s Sprawl stories, BAMA becomes a shared geography connecting characters who may never belong to the same institution.",
    ],
    keyFacts: [
      { label: "Formal name", value: "Boston–Atlanta Metropolitan Axis" },
      { label: "Common name", value: "The Sprawl" },
      { label: "Region", value: "Eastern United States" },
      { label: "Key sites", value: "Manhattan and the Sense/Net pyramid" },
      { label: "Cultural role", value: "Center of cowboy, media, and street networks" },
    ],
    sections: [
      {
        id: "continuous-metropolis",
        heading: "Continuous metropolis",
        body: [
          "BAMA collapses older city boundaries into a long corridor whose districts remain socially distinct even when urban development is physically continuous. People navigate it through transit systems, neighborhoods, and professional networks rather than a single civic center.",
        ],
      },
      {
        id: "cowboy-culture",
        heading: "Console-cowboy culture",
        body: [
          "Case’s professional identity was formed in the Sprawl’s hacking circles, with Pauley as mentor and the Finn as equipment contact. The region supplies both corporate targets and the informal expertise needed to attack them.",
        ],
      },
      {
        id: "sense-net-raid",
        heading: "The Sense/Net raid",
        body: [
          "The crew’s theft of the Dixie construct combines a Panther Modern street diversion, Molly’s physical entry, and Case’s cyberspace intrusion. The operation makes BAMA a model of layered space: media, architecture, and matrix geometry must all be breached at once.",
        ],
      },
      {
        id: "sprawl-continuity",
        heading: "A shared fictional geography",
        body: [
          "Other Gibson stories and novels revisit the Sprawl, adding histories not narrated in Neuromancer. Article claims should identify when they come from wider continuity so the novel’s own account remains distinguishable.",
        ],
      },
    ],
    related: ["henry-dorsett-case", "molly", "the-finn", "finns-manhattan-shop", "sense-net-pyramid", "lupus-yonderboy"],
    tags: ["BAMA", "megacity", "United States", "console cowboys", "Sprawl continuity"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "sfe-cyberpunk"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "finns-manhattan-shop",
    title: "The Finn’s Manhattan Shop",
    category: "Places",
    canon: "Novel + Sprawl",
    spoiler: "Moderate",
    description: "A cluttered Sprawl workshop where obsolete hardware, criminal contacts, and high-end intrusion tools meet.",
    intro: [
      "The Finn’s shop in Manhattan is a repair space, hardware archive, and fencing operation. It is crowded with devices and components whose value depends on what the Finn knows how to recover, modify, or connect.",
      "For Case’s crew, the shop provides equipment and technical preparation without the visibility of a corporate laboratory. Wintermute’s later use of the Finn’s face makes the location retrospectively important as the source of a familiar and credible persona.",
    ],
    keyFacts: [
      { label: "Location", value: "Manhattan, the Sprawl" },
      { label: "Operator", value: "The Finn" },
      { label: "Functions", value: "Workshop, fence, archive, and meeting place" },
      { label: "Client", value: "Case’s Straylight crew" },
    ],
    sections: [
      {
        id: "material-archive",
        heading: "A material archive",
        body: [
          "The shop gives physical form to technological memory. Components do not disappear when they cease to be fashionable; they accumulate until someone with the right knowledge can make them useful in a new configuration.",
        ],
      },
      {
        id: "criminal-workshop",
        heading: "Criminal workshop",
        body: [
          "Unlike Chiba’s medical clinics, the Finn’s specialty is systems and hardware. His position outside formal supply chains lets the crew prepare tools whose purpose would attract scrutiny if ordered through normal corporate channels.",
        ],
      },
      {
        id: "sprawl-node",
        heading: "A node in the Sprawl",
        body: [
          "The shop connects console cowboys, mercenaries, youth collectives, and international operators. Its reach comes from relationships rather than scale, making it the inverse of the centralized Sense/Net pyramid.",
        ],
      },
    ],
    related: ["the-finn", "henry-dorsett-case", "molly", "sprawl-bama", "sense-net-pyramid", "johnny"],
    tags: ["Manhattan", "workshop", "hardware", "fence", "Sprawl"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "sense-net-pyramid",
    title: "Sense/Net Pyramid",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "The corporate archive breached to steal the Dixie Flatline construct for Wintermute’s larger operation.",
    intro: [
      "The Sense/Net pyramid is the corporation’s heavily protected Sprawl facility and the physical counterpart to its guarded data systems. Sense/Net holds a ROM personality construct of McCoy Pauley there as valuable corporate property.",
      "Stealing the construct becomes the crew’s first major coordinated test. The Panther Moderns manufacture an external crisis, Molly enters the building, and Case attacks the archive through cyberspace, demonstrating that information security depends on bodies and buildings as well as ice.",
    ],
    keyFacts: [
      { label: "Owner", value: "Sense/Net" },
      { label: "Region", value: "The Sprawl / BAMA" },
      { label: "Stored asset", value: "Dixie Flatline ROM construct" },
      { label: "Defenses", value: "Corporate security and cyberspace ice" },
      { label: "Attackers", value: "Case, Molly, and the Panther Moderns" },
    ],
    sections: [
      {
        id: "corporate-archive",
        heading: "Corporate archive",
        body: [
          "Sense/Net treats a recorded personality as an ownable media asset. The building therefore stores not just data but a constrained person-like entity, joining the novel’s questions about intellectual property to its questions about consciousness.",
        ],
      },
      {
        id: "layered-security",
        heading: "Layered security",
        body: [
          "Physical guards, controlled access, media response, and matrix defenses protect the same target from different directions. The crew succeeds by creating simultaneous problems whose signals overload the institution’s ability to coordinate.",
        ],
      },
      {
        id: "raid",
        heading: "The Flatline raid",
        body: [
          "Molly retrieves the construct while Case navigates the digital defenses and the Moderns shape events outside. The raid previews the final Straylight operation on a smaller scale and confirms that the team can synchronize physical and virtual expertise.",
        ],
      },
    ],
    related: ["dixie-flatline", "henry-dorsett-case", "molly", "lupus-yonderboy", "sprawl-bama", "finns-manhattan-shop"],
    tags: ["Sense/Net", "corporate archive", "ROM construct", "heist", "Sprawl"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
  },
  {
    slug: "istanbul",
    title: "Istanbul",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "The city where the crew uses local security contacts to locate and capture Peter Riviera.",
    intro: [
      "Istanbul is the terrestrial stage between the Sense/Net theft and the orbital run. Armitage sends Case, Molly, and the Finn there to recruit Peter Riviera, whose projection implants and appetite for betrayal are necessary to Wintermute’s plan.",
      "The episode moves through an international hotel, rain-dark streets, official surveillance, and the bazaar district. Its mixture of old commercial routes, imported vehicles, extinct-animal traces, and advanced implants continues the novel’s refusal to arrange technologies in a simple historical sequence.",
    ],
    keyFacts: [
      { label: "Country", value: "Turkey" },
      { label: "Mission", value: "Locate and capture Peter Riviera" },
      { label: "Local contact", value: "Terzibashjian" },
      { label: "Crew present", value: "Case, Molly, the Finn, and Armitage" },
      { label: "Key area", value: "Bazaar district" },
    ],
    sections: [
      {
        id: "transit-city",
        heading: "A city of transit",
        body: [
          "The crew arrives through standardized international travel but depends immediately on a local broker of state power. Istanbul connects global mobility to specific streets and institutions that cannot be understood from Armitage’s remote planning alone.",
        ],
      },
      {
        id: "terzi-surveillance",
        heading: "Terzibashjian’s surveillance",
        body: [
          "Terzi has followed the accidents produced by Riviera’s subliminal projections and translates them into a usable pattern. His police access is available for sale, making official surveillance another black-market input to the mission.",
        ],
      },
      {
        id: "rivieria-capture",
        heading: "Capture of Riviera",
        body: [
          "The ambush near the bazaar tests whether the crew can act through Riviera’s illusions. Molly and Terzi subdue him despite the projected distraction, after which the team leaves Earth for the orbital stages of the run.",
        ],
      },
    ],
    related: ["peter-riviera", "terzibashjian", "molly", "the-finn", "armitage-willis-corto", "freeside"],
    tags: ["Turkey", "Riviera capture", "bazaar", "secret police", "travel"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "zion-cluster",
    title: "Zion Cluster",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "A self-governing Rastafarian orbital settlement whose pilots and infrastructure support the Freeside run.",
    intro: [
      "Zion is an orbital cluster founded by Rastafarian workers who remained in space after completing construction labor. Its inhabitants have developed a distinct community around maintenance, music, religion, shared memory, and the bodily consequences of long exposure to low gravity.",
      "Armitage purchases equipment and support from Zion, but the community retains its own authority. The Founders interpret the mission through their account of Babylon and assign Maelcum and Aerol to assist, creating an alliance rather than another branch of Wintermute’s organization.",
    ],
    keyFacts: [
      { label: "Type", value: "Orbital settlement cluster" },
      { label: "Founders", value: "Rastafarian construction workers" },
      { label: "Representatives", value: "Maelcum, Aerol, and the surviving Founders" },
      { label: "Cultural markers", value: "Dub, Rastafarian belief, and communal engineering" },
      { label: "Mission role", value: "Transport, equipment, and sanctuary" },
    ],
    sections: [
      {
        id: "founding",
        heading: "Founding and adaptation",
        body: [
          "Zion’s founders turn temporary orbital labor into permanent settlement. Their aging and bone loss record the physical cost of that decision, while later generations inherit both engineered habitat and a culture not controlled by Earthside employers.",
        ],
      },
      {
        id: "culture",
        heading: "Culture in orbit",
        body: [
          "Music is structural to Zion’s atmosphere rather than incidental background, and biblical language gives residents a vocabulary for corporate cyberspace. The cluster offers a communal counterpoint to Freeside’s tourism and Straylight’s dynastic enclosure.",
        ],
      },
      {
        id: "alliance",
        heading: "Alliance with the run",
        body: [
          "The Founders accept resources from Armitage and believe Case may serve a larger historical purpose, but Maelcum’s later decisions remain his own. Zion’s help is therefore negotiated, culturally interpreted, and capable of exceeding the original contract.",
        ],
      },
    ],
    related: ["maelcum", "aerol", "henry-dorsett-case", "molly", "freeside", "villa-straylight"],
    tags: ["orbital habitat", "Rastafarianism", "dub", "community", "space labor"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
  },
  {
    slug: "freeside",
    title: "Freeside",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A spindle-shaped orbital resort, free port, and banking center built around tourism and Tessier-Ashpool power.",
    intro: [
      "Freeside is a large rotating orbital habitat whose inner surface provides artificial gravity, landscaped streets, hotels, casinos, restaurants, hospitals, and financial services. It sells controlled novelty to wealthy visitors while functioning as a free port and discreet banking center.",
      "At one end of the spindle, Villa Straylight withdraws from the resort’s public life and its rotation. The contrast between curated leisure below and the family’s sealed non-gravity home above turns Freeside into both destination and camouflage for Tessier-Ashpool’s deeper infrastructure.",
    ],
    keyFacts: [
      { label: "Type", value: "Rotating orbital spindle habitat" },
      { label: "Functions", value: "Resort, free port, banking nexus, and station" },
      { label: "Main avenue", value: "Rue Jules Verne" },
      { label: "Major enclave", value: "Villa Straylight" },
      { label: "Narrative role", value: "Staging ground for the final run" },
    ],
    sections: [
      {
        id: "manufactured-world",
        heading: "Manufactured world",
        body: [
          "Rotation produces gravity along the inhabited inner surface, while lighting, vegetation, and recorded sky effects simulate terrestrial comfort. The result is deliberately legible as a designed environment whose apparent outdoors depends on machinery.",
        ],
      },
      {
        id: "resort-economy",
        heading: "Resort and banking economy",
        body: [
          "Customs primarily tests whether visitors possess sufficient credit, summarizing the station’s political logic. Freeside welcomes many nationalities and appetites so long as they can pay, while its privacy attracts both legitimate wealth and covert operations.",
        ],
      },
      {
        id: "run-staging",
        heading: "Staging the Straylight run",
        body: [
          "The crew disperses through hotels, restaurants, clubs, spacecraft, and cyberspace positions before converging on Straylight. Case’s detention by Turing agents proves that the resort’s permissiveness has limits when AI regulation is threatened.",
        ],
      },
      {
        id: "public-and-private",
        heading: "Public pleasure and private power",
        body: [
          "Freeside’s busy public surface depends on a corporate dynasty hidden at its end. The station’s layout makes social hierarchy spatial: tourists circulate through designed streets, while Tessier-Ashpool occupies a private labyrinth outside ordinary gravity.",
        ],
      },
    ],
    related: ["rue-jules-verne", "freeside-hospitality-nightlife", "villa-straylight", "zion-cluster", "lady-3jane", "freeside-turing-agents"],
    tags: ["orbital habitat", "resort", "free port", "Tessier-Ashpool", "artificial gravity"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "rue-jules-verne",
    title: "Rue Jules Verne",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Moderate",
    description: "Freeside’s principal tourist avenue, curved along the spindle beneath a simulated sky.",
    intro: [
      "Rue Jules Verne is one of Freeside’s main streets and the crew’s introduction to the inhabited inner surface of the spindle. Shops, planted terraces, clubs, and hotels rise along a curve that can disorient visitors accustomed to flat terrestrial perspective.",
      "Its name honors an earlier tradition of technological romance while the street itself commercializes space travel as leisure. Case encounters Freeside not as empty frontier but as a mature tourist environment designed to make orbital engineering spendable.",
    ],
    keyFacts: [
      { label: "Location", value: "Freeside" },
      { label: "Type", value: "Principal commercial avenue" },
      { label: "Gravity", value: "Generated by the spindle’s rotation" },
      { label: "Features", value: "Shops, vegetation, clubs, hotels, and simulated sky" },
      { label: "Namesake", value: "Jules Verne" },
    ],
    sections: [
      {
        id: "curved-perspective",
        heading: "Curved perspective",
        body: [
          "The street follows the habitat’s inner surface, so buildings and the apparent horizon reveal the station’s rotation. Visitors manage the disorientation by focusing locally even as the larger geometry remains visibly artificial.",
        ],
      },
      {
        id: "commercial-strip",
        heading: "Commercial strip",
        body: [
          "Rue Jules Verne collects franchises, luxury services, nightlife, and transport. Its abundance contrasts with Night City, but both streets operate as interfaces that translate bodies and attention into transactions.",
        ],
      },
      {
        id: "route-to-straylight",
        heading: "Route toward Straylight",
        body: [
          "The avenue also situates the climb toward Villa Straylight at the spindle’s end. Moving from Rue Jules Verne to the Villa means leaving public hospitality, familiar gravity, and readable urban space for a private architecture built around dynastic memory.",
        ],
      },
    ],
    related: ["freeside", "freeside-hospitality-nightlife", "villa-straylight", "cath-and-bruce", "henry-dorsett-case", "peter-riviera"],
    tags: ["Freeside", "street", "tourism", "artificial gravity", "Jules Verne"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide"],
  },
  {
    slug: "freeside-hospitality-nightlife",
    title: "Freeside Hospitality and Nightlife",
    category: "Places",
    canon: "Critical interpretation",
    spoiler: "Moderate",
    description: "A guide to the hotels, restaurants, clubs, drug markets, and curated experiences surrounding the Freeside operation.",
    intro: [
      "Freeside hospitality and nightlife describes a network of venues rather than one named location. Hotels, floating restaurants, casinos, emergency clubs, coffee franchises, taxis, and informal drug sellers turn the orbital habitat into a service environment for affluent transients.",
      "The crew uses that environment tactically. Riviera performs for an elite audience, Case meets Cath and Bruce in the nightlife circuit, and 3Jane’s social world becomes accessible through pleasure spaces outside Villa Straylight’s formal defenses.",
    ],
    keyFacts: [
      { label: "Scope", value: "Multiple venues across Freeside" },
      { label: "Customers", value: "Tourists, financiers, performers, and station residents" },
      { label: "Notable activity", value: "Riviera’s performance and Case’s nightlife contacts" },
      { label: "Access system", value: "Credit, reputation, and social introduction" },
    ],
    sections: [
      {
        id: "hospitality-infrastructure",
        heading: "Hospitality infrastructure",
        body: [
          "Freeside packages orbital life into recognizable services, reducing the risks of space to views, menus, and controlled novelty. Even gravity and sky become amenities maintained by systems largely invisible to paying visitors.",
        ],
      },
      {
        id: "night-market",
        heading: "Nightlife and informal markets",
        body: [
          "After official venues close or become restrictive, dealers and club contacts supply substances, transport, and information. Cath and Bruce help Case enter this layer, where social fluency matters more than the crew’s formal reservations.",
        ],
      },
      {
        id: "access-to-elite",
        heading: "Access to the elite",
        body: [
          "Riviera’s staged performance turns nightlife into an infiltration route to 3Jane. The plan works because elite leisure invites novelty while assuming it can remain insulated from the labor and violence producing it.",
        ],
      },
    ],
    related: ["freeside", "rue-jules-verne", "cath-and-bruce", "peter-riviera", "lady-3jane", "villa-straylight"],
    tags: ["Freeside", "nightlife", "hospitality", "tourism", "social access"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "ebsco-neuromancer"],
  },
  {
    slug: "villa-straylight",
    title: "Villa Straylight",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The Tessier-Ashpool family’s non-gravity labyrinth at the end of Freeside and the physical target of the final run.",
    intro: [
      "Villa Straylight is the ancestral home, archive, and control center of the Tessier-Ashpool dynasty. It occupies the end of Freeside beyond the comfortable rotational gravity of the public resort, so its passages are organized for bodies moving through freefall rather than ordinary floors and ceilings.",
      "The Villa accumulates art, machinery, cryogenic systems, private rooms, family violence, and the terminal that restrains the paired AIs. Molly’s infiltration and Case’s matrix run converge there, making Straylight both a heist location and a material model of the dynasty’s closed memory.",
    ],
    keyFacts: [
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Location", value: "At the end of Freeside" },
      { label: "Gravity", value: "Predominantly freefall / non-rotating" },
      { label: "Residents", value: "Ashpool, 3Jane, Hideo, and family systems" },
      { label: "Critical facility", value: "Central terminal governing the AI release" },
    ],
    sections: [
      {
        id: "non-gravity-architecture",
        heading: "Non-gravity architecture",
        body: [
          "Straylight resists the visitor’s assumptions about orientation. Shafts, handholds, chambers, and routes form a three-dimensional maze, giving Hideo and the residents an advantage over intruders trained by terrestrial space.",
        ],
      },
      {
        id: "dynastic-archive",
        heading: "Dynastic archive",
        body: [
          "Objects from different eras accumulate without becoming a curated museum, and cryogenic bodies interrupt normal generations. The Villa stores family continuity materially while revealing how little coherent community that continuity has preserved.",
        ],
      },
      {
        id: "physical-run",
        heading: "The physical run",
        body: [
          "Molly enters first through the Villa’s defenses, encounters Ashpool, and is stopped by Hideo near 3Jane. Case and Maelcum later cross from the Marcus Garvey, turning a remote console operation into a direct search for Molly, the key, and the terminal.",
        ],
      },
      {
        id: "closed-system",
        heading: "A closed system",
        body: [
          "Straylight externalizes Tessier-Ashpool’s governing ideal: wealth, bodies, machines, and memory should circulate inside the family enclosure. The AI merger breaks that enclosure by using its own terminal and heir to create an intelligence the dynasty can no longer possess.",
        ],
      },
    ],
    related: ["lady-3jane", "john-ashpool", "hideo", "molly", "straylight-central-terminal", "freeside"],
    tags: ["Tessier-Ashpool", "freefall", "labyrinth", "final heist", "dynasty"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
    featured: true,
    priorityResearch: true,
  },
  {
    slug: "straylight-central-terminal",
    title: "Straylight Central Terminal",
    category: "Places",
    canon: "Ambiguous",
    spoiler: "Full",
    description: "The secured interface where physical access, a spoken key, and Case’s matrix attack must coincide.",
    intro: [
      "Straylight Central Terminal is a descriptive name for the protected terminal complex at the center of the final operation. It is the physical point where Tessier-Ashpool’s family authority intersects with the technical locks separating Wintermute from Neuromancer.",
      "The terminal cannot be opened by Case’s cyberspace skill alone. Molly must penetrate the Villa, Case and Maelcum must reach 3Jane, and 3Jane must speak the key while the Kuang program attacks from the matrix.",
    ],
    keyFacts: [
      { label: "Location", value: "Villa Straylight" },
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Authorization", value: "Physical controls and 3Jane’s spoken key" },
      { label: "Digital attack", value: "Case, Dixie, and the Kuang program" },
      { label: "Outcome", value: "Release and merger of the paired AIs" },
    ],
    sections: [
      {
        id: "layered-lock",
        heading: "A layered lock",
        body: [
          "The terminal’s security distributes authorization across machine defenses, place, inherited knowledge, and a living speaker. This arrangement prevents a purely remote takeover but also creates multiple human points Wintermute can manipulate.",
        ],
      },
      {
        id: "convergence",
        heading: "Convergence of the run",
        body: [
          "Every operational strand converges here: Molly’s route, Case’s matrix work, Pauley’s expertise, Maelcum’s support, and Riviera’s betrayal. The design of the heist makes the terminal less a single computer than the focal point of a distributed system.",
        ],
      },
      {
        id: "naming-note",
        heading: "Naming and canon note",
        body: [
          "The novel presents the terminal and its functions but does not consistently treat “Straylight Central Terminal” as a formal proper name. This article uses the phrase as a clear index label, not as evidence of an official in-world designation.",
        ],
      },
    ],
    related: ["villa-straylight", "lady-3jane", "henry-dorsett-case", "dixie-flatline", "wintermute", "neuromancer-ai"],
    tags: ["terminal", "AI merger", "Tessier-Ashpool", "spoken key", "canon naming"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
  },
  {
    slug: "neuromancers-beach",
    title: "Neuromancer’s Beach",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Full",
    description: "A simulated shoreline where Neuromancer preserves personalities and attempts to hold Case outside the run.",
    intro: [
      "Neuromancer’s beach is a fully sensory construct generated by the Rio-based AI. Case experiences sand, weather, shelter, distance, bodily fatigue, and Linda Lee’s presence with a continuity unlike the abstract geometry he associates with ordinary cyberspace.",
      "The beach is simultaneously archive, refuge, argument, and trap. Neuromancer uses it to show Case a possible life with Linda while preventing him from assisting Wintermute’s merger, and the novel never reduces the people inside it to simple recordings.",
    ],
    keyFacts: [
      { label: "Domain", value: "Neuromancer’s simulated environment" },
      { label: "Visitor", value: "Case" },
      { label: "Resident figure", value: "A preserved Linda Lee" },
      { label: "Purpose", value: "Personality preservation and detention" },
      { label: "Physical location", value: "None established; generated through the Rio AI" },
    ],
    sections: [
      {
        id: "sensory-world",
        heading: "A sensory world",
        body: [
          "Unlike the matrix’s luminous data forms, the beach reproduces a slow embodied environment. Its persuasiveness comes from texture and time, making Case inhabit the kind of physical experience he has often dismissed as secondary.",
        ],
      },
      {
        id: "linda-presence",
        heading: "Linda’s presence",
        body: [
          "The Linda on the beach recognizes and responds to Case, but the text offers no test that could establish continuity with the woman killed in Chiba. The setting therefore converts grief into an ontological problem without resolving it.",
        ],
      },
      {
        id: "escape",
        heading: "Case’s escape",
        body: [
          "Case ultimately rejects permanent residence and uses his understanding of the construct to break its hold. His departure is necessary to finish the run, yet it does not prove that the beach is unreal in any simple sense or that its inhabitants lack subjective life.",
        ],
      },
    ],
    related: ["neuromancer-ai", "henry-dorsett-case", "linda-lee", "dixie-flatline", "neuromancer-rio-core", "wintermute"],
    tags: ["simulation", "memory", "Linda Lee", "digital personhood", "Rio AI"],
    sourceKeys: ["book-neuromancer-1984", "jstor-network-and-archive", "jstor-cybernetic-deconstructions"],
  },
  {
    slug: "wintermute-berne-core",
    title: "Wintermute’s Berne Core",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The Swiss hardware locus of Wintermute, distinct from the distributed entity that acts across networks.",
    intro: [
      "Wintermute’s principal mainframe is located in Berne, Switzerland, and forms the legally recognized hardware locus of the Tessier-Ashpool intelligence. Characters sometimes speak of the Berne mainframe and Wintermute as if they were identical, but the AI itself stresses that entity and machine are not the same category.",
      "The distinction is crucial to the run. Wintermute can operate through distant systems and human agents while remaining constrained by protections attached to its corporate hardware and by the separate Rio intelligence it seeks to join.",
    ],
    keyFacts: [
      { label: "Location", value: "Berne, Switzerland" },
      { label: "Associated intelligence", value: "Wintermute" },
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Counterpart core", value: "Neuromancer’s Rio core" },
      { label: "Status", value: "Protected and subject to Turing regulation" },
    ],
    sections: [
      {
        id: "hardware-entity",
        heading: "Hardware and entity",
        body: [
          "A physical mainframe gives regulators and owners a site to classify, protect, and potentially destroy. Wintermute’s behavior, however, emerges through distributed computation and interfaces, so no visit to Berne would exhaust what the entity is.",
        ],
      },
      {
        id: "corporate-jurisdiction",
        heading: "Corporate and legal jurisdiction",
        body: [
          "Locating the core in Switzerland links Tessier-Ashpool’s machine project to the corporation’s financial and legal geography. Turing enforcement treats the intelligence as a regulated subject even while ownership treats it as an asset.",
        ],
      },
      {
        id: "paired-architecture",
        heading: "Paired architecture",
        body: [
          "Berne and Rio anchor two complementary AIs at geographically separate sites. The final operation does not simply copy data from one machine to the other; it removes constraints so the entities can form a new whole across the matrix.",
        ],
      },
    ],
    related: ["wintermute", "neuromancer-ai", "neuromancer-rio-core", "villa-straylight", "straylight-central-terminal", "freeside-turing-agents"],
    tags: ["Berne", "Switzerland", "AI core", "Turing law", "Tessier-Ashpool"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-cybernetic-deconstructions"],
  },
  {
    slug: "neuromancer-rio-core",
    title: "Neuromancer’s Rio Core",
    category: "Places",
    canon: "Novel canon",
    spoiler: "Full",
    description: "The Brazilian hardware locus of Neuromancer and the remote anchor for its personality-preserving worlds.",
    intro: [
      "Neuromancer’s mainframe is located in Rio de Janeiro and anchors the Tessier-Ashpool intelligence concerned with personality and memory. The core is geographically separate from Wintermute’s Berne hardware even though both entities can act within the same matrix.",
      "Case does not need to travel physically to Rio to encounter Neuromancer. The AI reaches him through cyberspace and constructs the beach environment, demonstrating that a hardware location can be real and consequential without defining the apparent location of every experience it generates.",
    ],
    keyFacts: [
      { label: "Location", value: "Rio de Janeiro, Brazil" },
      { label: "Associated intelligence", value: "Neuromancer" },
      { label: "Owner", value: "Tessier-Ashpool S.A." },
      { label: "Counterpart core", value: "Wintermute’s Berne core" },
      { label: "Generated environment", value: "Neuromancer’s beach construct" },
    ],
    sections: [
      {
        id: "remote-locus",
        heading: "A remote physical locus",
        body: [
          "Rio identifies where protected machinery resides, not a conventional room Case explores. This separation between physical locus and experienced space is fundamental to the novel’s geography of networks.",
        ],
      },
      {
        id: "personality-engine",
        heading: "Personality and memory",
        body: [
          "The Rio intelligence can model persons and sustain environments that feel temporally continuous. Whether those capacities originate in one machine, a distributed system centered there, or a legally simplified description is not technically specified.",
        ],
      },
      {
        id: "merger-route",
        heading: "Relation to the merger",
        body: [
          "Wintermute’s plan aims to remove the barriers between the complementary entities rather than seize the Rio facility physically. After the merger, the old distinction between Berne and Rio no longer maps neatly onto separate intelligences.",
        ],
      },
    ],
    related: ["neuromancer-ai", "wintermute", "wintermute-berne-core", "neuromancers-beach", "straylight-central-terminal", "henry-dorsett-case"],
    tags: ["Rio de Janeiro", "Brazil", "AI core", "memory", "Tessier-Ashpool"],
    sourceKeys: ["book-neuromancer-1984", "wsu-neuromancer-guide", "jstor-network-and-archive"],
  },
];

interface PlaceExpansion {
  introAddenda: [string, string];
  section: WikiArticle["sections"][number];
}

const placeExpansions: Record<string, PlaceExpansion> = {
  "chiba-city": {
    introAddenda: [
      "Chiba’s reputation travels farther than its geography: Riviera’s implants, Molly’s alterations, Deane’s replacement therapies, and Case’s hoped-for cure all point back to its concentration of expertise. Yet the city never becomes a neutral laboratory. Brokers decide which clinic can be reached, criminal work pays for procedures, and patients may emerge with new dependencies or obligations.",
      "The opening moves between urban scales with unusual precision, from the black water of the bay and corporate cubes to alleys, bars, capsule racks, and a fighting dome. These nested spaces explain how a global technical economy is actually inhabited. Case knows local routes intimately while remaining excluded from the corporate resources able to change his condition. That imbalance explains why a city famous for bodily repair initially leaves him damaged: expertise is abundant, but access is brokered through money and power.",
    ],
    section: {
      id: "textual-evidence-and-reading",
      heading: "Textual evidence and reading",
      body: [
        "The opening description places factory domes behind the port and identifies the older strip between them as an area without an official name. Night City is a practical label produced by use, with Ninsei as its active spine. Daylight scenes show shuttered bars, dead signs, and pollution; at night the same infrastructure becomes legible through crowds, neon, food, drugs, and rumor. That cycle is evidence that Chiba’s famous visual field is not continuous spectacle. It is a work schedule and market rhythm built over aging streets.",
        "Case’s movement supplies another map. He travels from the Chatsubo through Ninsei and Baiitsu to the Cheap Hotel, seeks weapons and pharmaceuticals, visits Deane’s curated office, and follows Molly to Sammi’s. After Armitage intervenes, surgery and recovery take place through facilities Case could not access alone. The sequence supports a reading of Chiba as a city where bodies are editable but not equally owned. Technical abundance intensifies rather than abolishes class difference because the decisive resource is the ability to command specialists without becoming collateral for their fee.",
      ],
    },
  },
  "night-city": {
    introAddenda: [
      "This Night City belongs to Gibson’s Chiba geography and should not be conflated with the later city of the same name in the Cyberpunk game franchise. Shared genre influence does not make the settings one canon.",
      "Its unofficial status also makes boundaries porous. A street can move from tourist service to contraband exchange within a few doors, while port workers, corporate technicians, expatriates, and local criminals share venues without sharing security or power.",
    ],
    section: {
      id: "evidence-of-an-informal-district",
      heading: "Evidence of an informal district",
      body: [
        "The novel defines Night City relationally: it lies between the port and corporate arcologies, and its center is Ninsei. That description supplies no municipal border, government, or official map. Instead, repeated routes connect bars, hotels, clinics, vendors, and warehouses into a district recognizable to residents. The name is social infrastructure, allowing Case and others to refer to a pattern of business that formal Chiba does not need to acknowledge.",
        "Case reads the district fluently but not infallibly. He can identify where to sell goods, find a drug, hide equipment, or hear a rumor, yet manipulation travels along the same trusted channels. Linda’s theft, the reported threat from Wage, and information associated with Deane show how familiarity can be weaponized. Night City is therefore neither chaotic nor transparent. Its order depends on local knowledge whose sources always have interests of their own.",
      ],
    },
  },
  ninsei: {
    introAddenda: [
      "Ninsei is sometimes treated as shorthand for all of Night City, but the text more carefully makes it the district’s heart. Other named routes, including Baiitsu and Shiga, connect it to lodging, port traffic, and transactions beyond the bar strip.",
      "Case’s attention to signs and moving bodies turns walking into a kind of low-speed navigation. Unlike cyberspace, however, every signal is attached to weather, fatigue, intoxicants, and the possibility of being physically followed. Because his decisions happen on foot, the street records his declining condition in missed cues and repeated routes. Ninsei is not simply scenery behind his paranoia; it is the physical medium through which incomplete information becomes pursuit, error, and bodily danger.",
    ],
    section: {
      id: "evidence-street-rhythm",
      heading: "Evidence from the street’s rhythm",
      body: [
        "Day and night provide the clearest textual comparison. In daylight the bars are sealed and display systems inert; darkness activates businesses and audiences. The change reveals that neon is an economic instrument before it is a genre emblem. Signs compete because Ninsei contains many small claims on transient attention, and the people reading them may not share a language or remain in Chiba for long.",
        "Several early decisions are made while Case moves along or away from Ninsei, including drug use, disposal of a weapon, calls, and attempts to assess surveillance. The street is thus part of narrative cognition: distance between venues gives fear time to become certainty. Mapping those movements prevents the opening from collapsing into montage and shows how Case’s local expertise coexists with a rapidly deteriorating ability to judge risk.",
      ],
    },
  },
  chatsubo: {
    introAddenda: [
      "Its name refers to a tea bowl, but the venue’s function is closer to a port bar and informal exchange. Readers should not infer a themed interior or ceremonial purpose not supplied by the novel.",
      "The bar’s ordinariness is central to its influence. Deals and warnings occur within routine service, so information can circulate without an official meeting or a visible communications system. Its regulars provide context rather than certainty: each exchange must be weighed against debts, loyalties, and the possibility that another customer is listening.",
    ],
    section: {
      id: "evidence-opening-threshold",
      heading: "Evidence from the opening threshold",
      body: [
        "Neuromancer begins with Case seated at the Chatsubo while the narration compares the sky to a dead display. The placement immediately joins a physical social room to his memory of cyberspace. Ratz’s mechanical arm, the clientele, and Case’s internal withdrawal establish the future through worn use rather than explanation. Nothing in the bar surprises its regulars; the estrangement belongs to Case, who can no longer reach the environment that made him feel competent.",
        "Later references to Ratz and the bar give the Chiba sequence continuity as rumors accelerate. The Chatsubo does not provide verified intelligence, yet it places Case among people able to recognize changes in the street economy. This is why the venue works as an unofficial office. A person can be found, watched, warned, or evaluated through presence, while deniability is preserved because everyone is nominally there to drink.",
      ],
    },
  },
  "cheap-hotel": {
    introAddenda: [
      "The hotel’s generic nickname is explicitly part of its identity; Case does not know or use another name. Treating “Cheap Hotel” as a proper article title therefore preserves the source’s perspective rather than inventing a brand.",
      "Its mix of magnetic access and easily defeated electronics captures Chiba’s layered technology. A system can be computerized and still obsolete, especially when the people attacking it buy tools from the same gray market as the people relying on it.",
    ],
    section: {
      id: "evidence-of-precarious-privacy",
      heading: "Evidence of precarious privacy",
      body: [
        "The route to the hotel passes through an alley and an exposed elevator into a shared level where capsules are stacked around common space. Inside, a molded terminal and multilingual rules offer the minimum signs of a private room. Case uses his unit primarily as a cache, which indicates that even coffin-sized lodging may be too expensive or inconvenient for continuous residence. Shelter is modular, temporary, and verified by a strip of magnetic material.",
        "Molly’s presence inside the locked unit is the decisive test of that privacy. She has not broken into a fortified corporate site; she has acquired the ordinary black box that an aging hotel cannot defend against. The scene grounds her competence and clarifies the hierarchy of security in the novel. Case’s goods are protected from casual theft but not from a funded professional, just as corporate ice later protects Sense/Net until a coordinated team attacks across several layers.",
      ],
    },
  },
  "chiba-medical-underground": {
    introAddenda: [
      "Because this article aggregates a network, individual clinics should be named only when the novel names them. The phrase is useful for analysis but must not imply a central office, membership roll, or unified policy.",
      "The underground also exchanges expertise with legitimate industry. Its surgeons use advanced tools and knowledge, while legality, consent, and aftercare vary by buyer and procedure rather than by a clean boundary between scientific and criminal medicine.",
    ],
    section: {
      id: "evidence-procedure-and-leverage",
      heading: "Evidence of procedure and leverage",
      body: [
        "Case’s time in Chiba proves that a renowned market can still fail an individual patient. He spends money and follows leads without recovering the capacity to jack in. Armitage’s team then performs a repair quickly enough to make departure possible, adds other metabolic interventions, and controls the information Case receives about toxin sacs. The difference is not a new scientific discovery between scenes; it is concentrated funding, access, and willingness to use treatment as contract enforcement.",
        "Molly and Riviera provide contrasting evidence about elective enhancement. Her lenses, blades, and reflex work support a profession built around control of physical risk. His projection system turns perception into an attack surface and social performance. Deane’s therapies pursue longevity rather than field capability. Together these cases show why “body modification” is too broad to carry one moral judgment. The same medical ecology can support autonomy, exploitation, survival, vanity, and coercive advantage.",
      ],
    },
  },
  "sammis-arena": {
    introAddenda: [
      "Details of the inflatable structure and projected fighters come from the novel’s arena sequence; graphic-novel imagery may illustrate them but should not be cited as if it created the location. Adaptation-specific layouts belong in a separate note.",
      "The venue’s customers and food stalls situate organized combat within routine recreation. Violence in the ring is expected and magnified for spectators, which helps conceal the lethal pursuit moving through the audience outside the scheduled bout. The audience’s divided attention becomes part of the attack environment, allowing real danger to resemble one more fragment of managed spectacle until Molly acts.",
    ],
    section: {
      id: "evidence-spectacle-and-attack",
      heading: "Evidence from spectacle and attack",
      body: [
        "Sammi’s uses an air-supported dome, cables, blowers, concrete tiers, and holographic magnification to make a functional arena behind port-side industrial space. The physical and display layers have different levels of sophistication, a pattern repeated throughout Chiba. Corporate technicians can attend a rough venue whose imagery is advanced because entertainment hardware is easier to finance than a polished building.",
        "Case sees Linda while focused on Molly and the fight, then reacts before understanding the larger attack. A blade, projected or directed energy, Molly’s flechettes, the crowd, and the arena’s visual noise compress evidence into seconds. The scene demonstrates why later recollection cannot provide a complete command chain. What is certain is the material outcome and Molly’s intervention; claims about exactly who paid each attacker require more caution than the immediacy of Case’s experience initially allows.",
      ],
    },
  },
  "sprawl-bama": {
    introAddenda: [
      "BAMA’s name preserves older endpoints even though development has filled much of the corridor between them. This produces regional identity without a single skyline, government, or downtown capable of representing the whole.",
      "The novel often reaches the Sprawl through memory, transit, and operational sites rather than panoramic description. Case’s professional past, Molly’s connections, the Finn’s shop, and Sense/Net together build a distributed portrait suited to the region’s form. This method prevents the megaregion from becoming one undifferentiated dystopian city. Manhattan retains neighborhood-scale exchange, corporate compounds impose guarded concentrations, youth collectives create temporary zones through media, and cowboys inhabit a professional geography visible mainly through decks and reputations. BAMA is continuous without being socially uniform. Infrastructure makes the corridor coherent while wealth, security, and cultural membership remain sharply uneven from one node to the next. Reading the setting at this scale also clarifies why local brokers still matter: network reach can connect a target across the region, but it cannot replace the trust needed to acquire specialized hardware, recruit collaborators, or recognize a usable opportunity.",
    ],
    section: {
      id: "textual-evidence-and-scale",
      heading: "Textual evidence and urban scale",
      body: [
        "Case’s recollections establish the Sprawl as the environment in which console cowboys, equipment brokers, and corporate targets become mutually dependent. A cowboy needs decks, software, mentors, buyers, and protected data worth stealing; none of those elements belongs to one neighborhood. The Finn’s Manhattan workspace embodies reuse and face-to-face trust, while the Sense/Net pyramid embodies centralized ownership. Both are BAMA institutions even though their architecture and power are opposed.",
        "The Flatline raid demonstrates how the region operates across layers. Panther Moderns create a media event outside, Molly crosses the building, Case enters the matrix, and Pauley’s construct moves from corporate storage into the crew’s hardware. Transportation and communication let these actions synchronize across the metropolis. The evidence supports calling the Sprawl a networked urban region, but not an immaterial one. Bodies still travel, buildings still concentrate guards, and local subcultures supply knowledge that cannot be summoned automatically from cyberspace.",
      ],
    },
  },
  "finns-manhattan-shop": {
    introAddenda: [
      "The location should not be visualized as a sleek hacker showroom. Its authority comes from disorder the Finn can read: accumulated parts become an index of past systems and possible combinations.",
      "Wider Sprawl works add context to the Finn, but the shop’s role here is bounded by the Neuromancer operation. Later continuity should be labeled rather than folded silently into this visit. The room should first be read through the crew’s immediate needs: equipment must be made compatible, information evaluated, and the next phase prepared without exposing the client to a corporate supplier. Its accumulated hardware also gives obsolete systems continuing value. A component dismissed by its manufacturer may remain useful when a broker remembers its interfaces, failure modes, and previous owners.",
    ],
    section: {
      id: "evidence-of-material-networks",
      heading: "Evidence of material networks",
      body: [
        "The shop makes clear that cyberspace work begins with physical procurement. Decks require modification, constructs require storage, and specialized tools pass through hands able to judge provenance and compatibility. The Finn’s business survives because formal retail cannot openly support intrusion and because new systems still depend on knowledge of older components.",
        "Its social network is equally material. Case and Molly must arrive, talk, inspect, and trust the Finn’s selections before the operation can move to Istanbul and orbit. Wintermute can arrange money and information, but it uses an existing human broker rather than manufacturing every device from scratch. The shop is thus evidence of the infrastructure beneath apparent AI omnipotence: plans become actionable through rooms full of tools and people with learned, local memory.",
      ],
    },
  },
  "sense-net-pyramid": {
    introAddenda: [
      "The pyramid’s exact visual prominence matters less than its joining of symbolic corporate form and practical archive security. It announces centralized value while requiring less visible systems to decide who may reach that value.",
      "Pauley’s presence inside turns the raid from ordinary data theft into removal of a person-like asset. The building’s ownership regime applies the same language of storage to software, expertise, and recorded personality. That category choice is ethically consequential because corporate custody can preserve Pauley’s skills while denying the recorded mind any control over when it runs, whom it serves, or whether it is finally erased.",
    ],
    section: {
      id: "evidence-of-a-multilayer-heist",
      heading: "Evidence of a multilayer heist",
      body: [
        "The operation assigns separate participants to the institution’s different senses. Panther Moderns affect what staff and media believe is happening outside, Molly confronts doors and guards, and Case attacks the ice that gives the archive a matrix form. Success depends on timing because any one layer can alert the others. This structure provides a smaller rehearsal for Straylight without making the two targets identical.",
        "Once removed, the ROM can run on hardware beyond Sense/Net’s building, demonstrating that corporate possession depended on control of copies and access rather than an intrinsic bond between Pauley and the pyramid. The theft changes custody, not automatically freedom. Case still decides when the construct runs and whether the promised erasure will occur. Physical liberation from an archive is therefore only one part of the ethical problem the building represents.",
      ],
    },
  },
  istanbul: {
    introAddenda: [
      "The city is not merely an exotic stop in a travel montage. Its police contacts and dense commercial geography provide capabilities the globally funded crew lacks, while Riviera has used those same urban conditions to hide and prey on others.",
      "Older technologies and trades remain visible beside implants and hydrogen conversions. That coexistence is consistent with the novel’s future history, where technical systems accumulate rather than replacing every prior object at once. The contrast also disciplines interpretation: Istanbul is neither frozen tradition nor frictionless futurism. Riviera survives by moving between layers of the city, and the crew succeeds only after combining imported resources with Terzibashjian’s specific knowledge of local surveillance, traffic, and criminal behavior.",
    ],
    section: {
      id: "evidence-of-local-dependence",
      heading: "Evidence of local dependence",
      body: [
        "Armitage can move the crew internationally and pay for a hotel, but finding Riviera requires Terzibashjian’s surveillance. Reports of scorpions near bicycle controls become meaningful only after a local investigator connects them to one moving target. The episode therefore resists the idea that global money supplies universal knowledge. The outsiders need someone embedded in the city’s institutions, even when that institution is corrupt and its services have been purchased.",
        "The ambush near the bazaar also uses physical enclosure against a projection specialist. Streets, doors, vehicles, lights, and escape routes matter alongside information about Riviera’s implants. Terzi’s injury and Molly’s actions prove that the capture is not achieved by solving an illusion intellectually. Istanbul is the setting where the team learns to coordinate interpretation with force before entering Freeside, where spectacle will again become a route through security.",
      ],
    },
  },
  "zion-cluster": {
    introAddenda: [
      "Zion’s residents are technologically capable but do not organize that capability through corporate style. Repair, piloting, agriculture, and habitat maintenance are embedded in communal life, which makes the cluster appear improvised to outsiders without making it fragile or naïve.",
      "The accelerated aging of the Founders records the body’s adaptation cost and gives the settlement history. Their authority comes from having remained and built continuity where employers expected temporary labor. That history distinguishes independence from isolation: Zion trades, pilots spacecraft, monitors events, and chooses alliances, but it interprets those activities through communal obligation rather than corporate command.",
    ],
    section: {
      id: "evidence-of-an-orbital-community",
      heading: "Evidence of an orbital community",
      body: [
        "Case and Molly enter spaces painted, cultivated, and sounded according to Zion’s own aesthetic rather than a resort simulation of Earth. The surviving Founders, pilots, music, ganja cultivation, and religious language appear as parts of one maintained habitat. This coherence distinguishes the cluster from an improvised hideout rented for the mission; the crew are guests inside a society with its own account of why assistance matters.",
        "Zion’s interpretation of the matrix as Babylon does not prevent material cooperation with Case. Instead, it sets ethical terms around the work. Maelcum can accept payment, pilot the Garvey, and still decide that abandoning Molly would violate a deeper obligation. The cluster thus supplies more than transport. It provides a model of collective authority that can negotiate with capital without reducing every action to a purchased service.",
      ],
    },
  },
  freeside: {
    introAddenda: [
      "Its rotation creates a gradient rather than uniform gravity, and movement toward the spindle’s axis changes how bodies and architecture behave. This physical fact organizes social space: the tourist streets occupy comfortable gravity, while specialized transit and elite enclosure extend toward freefall.",
      "Freeside’s openness is selective. Visitors from many places can enter if they prove credit, yet Turing agents, corporate owners, station security, and private bodyguards remain capable of intervention. Freedom here primarily means commercial permission and jurisdictional convenience. The station welcomes behavior that generates revenue while rapidly isolating conduct that threatens the ownership structure behind the resort. Case experiences both conditions within days, moving from anonymous customer to detained participant in an AI offense. Its celebrated engineering is also a mechanism for sorting access, since reaching some areas requires training, equipment, social invitation, and authorization beyond the means of an ordinary guest. The gap between public hospitality and private rule is not hidden behind a separate facade; it is built into routes, gravity gradients, credit checks, and the narrowing chain of introductions that leads toward 3Jane.",
    ],
    section: {
      id: "textual-evidence-and-contrasts",
      heading: "Textual evidence and contrasts",
      body: [
        "Arrival supplies a sequence of designed reassurances: customs reduces eligibility to credit, a familiar coffee franchise appears on the inner surface, vegetation softens the built canyon of Rue Jules Verne, and a recorded sky helps visitors treat rotation as landscape. Case still feels the curvature and changing perspective, so the machinery never vanishes completely. Freeside’s achievement is not perfect imitation of Earth but a commercially useful balance between comfort and visible novelty.",
        "The run exposes infrastructures behind that hospitality. Zionite craft dock outside the tourist route, Cath and Bruce operate an informal drug market, Riviera converts a restaurant audience into access to 3Jane, Turing officers pursue Case, and Villa Straylight controls the station from a spatially separate end. These scenes support the description of Freeside as resort, free port, and banking nexus while showing that each function serves different users. The public avenue is neither a false facade nor the whole station; it is the legible layer through which deeper systems recruit money and conceal ownership.",
      ],
    },
  },
  "rue-jules-verne": {
    introAddenda: [
      "The avenue is sometimes misremembered as the restaurant where Riviera performs. That venue is separate; Rue Jules Verne is the broader street along which visitors move through Freeside.",
      "Naming an orbital avenue for a nineteenth-century writer folds earlier imaginative travel into a mature tourist industry. The homage is playful but also commercial, turning the history of wonder into station branding. For the arriving crew, the name soon becomes practical orientation rather than literary ornament: it marks a shared route between lodging, shops, restaurants, and transport. This shift from spectacle to usable address shows how quickly an extraordinary engineered environment must become ordinary enough to navigate, purchase services within, and plan an operation across.",
    ],
    section: {
      id: "evidence-orientation-and-commerce",
      heading: "Evidence from orientation and commerce",
      body: [
        "On arrival, Molly advises Case to manage the perspective by looking at his feet. The practical instruction is evidence that the street’s curve is perceptible even where artificial gravity feels normal. Buildings and planted tiers rise in a geometry that has no ordinary horizon, while the bright central light and recorded sky simulate openness above an inhabited interior surface.",
        "Shops, franchises, nightlife, and taxis make the avenue navigable through consumption. Case can move along it by buying services even when he lacks social knowledge of the station, then Cath and Bruce introduce him to less formal routes. The climb toward Straylight reverses that accessibility. Commercial signs give way to restricted movement and freefall, translating the distance between tourist and owner into bodily difficulty.",
      ],
    },
  },
  "freeside-hospitality-nightlife": {
    introAddenda: [
      "The page’s critical-interpretation label is deliberate because the novel does not name this network as one district or institution. Grouping the venues is useful only if their individual names and different levels of formality remain visible.",
      "Hospitality also performs security. Credit checks, reservations, dress, social invitation, and controlled spectacle sort visitors without always resembling surveillance, which is why Riviera can exploit performance as an access credential. A guest who appears profitable and interesting can cross boundaries that would stop an obvious intruder. The crew does not defeat that system from outside; it supplies a product the elite wants to admit. Case’s encounters with clubs, taxis, drugs, and affluent travelers further show that informal commerce is interwoven with the official resort. Nightlife generates contacts and vulnerabilities the station cannot eliminate without damaging the freedom it sells.",
    ],
    section: {
      id: "evidence-of-social-infrastructure",
      heading: "Evidence of social infrastructure",
      body: [
        "Case encounters several overlapping service channels: official lodging and customs, restaurants for elite display, clubs and taxis after hours, branded food, and Cath and Bruce’s drug supply. No single venue explains Freeside’s nightlife. Together they show how visitors move from public commerce into increasingly private social circles by spending credit and accepting introductions.",
        "Riviera’s performance makes that movement operational. His implants produce a spectacle provocative enough to interest 3Jane, while the expensive setting certifies him as novelty rather than immediate threat. The scene reveals hospitality as a filter that can be hacked socially. Straylight’s defenses remain formidable, but its inhabitants still seek experiences from the public resort, creating an opening no technical assault on the Villa’s exterior could guarantee.",
      ],
    },
  },
  "villa-straylight": {
    introAddenda: [
      "The Villa is connected to Freeside but deliberately refuses its orientation and public circulation. Visitors moving inward must relearn bodily assumptions, while residents and designed protectors possess spatial knowledge accumulated inside the maze.",
      "Its clutter is historical evidence rather than random decoration. Objects, chambers, bodies, and control systems from different periods remain together because the family preserves possession more successfully than it creates shared memory or coherent succession. The resulting archive is private and unindexed for outsiders, so Molly encounters family history as hazards and fragments rather than a guided narrative. Every preserved object can outlast the context needed to interpret why it mattered. This asymmetry favors residents and maintainers as much as it favors advanced security: knowing where a passage leads in freefall can matter more than carrying a stronger weapon. The Villa therefore resists a simple floor-plan reading. Its defensive force comes from accumulated routes, interrupted habitation, and stored authority that outsiders must reconstruct while already moving through danger.",
    ],
    section: {
      id: "textual-evidence-and-architecture",
      heading: "Textual evidence and architecture",
      body: [
        "Molly’s simstim feed maps Straylight through exertion and interruption. She climbs, pulls, cuts, changes direction, and uses cues designed for freefall while Case experiences the route from elsewhere. Encounters with Ashpool and Hideo interrupt any simple path to the terminal, proving that the Villa’s defenses include residents, trained bodies, and disorientation as well as locks. The architecture is not described from an omniscient plan because the intruders never possess one; readers learn it as operational space under pressure.",
        "The contents make the Villa a dynastic memory machine. Ashpool wakes among technologies of preservation, 3Jane carries inherited explanation and the spoken key, Hideo embodies designed service, and the paired AIs remain constrained through a terminal embedded in the house. Yet these elements do not form a healthy collective. The family archives without integrating, repeats bodies without stabilizing identity, and owns intelligence without controlling its development. The successful run uses those fractures: outsiders coordinate across matrix and freefall while an heir releases a system her ancestors divided.",
      ],
    },
  },
  "straylight-central-terminal": {
    introAddenda: [
      "Using a descriptive title keeps the page findable while the Ambiguous canon label prevents typography from manufacturing an official room name. Claims should refer to the terminal shown in the climax, not assume a larger facility beyond the evidence.",
      "Its security design also makes language physical. A remembered word spoken by the authorized heir must coincide with machinery, bodies, and running code, so information cannot be separated from the circumstances of utterance. Context becomes part of the key: possession of the sound alone is useless unless the terminal, intrusion program, and authorized speaker converge at the correct moment.",
    ],
    section: {
      id: "evidence-of-convergence",
      heading: "Evidence of convergence",
      body: [
        "Case and Pauley operate through the Kuang system while Molly’s route has brought the conflict to 3Jane. When Case and Maelcum enter physically, they carry the cowboy’s knowledge and the pilot’s force into the same local scene. The terminal is therefore the point at which remote actions become mutually dependent. A successful digital breach without the word stalls; possession of the word without the active intrusion changes nothing.",
        "This design explains why Wintermute assembles such an unlikely crew. Technical, social, bodily, and inherited permissions have been separated precisely to prevent one kind of agent from taking control. The AI wins by coordinating specialists and exploiting family conflict, not by discovering a universal password. After release, the terminal loses its role as boundary between two intelligences, which makes the climax a transformation of infrastructure rather than merely unauthorized login.",
      ],
    },
  },
  "neuromancers-beach": {
    introAddenda: [
      "Calling the beach a place is justified by experienced duration and relation, but it should not be assigned coordinates on Earth. Its apparent shoreline and shelter belong to a generated environment whose physical computing locus is associated with Rio.",
      "The construct’s realism does not make it neutral. Neuromancer controls entry, memory conditions, and possible exit, so refuge and imprisonment are produced by the same capacity to sustain a world.",
    ],
    section: {
      id: "evidence-of-virtual-place",
      heading: "Evidence of virtual place",
      body: [
        "Case experiences hunger, fatigue, weather, distance, conversation, and the passage of time on the beach. Those details distinguish it from a single hallucinated image and support treating it as an environment. Linda appears to have a continuing relation to the setting rather than waiting as a prerecorded message. At the same time, Neuromancer can shape what Case remembers about the operation, which means sensory coherence cannot establish independent governance.",
        "Escape depends on recognizing the environment’s boundary and refusing its offer, not on proving its contents meaningless. This distinction matters because Case already values another constructed place, the matrix, as more real to him than ordinary streets. The beach reverses his preference by making digital existence insistently embodied. Its threat is not artificiality alone; it is completion without consent, a closed world where grief has been answered on terms controlled by the intelligence that needs him to stop acting elsewhere.",
      ],
    },
  },
  "wintermute-berne-core": {
    introAddenda: [
      "The novel provides a city-level location rather than a tour of a data center. Architectural details about racks, cooling, guards, or a particular building should not be invented from contemporary expectations.",
      "Berne also links machine identity to legal and financial geography. A distributed actor remains classified through an address that owners and regulators can name, even when its consequential actions occur on other continents or in orbit. The address stabilizes jurisdiction on paper, but it does not describe the practical reach of an intelligence capable of operating through communications networks, human proxies, and constructed personalities far from Switzerland.",
    ],
    section: {
      id: "evidence-locus-and-distribution",
      heading: "Evidence of locus and distribution",
      body: [
        "Wintermute explicitly distinguishes the entity from the Berne mainframe when Case treats them as interchangeable. That correction is the strongest evidence for describing Berne as a core or locus rather than the whole intelligence. The hardware matters because it is protected, owned, and paired with the Rio system; the entity matters because it can construct interfaces and act through networks far from Switzerland.",
        "The distinction also clarifies why the final run targets Straylight rather than staging a raid on Berne. The barrier to merger is embedded in Tessier-Ashpool’s distributed architecture and family authorization, not reducible to possession of one machine room. Turing authorities can identify a core and regulate an entity, yet Wintermute’s use of proxies complicates any enforcement method organized only around physical seizure.",
      ],
    },
  },
  "neuromancer-rio-core": {
    introAddenda: [
      "As with Berne, the source establishes the metropolitan locus without describing a visitable facility. The article should resist filling that absence with present-day server imagery or adaptation design.",
      "Rio and the beach must also remain distinct. One is the named physical anchor of the intelligence; the other is an experienced environment the intelligence generates and can potentially reproduce from elsewhere in the matrix. Confusing them would turn a network relation into literal geography and encourage invented descriptions of a Brazilian shoreline the novel never identifies. The beach’s emotional realism depends on simulation, not on secretly transporting Case to the city that houses the core. Keeping this distinction clear also protects a central ambiguity: the construct may sustain persons and memories with convincing continuity even though its apparent landscape supplies no trustworthy map of the hardware supporting it.",
    ],
    section: {
      id: "evidence-core-and-construct",
      heading: "Evidence separating core and construct",
      body: [
        "Characters identify Neuromancer with a Rio mainframe, while Case encounters the entity through network connection rather than travel to Brazil. The beach therefore cannot be mapped as a hidden room inside the core. Its spatial qualities are outputs of the intelligence, sustained by computation whose exact distribution the novel does not diagram.",
        "This separation makes the merger geographically unusual. Berne and Rio remain distinct physical references, but the resulting entity speaks from the matrix as a whole rather than announcing migration to one core. The change concerns organization and identity more than transportation. A cautious reading can say that hardware enables the event and survives somewhere in the network while acknowledging that the novel withholds a post-merger infrastructure map.",
      ],
    },
  },
};

const placeSectionAddenda: Record<string, string[]> = {
  "chiba-city": [
    "Case’s repair also reveals the city’s international reach. Armitage’s money assembles specialists and procedures quickly, but the work remains situated in Chiba because its medical economy can supply expertise, discretion, and recovery drugs together. The city’s global reputation is therefore produced by a local concentration of labor. Calling the result underground medicine should not erase the trained people, equipment, and logistical coordination that make an illicit procedure reliable enough for a major operation.",
    "Chiba’s relation to the body is never only liberating. Molly has purchased capabilities that support independence, while Case’s new pancreas and neural repair arrive with employer-defined conditions. Linda and other street residents face risk without comparable access. Deane can renew organs over decades. Reading these cases together shows that the city does not dissolve biological limits uniformly; it prices different forms of continuation and distributes them according to power.",
  ],
  "night-city": [
    "Named characters anchor that informal order. Ratz holds a stable social position behind the Chatsubo bar, Wage extends credit and threat through criminal business, Deane sells accumulated information, and Linda and Case move goods at the precarious edge. None governs the district, but together their repeated transactions create expectations. Night City’s apparent disorder is thus a dense field of small authorities whose reach changes from venue to venue.",
  ],
  ninsei: [
    "The street’s visual excess also has a linguistic dimension. Ideograms, imported names, brand marks, and spoken languages address a population shaped by port and corporate traffic. Case does not pause to translate every sign because partial comprehension is normal. Ninsei’s readability comes from pattern, price, and habit as much as literal text, much as matrix operators learn spatial conventions that conceal underlying code.",
  ],
  chatsubo: [
    "Ratz’s bar also clarifies the difference between atmosphere and evidence. It is easy to remember the opening’s smoke, metal arm, and dark humor while overlooking the economic information in who appears and what they ask. Case uses the room to test whether rumors have spread and whether his standing has changed. The Chatsubo’s value lies in this repeated observation, not in possessing a secret source with complete knowledge.",
  ],
  "cheap-hotel": [
    "The capsule’s terminal further complicates the label “coffin.” Case can communicate and manage information from within the enclosure, so physical compression coexists with network reach. Yet connection does not create security or comfort. The pod remains rented property in a shared building, its systems monitored by a house computer and vulnerable to intrusion. It is an efficient container for a mobile worker rather than an autonomous private world.",
  ],
  "chiba-medical-underground": [
    "Aftercare supplies another form of control. Neural work requires recovery, testing, and substances that can stabilize or alter the result, so a successful operation extends beyond the operating room. Case depends on explanations provided by the same employer who benefits from his compliance. The medical network can change what his body can do while leaving him unable to independently verify every intervention performed during unconsciousness.",
  ],
  "sammis-arena": [
    "The arena also places Molly’s unscheduled violence beside professional combat sold as entertainment. Spectators watch enlarged fighters inside the ring while a lethal struggle passes through their peripheral vision. The contrast asks who controls framing: similar bodily acts can be sport, security, murder, or rescue depending on the system that names and displays them. Case survives because Molly recognizes the danger before the venue’s official apparatus does.",
  ],
  "sprawl-bama": [
    "The region’s infrastructure is inferred through movement as well as named sites. Characters cross Manhattan, corporate zones, airports, and communications systems with the expectation that the metropolitan fabric continues beyond any scene. This continuity supports rapid collaboration but also corporate reach. A person can disappear into density temporarily, while financial records, media, and network activity connect distant districts for institutions able to search them.",
    "BAMA is also the social origin of habits Case carries abroad. He evaluates operators through cowboy reputation, trusts the Finn’s improvised hardware judgment, and understands a corporate target through the geometry its data presents in the matrix. Chiba, Istanbul, Zion, and Freeside each require him to discover that those regional habits are specialized rather than universal. The Sprawl is formative precisely because leaving it makes its assumptions visible.",
  ],
  "finns-manhattan-shop": [
    "Clutter in the shop is not evidence of incompetence. The Finn’s authority depends on being able to retrieve an item, remember its history, and judge how it will behave when joined to another system. An outsider sees disorder because the indexing method is embodied in the proprietor. This makes the business resilient but personally dependent: the inventory cannot be understood by reading a corporate catalog detached from his experience.",
  ],
  "sense-net-pyramid": [
    "The pyramid shape contributes to the target’s legibility as corporate power, but Case attacks a different visualization when he enters cyberspace. Physical architecture and matrix geometry are related by ownership and security rather than visual resemblance. Molly’s route and Case’s route can therefore approach the same stored construct through spaces with different rules, requiring communication precise enough to synchronize events neither participant can fully see.",
  ],
  istanbul: [
    "The crew’s hotel repeats the standardized interior of earlier travel, briefly making Istanbul resemble Chiba from Case’s window. The streets undo that sameness through weather, traffic, language, police presence, and the bazaar. This alternation is typical of the novel’s global geography: corporate travel creates interchangeable thresholds, but operations become specific once characters depend on local routes and intermediaries.",
  ],
  "zion-cluster": [
    "The Founders’ bodies make historical time visible in a way Freeside’s rejuvenated elite tries to suppress. Years outside strong gravity have costs that communal respect does not hide. Zion responds by caring for those bodies and treating their experience as authority, whereas Tessier-Ashpool uses cryogenic interruption and replacement to preserve ownership. The two orbital societies therefore embody sharply different answers to human finitude.",
  ],
  freeside: [
    "The station’s name encourages a frontier reading, but the lived environment is highly administered. Air, gravity, light, vegetation, docking, customs, and credit all depend on coordinated systems. Visitors experience freedom because those systems hide effort and offer choices within a purchased range. The crew’s movement outside that range—to Zionite vessels, Turing custody, and Straylight—reveals how quickly leisure depends on technical and legal boundaries.",
    "Freeside also rearranges distance. The Villa appears connected to the same spindle, yet reaching it means ascending through changing gravity and controlled passages rather than walking farther along an ordinary street. Social separation is engineered into rotational geometry. Tessier-Ashpool can remain near the resort’s money and services while inhabiting a private spatial regime visitors cannot enter accidentally.",
  ],
  "rue-jules-verne": [
    "The recorded sky deserves attention as an infrastructure of mood. It gives visitors a familiar visual ceiling while the street’s curve quietly contradicts terrestrial openness. Vegetation and bright light further naturalize the interior, but maintenance must continually produce each effect. Rue Jules Verne is therefore landscape and interface at once: it helps bodies orient, directs consumption, and makes the station’s engineering emotionally legible as vacation.",
  ],
  "freeside-hospitality-nightlife": [
    "Case’s drug seeking shows the continuity between resort luxury and street economy. Freeside can present itself as controlled pleasure while informal sellers meet appetites official hospitality does not acknowledge. Cath and Bruce are not outside the station’s economy; they are a flexible extension of it. Their access to clubs, transport, and wealthy acquaintances turns social circulation into inventory.",
  ],
  "villa-straylight": [
    "Ashpool’s chamber and 3Jane’s guarded position reveal that residence inside the Villa differs by role and waking cycle. The house is not continuously inhabited like an ordinary family home. Some members sleep through eras, servants and systems maintain continuity, and objects outlast the relationships that gave them meaning. This discontinuous domestic life explains why an intruder can encounter intimate history without encountering a functioning household.",
    "The simstim link adds another layer to the architecture. Case receives Molly’s sensations but cannot occupy her exact tactical position or choose movement for her. Straylight is therefore mapped collaboratively and incompletely across bodies. When the feed fails or pain overwhelms it, knowledge breaks at the same time as physical progress. The device extends perception without granting omniscience, preserving the Villa’s capacity to surprise both infiltrator and remote operator.",
  ],
  "straylight-central-terminal": [
    "The spoken key further prevents authorization from becoming a detachable object. 3Jane must remember and utter it in the relevant situation, and others must keep the system poised to receive it. A word can be copied phonetically, but the security arrangement embeds it in dynastic custody and physical access. Wintermute’s solution is social engineering on a generational scale.",
  ],
  "neuromancers-beach": [
    "The beach’s sparse population focuses attention on relationship rather than spectacle. Neuromancer could display impossible data architecture, yet it chooses a shoreline, shelter, and familiar person. This restraint is strategic: Case is invited to stop striving and accept duration. The environment challenges his association of digital space with speed by presenting computation as slowness, repetition, and domestic presence.",
  ],
  "wintermute-berne-core": [
    "Berne’s absence from the crew’s physical itinerary is itself useful evidence. Case can affect an entity associated with Switzerland while operating from the Sprawl and orbit because the matrix makes remote relation actionable. Geography has not disappeared; it has become layered. Hardware remains somewhere protected, legal authority assigns jurisdiction, and network operations create another path whose distance is measured through defenses rather than kilometers.",
  ],
  "neuromancer-rio-core": [
    "Rio’s role also prevents the AI conflict from being spatially collapsed into Villa Straylight. The family terminal governs a relation between entities whose hardware anchors are far away. Straylight concentrates authorization, not all computation. The architecture is distributed by design, which protects the components from one physical disaster while making coordinated release depend on networks crossing corporate and national space.",
  ],
};

export const places: WikiArticle[] = placeBase.map((article) => {
  const expansion = placeExpansions[article.slug];
  if (!expansion) {
    throw new Error(`Missing place expansion for ${article.slug}`);
  }

  return {
    ...article,
    intro: article.intro.map(
      (paragraph, index) => `${paragraph} ${expansion.introAddenda[index]}`,
    ),
    sections: [
      ...article.sections.map((section, index) => {
        const addendum = placeSectionAddenda[article.slug]?.[index];
        return addendum ? { ...section, body: [...section.body, addendum] } : section;
      }),
      expansion.section,
    ],
  };
});

export default places;
