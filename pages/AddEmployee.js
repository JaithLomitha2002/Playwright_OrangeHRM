class AddEmployee {
    constructor(page) {
        this.page = page;
        this.pim = page.getByRole('link', { name: 'PIM' });
        this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.employeeIdInput = page.locator('.oxd-input-group:has(label:has-text("Employee Id")) input');
        this.createLoginDeatailsToggle = page.locator('.oxd-switch-input.oxd-switch-input--active.--label-right');
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

    async addEmployee(firstName, middleName, lastName, employeeId, username, password) {
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.employeeIdInput.fill(employeeId);
        await this.createLoginDeatailsToggle.click();
        await this.userNameInput.fill(username);
        await this.statusRadioButton.check();
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.saveButton.click();
    }

    // async getToastMessage() {
    //     const toastText = await this.toastContainer.textContent();
    //     return toastText.trim();
    // }

    // async getCreatedProfileName() {
    //     const profileNameText = await this.createdProfileName.textContent();
    //     return profileNameText.trim();
    // }

}
module.exports = { AddEmployee };