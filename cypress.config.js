const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const cypressSplit = require("cypress-split");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const codeCoverageTask = require("@cypress/code-coverage/task");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({ plugins: [createEsbuildPlugin(config)] }),
  );
  cypressSplit(on, config);
  require("./cypress/plugins/index.js")(on, config);
  codeCoverageTask(on, config);
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "**/*.feature",
    supportFile: "./cypress/support/index.js",
    testIsolation: false,
    setupNodeEvents,
    instrumentation: true, // Enable code instrumentation
    video: false,
    experimentalRunAllSpecs: true,
    codeCoverage: {
      // Code coverage configuration
      exclude: ["node_modules"],
      reporters: ["lcov", "text-summary"],
    },
  },
  env: {
    codeCoverageTasksRegistered: true,
  },
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 5,
});
