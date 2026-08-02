import type { WikiArticle } from "./types";

export const minorCharacterArticles: WikiArticle[] = [
  {
    slug: "smith",
    title: "Smith",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "The silicon-augmented art dealer and fence whose encounter with a stolen Tessier-Ashpool terminal gives the Finn his first trail into the family behind Wintermute.",
    intro: [
      "Smith is an art dealer, fence, and associate of the Finn. He never enters the novel’s present action in person. Readers meet him inside the Finn’s Chapter 5 account: a story about a burglar named Jimmy, an extraordinary talking head, a courteous clone assassin, and an investigation that reaches from the Sprawl to Villa Straylight.",
      "That indirect appearance is unusually dense. Smith’s microsoft socket explains how plug-in knowledge can alter a profession; his appraisal shows how the future art market separates age, craft, novelty, and price; and his decision to investigate Tessier-Ashpool turns a strange transaction into the first usable history of the family that owns Wintermute.",
      "A careful account must preserve the story’s layers. Case hears the Finn report what Smith experienced and concluded. The novel makes the transaction and later death of Jimmy clear, but it does not place Case in Smith’s office, name the visiting clone as Hideo, or let readers witness Jimmy’s killing directly.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Art dealer and fence" },
      { label: "Associate", value: "The Finn" },
      { label: "Supplier", value: "Jimmy, a burglar" },
      { label: "Augmentation", value: "A new socket loaded with art-market microsofts" },
      { label: "Notable client", value: "A Tokyo billionaire who collected clockwork automata" },
      { label: "Key object", value: "The stolen cloisonné talking-head terminal" },
      { label: "Narrative appearance", value: "Reported by the Finn in Part Two, Chapter 5" },
      { label: "Canon caution", value: "The visiting clone is not explicitly named Hideo" },
    ],
    sections: [
      {
        id: "where-smith-appears",
        heading: "Where Smith appears—and where he does not",
        body: [
          "Smith belongs to the novel’s backstory rather than its assembled crew. After Molly and Case bring the name Wintermute to the Finn, the Finn identifies it as a Tessier-Ashpool artificial intelligence and then offers the one relevant encounter already present in his criminal network. That encounter begins with Smith. The chapter therefore introduces Smith only when his past business can answer a question in the present.",
          "The distinction matters for biography. Smith has no narrated entrance, physical portrait, present-day address, or direct conversation with Case and Molly. Almost everything known about him comes through the Finn’s retelling. A wiki can reconstruct the order of events from that account, but it should not turn reported speech into a fully witnessed scene or invent a continuing role after Smith decides to leave the Tessier-Ashpool matter alone.",
        ],
      },
      {
        id: "dealer-and-fence",
        heading: "An ‘art dealer’ in the criminal interzone",
        body: [
          "The novel places quotation marks around Smith’s profession, inviting readers to hear both its respectable label and its illicit practice. Jimmy supplies him with stolen work, Smith identifies likely buyers, and the Finn can provide discreet technical research. Smith is a fence in the literal criminal sense: he receives an object whose origin cannot be advertised openly and tries to convert it into money through a private collector.",
          "This is not a contradiction in the Sprawl’s economy. Earlier, Case recognizes buildings whose tenants work where art shades into crime and crime into art. Smith occupies that same boundary at a more specialized level. His office, private clientele, security, connoisseurship, and illegal supply chain all belong to one business. The polished surface of dealing does not replace the fence; it is the form fencing takes when the goods are rare and the buyer is extremely rich.",
        ],
      },
      {
        id: "gone-silicon",
        heading: "The first dealer the Finn knew who ‘went silicon’",
        body: [
          "Smith is one of the novel’s clearest examples of microsofts used for work rather than fashion. The Finn remembers him as the first person in his circle to go silicon. A new socket carries several chips devoted to art history and tables of gallery sales. Together they make his knowledge of the business formidable by the standards of his colleagues.",
          "The detail does not say that the chips make Smith infallible or replace judgment. They give him rapid access to specialized information, but he still studies physical hallmarks, understands collectors, sets a price, reads danger, and decides when to retreat. His advantage comes from combining purchased information with an existing profession. That combination also makes augmentation economic: a dealer with enough capital to install a socket and buy the right programs can compete against colleagues whose knowledge was acquired more slowly.",
        ],
      },
      {
        id: "jimmy-brings-the-head",
        heading: "Jimmy brings him the talking head",
        body: [
          "Jimmy returns from a year in high orbit with an intricate bust taken from the Tessier-Ashpool residence. To Smith it first resembles an antique object made from precious materials, but microscopic examination shows that it is contemporary. In an art market where age is part of value, that discovery is disappointing enough that breaking or melting the piece appears more sensible than treating it as a masterwork.",
          "Jimmy knows the feature that changes the appraisal: the bust is also a computer terminal. Its voice is produced mechanically through gears and miniature organ pipes rather than by an ordinary voice-synthesis chip. Smith connects it to a computer and tests the mechanism with mundane financial data. The contrast is deliberate. An extraordinary international collaboration can recite tax figures, and its functional success still does not automatically make it valuable as art.",
        ],
      },
      {
        id: "collector-market",
        heading: "The Tokyo collector and the value of novelty",
        body: [
          "Smith’s most promising buyer is a Tokyo billionaire whose interest in clockwork automata approaches fetish. That preference gives the head a market different from the one Smith first tests. It may lack antique age, but its fusion of contemporary electronics with baroque mechanical speech makes it an exceptional curiosity for one particular collector.",
          "The episode separates material cost, artistic age, technical complexity, provenance, and buyer desire. Seed pearls, cloisonné, platinum, lapis, and fine workmanship do not produce a stable price by themselves. Smith’s work is to locate the buyer for whom those features form an obsession. He begins making preliminary approaches rather than openly advertising the stolen object, showing that information about a sale is staged as carefully as the sale itself.",
        ],
      },
      {
        id: "reading-the-hallmarks",
        heading: "A provenance assembled from hallmarks",
        body: [
          "Smith examines the head closely enough to trace a distributed collaboration: artisans in Zurich, an enamel specialist in Paris, a Dutch jeweler, and a California chip designer. The trail ends at Tessier-Ashpool S.A., which commissioned the object. His microsofts may support the search, but the scene still presents provenance as an act of comparison and inference rather than an instant label delivered by the chip.",
          "This international supply chain mirrors the object’s hybrid construction. Traditional luxury craft and advanced computation do not belong to separate historical eras; they are deliberately assembled into one terminal. The commission also changes the risk. Smith is no longer holding an anonymous curiosity. He has identified an object made for a powerful corporate family whose ownership reaches into orbit, banking, law, and private force.",
        ],
      },
      {
        id: "the-visitor",
        heading: "The polite visitor who defeats Smith’s security",
        body: [
          "Before Smith can complete a sale, a small Japanese man walks through the elaborate security around his office as though it were absent. Smith recognizes the marks of a vat-grown ninja assassin. The visitor remains calm and apologetic while explaining that he must return a beautiful mechanism to his master’s house. Politeness does not soften the threat; it demonstrates that violence is so certain it need not be performed in the room.",
          "Smith makes the survival calculation immediately. He produces the head and understates the price he expected from the collector. The visitor pays that lower figure from a numbered Swiss account and asks who supplied the object. The exchange is neither an ordinary purchase nor a simple robbery. Tessier-Ashpool recovers its property, compensates the receiver, identifies the original thief, and leaves Smith alive—all with a transaction clean enough to create more questions than answers.",
        ],
      },
      {
        id: "jimmy-death",
        heading: "Jimmy’s death and the limits of attribution",
        body: [
          "Smith names Jimmy to the visitor. Within days, he learns that Jimmy is dead. The sequence makes retaliation the powerful implication, and the clone’s description anticipates the Hideo Molly later meets in Straylight. Most summaries therefore state that Hideo killed Jimmy.",
          "The novel itself is slightly narrower. The death occurs offstage, the Finn does not report witnessing it, and the visitor is not named. Tessier-Ashpool may possess more than one clone from the same line. The defensible conclusion is that the visiting assassin or Tessier-Ashpool organization is strongly implicated; identifying that individual with the later Hideo remains a likely but unconfirmed connection. Preserving the gap respects how underworld knowledge works in the chapter.",
        ],
      },
      {
        id: "quiet-research",
        heading: "Why Smith goes to the Finn",
        body: [
          "Survival does not make the transaction intelligible. Smith knows the recovery does not feel like a standard Yakuza action or a conventional intelligence operation, so he asks the Finn for a search that cannot be traced. The Finn’s connection to the Memory Lane crowd supplies a console cowboy; the Finn serves as cut-out and takes a percentage, keeping Smith one layer away from the intrusion.",
          "The cowboy reaches Tessier-Ashpool through legal and corporate records and composes a précis of the family’s structure. What emerges is not a simple company profile but a maze of powers of attorney, clone succession, litigation, ownership, Freeside, and Villa Straylight. Smith sees enough to decide that further curiosity is a bad investment. The Finn, however, remembers the result, which is why the search can later orient Molly and Case.",
        ],
      },
      {
        id: "knowing-when-to-stop",
        heading: "Competence includes knowing when to stop",
        body: [
          "Smith’s defining action is not acquiring the head; it is exiting the story alive. He recognizes the visitor’s capability, returns the object, accepts a compromised payment, investigates indirectly, and abandons the trail when the family structure exceeds the scale of his business. That pattern complicates the glamorous image of the cyberpunk outlaw. Skill is not always penetration. Sometimes it is a precise estimate of which barrier should remain closed.",
          "Jimmy supplies the daring theft and dies. The unnamed cowboy supplies information and disappears from the account. The Finn remains a broker. Smith converts experience into caution. These different outcomes map the underworld’s division of labor and risk: the people who touch an object, sell it, research it, and remember it are not equally exposed, even when all are connected to the same transaction.",
        ],
      },
      {
        id: "narrative-function",
        heading: "Why this minor character matters",
        body: [
          "Smith turns Wintermute from a name into a material history. Through him, the crew learns that Tessier-Ashpool protects a strange terminal, commands genetically produced violence, hides behind legal structures, and owns the orbital destination toward which the operation is moving. The tale is exposition, but it behaves like a noir lead: one object passes through several hands and reveals a power larger than every intermediary.",
          "The head’s return in the final run gives the anecdote delayed force. An object Smith nearly treated as scrap becomes a physical control point in the AI merger. His original appraisal was not foolish; it was made within an art market that did not know the object’s system role. The novel uses that mismatch to show how the same artifact can be merchandise, artwork, terminal, family relic, security device, and narrative key depending on who can read it.",
        ],
      },
      {
        id: "canon-checklist",
        heading: "Canon checklist: established, implied, and unknown",
        body: [
          "Established by the Chapter 5 account: Smith deals art and stolen goods, uses microsofts professionally, receives the head from Jimmy, traces its commission to Tessier-Ashpool, surrenders it to a clone assassin, is paid from a Swiss account, identifies Jimmy, commissions a quiet search through the Finn, and withdraws after seeing the resulting family profile.",
          "Strongly implied but not directly witnessed: the visitor’s organization causes Jimmy’s death and the recovered object is restored to Straylight. Plausible but unconfirmed: the visitor is the exact Hideo encountered later, Smith’s office occupies a particular city, and the final head is physically the same unit rather than an identical or restored terminal. Unknown: Smith’s first name, age, appearance, later career, and fate after the investigation.",
        ],
      },
    ],
    related: [
      "jimmy",
      "the-finn",
      "microsofts",
      "cloisonne-head-terminal",
      "memory-lane",
      "precis",
      "tessier-ashpool-sa",
      "chapter-05",
    ],
    tags: ["Smith", "art dealer", "fence", "microsofts", "Jimmy", "Tessier-Ashpool", "talking head"],
    sourceKeys: [
      "novel",
      "litcharts-chapter-5",
      "william-gibson-wiki-smith",
      "coursehero-chapter-5",
      "standing-reserve-neuromancer",
      "reddit-jimmy-head",
    ],
  },
  {
    slug: "jimmy",
    title: "Jimmy",
    category: "Characters",
    canon: "Novel canon",
    spoiler: "Full",
    description:
      "The offstage burglar who steals Tessier-Ashpool’s talking-head terminal, passes it to Smith, and dies after the family’s clone assassin follows the object’s chain of custody.",
    intro: [
      "Jimmy is a burglar and supplier of stolen art to Smith. After spending a year in high orbit, he returns with an ornate computer terminal taken from Villa Straylight. That single theft carries information about the Tessier-Ashpool family from its sealed orbital home into the Sprawl’s criminal market.",
      "Jimmy never appears directly in the narrative present. The Finn tells Case and Molly what Smith told him, and Smith’s experience includes what Jimmy said and what later happened to him. This distance is essential: the novel establishes Jimmy’s role, the stolen object, and his death, but leaves the burglary, pursuit, and killing outside the scene.",
      "His few facts matter because the stolen head returns at the center of the final operation. Jimmy demonstrates that Straylight is not perfectly sealed, while his death demonstrates how efficiently the family repairs a breach once a missing object becomes visible in a market.",
    ],
    keyFacts: [
      { label: "Occupation", value: "Burglar and petty criminal" },
      { label: "Business connection", value: "Supplier of stolen artwork to Smith" },
      { label: "Orbital history", value: "Spent one year in high orbit" },
      { label: "Major theft", value: "The Tessier-Ashpool talking-head terminal" },
      { label: "Disposition", value: "Left the head with Smith to sell" },
      { label: "Outcome", value: "Smith learned of his death within days of the recovery" },
      { label: "Narrative status", value: "Appears only through the Finn’s reported account" },
      { label: "Not the same person as", value: "Johnny Mnemonic" },
    ],
    sections: [
      {
        id: "short-answer",
        heading: "The shortest accurate answer",
        body: [
          "Jimmy is the thief in the history of the jeweled head. He takes the object from the Tessier-Ashpool environment in orbit, brings it to the dealer Smith, and explains that the elaborate bust is a working computer terminal. Smith later gives Jimmy’s name to the clone assassin who recovers it. Days afterward, Smith hears that Jimmy is dead.",
          "He is not a hidden member of Case’s crew, a console cowboy, or Johnny Mnemonic. The common first name and the novel’s crowded criminal network can make minor figures blur together, but their roles are distinct: Johnny transports data inside his head and belongs primarily to Molly’s earlier history; Jimmy steals physical objects and survives in Neuromancer only as one of the Finn’s cautionary stories.",
        ],
      },
      {
        id: "story-at-three-removes",
        heading: "A character encountered at three removes",
        body: [
          "Case does not meet Jimmy. He listens to the Finn, who is recounting Smith’s explanation, which in turn contains Jimmy’s claim about the object he brought back from orbit. This nested narration is not decorative. It reproduces the way information travels through a criminal economy: as remembered encounters, reputations, prices, and consequences rather than as complete police records.",
          "The layers also set a limit on certainty. The Finn can report that Smith received the head and later learned of Jimmy’s death. He cannot show Case how Jimmy entered Straylight, how he transported the object to Earth, who told Smith about the death, or what happened at the killing. Those missing links are part of the evidence, not invitations to manufacture a seamless adventure for Jimmy.",
        ],
      },
      {
        id: "supplier-to-smith",
        heading: "A supplier in the stolen-art chain",
        body: [
          "Jimmy’s relationship with Smith predates the famous head. He supplies stolen artwork to a dealer capable of recognizing, pricing, and privately placing it. That arrangement implies repeat business without defining its duration or exclusivity. Jimmy acquires objects; Smith turns uncertain origin and specialist demand into a possible sale.",
          "The division of labor matters. A burglar does not automatically know the collector market, and a dealer does not have to enter the building from which an object is removed. Separating those roles reduces exposure until a buyer or owner traces the chain backward. Tessier-Ashpool defeats that insulation by sending an agent who walks through Smith’s security and asks one direct question: who brought him the piece.",
        ],
      },
      {
        id: "year-in-orbit",
        heading: "The year in high orbit",
        body: [
          "A year in high orbit is the only substantial period attached to Jimmy’s life. It tells readers that he is not merely a neighborhood thief and that movement between Earth and orbital settlements, although expensive and specialized, is possible for people connected to the underworld. On the way back, he carries objects whose value may only become visible after they reach a terrestrial dealer.",
          "The novel does not say what legitimate cover, employment, invitation, or transport placed him there. It also does not date that year relative to Case’s recruitment. The Finn’s account presents it as past experience, and Smith’s early adoption of microsofts makes some readers place it well before the main action, but no precise chronology can be calculated from those clues.",
        ],
      },
      {
        id: "the-straylight-theft",
        heading: "What can be said about the Straylight theft",
        body: [
          "Jimmy returns with the head associated with Villa Straylight. The object’s later provenance, the recovering assassin’s description of his master’s house, and its reappearance in the villa create a strong chain back to Tessier-Ashpool. In ordinary summary language, Jimmy stole it from Straylight.",
          "How he accomplished that is unknown. Later access to the villa requires keys, invitations, corporate systems, physical routes, and a carefully synchronized intrusion, but that does not prove every earlier corridor had identical security or that Jimmy reached the same central chamber. He may have exploited a different moment, route, employee, shipment, or vulnerability. None of those possibilities is stated, so the page should mark the breach without drawing a fictional floor plan around it.",
        ],
      },
      {
        id: "what-jimmy-knew",
        heading: "What Jimmy knew about the head",
        body: [
          "Smith initially judges the bust by materials, age, and art-market value. Jimmy supplies the fact that changes the transaction: it is a computer terminal whose voice comes from an elaborate mechanical system. He therefore knows more than a thief who grabbed a shiny object at random, although the novel does not explain whether he tested it, observed it in use, or learned its function from someone else.",
          "His knowledge remains functional rather than strategic. Nothing indicates that Jimmy understands the Turing lock, the two AIs, 3Jane’s code, or the object’s eventual role in a merger. He knows enough to prevent Smith from treating the contemporary piece as scrap and to give it a chance in the collector market. The gap between that limited knowledge and the head’s system importance is exactly what makes the theft dangerous.",
        ],
      },
      {
        id: "leaving-it-with-smith",
        heading: "From impossible artifact to proposed sale",
        body: [
          "Jimmy leaves the head with Smith after the dealer expresses doubt about its price. Smith’s Tokyo client is interested in clockwork automata, so the terminal might sell as a contemporary technical curiosity even if it fails as an antique. This is the last moment in the account where Jimmy can be treated as an ordinary supplier waiting for a fence to find the right buyer.",
          "Once Smith traces the hallmarks to Tessier-Ashpool, the object acquires a provenance no clandestine sale can safely publicize. Preliminary hints to the collector are enough for the missing piece to become discoverable. Whether the trail begins with Smith’s inquiries, surveillance of the market, or another route is not stated. The speed and precision of the recovery are more important than its unseen investigative mechanism.",
        ],
      },
      {
        id: "name-given",
        heading: "The name given across the rosewood table",
        body: [
          "The clone assassin does not harm Smith after recovering the head. He pays the understated price, then asks for the supplier. Smith gives Jimmy’s name. The scene can feel like a betrayal, but the power imbalance is absolute: the visitor has already crossed Smith’s security and is calmly identified with death. The novel does not suggest Smith has a credible way to protect Jimmy from that room.",
          "This moment exposes the weakness of a segmented criminal chain. A fence can hide the burglar from a buyer only while the buyer respects the transaction’s ordinary rules. Tessier-Ashpool’s agent combines financial settlement with coercive provenance research. He follows ownership backward while returning the object forward, converting Smith’s knowledge of his supplier into the final link needed to close the breach.",
        ],
      },
      {
        id: "death-and-attribution",
        heading: "What the novel says about Jimmy’s death",
        body: [
          "The wording is precise: within days, Smith learns of Jimmy’s death. Readers are meant to connect the death to the visitor’s question, and later Hideo makes the family’s capacity for such violence undeniable. The sequence is powerful because Gibson does not interrupt it with a separate murder scene.",
          "Still, implication should not be mislabeled as direct observation. The Finn does not name the killer, state a method, describe a body, or identify the visitor as the exact Hideo later present with 3Jane. A clone from the same vat line, another Tessier-Ashpool agent, or an order carried out indirectly all fit the limited report. ‘Killed after the recovery, almost certainly because of the theft’ is safer than pretending the narrative supplies a forensic conclusion.",
        ],
      },
      {
        id: "reader-timeline-puzzle",
        heading: "The reader’s timeline puzzle",
        body: [
          "Readers often ask how Jimmy could remove the head if the final terminal sits behind the Straylight lock, and how the same object returned to its pedestal. The novel answers only the middle of that chain: the family’s agent retrieves it from Smith. The original route out and the route back are omitted.",
          "The strongest interpretation is that the anecdote describes an earlier security breach and recovery, then the final run encounters the restored terminal or an equivalent head. It is possible to imagine the theft as an earlier attempt by Wintermute to expose the lock, but no character says so. The story’s proven function is foreshadowing and provenance; turning Jimmy into a secret AI recruit would go beyond the text.",
        ],
      },
      {
        id: "why-jimmy-matters",
        heading: "Why a dead burglar matters to the main plot",
        body: [
          "Jimmy proves two things before the crew reaches orbit. First, the sealed Tessier-Ashpool world can leak: a single burglar once carried one of its most distinctive objects into a terrestrial market. Second, the family has enough reach to find that leak, recover the object, compensate one intermediary, and remove another. Straylight is vulnerable, but its response is personal and lethal.",
          "The head later becomes the physical point where 3Jane’s code, Molly’s access, and Case’s matrix run meet. Jimmy cannot understand that future role, yet his theft makes the object narratable early. Through him, a terminal at the climax enters the novel first as hot merchandise. That is classic Neuromancer world-building: a small criminal transaction introduces a system much larger than the people handling it.",
        ],
      },
      {
        id: "known-unknown",
        heading: "Known, implied, and entirely unknown",
        body: [
          "Known: Jimmy is a burglar associated with Smith, spends a year in high orbit, brings back the Tessier-Ashpool head, understands that it is a terminal, leaves it for Smith to sell, is named to the recovering clone, and is reported dead within days. Implied: the theft occurs at Villa Straylight and the death is retaliation for it.",
          "Unknown: Jimmy’s surname, age, appearance, nationality, other crimes, route into Straylight, method of transport, payment arrangement with Smith, exact date of the theft, cause of death, and killer’s individual identity. Those absences make a long page more useful, not less: they show readers exactly where the dense anecdote ends and later summaries begin filling its gaps.",
        ],
      },
    ],
    related: [
      "smith",
      "the-finn",
      "cloisonne-head-terminal",
      "hideo",
      "villa-straylight",
      "tessier-ashpool-family",
      "chapter-05",
      "memory-lane",
    ],
    tags: ["Jimmy", "burglar", "stolen art", "talking head", "Tessier-Ashpool", "Hideo", "provenance"],
    sourceKeys: [
      "novel",
      "litcharts-chapter-5",
      "william-gibson-wiki-jimmy",
      "william-gibson-wiki-talking-head",
      "openfiction-chapters",
      "reddit-jimmy-head",
      "ebsco-neuromancer",
    ],
  },
];
