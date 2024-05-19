import { test } from '../../customFixtures/expertusFixture';


test(`Login to Expertus`, async ({ adminLogin }) => {
  test.setTimeout(120000)
  const title = await adminLogin.getTitle();
  console.log(title)
})