import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const srcDir = path.join(process.env.TEMP || "/tmp", "tgarage-assets");
const outDir = path.join(process.cwd(), "public", "images");
const brandDir = path.join(process.cwd(), "brand-source");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(brandDir, { recursive: true });

const jobs = [
  ["sedan-02.jpg", "bay.webp"],
  ["van.jpg", "van.webp"],
  ["interior.jpg", "interior.webp"],
  ["rear-detail.jpg", "before.webp"],
  ["team.jpg", "sign.webp"],
  ["minivan.jpg", "gloss.webp"],
];

function hex(r, g, b) {
  return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
}

const bay = sharp(path.join(srcDir, "sedan-02.jpg"));
const { data, info } = await bay.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let r = 0, g = 0, b = 0, n = 0;
for (let i = 0; i < data.length; i += 4) {
  const pr = data[i], pg = data[i + 1], pb = data[i + 2];
  if (pb > 90 && pb > pr * 1.35 && pb > pg * 1.12 && pr < 140 && pg < 170) {
    r += pr; g += pg; b += pb; n++;
  }
}
console.log("sampled blue pixels", n, n ? hex(Math.round(r / n), Math.round(g / n), Math.round(b / n)) : "none", info.width, info.height);

for (const [from, to] of jobs) {
  const input = path.join(srcDir, from);
  const img = sharp(input).rotate().webp({ quality: 80 });
  const meta = await img.toFile(path.join(outDir, to));
  console.log(to, meta.width, meta.height, meta.size);
}

await sharp(path.join(srcDir, "poster.jpg"))
  .webp({ quality: 82 })
  .toFile(path.join(brandDir, "inauguration.webp"));
console.log("poster saved");
