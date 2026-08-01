import type { BookQuote } from "./types";

/**
 * A deliberately small quotation ledger. These fragments are kept brief,
 * located by part/chapter (pagination varies by edition), and paired with an
 * editorial note so that quotation serves analysis rather than decoration.
 */
export const quotationBySlug: Record<string, BookQuote> = {
  "neuromancer-novel": {
    text: "The sky above the port was the color of television, tuned to a dead channel.",
    citation: "Neuromancer, Part One, Chapter 1",
    note: "The opening converts obsolete media noise into weather and atmosphere.",
  },
  "henry-dorsett-case": {
    text: "The body was meat.",
    citation: "Neuromancer, Part One, Chapter 1",
    note: "Case’s blunt self-description establishes the bodily contempt his journey tests.",
  },
  molly: {
    text: "Professional pride, baby, that’s all.",
    citation: "Neuromancer, Part Two, Chapter 3",
    note: "Molly frames dangerous competence as a code of work, not heroism.",
  },
  "armitage-willis-corto": {
    text: "Remember the training, Case. That’s all we can do.",
    citation: "Neuromancer, Part Three, Chapter 15",
    note: "Corto’s returning voice collapses past operation and present crisis.",
  },
  wintermute: {
    text: "This is the matrix. You’re Wintermute.",
    citation: "Neuromancer, Part Three, Chapter 9",
    note: "Case identifies the intelligence through the medium where it is most at home.",
  },
  "neuromancer-ai": {
    text: "I call up the dead.",
    citation: "Neuromancer, Part Four, Chapter 21",
    note: "Neuromancer defines its talent through preservation, memory, and possession.",
  },
  "dixie-flatline": {
    text: "You gonna tell me I got a choice, boy?",
    citation: "Neuromancer, Part Two, Chapter 5",
    note: "The construct’s joke makes its lack of agency impossible to ignore.",
  },
  "peter-riviera": {
    text: "Perversity.",
    citation: "Neuromancer, Part Four, Chapter 18",
    note: "Riviera names the quality he believes lets him escape Wintermute’s statistical models.",
  },
  "lady-3jane": {
    text: "3Jane answering in song, three notes, high and pure.",
    citation: "Neuromancer, Part Four, Chapter 23",
    note: "The decisive password remains unheard as language and is rendered instead as music.",
  },
  "linda-lee": {
    text: "Linda still wore his jacket; she waved, as he passed.",
    citation: "Neuromancer, Coda",
    note: "The final sighting leaves preservation, imitation, and grief unresolved.",
  },
  "chiba-city": {
    text: "Night City was like a deranged experiment in social Darwinism.",
    citation: "Neuromancer, Part One, Chapter 1",
    note: "The simile makes Chiba’s street economy feel designed and uncontrolled at once.",
  },
  "sprawl-bama": {
    text: "Home. Home was BAMA, the Sprawl.",
    citation: "Neuromancer, Part Two, Chapter 3",
    note: "Case’s clipped recognition turns an enormous conurbation into an emotional coordinate.",
  },
  freeside: {
    text: "Freeside is a brokedown Disneyland for a tired middle class.",
    citation: "Neuromancer, Part Three, Chapter 9",
    note: "Dixie reduces orbital luxury to an exhausted commercial fantasy.",
  },
  "villa-straylight": {
    text: "Straylight’s like that nest.",
    citation: "Neuromancer, Part Three, Chapter 14",
    note: "The wasp-nest analogy supplies the villa’s architecture and family history in miniature.",
  },
  "cyberspace-matrix": {
    text: "A consensual hallucination experienced daily by billions.",
    citation: "Neuromancer, Part Two, Chapter 3",
    note: "The definition emphasizes shared experience before hardware or protocol.",
  },
  "artificial-intelligence-sprawl": {
    text: "Real motive problem, with an AI. Not human, see?",
    citation: "Neuromancer, Part Three, Chapter 10",
    note: "Dixie warns against treating machine purposes as disguised human psychology.",
  },
  "tessier-ashpool-sa": {
    text: "Power, in Case’s world, meant corporate power.",
    citation: "Neuromancer, Part Three, Chapter 12",
    note: "The sentence links the family’s private history to the novel’s political scale.",
  },
  "screaming-fist-task-force": {
    text: "One of us has to get out. One of us has to testify.",
    citation: "Neuromancer, Part Three, Chapter 15",
    note: "Corto’s remembered mission is organized around survival, evidence, and betrayal.",
  },
  "body-modification-razorgirl": {
    text: "Anybody any good at what they do, that’s what they are, right?",
    citation: "Neuromancer, Part Two, Chapter 3",
    note: "Molly refuses Case’s romantic label and defines identity through practiced skill.",
  },
  "straylight-run": {
    text: "None of this was real, but cold was cold.",
    citation: "Neuromancer, Part Four, Chapter 20",
    note: "The beach construct makes the old split between virtual and bodily experience fail.",
  },
  "body-disembodiment": {
    text: "It was the bodiless exultation of cyberspace.",
    citation: "Neuromancer, Part One, Chapter 1",
    note: "Case’s remembered pleasure gives disembodiment both religious force and addictive danger.",
  },
  "ram-hot-memory": {
    text: "three megabytes of hot RAM in the Hitachi",
    citation: "Neuromancer, Part One, Chapter 1",
    note: "The compact phrase identifies quantity, criminal status, and container without explaining what the memory holds.",
  },
  "chiba-hilton": {
    text: "After a year of coffins, the room ... seemed enormous.",
    citation: "Neuromancer, Part One, Chapter 2",
    note: "The comparison makes the suite’s luxury legible through Case’s year of capsule living.",
  },
  mycotoxin: {
    text: "They damaged his nervous system with a wartime Russian mycotoxin.",
    citation: "Neuromancer, Part One, Chapter 1",
    note: "The sentence gives the poison a military history and a precise consequence while withholding its chemical identity.",
  },
  "flip-flop-switch": {
    text: "It’s a flipflop switch, basically.",
    citation: "Neuromancer, Part Two, Chapter 3",
    note: "Finn gives Case a functional shop-floor label, not a circuit diagram or product specification.",
  },
  "memory-lane": {
    text: "Two blocks later, she was threading the outskirts of Memory Lane.",
    citation: "Neuromancer, Part Two, Chapter 4",
    note: "The route locator establishes Memory Lane as a physical Sprawl destination seen through Molly’s movement.",
  },
  precis: {
    text: "Five minute precis.",
    citation: "Neuromancer, Part Two, Chapter 4",
    note: "Case specifies the briefing’s intended duration, not a named application or a documented processing deadline.",
  },
};
