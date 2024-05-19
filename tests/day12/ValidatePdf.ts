import { chromium } from 'playwright';
import Tesseract from 'tesseract.js';


(async () => {
  // Launch a browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the desired page
  await page.goto('https://www.testleaf.com/');

  // Capture a screenshot of an element
  const element = page.locator(`//img[@alt='Logo']`);
  const screenshotPath = 'element-screenshot.png';
  if (element) {
    await element.screenshot({ path: screenshotPath });
  }

  // Close the browser
  await browser.close();

});
