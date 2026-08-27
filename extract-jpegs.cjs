const fs = require('fs');
const path = require('path');

const pdfDir = 'E:/H&H furniture';
const outDir = path.join(__dirname, 'assets', 'products');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function extractJpegsFromPdf(pdfPath, prefix) {
  const buf = fs.readFileSync(pdfPath);
  let count = 0;
  let i = 0;

  while (i < buf.length - 3) {
    // Check for JPEG SOI marker 0xFF 0xD8 0xFF
    if (buf[i] === 0xFF && buf[i+1] === 0xD8 && buf[i+2] === 0xFF) {
      const start = i;
      let j = start + 2;
      let foundEnd = false;

      // Find EOI marker 0xFF 0xD9
      while (j < buf.length - 1) {
        if (buf[j] === 0xFF && buf[j+1] === 0xD9) {
          foundEnd = true;
          j += 2;
          break;
        }
        j++;
      }

      if (foundEnd) {
        const imgLen = j - start;
        if (imgLen > 15000) { // Filter out small icons/thumbs < 15KB
          count++;
          const imgBuf = buf.subarray(start, j);
          const outName = `${prefix}_img_${count}.jpg`;
          const outPath = path.join(outDir, outName);
          fs.writeFileSync(outPath, imgBuf);
          console.log(`Extracted: ${outName} (${(imgLen/1024).toFixed(1)} KB)`);
        }
        i = j;
        continue;
      }
    }
    i++;
  }
  return count;
}

const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
console.log(`Found ${files.length} PDFs in ${pdfDir}`);

let totalImgs = 0;
files.forEach(f => {
  const prefix = f.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase().replace(/_+/g, '_').replace(/^_+|_+$/g, '');
  const p = path.join(pdfDir, f);
  console.log(`\nProcessing PDF: ${f}...`);
  const count = extractJpegsFromPdf(p, prefix);
  totalImgs += count;
});

console.log(`\n🎉 Total extracted product images: ${totalImgs}`);
