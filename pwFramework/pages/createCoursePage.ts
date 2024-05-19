import { adminHomePage } from "./adminHomePage";
import { BrowserContext, Locator, Page } from "@playwright/test";


export class createCoursePage extends adminHomePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

    }


    async verifyCreateUserLabel(expectedLabel: string) {
        await this.verification("//h1[text()='Create Course']", expectedLabel);
    }

    async inputfield(name: string, data: string) {
        await this.type('//input[@id="' + name + '"]', name, data)
    }

    async description(name: string, data: string) {
        await this.type("//div[@id='course-description']/div[1]", name, data)
    }

    async upload(picName:string) {
       
        const path = "../data/testleaf.jpg"
        await this.uploadFile("//div[@id='upload-div']//input[@id='content_upload_file']", path)
      
    }

    async clickCatalog(name:string){
        await this.validateElementVisibility("//span[text()='Show in Catalog']","Show in Catalog")
        await this.page.waitForTimeout(5000)
        await this.click("//span[text()='Show in Catalog']",name,"Button")
    }

    async clickSave(name:string){
        await this.validateElementVisibility(`//button[@id='course-btn-save' and text()='${name}']`,'Save')
        await this.click(`//button[@id='course-btn-save' and text()='${name}']`,name,"Button")
    }

    async clickProceed(name:string){
        await this.validateElementVisibility("//footer//following::button[contains(text(),'Yes, Proceed')]",name)
        await this.click("//footer//following::button[contains(text(),'Yes, Proceed')]",name,"Button")
    }

    async verifyUserCreationSuccessMessage() {
        await this.verification("//div[@id='lms-overall-container']//h3", "updated successfully");
    }
}