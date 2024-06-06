import {test, expect} from '@playwright/test'

test('builtin-locator', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // page.getbyalttext() - 
    const branding_pic = await page.getByAltText('company-branding')

    
    //await page.waitForSelector('orangehrm-logo')
    //const logo_pic = await page.getByAltText('orangehrm-logo')

    await expect(branding_pic).toBeVisible()

    //await expect(logo_pic).toBeVisible()

    //page.getbyplaceholder() - locate an input by placeholder

    const u_name = await page.getByPlaceholder('Username').fill('admin')

    const pass = await page.getByPlaceholder('Password').fill('admin')

    //await expect(u_name).toBeVisible()
    //await expect(pass).toBeVisible()

    //page.getbyrole() - 

    await page.getByRole('button', {type : 'submit'}).click()

    //page.getbytext() - to locate by text content 

    const message = await page.getByText('Invalid credentials')

    await expect(message).toBeVisible()

})