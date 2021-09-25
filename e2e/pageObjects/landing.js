module.exports = {
  elements: {
    title: {
      selector: "h1",
    },
  },
  commands: [
    {
      verifyText: function (text) {
        this.waitForElementVisible("@title").assert.containsText(
          "@title",
          text
        );
      },
    },
  ],
};
