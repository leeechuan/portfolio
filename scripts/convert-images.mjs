import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Files to convert and their target quality
const targets = [
  // Large project images
  { src: 'src/assets/tripguide.png',        quality: 80 },
  { src: 'src/assets/emberlighttales.png',  quality: 80 },
  { src: 'src/assets/kopisiudai.png',       quality: 80 },
  { src: 'src/assets/ripplegym.png',        quality: 80 },
  { src: 'src/assets/yellowribbon.png',     quality: 80 },
  { src: 'src/assets/firstportfolio.png',   quality: 80 },
  { src: 'src/assets/projectbnb.png',       quality: 80 },
  { src: 'src/assets/herobg.png',           quality: 75 },
  { src: 'src/assets/herobg1.png',          quality: 75 },
  { src: 'src/assets/webdev.png',           quality: 80 },
  { src: 'src/assets/mobiledev.png',        quality: 80 },
  { src: 'src/assets/architecture.png',     quality: 80 },
  { src: 'src/assets/odc.png',              quality: 80 },
  { src: 'src/assets/keyboard.png',         quality: 80 },
  // Tech icons — large ones
  { src: 'src/assets/tech/python.png',      quality: 85 },
  { src: 'src/assets/tech/langchain.png',   quality: 85 },
  { src: 'src/assets/tech/spline.png',      quality: 85 },
  { src: 'src/assets/tech/nextjs.png',      quality: 85 },
  { src: 'src/assets/tech/expressjs.png',   quality: 85 },
];

async function convertToWebP({ src, quality }) {
  const srcPath = join(rootDir, src);
  const ext = extname(src);
  const destPath = srcPath.replace(ext, '.webp');

  try {
    const beforeStat = await stat(srcPath);
    await sharp(srcPath).webp({ quality }).toFile(destPath);
    const afterStat = await stat(destPath);
    const savings = ((1 - afterStat.size / beforeStat.size) * 100).toFixed(1);
    console.log(`✅ ${basename(src)} → ${basename(destPath)}  |  ${(beforeStat.size/1024).toFixed(0)}KB → ${(afterStat.size/1024).toFixed(0)}KB  (${savings}% smaller)`);
  } catch (err) {
    console.error(`❌ Failed: ${src}`, err.message);
  }
}

console.log('🚀 Converting images to WebP...\n');
await Promise.all(targets.map(convertToWebP));
console.log('\n✨ Done! Update your imports in src/assets/index.js to use .webp extensions.');
