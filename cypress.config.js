const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kbs4ut",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
