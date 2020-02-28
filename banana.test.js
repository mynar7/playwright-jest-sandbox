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
    await page.goto('https://realtruck.com/')
  })

  it('should click tonneau covers', async () => {
    await Promise.all([
      page.waitForNavigation(),
      page.click('#app > div.homepage-content > div.section.shop-category > div > div > div:nth-child(2) > a')
    ])
    await page.waitForSelector('#catalog-title > span')
    const header = await page.$eval('#catalog-title > span', el => el.textContent)
    expect(header).toBe('Tonneau Covers')
  })
})