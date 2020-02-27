const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage('https://staging.realtruck.com')
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example-chromium.png` });
  await browser.close();
})()