import {test, expect} from '@playwright/test'

test('multiplelocator', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

   /* const alllinks =  await page.$$('a')

    for(const link of alllinks){

        const linktext = await link.textContent()
        console.log(linktext)
    }
    */

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const allproducts = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of allproducts)
        {
            const producttext = await product.textContent()
            console.log(producttext)
            
        }

    await page.close()

})
