import {test} from "../../customFixtures/expertusFixture"

test.use({ storageState: "expertusleanerLog.json"})
test('Registering a learner on the platform',async({catalog,leanerHome})=>{
 
    await leanerHome.signOut()
   // await leanerHome.MenuVerification("Catalog")
    await leanerHome.Menu("Catalog")
    await catalog.mostRecent("Most Recent")
    await catalog.searchCatalog("exp-searchcatalog-search-field","Data Engineering")
    await catalog.clickEnrollButton("ENROLL")
    await catalog.clickLaunchButton("Launch Content")
    await leanerHome.Menu("My Learning")
    await catalog.clickCompletedButton("Completed")
    await catalog.verifiCompletedCourse("Data Engineering")
})