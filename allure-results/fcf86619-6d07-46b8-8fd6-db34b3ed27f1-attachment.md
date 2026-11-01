# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomeTest.spec.ts >> TC4_ValidateSuccessfulLogout
- Location: tests\HomeTest.spec.ts:37:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - article [ref=f1e4]:
    - link [ref=f1e6] [cursor=pointer]:
      - /url: /
      - img "logo" [ref=f1e7]
    - generic [ref=f1e8]:
      - combobox [ref=f1e9]:
        - option "all" [selected]
        - option "beauty"
        - option "men"
        - option "women"
        - option "kids"
        - option "electronics"
      - generic [ref=f1e10]:
        - combobox [ref=f1e11]
        - img [aria-hidden] [ref=f1e12] [cursor=pointer]
    - generic [ref=f1e14]:
      - heading "Hello, playwright" [level=3] [ref=f1e15]
      - link "2" [ref=f1e16] [cursor=pointer]:
        - /url: /cart
      - button "Account settings" [ref=f1e21] [cursor=pointer]:
        - generic [ref=f1e22]: p
  - navigation "breadcrumb" [ref=f1e28]:
    - list [ref=f1e29]:
      - listitem [ref=f1e30]:
        - link "Home" [ref=f1e31] [cursor=pointer]:
          - /url: /
      - listitem [aria-hidden] [ref=f1e32]
      - listitem [ref=f1e35]:
        - link "Login" [ref=f1e36] [cursor=pointer]:
          - /url: /user-signin
  - generic [ref=f1e37] [cursor=pointer]
  - article [ref=f1e43]:
    - generic [ref=f1e44]:
      - generic [ref=f1e45]:
        - generic [ref=f1e46]:
          - heading "about" [level=1] [ref=f1e47]
          - link "contact us" [ref=f1e48] [cursor=pointer]:
            - /url: /
          - link "about us" [ref=f1e49] [cursor=pointer]:
            - /url: /
          - link "careers" [ref=f1e50] [cursor=pointer]:
            - /url: /
          - link "ShoppersStack stories" [ref=f1e51] [cursor=pointer]:
            - /url: /
          - link "press" [ref=f1e52] [cursor=pointer]:
            - /url: /
          - link "ShoppersStack wholesale" [ref=f1e53] [cursor=pointer]:
            - /url: /
          - link "corporate information" [ref=f1e54] [cursor=pointer]:
            - /url: /
        - generic [ref=f1e55]:
          - heading "help" [level=1] [ref=f1e56]
          - link "payments" [ref=f1e57] [cursor=pointer]:
            - /url: /
          - link "shipping" [ref=f1e58] [cursor=pointer]:
            - /url: /
          - link "cancellation & returns" [ref=f1e59] [cursor=pointer]:
            - /url: /
          - link "FAQ" [ref=f1e60] [cursor=pointer]:
            - /url: /
          - link "report infringement" [ref=f1e61] [cursor=pointer]:
            - /url: /
          - link "Swagger documentation" [ref=f1e62] [cursor=pointer]:
            - /url: https://www.shoppersstack.com/shopping/swagger-ui.html#
          - link "Requirement documentation" [ref=f1e63] [cursor=pointer]:
            - /url: /requirement-document
        - generic [ref=f1e64]:
          - heading "policy" [level=1] [ref=f1e65]
          - link "return policy" [ref=f1e66] [cursor=pointer]:
            - /url: /
          - link "terms of use" [ref=f1e67] [cursor=pointer]:
            - /url: /
          - link "security" [ref=f1e68] [cursor=pointer]:
            - /url: /
          - link "privacy" [ref=f1e69] [cursor=pointer]:
            - /url: /
          - link "sitemap" [ref=f1e70] [cursor=pointer]:
            - /url: /
          - link "EPR compliance" [ref=f1e71] [cursor=pointer]:
            - /url: /
        - generic [ref=f1e72]:
          - heading "social" [level=1] [ref=f1e73]
          - link "facebook" [ref=f1e74] [cursor=pointer]:
            - /url: /
          - link "twitter" [ref=f1e75] [cursor=pointer]:
            - /url: /
          - link "youTube" [ref=f1e76] [cursor=pointer]:
            - /url: /
      - generic [ref=f1e77]:
        - generic [ref=f1e78]:
          - heading "mail us:" [level=1] [ref=f1e79]
          - generic [ref=f1e80]: shoppersstack@yahoo.in
        - generic [ref=f1e81]:
          - heading "registered office address:" [level=1] [ref=f1e82]
          - generic [ref=f1e83]: ShoppersStack private limited, gopalan coworks, kathreguppe, banashankari 3rd stage, bangalore, 560029, karnataka, india
    - generic [ref=f1e84]:
      - generic [ref=f1e85]:
        - paragraph [ref=f1e90]:
          - link "Create Admin Account" [ref=f1e91] [cursor=pointer]:
            - /url: /admin-signup
        - link "Advertise" [ref=f1e95] [cursor=pointer]:
          - /url: /advertisement
        - link "Voucher" [ref=f1e99] [cursor=pointer]:
          - /url: https://voucher.shoppersstack.com
        - link "Help Center" [ref=f1e103] [cursor=pointer]:
          - /url: /help
      - generic [ref=f1e104]:
        - link [ref=f1e105] [cursor=pointer]:
          - /url: /
          - img "logo" [ref=f1e106]
        - generic [ref=f1e107]: © 2007-2022 ShoppersStack.com
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |     //Declaration-Locators
  6  |     private readonly usnTf: Locator;
  7  |     private readonly pswTf: Locator;
  8  |     private readonly loginBtn: Locator;
  9  | 
  10 |     //Initialization
  11 |     constructor(page: Page) {
  12 |         super(page);
  13 |         this.usnTf = page.getByRole('textbox', { name: 'Email' });
  14 |         // this.usnTf = page.locator("//input[@id='Email']");
  15 |         this.pswTf = page.getByRole('textbox', { name: 'Password' });
  16 |         this.loginBtn = page.getByRole('button', { name: 'Login' });
  17 |     }
  18 | 
  19 |     //Utilization - page/element action methods
  20 |     async navigateToLoginPage(): Promise<void> {
  21 |         await this.page.goto('/user-signin');
  22 |     }
  23 | 
  24 |     async fetchLoginPageUrl(): Promise<string> {
  25 |         let loginPageURL = this.page.url();
  26 |         console.log(`The login page url is ${loginPageURL}`);
  27 |         return loginPageURL;
  28 |     }
  29 | 
  30 |     async fetchLoginPageTitle(): Promise<string> {
  31 |         let loginPageTitle = await this.page.title();
  32 |         console.log(`The loginPageTitle is ${loginPageTitle}`);
  33 |         return loginPageTitle;
  34 |     }
  35 | 
  36 |     async doLogin(usn: string, psw: string): Promise<void> {
> 37 |         await this.usnTf.waitFor({ state: 'visible' });
     |                          ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  38 |         await this.usnTf.fill(usn);
  39 |         await this.pswTf.waitFor({ state: 'visible' });
  40 |         await this.pswTf.fill(psw);
  41 |         await this.loginBtn.click();
  42 |         await this.page.screenshot({ path: "./Screenshots/HomePage.png" });
  43 |     }
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | }
```