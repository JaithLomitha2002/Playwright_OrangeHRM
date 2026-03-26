const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
require('dotenv').config();

test('OrangeHRM Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  // Assertion
  await expect(page).toHaveURL(/dashboard/);

});