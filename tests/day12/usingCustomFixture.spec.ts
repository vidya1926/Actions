import {test} from '../day12/customFixture.spec'

test("Using CustomFixture",async({basepage})=>{

    //await basepage.locator("//a[text()='CRM/SFA']").nth(1).click();
    console.log(await basepage.title());

})