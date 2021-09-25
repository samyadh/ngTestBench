const chromedriver = require("chromedriver");

const nightwatchSettings = {
  src_folders: ["e2e"],
  page_objects_path: ["./e2e/pageObjects"],
  output_folder: "reports",
  detailed_output: true,
  live_output: true,
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9999,
        cli_args: ["--port=9999"],
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["headless", "no-sandbox", "disable-gpu"],
        },
      },
    },
  },
};

module.exports = nightwatchSettings;
