import {test,chromium} from '@playwright/test'


test("learn to mock location",async()=>{

    
    const browser =await chromium.launch();
    const context=await browser.newContext({
        geolocation:{latitude:46.2276,
            longitude:2.2137},
        permissions:['geolocation']
                  
    }
    );
    //await context.grantPermissions(['geolocation','notification'])
    const page=await context.newPage();
  page.route("https://tile.openstreetmap.org/1/0/1.png",async(route,request)=>
      {  if(request.method()=='GET'){
                    const res= await request.response();
                    console.log(await request.allHeaders());
                    const body=await res?.body();
                     console.log(body?.join())
                            }
  }  )
    await page.goto("https://www.openstreetmap.org/");    
    await page.waitForTimeout(5000);
    await page.locator("[aria-label='Show My Location']").click();
    await page.waitForTimeout(5000);
})