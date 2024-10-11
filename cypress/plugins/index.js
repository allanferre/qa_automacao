const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.unshift(['tsify']);
  on('file:preprocessor', cucumber(options));
  on('task', {
    saveJSON(data) {
      fs.writeFileSync('cypress/fixtures/data.json', JSON.stringify(data, null, 2))
      return null
    }
  })
};

