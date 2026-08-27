const fs = require('fs');
const path = require('path');

const furnitureDir = 'E:\\H&H furniture';
const outputFile = 'E:\\H&H\\Website\\pdf-content.txt';

async function extractAll() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const files = fs.readdirSync(furnitureDir).filter(f => f.endsWith('.pdf'));
  let allText = '';

  for (const file of files) {
    const filePath = path.join(furnitureDir, file);
    try {
      const buf = fs.readFileSync(filePath);
      const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      allText += `\n\n${'='.repeat(60)}\nFILE: ${file}\n${'='.repeat(60)}\n`;
      
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(' ');
        allText += `\n--- Page ${i} ---\n${pageText}\n`;
      }
      console.log(`✓ ${file} — ${doc.numPages} pages`);
    } catch (e) {
      console.log(`✗ ${file} — ${e.message}`);
      allText += `\n\n${'='.repeat(60)}\nFILE: ${file}\n${'='.repeat(60)}\n[ERROR: ${e.message}]\n`;
    }
  }

  fs.writeFileSync(outputFile, allText, 'utf8');
  console.log(`\nDone. Written to ${outputFile} (${Math.round(allText.length/1024)}KB)`);
}

extractAll().catch(console.error);
