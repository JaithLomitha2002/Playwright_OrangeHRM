const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('OrangeHRM Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  // Assertion
  await expect(page).toHaveURL(/dashboard/);

});