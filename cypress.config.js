// eslint-disable-next-line @typescript-eslint/no-var-requires
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = {
  ...(on, config) => {
    on("file:preprocessor", cucumber())

    config.env = config.env || {}
    config.env.e2e = config.env.e2e || {}
    config.env.e2e.baseUrl = "http://localhost:3000"

    // Disable support files
    config.testingType = config.testingType || "e2e"
    config.supportFile = false

    return config
  },

  e2e: {
    // Will add custom configurations if needed in the future
  },
}
