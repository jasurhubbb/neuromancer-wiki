# Neuromancer Atlas

An independent, spoiler-aware reader’s wiki for William Gibson’s *Neuromancer*.
The site contains 260 interconnected articles and more than 164,000 words of
article prose covering characters, locations, organizations, technology,
themes, every chapter, publication history, cultural influence, and the small
objects and phrases that often stop a first-time reader.

## Editorial guarantees

- Every article contains at least 450 words of article-specific prose.
- The 20 priority dossiers contain at least 650 words each.
- A 109-page first-reader glossary gives RAM, mycotoxin, the flip-flop switch, Memory Lane, the Hosaka précis, the Chiba Hilton,
  joeboys, New Yen, drugs, weapons, computers, venues, music, and other compressed details the
  same long-form treatment; every glossary entry is at least 650 words.
- Each priority dossier has an individual ledger with 10 search attempts and
  20+ successfully fetched sources (200 searches and 480 reads in total).
- The glossary adds 958 targeted searches and 2,151 consulted source links in its
  own auditable ledger.
- A checked category crawl maps all 141 Neuromancer topics discovered on the
  William Gibson Wiki to local coverage; 78 received new long-form articles.
- Brief novel quotations are limited to 90 characters, located by part/chapter,
  and used only alongside analysis.
- Novel canon, wider Sprawl continuity, ambiguity, critical interpretation, and
  publication history are labeled separately.

Run `npm run audit` to verify those guarantees against the current corpus.

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run audit
npm test
```

The app uses Next.js static export. Every push to `main` runs the content audit,
builds the site with the `/neuromancer-wiki` base path, and deploys the `out/`
artifact through the GitHub Pages workflow.
