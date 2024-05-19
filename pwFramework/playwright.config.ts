import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 5 * 60 * 1000,
  testDir: './tests',
   fullyParallel: false,
   retries: 0,
 
  workers: 1,
  
  reporter: [['allure-playwright',{ outputFolder: 'my-allure-report' }],['html',{open:'always'}],],
 
  use: {   
    trace: 'on',
    headless:false,
    screenshot:"on"
  },

 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chromium'] ,
      viewport: null,
      launchOptions: {
        args: ["--start-maximized"]
        } 
       }
      },

   
  ],


});
