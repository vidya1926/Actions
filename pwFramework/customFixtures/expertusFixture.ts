import { test as baseTest } from '@playwright/test'
import { adminLogin } from '../pages/adminLogin'
import { adminHomePage } from '../pages/adminHomePage'
import { createUserPage } from '../pages/createUserPage'
import { createCoursePage } from '../pages/createCoursePage'
import { leanerLogin } from '../pages/leanerLogin'
import {leanerHomePage} from '../pages/leanerHomePage'
import { catalogPage } from '../pages/catalogPage'
import { CredentialConstants } from "../constants/CredentialConstants";
import {getUserRecord} from "../apiIntegration/createUserAPI"



type expertusFixture = {
    adminLogin: adminLogin
    adminHome: adminHomePage
    createUser: createUserPage
    createCourse: createCoursePage

    leanerLogin:leanerLogin
    leanerHome:leanerHomePage
    catalog:catalogPage
}


export const test = baseTest.extend<expertusFixture>({
    adminLogin: async ({ page, context }, use) => {
        const adLogin = new adminLogin(page, context);
        await adLogin.adminLogin(CredentialConstants.USERNAME, CredentialConstants.PASSWORD)
        await use(adLogin);
        console.log("Login is verified")
        await adLogin.storeState("./expertusAdminLog.json")
    },
    leanerLogin:async ({ page, context }, use) => {
        const lnLogin =new leanerLogin(page,context)  
        const userName=await getUserRecord()
        console.log(`A user named ${userName} has been created`);
        await lnLogin.leanerLogin(userName,"Welcome1@")
        await use(lnLogin);
        console.log("Login is verified")
        await lnLogin.storeState("./expertusleanerLog.json")
    },
    adminHome: async ({ page, context }, use) => {
        const adHome = new adminHomePage(page, context)
        await use(adHome);
    },
    createUser: async ({ page, context }, use) => {
        const createUser = new createUserPage(page, context)
        await use(createUser)
    },
    createCourse: async ({ page, context }, use) => {
        const createCourse = new createCoursePage(page, context)
        await use(createCourse)
    },

    leanerHome: async ({ page, context }, use) => {
        const leanerHome = new leanerHomePage(page, context)
        await use(leanerHome)
    },
    catalog: async ({ page, context }, use) => {
        const catalog = new catalogPage(page, context)
        await use(catalog)
    }
})