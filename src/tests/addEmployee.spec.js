const { test, expect } = require('@playwright/test');
const { AddEmployee } = require('../pages/AddEmployee');
const { LoginPage } = require('../pages/LoginPage');
const addEmployeeData = require('../test-data/addEmployee.json');
require('dotenv').config();

const uniqueId = Date.now().toString().slice(-4);
const firstName = addEmployeeData.firstName;
const middleName = addEmployeeData.middleName;
const lastName = addEmployeeData.lastName;
const employeeId = `${addEmployeeData.employeeIdPrefix}${uniqueId}`;
const username = `${addEmployeeData.usernamePrefix}${uniqueId}`;
const password = addEmployeeData.password;

test('Add Employee Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addEmployee = new AddEmployee(page);


    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

    await addEmployee.gotoAddEmployee();
    await addEmployee.fillEmployeeData(firstName, middleName, lastName, employeeId);
    await addEmployee.enableLoginDetails();
    await addEmployee.fillLoginDetails(username, password);
    await addEmployee.save();

    await expect(addEmployee.toastContainer).toContainText('Successfully');

    await addEmployee.createdProfileName.waitFor({ state: 'visible', timeout: 10000 });
    await expect(addEmployee.createdProfileName).toHaveText(`${firstName} ${lastName}`);
});