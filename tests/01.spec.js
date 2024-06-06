import {test, expect} from '@playwright/test'

test ('login', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    const mytitle = await page.title()
    const myURL = await page.url()

    await expect(page).toHaveTitle('STORE')

    await console.log('Title is :', mytitle)

    await console.log("URL is :", myURL)

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    await page.close()



})