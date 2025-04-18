import {expect, Locator, Page} from '@playwright/test';

export class LandingPage {
    readonly page: Page
    readonly pageHeader : Locator
    readonly menuBtn : Locator
    readonly aboutBtn : Locator
    readonly sauceLabLabel : Locator;
    readonly logoutBtn : Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = this.page.getByText("Swag Labs");
        this.menuBtn = this.page.getByText('Open Menu');
        this.aboutBtn = this.page.locator(`[data-test="about-sidebar-link"]`);
        this.sauceLabLabel = this.page.locator('text=Build apps users love with AI-driven insights');
        this.logoutBtn = this.page.locator(`[data-test="logout-sidebar-link"]`);
    }
    async verifyLandingPage() {
        await expect(this.pageHeader).toBeVisible();
        await expect(this.pageHeader).toContainText('Swag Labs');
    }

    async openMenu(){
        await this.menuBtn.click();
    }

    async clickAboutBtn(){
        await this.aboutBtn.click();
    }

    async verifyAboutPage(){
        await expect(this.sauceLabLabel).toBeVisible();
    }

    async logout(){
        await this.logoutBtn.click();
    }

    async expectUrl(path: string) {
        await expect(this.page).toHaveURL(`https://www.saucedemo.com${path}`);
    }
}
