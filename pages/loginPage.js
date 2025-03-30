const { expect } = require("allure-playwright");

class LoginPage {

    constructor(page){
        this.page = page;
        this.username = "#email1"
        this.password = "//input[@placeholder='Enter Password']"
        this.loginButton = "//button[@type='submit']"
        this.header = "//button[text()='Sign in']"

    }

    async loginToApplication(user, password){
        
        // await this.page.fill(this.username , "admin@email.com")
        // await this.page.fill(this.password , "admin@123")
        await this.page.fill(this.username , user)
        await this.page.fill(this.password , password)
        await this.page.click(this.loginButton)
        // await this.page.pause()
    }

    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible()
    }

}

module.exports = {LoginPage} 