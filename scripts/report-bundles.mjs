#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";

const ROOT = process.cwd();
const ASSETS_DIR = path.join(ROOT, "dist-analyze", "assets");
const DOCS_DIR = path.join(ROOT, "docs");

if (!fs.existsSync(ASSETS_DIR)) {
  console.error("dist-analyze/assets not found. Run `npm run analyze` from project root.");
  process.exit(1);
}

const formatKB = (bytes) => (bytes / 1024).toFixed(2);

const entries = fs
  .readdirSync(ASSETS_DIR)
  .filter((file) => /\.(?:js|css)$/.test(file))
  .map((file) => {
    const absolute = path.join(ASSETS_DIR, file);
    const buffer = fs.readFileSync(absolute);
    const gzipBytes = gzipSync(buffer).length;
    return {
      file,
      bytes: buffer.length,
      gzipBytes,
    };
  })
  .sort((a, b) => b.bytes - a.bytes);

const report = {
  generatedAt: new Date().toISOString(),
  total: {
    files: entries.length,
    bytes: entries.reduce((sum, current) => sum + current.bytes, 0),
    gzipBytes: entries.reduce((sum, current) => sum + current.gzipBytes, 0),
  },
  files: entries,
};

fs.mkdirSync(DOCS_DIR, { recursive: true });

const jsonPath = path.join(DOCS_DIR, "bundle-report.json");
fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

const markdownLines = [
  "# Bundle Report",
  "",
  "| File | Size (kB) | Gzip (kB) |",
  "| --- | ---: | ---: |",
  ...entries.slice(0, 20).map(
    (entry) =>
      `| ${entry.file} | ${formatKB(entry.bytes)} | ${formatKB(entry.gzipBytes)} |`,
  ),
];

const mdPath = path.join(DOCS_DIR, "bundle-report.md");
fs.writeFileSync(mdPath, `${markdownLines.join("\n")}\n`);

console.log(
  `Bundle report generated:\n- ${path.relative(ROOT, jsonPath)}\n- ${path.relative(
    ROOT,
    mdPath,
  )}`,
);
