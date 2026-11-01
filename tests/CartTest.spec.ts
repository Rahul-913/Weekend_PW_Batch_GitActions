import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pagelayers/LoginPage';
import { ResultsCartPage } from '../src/pagelayers/ResultsCartPage';
import { HomePage } from '../src/pagelayers/HomePage';

test('addProductToCart', async ({ page }) => {
    //url,login,search,chooseproduct,addtocart,gotocart,logout
    let loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
    let homePage = new HomePage(page);
    await homePage.searchProduct("shirts");
    let resultsCartPage = new ResultsCartPage(page);
    await resultsCartPage.addToCart();
    page.screenshot({path:"./Screenshots/CartTest.png"});
});