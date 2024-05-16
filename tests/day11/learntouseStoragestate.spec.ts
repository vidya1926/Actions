import {test} from '@playwright/test'

    test.use({storageState:"creds/loginDetails.json"})
    test(`Executing the sf with storageState`,async({page})=>{
    await page.goto("https://xendit-4b-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
})