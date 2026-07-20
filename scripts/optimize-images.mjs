import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const roots = ['public/images/banners', 'public/images/products', 'public/images/gallery'];
const supported = new Set(['.png', '.jpg', '.jpeg']);

async function optimizeDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await optimizeDirectory(fullPath);
      return;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!supported.has(ext)) return;

    const output = path.join(directory, `${path.basename(entry.name, ext)}.webp`);
    await sharp(fullPath)
      .resize({ width: 1800, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(output);
  }));
}

await Promise.all(roots.map(optimizeDirectory));
