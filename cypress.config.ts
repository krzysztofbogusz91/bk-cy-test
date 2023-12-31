import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
