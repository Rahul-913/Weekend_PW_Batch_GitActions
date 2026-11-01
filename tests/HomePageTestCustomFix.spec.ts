import { customtest } from '../src/fixtures/CustomFixtures';


customtest('T1_HomePageTitle', async ({ homePage, loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
    let title = await homePage.fetchHomePageTitle();
    console.log(title);
});