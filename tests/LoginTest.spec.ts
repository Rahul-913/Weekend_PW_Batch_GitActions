import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../src/pagelayers/LoginPage';
import * as allure from 'allure-js-commons';

let logninPage: LoginPage;

test.beforeEach('navigateToLoginPage', async ({ page }) => {
    await allure.epic('Web Application');
    await allure.feature('Login');
    await allure.story('Valid User Login');
    await allure.severity('critical');
    await allure.description('Verify that a registered user can log in successfully.');
    logninPage = new LoginPage(page);
    await logninPage.navigateToLoginPage();
});

test('T1_ValidateLoginPageURL', async ({ page }) => {
    await allure.step('T1_ValidateLoginPageURL', async () => {
        let pageURL = await logninPage.fetchLoginPageUrl();
        expect(pageURL).toBe("ShoppersStack");
    });
});

test('T2_ValidateLoginPageTitle', async ({ page }) => {
    let pageTitle = await logninPage.fetchLoginPageTitle();
    expect(pageTitle).toBe("ShoppersStack");
});

test('T3_ValidateValidCredLogin', async ({ page }) => {
    await logninPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
});