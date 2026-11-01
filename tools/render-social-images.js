#!/usr/bin/env node
// Renders every <section class="frame" data-out="…"> in tools/social-images.html
// to a PNG at its exact pixel size.
//
//   npm i -D playwright   (once; or use a global install)
//   node tools/render-social-images.js
//
// Output paths in data-out are relative to the repository root.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(__dirname, 'social-images.html');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  await page.goto('file://' + SRC);

  const frames = await page.$$eval('section.frame[data-out]', els =>
    els.map(el => ({ id: el.id, out: el.dataset.out, w: el.offsetWidth, h: el.offsetHeight })));

  for (const f of frames) {
    const dest = path.join(ROOT, f.out);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await page.setViewportSize({ width: Math.max(f.w, 400), height: Math.max(f.h, 400) });
    await page.locator('#' + f.id).screenshot({ path: dest });
    console.log(`${f.out}  ${f.w}×${f.h}`);
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
