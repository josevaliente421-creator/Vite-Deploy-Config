import sharp from "sharp";
import { mkdir, stat, unlink } from "fs/promises";
import path from "path";

const publicDir = path.resolve("client", "public");

const targets = [
  { png: "hero-bg.png", webp: "hero-bg.webp" },
  { png: "hero-desinsectacion.png", webp: "hero-desinsectacion.webp" },
  { png: "service-1.png", webp: "service-1.webp" },
  { png: "service-desinsectacion.png", webp: "service-desinsectacion.webp" },
];

async function main() {
  console.log("Optimizando imágenes PNG -> WebP...\n");
  for (const target of targets) {
    const src = path.join(publicDir, target.png);
    const dest = path.join(publicDir, target.webp);

    const metadata = await sharp(src).metadata();
    const originalSize = (await stat(src)).size;

    await sharp(src).webp({ quality: 80, effort: 6 }).toFile(dest);
    await mkdir(path.dirname(dest), { recursive: true });

    const newSize = (await stat(dest)).size;
    console.log(
      `${target.png} -> ${target.webp}`,
      `| ${metadata.width}x${metadata.height}`,
      `| ${(originalSize / 1024).toFixed(0)} KB -> ${(newSize / 1024).toFixed(0)} KB`,
    );
  }

  console.log("\nEliminando assets sin referencia...");
  const deadAssets = ["patricia-muller.jpg", "avatar-female-doc.svg", "favicon.png", "opengraph.jpg"];
  for (const asset of deadAssets) {
    const file = path.join(publicDir, asset);
    try {
      await unlink(file);
      console.log(`- ${asset} eliminado`);
    } catch {
      console.log(`- ${asset} no encontrado (omitido)`);
    }
  }

  console.log("\nListo. Dimensiones para width/height:");
  for (const target of targets) {
    const metadata = await sharp(path.join(publicDir, target.webp)).metadata();
    console.log(`- ${target.webp}: width="${metadata.width}" height="${metadata.height}"`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
