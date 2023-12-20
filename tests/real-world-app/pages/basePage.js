const config = require('../config/config');

exports.BasePage = class BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/';
  }

  async goto() {
    await this.page.goto(config.baseUrl + this.url);
  }
};