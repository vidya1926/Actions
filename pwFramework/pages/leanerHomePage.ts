import { leanerLogin } from "./leanerLogin";
import { BrowserContext, Locator, Page } from "@playwright/test";
import { URLConstants } from "../constants/urlConstants";

export class leanerHomePage extends leanerLogin{

    static pageUrl = URLConstants.leanerURL;
    constructor(page: Page,context:BrowserContext) {
        super(page,context);
        this.common();
    }

    public async common() {
        await this.loadApp(leanerHomePage.pageUrl);        
    }

    public async signOut(){
        await this.page.waitForLoadState('load')
        await this.validateElementVisibility("//div[@class='logout']/a","Sign Out")
    }
    

    public async Menu(Menu:string){
        await this.validateElementVisibility('//a//span[text()="'+ Menu +'"]',Menu)
        await this.click('//a//span[text()="'+ Menu +'"]',Menu,"Button")
    }




}