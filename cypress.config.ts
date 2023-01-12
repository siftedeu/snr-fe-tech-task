import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  defaultCommandTimeout: 15000, //adding this as the standard default of 4 seconds often isn't enough in headless mode
  fixturesFolder: "test/cypress/fixtures",
  screenshotsFolder: "test/cypress/screenshots",
  videosFolder: "test/cypress/videos",
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./test/cypress/plugins/index.js")(on, config);
    },
    specPattern: "test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "test/cypress/support/index.js",
  },
  env: {},
});
