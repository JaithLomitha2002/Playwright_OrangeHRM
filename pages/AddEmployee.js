class AddEmployee {
    constructor(page) {
        this.page = page;
        this.pim = page.getByRole('link', { name: 'PIM' });
        this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.employeeIdInput = page.locator('.oxd-input-group:has(label:has-text("Employee Id")) input');
        this.createLoginDetailsToggle = page.locator('div.oxd-form-row:has(p:has-text("Create Login Details")) span.oxd-switch-input');
        this.userNameInput = page.locator('.oxd-input-group:has(label:has-text("Username")) input');
        this.statusRadioButton = page.getByRole('radio', { name: 'Enabled' });
        this.passwordInput = page.locator('.oxd-input-group:has(label:text-is("Password")) input');
        this.confirmPasswordInput = page.locator('.oxd-input-group:has(label:text-is("Confirm Password")) input');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.toastContainer = page.locator('#oxd-toaster_1');
        this.createdProfileName = page.locator('.orangehrm-edit-employee-name h6');
    }

    async gotoAddEmployee() {   
        await this.pim.click();
        await this.addEmployeeButton.click();
    }

    async fillEmployeeData(firstName, middleName, lastName, employeeId) {
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.employeeIdInput.fill(employeeId);
    }

    async enableLoginDetails() {
        await this.createLoginDetailsToggle.check();
    }

    async fillLoginDetails(username, password) {
        await this.userNameInput.fill(username);
        await this.statusRadioButton.check();
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
    }

    async save(){
         await this.saveButton.click();
         await this.toastContainer.waitFor({ state: 'visible' });
    }

}
module.exports = { AddEmployee };