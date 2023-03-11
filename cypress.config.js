const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://amazon.com',
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    numTestsKeptInMemory: 0,
    video: false,
    screenshotOnRunFailure: true,
    testIsolation: false,
  },
});
