module.exports = {
  browsers: [
    "chromium",
    "webkit",
    "firefox",
  ],
  launchBrowserApp: {
    ...(process.env.JEST_DEBUG
      ? {
          headless: false,
          // devtools: true,
          timeout: 0,
        }
      : {}
      ),
  },
}