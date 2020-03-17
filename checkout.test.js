describe('Checkout', () => {
  beforeAll(async () => {
    await page.setViewportSize({width: 1920, height: 1080})
  })

  beforeEach(async () => {
    await page.goto('https://realtruck.com/?disableIntegration=all')
    await page.waitForSelector('text="Best Selling Categories"')
  })

  test('should be able to buy a bakflip cover', async () => {
    await page.waitForSelector('#searchBar')
    await page.type('#searchBar', 'bakflip')
    await page.waitForSelector('.results .result-group a:first-child')
    // await page.click('.results .result-group a:first-child')
    const link = await page.$eval('.results .result-group a:first-child', el => el.href)
    await page.goto(link + '?disableIntegration=all')
    await page.select('#scrollTarget-year select', '2019')
    await page.waitForSelector('css=#scrollTarget-makeSlug select option[value="ford"]')
    await page.select('#scrollTarget-makeSlug select', {label: 'Ford'})
    await page.waitForSelector('#scrollTarget-modelSlug select option[value="f150"]')
    await page.select('#scrollTarget-modelSlug select', 'f150')
    await page.waitForSelector('#scrollTarget-bedSlug select option[value="5-7-bed"]')
    await page.select('#scrollTarget-bedSlug select', '5-7-bed')
    await page.waitForSelector('.addto-cart > .addto > button:not([disabled="disabled"])')
    await page.click('css=.addto-cart > .addto > button >> text="Add to Cart"')
    await page.waitForSelector('.extend-container')
    await page.click('css=.extend-container button.button:nth-of-type(2) >> text="No Thanks"')
    await page.waitForSelector('css=.page-title >> text="Shopping Cart"')
    const title = await page.$eval('css=.page-title >> text="Shopping Cart"', el => el.textContent)
    expect(title.includes('Shopping Cart')).toBe(true)
  })
})