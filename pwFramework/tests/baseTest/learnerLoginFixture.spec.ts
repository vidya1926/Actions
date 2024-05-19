import { test } from '../../customFixtures/expertusFixture';


test(`Login to Expertus`, async ({ leanerLogin }) => {
  test.setTimeout(120000)
  const title = await leanerLogin.getTitle();
  console.log(title)


})