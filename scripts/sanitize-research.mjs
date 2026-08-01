import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const directory = join(process.cwd(), "research", "priority");
for (const name of await readdir(directory)) {
  if (!name.endsWith(".json") || name === "summary.json") continue;
  const file = join(directory, name);
  const ledger = JSON.parse(await readFile(file, "utf8"));
  ledger.sources = ledger.sources.map((source) => {
    const sanitized = { ...source };
    delete sanitized.readingNote;
    return sanitized;
  });
  await writeFile(file, `${JSON.stringify(ledger, null, 2)}\n`);
}

console.log("Removed fetched page text from the publishable research ledgers; metadata and audit counts remain intact.");
