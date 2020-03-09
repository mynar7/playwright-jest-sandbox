// const playwright = require('playwright');

// (async () => {
//   const browser = await playwright.chromium.launch()
//   const context = await browser.newContext()
//   const page = await context.newPage('https://staging.realtruck.com')
//   await page.goto('http://whatsmyuseragent.org/');
//   await page.screenshot({ path: `example-chromium.png` });
//   await browser.close();
// })()

const { webkit } = require('playwright');
const assert = require('assert');
(async() => {
    const browser = await webkit.launch();
    const page = await browser.newPage();
    await page.goto('https://realtruck.com/?disableIntegration=all');
    await page.waitForSelector('text="Best Selling Categories"')
    await Promise.all([
        page.waitForSelector('css=#catalog-title >> text="Seat Covers"'),
        page.click('text="Seat Covers"')
    ])
    const header = await page.$eval('#catalog-title > span', el => el.textContent)
    assert.equal(header, "Seat Covers");
    await browser.close();
})();