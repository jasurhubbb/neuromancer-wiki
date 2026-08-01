import { access, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const outputRoot = join(process.cwd(), "out");
const configuredBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const failures = [];
let htmlFileCount = 0;
let internalReferenceCount = 0;
let fragmentReferenceCount = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

function localTarget(rawReference, htmlFile) {
  const reference = rawReference.replaceAll("&amp;", "&");
  if (
    !reference ||
    reference.startsWith("#") ||
    reference.startsWith("http://") ||
    reference.startsWith("https://") ||
    reference.startsWith("mailto:") ||
    reference.startsWith("data:")
  ) return undefined;

  if (!reference.startsWith("/")) return undefined;
  if (configuredBase && reference !== configuredBase && !reference.startsWith(`${configuredBase}/`)) {
    failures.push(`${htmlFile}: root-relative reference escapes base path: ${reference}`);
    return undefined;
  }

  const withoutBase = configuredBase ? reference.slice(configuredBase.length) || "/" : reference;
  const cleanPath = withoutBase.split(/[?#]/, 1)[0];
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(cleanPath);
  } catch {
    failures.push(`${htmlFile}: cannot decode reference: ${reference}`);
    return undefined;
  }

  const relativePath = decodedPath.replace(/^\/+/, "");
  return decodedPath.endsWith("/")
    ? join(outputRoot, relativePath, "index.html")
    : join(outputRoot, relativePath);
}

const files = await walk(outputRoot);
const htmlFiles = files.filter((candidate) => candidate.endsWith(".html"));
const htmlByFile = new Map(
  await Promise.all(htmlFiles.map(async (file) => [file, await readFile(file, "utf8")])),
);
const idsByFile = new Map(
  [...htmlByFile].map(([file, html]) => [
    file,
    new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])),
  ]),
);

function checkFragment(reference, targetFile, sourceFile) {
  const hashIndex = reference.indexOf("#");
  if (hashIndex < 0 || hashIndex === reference.length - 1) return;
  fragmentReferenceCount += 1;
  let fragment;
  try {
    fragment = decodeURIComponent(reference.slice(hashIndex + 1));
  } catch {
    failures.push(`${sourceFile}: cannot decode fragment in ${reference}`);
    return;
  }
  if (!idsByFile.get(targetFile)?.has(fragment)) {
    failures.push(`${sourceFile}: missing fragment target ${reference}`);
  }
}

for (const [file, html] of htmlByFile) {
  htmlFileCount += 1;
  const references = html.matchAll(/(?:href|src|action)="([^"]+)"/g);
  for (const match of references) {
    if (match[1].startsWith("#")) {
      checkFragment(match[1], file, file);
      continue;
    }
    const target = localTarget(match[1], file);
    if (!target) continue;
    internalReferenceCount += 1;
    try {
      await access(target);
    } catch {
      failures.push(`${file}: missing export target for ${match[1]}`);
      continue;
    }
    checkFragment(match[1], target, file);
  }
}

if (failures.length) {
  console.error(`Static export audit failed with ${failures.length} broken reference(s):`);
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`);
  if (failures.length > 100) console.error(`- …and ${failures.length - 100} more`);
  process.exit(1);
}

console.log(
  `Static export audit passed: ${htmlFileCount} HTML files, ${internalReferenceCount.toLocaleString()} internal references, and ${fragmentReferenceCount.toLocaleString()} fragment links resolve${configuredBase ? ` beneath ${configuredBase}` : ""}.`,
);
