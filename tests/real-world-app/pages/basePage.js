const config = require('../config/config');

exports.BasePage = class BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    const environment = process.env.NODE_ENV || 'development';
    const baseUrl = config.getBaseUrl(environment);
    await this.page.goto(baseUrl);
  }
};