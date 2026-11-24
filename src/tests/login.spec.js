const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test-data/login.json');
require('dotenv').config();

test('OrangeHRM Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto(loginData.baseUrl);
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  // Assertion
  await expect(page).toHaveURL(new RegExp(loginData.dashboardUrlPattern));

});