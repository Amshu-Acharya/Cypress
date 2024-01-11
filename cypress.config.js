const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl:"http://192.168.50.167/#/login-admin" ,
    // excludeSpecPattern :['**/1-getting-started','**/2-advanced-examples'],
    // specPattern : 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      
    },
  },
});
