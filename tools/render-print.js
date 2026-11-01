#!/usr/bin/env node
// Renders the print files in print/*.html to print-ready PDFs and PNG previews.
//
//   node tools/render-print.js
//
// Each HTML file sets its own page size with @page; the PDF keeps it exactly.
// PNG previews (one per page, 300 DPI-equivalent for cards, 150 for flyers)
// go next to the PDF so you can check them on a phone before printing.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const DIR = path.resolve(__dirname, '..', 'print');
const DOCS = [
  { file: 'business-card.html',      w: 3.75, h: 2.25, dpi: 300 },
  { file: 'flyer-laundromat.html',   w: 8.5,  h: 11,   dpi: 150 },
  { file: 'flyer-apartments.html',   w: 8.5,  h: 11,   dpi: 150 },
  // Flowing multi-page document: PDF only, page numbers in the footer
  { file: 'launch-guide.html', flow: true, out: path.resolve(DIR, '..', 'LAUNCH_GUIDE.pdf'),
    footer: 'Rest Assured Moving LLC · Launch Guide' },
];

(async () => {
  const browser = await chromium.launch();
  for (const d of DOCS) {
    const src = path.join(DIR, d.file);
    if (!fs.existsSync(src)) { console.warn('skip (missing):', d.file); continue; }
    const base = d.file.replace(/\.html$/, '');
    if (d.flow) {
      const page = await browser.newPage();
      await page.goto('file://' + src);
      await page.evaluate(() => document.fonts.ready);
      await page.pdf({
        path: d.out, format: 'Letter', printBackground: true, preferCSSPageSize: true,
        displayHeaderFooter: true, headerTemplate: '<span></span>',
        footerTemplate: `<div style="width:100%;font-family:'Courier New',monospace;font-size:7.5px;color:#5A6576;padding:0 0.7in;display:flex;justify-content:space-between"><span>${d.footer}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
      });
      console.log(path.relative(path.resolve(DIR, '..'), d.out));
      await page.close();
      continue;
    }
    const page = await browser.newPage({ viewport: { width: Math.round(d.w * 96), height: Math.round(d.h * 96) } });
    await page.goto('file://' + src);
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: path.join(DIR, base + '.pdf'), width: d.w + 'in', height: d.h + 'in', printBackground: true, preferCSSPageSize: true });

    // PNG preview of every page at print resolution
    const shots = await browser.newPage({ viewport: { width: Math.round(d.w * 96), height: Math.round(d.h * 96) }, deviceScaleFactor: d.dpi / 96 });
    await shots.goto('file://' + src);
    const pages = await shots.$$('.page');
    for (let i = 0; i < pages.length; i++) {
      const out = path.join(DIR, `${base}${pages.length > 1 ? '-' + (i + 1) : ''}.png`);
      await pages[i].screenshot({ path: out });
      console.log('print/' + path.basename(out));
    }
    console.log('print/' + base + '.pdf');
    await page.close(); await shots.close();
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
