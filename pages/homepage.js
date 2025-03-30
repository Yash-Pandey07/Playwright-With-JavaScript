import { expect } from "allure-playwright";

class HomePage {

    constructor(page) {
        this.page = page;
        this.menu = "//img[@alt='menu']"
        this.logoutOption = "//button[normalize-space()='Sign out']"
        
        this.manageoption = "//span[normalize-space()='Manage']"
    }

    async logoutFromApplication() {
        await this.page.locator(this.menu).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.logoutOption).click();
        await this.page.waitForTimeout(2000)
    }

    async verifyManageOption(){
        await this.page.waitForTimeout(2000)
        await this.page.hover(this.manageoption)
        await this.page.waitForTimeout(2000)
        // expect(await this.page.locator(this.manageoption)).toBeVisible()
        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

}
module.exports = { HomePage }