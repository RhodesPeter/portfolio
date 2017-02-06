var config = require('./nightwatch.conf.BASIC.js');

module.exports = {
  'Assert Title': function(browser) {
    browser
      .url('file:///Users/peterrhodes/Desktop/cv-portfolio/index.html')
      .waitForElementVisible('body')
      .assert.title('Peter Rhodes Portfolio')
      .saveScreenshot('tests/screenshots/portfolio.png')
      .end();
  }
};
