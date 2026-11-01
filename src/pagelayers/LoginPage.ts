import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    //Declaration-Locators
    private readonly usnTf: Locator;
    private readonly pswTf: Locator;
    private readonly loginBtn: Locator;

    //Initialization
    constructor(page: Page) {
        super(page);
        this.usnTf = page.getByRole('textbox', { name: 'Email' });
        // this.usnTf = page.locator("//input[@id='Email']");
        this.pswTf = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }

    //Utilization - page/element action methods
    async navigateToLoginPage(): Promise<void> {
        await this.page.goto('/user-signin');
    }

    async fetchLoginPageUrl(): Promise<string> {
        let loginPageURL = this.page.url();
        console.log(`The login page url is ${loginPageURL}`);
        return loginPageURL;
    }

    async fetchLoginPageTitle(): Promise<string> {
        let loginPageTitle = await this.page.title();
        console.log(`The loginPageTitle is ${loginPageTitle}`);
        return loginPageTitle;
    }

    async doLogin(usn: string, psw: string): Promise<void> {
        await this.usnTf.waitFor({ state: 'visible' });
        await this.usnTf.fill(usn);
        await this.pswTf.waitFor({ state: 'visible' });
        await this.pswTf.fill(psw);
        await this.loginBtn.click();
        await this.page.screenshot({ path: "./Screenshots/HomePage.png" });
    }





}