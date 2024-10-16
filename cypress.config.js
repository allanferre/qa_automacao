const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    }, 
    baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/**/*.feature',
    screenshotsFolder: 'cypress/reports/screenshots',
    videosFolder: 'cypress/reports/videos',
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    testIsolation: false
  }
});
