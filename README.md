# PlayWright Testing!


## Instructions

To run tests:

* Single test (defaults to Chromium): `yarn test`
  * To specify a test environment: set `BROWSER` environmental variable to one of `chromium`, `webkit`, or `firefox`
  * eg: `export BROWSER=firefox && yarn test`
* Parallel Tests in all browsers: `yarn test:parallel`

## Other info

Browser automation is handled with [Playwright](https://github.com/microsoft/playwright). A basic playwright script is included in `index.js`.

Test file is `banana.test.js`. Tests are running with the [Jest](https://jestjs.io/) test framework.

Jest-playwright intergration is handled by [jest-playwright](https://github.com/mmarkelov/jest-playwright).