import { Page, Locator, BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";
import { URLConstants } from "../constants/urlConstants";
import { adminLogin } from "./adminLogin";

export class adminHomePage extends PlaywrightWrapper {

    static pageUrl = URLConstants.adminURL;
    constructor(page: Page,context:BrowserContext) {
        super(page,context);
        this.common();
    }
    public async common() {
        await this.loadApp(adminHomePage.pageUrl);        
    }
    public async signOut(){
        await this.validateElementVisibility("//div[@class='logout']/a","Sign Out")
    }

    public async clickMenu(Menu:string){
        await this.page.waitForLoadState('domcontentloaded')
        await this.mouseHover('//div[text()="' + Menu + '"]//ancestor::div[@class="item-draggable"]',"Course",)
        await this.click('//div[text()="' + Menu + '"]/following::div[text()="Create"][1]',"Create","Button")
     }

}