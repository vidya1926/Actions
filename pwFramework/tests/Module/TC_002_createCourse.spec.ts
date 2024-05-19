import {test} from "../../customFixtures/expertusFixture"

test.use({ storageState: "expertusAdminLog.json"})
test(` creating learners for the application`,async({adminHome,createCourse})=>{

    await adminHome.clickMenu("Course")
    await createCourse.verifyCreateUserLabel("CREATE COURSE")
    await createCourse.inputfield("course-title","Data Engineering")
    await createCourse.description("Description","Test Data")
    await createCourse.upload("testleaf")
    await createCourse.clickCatalog("Catalog")
    await createCourse.clickSave("Save")
    await createCourse.clickProceed("Proceed")
    await createCourse.verifyUserCreationSuccessMessage()
})