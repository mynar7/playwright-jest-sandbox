// describe('Google', () => {
//   beforeAll(async () => {
//     const context = await browser.newContext({
//       userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
//       viewport: {
//         width: 1920,
//         height: 1080
//       }
//     })
//     page = await context.newPage()
//     await page.goto('https://whatismybrowser.com/')
//   })

//   it('should click and go to another page', async () => {
//     await Promise.all([
//       page.waitForNavigation(),
//       page.click('.label-holder a'),
//     ])
//     const title = await page.$eval('#main > section > article > div > h1', el => el.textContent)
//     expect(title.includes('Update')).toBe(true)
//   })
// })

describe('realtruck', () => {
  beforeAll(async () => {
    await page.setViewportSize({width: 1920, height: 1080})
  })
  beforeEach(async () => {
    await page.goto('https://realtruck.com/?disableIntegration=all')
    await page.waitForSelector('text="Best Selling Categories"')
  })

  test('should click tonneau covers', async () => {
    await Promise.all([
      page.waitForSelector('css=#catalog-title >> text="Tonneau Covers"'),
      page.click('text="Tonneau Covers"')
    ])
    // await page.waitForSelector('#catalog-title > span')
    const header = await page.$eval('#catalog-title > span', el => el.textContent)
    expect(header).toBe('Tonneau Covers')
  })

  test('should click seat covers', async () => {
    await Promise.all([
      page.waitForSelector('css=#catalog-title >> text="Seat Covers"'),
      page.click('text="Seat Covers"')
    ])
    // await page.waitForSelector('#catalog-title > span')
    const header = await page.$eval('#catalog-title > span', el => el.textContent)
    expect(header).toBe('Seat Covers')
  })
})