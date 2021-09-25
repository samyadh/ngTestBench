module.exports = {
  tags: ["google"],
  "Local test": function (browser) {
    let landing = browser.page.landing();
    browser.url("http://localhost:4200/");
    landing.verifyText("Hello World!");
  },
};
