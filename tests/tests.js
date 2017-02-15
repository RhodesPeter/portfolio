var config = require('../nightwatch.conf.js');

module.exports = {
  'Assert Elements': function(browser) {
    browser
      .url('file:///Users/peterrhodes/Desktop/cv-portfolio/index.html')
      .waitForElementVisible('body')
      .saveScreenshot("tests/screenshots/screenshot.png")
      .assert.title('Peter Rhodes Portfolio')
      .assert.visible('ul[class=topnav]')
      .assert.visible('div[class=nav__text-container]')
      .assert.visible('div[class=projects]')
      .assert.visible('img[class=project1]')
      .assert.attributeContains('#proj1', 'href', 'https://autocorrecter.herokuapp.com/')
      .assert.visible('img[class=project2]')
      .assert.attributeContains('#proj2', 'href', 'https://peter-drawing-app.herokuapp.com/')
      .assert.visible('img[class=project3]')
      .assert.attributeContains('#proj3', 'href', 'https://rhodespeter.github.io/hacker-alias-application/')
      .assert.visible('img[class=project4]')
      .assert.attributeContains('#proj4', 'href', 'https://github.com/CYPIAPT-LNDSE/welcome-to-camhs/')
      .assert.visible('img[class=project5]')
      .assert.attributeContains('#proj5', 'href', 'https://github.com/shiryz/stopWatch')
      .assert.visible('img[class=project6]')
      .assert.visible('div[class=about-section__wrapper]')
      .assert.visible('a[id=link-to-cv]')
      .assert.visible('p[id=about__para1]')
      .assert.visible('p[id=about__para2]')
      .assert.visible('p[id=about__para3]')
      .assert.visible('p[id=about__para4]')
      .assert.visible('div[class=skills-section__wrapper]')
      .assert.visible('h2[id=languages]')
      .assert.containsText('#languages', 'Languages')
      .assert.visible('h2[id=testing]')
      .assert.containsText('#testing', 'Testing')
      .assert.visible('h2[id=databases]')
      .assert.containsText('#databases', 'Databases')
      .assert.visible('h2[id=design-skills]')
      .assert.containsText('#design-skills', 'Design skills')
      .assert.visible('h2[id=frameworks]')
      .assert.containsText('#frameworks', 'Frameworks')
      .assert.visible('h2[id=other-skills]')
      .assert.containsText('#other-skills', 'Other skills')
      .assert.visible('footer[id=contact]')
      .assert.visible('div[class=links]')
      .assert.visible('a[id=github]')
      .assert.visible('a[id=linkedin]')
      .assert.visible('a[id=codewars]')
      .assert.visible('a[id=twitter]')

      .isVisible("#burger", function(result) {
          this.assert.equal(result.value, false);
        })
      .resizeWindow(400, 600)
      .isVisible("#burger", function(result) {
          this.assert.equal(result.value, true);
        })

      .maximizeWindow()
      .assert.cssProperty(".nav-link", "background-color", "rgba(101, 157, 247, 1)")
      .resizeWindow(400, 600)
      .assert.cssProperty(".nav-link", "background-color", "rgba(92, 142, 214, 1)")

      .assert.hidden(".fixed-header")
      .moveToElement(".about-section__wrapper", 0, 0)
      .assert.visible(".fixed-header")

      .end()
  }
}
