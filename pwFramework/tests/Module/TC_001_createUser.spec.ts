import { test } from '../../customFixtures/expertusFixture';
import { RandomData } from '../../utils/TestData/randomData';
import { readDataFromCSV } from '../../utils/csvUtil';

const data = new RandomData()
const address1 = data.address
const address2 = data.address
const firstName = data.first_name
const lastName = data.last_name
const email = data.email
const phone = data.mobile_number
const mobile = data.mobile_number


test.use({ storageState: "expertusAdminLog.json" })
test(` creating learners for the application`, async ({ adminHome, createUser }) => {
    const csvFilePath = './data/User.csv';
    const data = await readDataFromCSV(csvFilePath);

    for (const row of data) {
         const { menu, label, password, country, state, timezone, currency, city, zipcode } = row;
         
        await adminHome.clickMenu(menu)
        await createUser.verifyCreateUserLabel(label)
        await createUser.inputfield("first_name", firstName)
        await createUser.inputfield("last_name", lastName)
        await createUser.inputfield("username", firstName)
        await createUser.inputfield("user-password", password)
        await createUser.inputfield("email", email)
        await createUser.inputfield("user-phone", phone)
        await createUser.address("Address 1", address1)
        await createUser.address("Address 2", address2)
        await createUser.userDropdown("Country", country)
        await createUser.userDropdown("State/Province", state)
        await createUser.userDropdown("Time Zone", timezone)
        await createUser.userDropdown("Currency", currency)
        await createUser.inputfield("user-city", city)
        await createUser.inputfield("user-zipcode", zipcode)
        await createUser.inputfield("user-mobile", mobile)
        await createUser.clickSave("Save")
        await createUser.clickProceed("Proceed")
        await createUser.verifyUserCreationSuccessMessage()


    }

})