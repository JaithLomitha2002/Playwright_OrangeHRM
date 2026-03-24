const { test, expect } = require('@playwright/test');
const { AddEmployee } = require('../pages/AddEmployee');
const { LoginPage } = require('../pages/LoginPage');

// test('OrangeHRM Login Test', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.goto();
//   await loginPage.login('Admin', 'admin123');

//   await expect(page).toHaveURL(/dashboard/);

//   // Save storage state (cookies + localStorage)
//   await page.context().storageState({ path: 'storageState.json' });
// });

// test.use({ storageState: 'storageState.json' });
var firstName = 'Salvin';
var middleName = 'Earl';
var lastName = 'Dasanayake';
var employeeId = '19633691';
var username = 'salvined123';
var password = '12345678sal';

test('Add Employee Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addEmployee = new AddEmployee(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await addEmployee.gotoAddEmployee();
    await addEmployee.addEmployee(firstName, middleName, lastName, employeeId, username, password);

    await expect(addEmployee.toastContainer).toContainText('Successfully');

    await expect(addEmployee.createdProfileName).toHaveText(firstName + ' ' + lastName);
});