import { leanerHomePage } from "./leanerHomePage";
import { BrowserContext, Locator, Page } from "@playwright/test";


export class catalogPage extends leanerHomePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

    }

    async searchCatalog(name: string,data:string) {
        await this.type('//input[@id="' + name + '"]', name, data)
        await this.keyboardAction('//input[@id="' + name + '"]', "Enter", "Input", name)
        await this.page.waitForTimeout(10000)
    }

    async mostRecent(menu: string) {
        await this.mouseHover('//div[text()="' + menu + '"]', menu)
    }

    async clickEnrollButton(name:string) {
        await this.validateElementVisibility("(//div[text()='Most Recent']//following::i[contains(@class,'fa-money-check-edit')])[1]",name)
        await this.click("(//div[text()='Most Recent']//following::i[contains(@class,'fa-money-check-edit')])[1]", name, "Button")
    }

    async clickLaunchButton(name: string) {
        await this.click("//button[text()='" + name + "']", name, "Button")
        await this.waitForElementHidden("//div[@class='mb-5 router-view']","Loading")
    }

    async clickCompletedButton(name: string) {
       // await this.waitForSelector('//a[contains(text(),"' + name + '")]')
        await this.click('//a[contains(text(),"' + name + '")]', name, "Button")
    }

    async verifiCompletedCourse(name: string) {
        await this.mouseHover('(//h5[text()="' + name + '"])[1]', "Text")
    }
}