import { adminHomePage } from "./adminHomePage";
import { BrowserContext, Locator, Page } from "@playwright/test";


export class createUserPage extends adminHomePage{
    
     constructor(page: Page,context:BrowserContext) {
       super(page,context);
     
    }

    async verifyCreateUserLabel(expectedLabel: string) {
        await this.verification("//h1[text()='Create User']", expectedLabel);
    }
    async inputfield(name:string,data:string){
       await this.type('//input[@id="' + name + '"]',name, data)
    }

    
    async address(label:string,data:string){
       await this.type(`//label[contains(text(),'${label}')]/following-sibling::input`,"Address",data)
    }

    async userDropdown(label:string,data:string){
        const selector = `(//label[text()='${label}']/following::button[@data-bs-toggle='dropdown'])[1]`;
        await this.click(selector,label,'Dropdown')
        await this.type("//footer//following::input[@type='search']",label,data)
        await this.click(`//span[text()='${data}']`,data,'DropDown')
        await this.verification(selector,data)
    }

    async clickSave(name:string){
        await this.validateElementVisibility(`//button[text()='${name}']`,'Save')
        await this.click(`//button[text()='${name}']`,name,"Button")
    }

    async clickProceed(name:string){
        await this.validateElementVisibility("//footer//following::button[contains(text(),'Yes, Proceed')]",name)
        await this.click("//footer//following::button[contains(text(),'Yes, Proceed')]",name,"Button")
    }

    async verifyUserCreationSuccessMessage() {
        await this.verification("//div[@id='addedit-user-form-container']//h3", "created successfully");
    }
    
}