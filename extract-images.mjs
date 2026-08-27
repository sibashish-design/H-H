import fs from 'fs';
import path from 'path';

globalThis.DOMMatrix = class DOMMatrix { constructor() {} };

const pdfjs = await import('pdfjs-dist/build/pdf.mjs');

const pdfPath = 'E:/H&H furniture/EXECUTIVE SERIES PRICELIST.pdf';
const data = new Uint8Array(fs.readFileSync(pdfPath));
const loadingTask = pdfjs.getDocument({ data });
const pdfDoc = await loadingTask.promise;

console.log('PDF loaded, numPages:', pdfDoc.numPages);

for (let i = 1; i <= Math.min(pdfDoc.numPages, 3); i++) {
  const page = await pdfDoc.getPage(i);
  const operatorList = await page.getOperatorList();
  console.log(`Page ${i} ops count:`, operatorList.fnArray.length);
  
  // Look for paintImageXObject ops
  for (let j = 0; j < operatorList.fnArray.length; j++) {
    const fn = operatorList.fnArray[j];
    const args = operatorList.argsArray[j];
    if (fn === pdfjs.OPS.paintImageXObject || fn === pdfjs.OPS.paintInlineImageXObject) {
      console.log(`  Found image op on page ${i}:`, args[0]);
    }
  }
}
