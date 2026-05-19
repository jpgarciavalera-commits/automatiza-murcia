import sharp from 'sharp';
import fs from 'fs';

const svgPath = './src/assets/favicons/favicon.svg';
const svg = fs.readFileSync(svgPath);

// 1. Apple touch icon: 180x180 PNG
await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile('./src/assets/favicons/apple-touch-icon.png');
console.log('apple-touch-icon.png generated (180x180)');

// 2. favicon.ico: multi-size ICO (16, 32, 48)
const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) => sharp(svg).resize(size, size).png().toBuffer())
);

function createIco(buffers, sizeList) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(buffers.length, 4);

  const entries = [];
  const data = [];
  let offset = 6 + 16 * buffers.length;

  for (let i = 0; i < buffers.length; i++) {
    const entry = Buffer.alloc(16);
    const s = sizeList[i];
    entry[0] = s === 256 ? 0 : s;
    entry[1] = s === 256 ? 0 : s;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffers[i].length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    data.push(buffers[i]);
    offset += buffers[i].length;
  }

  return Buffer.concat([header, ...entries, ...data]);
}

fs.writeFileSync('./src/assets/favicons/favicon.ico', createIco(pngBuffers, sizes));
console.log('favicon.ico generated (16/32/48)');
