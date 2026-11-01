import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pagelayers/HomePage';
import { LoginPage } from '../src/pagelayers/LoginPage';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach('presteps', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
    homePage = new HomePage(page);

});

test('TC1_ValidateHomePageUrl', async ({ page }) => {

    let url = await homePage.fetchHomePageURL();
    expect(url).toBe("https://shoppersstack.com/user-signin");
});


test('TC2_ValidateHomePageTitle', async ({ page }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
    await page.waitForTimeout(3000);
    let title = await homePage.fetchHomePageTitle();
    expect(title).toBe("ShoppersStack | Home");
});
test('TC3_ValidateProfileIconVisibility', async ({ page }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
    let falg = await homePage.checkForProgfileIcon();
    console.log("Profile Icon Visible:", falg);
    expect(falg).toBeTruthy();
});
test('TC4_ValidateSuccessfulLogout', async ({ page }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
    await homePage.doLout();
});