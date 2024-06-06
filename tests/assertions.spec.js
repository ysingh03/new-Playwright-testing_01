import {test, expect} from '@playwright/test'

test('assertions', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    //asserts

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible()

    const search_box =  await page.getByPlaceholder('Search store')

    await expect(search_box).toBeEnabled()



})