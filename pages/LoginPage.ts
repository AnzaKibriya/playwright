// pages/LoginPage.ts
import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly pageHeader : Locator
    readonly menuBtn : Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.pageHeader = this.page.getByText("Swag Labs");
        this.menuBtn = this.page.getByText('Open Menu');

    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
