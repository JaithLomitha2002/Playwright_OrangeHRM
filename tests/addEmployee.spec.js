const { test, expect } = require('@playwright/test');
const { AddEmployee } = require('../pages/AddEmployee');
const { LoginPage } = require('../pages/LoginPage');
require('dotenv').config();

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
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

    await addEmployee.gotoAddEmployee();
    await addEmployee.fillEmployeeData(firstName, middleName, lastName, employeeId);
    await addEmployee.enableLoginDetails();
    await addEmployee.fillLoginDetails(username, password);
    await addEmployee.save();

    await expect(addEmployee.toastContainer).toContainText('Successfully');

    await expect(addEmployee.createdProfileName).toHaveText(firstName + ' ' + lastName);
});