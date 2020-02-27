describe('Google', () => {
  beforeAll(async () => {
    await page.setViewportSize({
      width: 1920, height: 1080,
    });
    await page.goto('https://whatismybrowser.com/')
  })

  // it('should display "google" text on page', async () => {
  //   const browser = await page.$eval('.string-major a', el => el.text)
  //   expect(browser).toContain('Chrome')
  // })

  it('should click and go to another page', async () => {
    await Promise.all([
      page.waitForNavigation(),
      page.click('.label-holder a'),
    ])
    const title = await page.$eval('h1', el => el.text)
    expect(title.includes('Update')).toBe(true)
  })
})