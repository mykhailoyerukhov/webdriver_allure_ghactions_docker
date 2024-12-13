import MainPageClass from '@pageobjects/main_page';

describe('simple test',  () => {
    it('simple test', async () => {

        const mainPage = new MainPageClass();
        await mainPage.open();
        await browser.setWindowSize(1280, 720)

        await expect(mainPage.headerProductsMenuItem).toBeDisplayedInViewport()

        // await mainPage.headerProductsMenuItemClickOn()
        // await browser.pause(500)
        // await mainPage.headerSolutionsMenuItemClickOn()
        // await browser.pause(500)
        // await expect(mainPage.headerPricingMenuItem).toBeDisplayedInViewport()
        // await browser.pause(500)
        // await mainPage.headerWhyTelnyxMenuItemClickOn()
        // await browser.pause(500)
        await mainPage.headerResourcesMenuItemClickOn()
        await browser.pause(1500)
        // await mainPage.headerDevelopersMenuItemClickOn()

       
        
        // await expect(browser).toHaveUrl('https://telnyx.com/')
        // await expect(browser).toHaveTitle('Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking')
    
        await browser.pause(1000)
    })
    
})
