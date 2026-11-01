import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    //Locators
    private readonly profileIcon: Locator;
    private readonly myProfile: Locator;
    private readonly logoutOption: Locator;
    private readonly searchTextField: Locator;
    private readonly searchIcon: Locator;


    //Initialize
    constructor(page: Page) {
        super(page);
        this.profileIcon = page.getByRole('button', { name: 'Account settings' });
        this.myProfile = page.getByRole('menuitem', { name: 'My Profile' })
        this.logoutOption = page.getByRole('menuitem', { name: 'Logout' });
        this.searchTextField = page.locator("//input[@id='search']");
        this.searchIcon = page.getByTestId('SearchIcon');
    }
    //Utilization
    async fetchHomePageURL(): Promise<string> {
        //Preconditon
        let homePageUrl = this.page.url();
        console.log(`The homepage url is ${homePageUrl}`);
        return homePageUrl;
    }
    async fetchHomePageTitle(): Promise<string> {
        await this.page.waitForLoadState('domcontentloaded');

        let homePageTitle = await this.page.title();
        console.log(`The homePageTitle  is ${homePageTitle}`);
        console.log(`The current URL is: ${this.page.url()}`);
        return homePageTitle;
    }

    async checkForProgfileIcon(): Promise<boolean> {
        return await this.myProfile.isVisible();
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchTextField.fill(productName);
        await this.searchIcon.click();
    }



    async doLout() {
        //Preconditon
        await this.profileIcon.click();
        await this.logoutOption.click();
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({ path: "./Screenshots/Logout.png" });
    }
}