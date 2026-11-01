# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.ts >> T2_ValidateLoginPageTitle
- Location: tests\LoginTest.spec.ts:24:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "ShoppersStack"
Received: "ShoppersStack | Login"
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - article [ref=e4]:
    - link [ref=e6] [cursor=pointer]:
      - /url: /
      - img "logo" [ref=e7]
  - navigation "breadcrumb" [ref=e10]:
    - list [ref=e11]:
      - listitem [ref=e12]:
        - link "Login" [ref=e13] [cursor=pointer]:
          - /url: /user-signin
  - generic [ref=e14]:
    - tablist "Vertical tabs example" [ref=e18]:
      - tab "Shopper Login" [selected] [ref=e19] [cursor=pointer]
      - tab "Merchant Login" [ref=e20] [cursor=pointer]
      - tab "Admin Login" [ref=e21] [cursor=pointer]
    - tabpanel "Shopper Login" [ref=e23]:
      - article [ref=e27]:
        - generic [ref=e28]:
          - heading [level=5] [ref=e29]:
            - strong [ref=e30]: Shopper Login
          - generic [ref=e31]:
            - generic: Email
            - generic [ref=e32]:
              - textbox "Email" [ref=e33]
              - group [aria-hidden]
          - generic [ref=e34]:
            - generic: Password
            - generic [ref=e35]:
              - textbox "Password" [ref=e36]
              - button "toggle password visibility" [ref=e38] [cursor=pointer]
              - group [aria-hidden]
          - button "Login" [ref=e42] [cursor=pointer]
          - separator [ref=e44]:
            - generic [ref=e45]: New to ShoppersStack ?
          - button "Create Account" [ref=e46] [cursor=pointer]
          - generic [ref=e48]: Forgot Password?
  - article [ref=e51]:
    - generic [ref=e52]:
      - generic [ref=e53]:
        - generic [ref=e54]:
          - heading "about" [level=1] [ref=e55]
          - link "contact us" [ref=e56] [cursor=pointer]:
            - /url: /
          - link "about us" [ref=e57] [cursor=pointer]:
            - /url: /
          - link "careers" [ref=e58] [cursor=pointer]:
            - /url: /
          - link "ShoppersStack stories" [ref=e59] [cursor=pointer]:
            - /url: /
          - link "press" [ref=e60] [cursor=pointer]:
            - /url: /
          - link "ShoppersStack wholesale" [ref=e61] [cursor=pointer]:
            - /url: /
          - link "corporate information" [ref=e62] [cursor=pointer]:
            - /url: /
        - generic [ref=e63]:
          - heading "help" [level=1] [ref=e64]
          - link "payments" [ref=e65] [cursor=pointer]:
            - /url: /
          - link "shipping" [ref=e66] [cursor=pointer]:
            - /url: /
          - link "cancellation & returns" [ref=e67] [cursor=pointer]:
            - /url: /
          - link "FAQ" [ref=e68] [cursor=pointer]:
            - /url: /
          - link "report infringement" [ref=e69] [cursor=pointer]:
            - /url: /
          - link "Swagger documentation" [ref=e70] [cursor=pointer]:
            - /url: https://www.shoppersstack.com/shopping/swagger-ui.html#
          - link "Requirement documentation" [ref=e71] [cursor=pointer]:
            - /url: /requirement-document
        - generic [ref=e72]:
          - heading "policy" [level=1] [ref=e73]
          - link "return policy" [ref=e74] [cursor=pointer]:
            - /url: /
          - link "terms of use" [ref=e75] [cursor=pointer]:
            - /url: /
          - link "security" [ref=e76] [cursor=pointer]:
            - /url: /
          - link "privacy" [ref=e77] [cursor=pointer]:
            - /url: /
          - link "sitemap" [ref=e78] [cursor=pointer]:
            - /url: /
          - link "EPR compliance" [ref=e79] [cursor=pointer]:
            - /url: /
        - generic [ref=e80]:
          - heading "social" [level=1] [ref=e81]
          - link "facebook" [ref=e82] [cursor=pointer]:
            - /url: /
          - link "twitter" [ref=e83] [cursor=pointer]:
            - /url: /
          - link "youTube" [ref=e84] [cursor=pointer]:
            - /url: /
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "mail us:" [level=1] [ref=e87]
          - generic [ref=e88]: shoppersstack@yahoo.in
        - generic [ref=e89]:
          - heading "registered office address:" [level=1] [ref=e90]
          - generic [ref=e91]: ShoppersStack private limited, gopalan coworks, kathreguppe, banashankari 3rd stage, bangalore, 560029, karnataka, india
    - generic [ref=e92]:
      - generic [ref=e93]:
        - paragraph [ref=e98]:
          - link "Create Admin Account" [ref=e99] [cursor=pointer]:
            - /url: /admin-signup
        - link "Advertise" [ref=e103] [cursor=pointer]:
          - /url: /advertisement
        - link "Voucher" [ref=e107] [cursor=pointer]:
          - /url: https://voucher.shoppersstack.com
        - link "Help Center" [ref=e111] [cursor=pointer]:
          - /url: /help
        - link "Create Shopper/ Merchant" [ref=e116] [cursor=pointer]:
          - /url: /urlhelper
      - generic [ref=e117]:
        - link [ref=e118] [cursor=pointer]:
          - /url: /
          - img "logo" [ref=e119]
        - generic [ref=e120]: © 2007-2022 ShoppersStack.com
```

# Test source

```ts
  1  | import { test, expect, Page } from '@playwright/test';
  2  | import { LoginPage } from '../src/pagelayers/LoginPage';
  3  | import * as allure from 'allure-js-commons';
  4  | 
  5  | let logninPage: LoginPage;
  6  | 
  7  | test.beforeEach('navigateToLoginPage', async ({ page }) => {
  8  |     await allure.epic('Web Application');
  9  |     await allure.feature('Login');
  10 |     await allure.story('Valid User Login');
  11 |     await allure.severity('critical');
  12 |     await allure.description('Verify that a registered user can log in successfully.');
  13 |     logninPage = new LoginPage(page);
  14 |     await logninPage.navigateToLoginPage();
  15 | });
  16 | 
  17 | test('T1_ValidateLoginPageURL', async ({ page }) => {
  18 |     await allure.step('T1_ValidateLoginPageURL', async () => {
  19 |         let pageURL = await logninPage.fetchLoginPageUrl();
  20 |         expect(pageURL).toBe("ShoppersStack");
  21 |     });
  22 | });
  23 | 
  24 | test('T2_ValidateLoginPageTitle', async ({ page }) => {
  25 |     let pageTitle = await logninPage.fetchLoginPageTitle();
> 26 |     expect(pageTitle).toBe("ShoppersStack");
     |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  27 | });
  28 | 
  29 | test('T3_ValidateValidCredLogin', async ({ page }) => {
  30 |     await logninPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
  31 | });
```