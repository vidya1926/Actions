import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  console.time("ScriptDuration")
  await page.goto('http://www.leaftaps.com/opentaps/control/main');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('demoCSR');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
 
expect(async () => {
    await page.getByRole('link', { name: 'CRM/SFA' }).click();
  }).toPass();
await page.route("***/*.{png,jpg,jpeg,webp}",(route)=>
route.abort()
)
console.timeEnd("ScriptDuration")
});