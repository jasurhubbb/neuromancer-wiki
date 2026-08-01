import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the complete atlas home page", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");
  assert.match(html, /Neuromancer Atlas/);
  assert.match(html, /field notes/);
  assert.match(html, /200\+<\/strong><span>web searches/);
  assert.match(html, /480\+<\/strong><span>source reads/);
  assert.match(html, /Research you can audit/);
  assert.match(html, /The details readers search mid-page/);
  assert.match(html, /Open all 28/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/);
});

test("exports long-form articles and their source apparatus", async () => {
  const html = await readFile(new URL("wiki/henry-dorsett-case/index.html", outputRoot), "utf8");
  assert.match(html, /Henry Dorsett Case/);
  assert.match(html, /Deep research · 10 searches \/ 20\+ reads/);
  assert.match(html, /The body was meat\./);
  assert.match(html, /Source notes/);
  assert.match(html, /Related field notes/);
});

test("exports all 180 articles and the first-reader glossary", async () => {
  const glossary = await readFile(new URL("glossary/index.html", outputRoot), "utf8");
  assert.match(glossary, /What did that mean\?/);
  assert.match(glossary, /No stub definitions/);
  assert.match(glossary, /142<\/dd><span>across 28 entries/);
  assert.match(glossary, /203<\/dd><span>source trail/);

  const ram = await readFile(new URL("wiki/ram-hot-memory/index.html", outputRoot), "utf8");
  assert.match(ram, /RAM in Neuromancer/);
  assert.match(ram, /three megabytes of hot RAM in the Hitachi/);
  assert.match(ram, /Hot memory in Chiba/);

  const hilton = await readFile(new URL("wiki/chiba-hilton/index.html", outputRoot), "utf8");
  assert.match(hilton, /Chiba Hilton/);
  assert.match(hilton, /After a year of coffins, the room/);
  assert.match(hilton, /twenty-fifth floor, not a room numbered 25/i);

  const mycotoxin = await readFile(new URL("wiki/mycotoxin/index.html", outputRoot), "utf8");
  assert.match(mycotoxin, /Mycotoxin/);
  assert.match(mycotoxin, /They damaged his nervous system with a wartime Russian mycotoxin\./);
  assert.match(mycotoxin, /The fifteen sacs/);
  assert.match(mycotoxin, /World Health Organization/);

  const flipFlop = await readFile(new URL("wiki/flip-flop-switch/index.html", outputRoot), "utf8");
  assert.match(flipFlop, /Flip-Flop Switch/);
  assert.match(flipFlop, /It’s a flipflop switch, basically\./);
  assert.match(flipFlop, /selector|multiplexer/i);
  assert.match(flipFlop, /Texas Instruments/);
  assert.match(flipFlop, /Functional map · not a circuit schematic/);

  const memoryLane = await readFile(new URL("wiki/memory-lane/index.html", outputRoot), "utf8");
  assert.match(memoryLane, /Memory Lane/);
  assert.match(memoryLane, /threading the outskirts of Memory Lane/);
  assert.match(memoryLane, /software-rental/i);
  assert.match(memoryLane, /Johnny/);
  assert.match(memoryLane, /Chapter 4 route evidence/);

  const precis = await readFile(new URL("wiki/precis/index.html", outputRoot), "utf8");
  assert.match(precis, /Précis/);
  assert.match(precis, /Five minute precis\./);
  assert.match(precis, /libraries, journals, and news services/i);
  assert.match(precis, /Merriam-Webster/);
  assert.match(precis, /Chapter 4 information flow/);

  const wikiEntries = await readdir(new URL("wiki/", outputRoot), { withFileTypes: true });
  assert.equal(wikiEntries.filter((entry) => entry.isDirectory()).length, 180);
});

test("exports the public research ledger and static assets", async () => {
  const research = await readFile(new URL("research/index.html", outputRoot), "utf8");
  assert.match(research, /Show the work/);
  assert.match(research, /10 recorded search attempts/);
  assert.match(research, /24 successfully fetched pages/);

  await Promise.all([
    access(new URL("og.png", outputRoot)),
    access(new URL("favicon.png", outputRoot)),
  ]);
  const nextAssets = await readdir(new URL("_next/", outputRoot));
  assert.ok(nextAssets.length > 0);
});
