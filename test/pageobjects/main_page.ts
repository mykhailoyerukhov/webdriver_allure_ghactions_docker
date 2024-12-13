import { expect, browser } from '@wdio/globals'

// Page.js
export default class MainPageClass {

    // header: products, solutions, prising, Why Telnyx, Resources; Developers; Shop; Contact Us; Login; Sign Up.
    // footer: Column1: 1 - Our network; 2 - Global coverage; 3 - release notes; 4 - Careers; 5 - Website terms and conditions; 6 - Terms and conditions of service.
    //  Column2: 1 - Data and Privacy; 2 - Report abuse; 3 - Privacy policy; 4 - Cookie policy; 5 - Law enforcement; 6 - Acceptable use; 7 - Trust center.
    // Column3:  1 - Telnyx vs Twilio; 2 - Telnyx vs Bandwidth; 3 - Telnyx vs Kode Wireless; 4 - Telnyx vs Hologram; 5 - Telnyx vs Wasabi; 6 - Telnyx vs Amazon S3; 7 - Voice AI; 8 - AI Glossary.
    // Social media: 1 - LinkedIn; 2 - X.com; 3 - Facebook.
    // Main content: 1 - animation line; 2 - Voice AI  request; 3 - AI demo; 4 - Interactive map; 5 - IoT; 6 - animation line #2; 7 - Explore Dev.docs; 8 - Customers stories; 9 - Learn more; 10 - Connect with us, subscription.
    get headerProductsMenuItem () {
        return $('[id^="radix"][id$="Rl6jm:"]')
    }

    get headerSolutionsMenuItem () {
        return $('[id^="radix"][id$="R156jm:"]')
    }
    get headerPricingMenuItem() {
        return $('[href="/pricing"]')
    }
    get headerWhyTelnyxMenuItem() {
        return $('[id^="radix"][id$="R256jm:"]')
    }
    get headerResourcesMenuItem() {
        return $('[id*="R2l6jm:"]')
    }
    get headerDevelopersMenuItem() {
        return $('[id^="radix"][id$="R356jm:"]')
    }

    public async open(): Promise<void> {
        const url = 'https://telnyx.com/'
        console.log('Navigating to telnyx.com')
        await browser.url(url);
    }
    async headerProductsMenuItemClickOn () {
        await this.headerProductsMenuItem.click()
    }
    async headerSolutionsMenuItemClickOn() {
        await this.headerSolutionsMenuItem.click()
    }
    async headerPricingMenuItemClickOn() {
        await this.headerPricingMenuItem.click()
    }
    async headerWhyTelnyxMenuItemClickOn() {
        await this.headerWhyTelnyxMenuItem.click()
    }
    async headerResourcesMenuItemClickOn() {
        await this.headerProductsMenuItem.click()
    }
    async headerDevelopersMenuItemClickOn() {
        await this.headerDevelopersMenuItem.click()
    }
    

}
