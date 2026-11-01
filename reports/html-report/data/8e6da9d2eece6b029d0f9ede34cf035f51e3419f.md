# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomeTest.spec.ts >> TC3_ValidateProfileIconVisibility
- Location: tests\HomeTest.spec.ts:30:5

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
- generic [ref=f2e2]:
  - article [ref=f2e4]:
    - link [ref=f2e6] [cursor=pointer]:
      - /url: /
      - img "logo" [ref=f2e7]
    - generic [ref=f2e8]:
      - combobox [ref=f2e9]:
        - option "all" [selected]
        - option "beauty"
        - option "men"
        - option "women"
        - option "kids"
        - option "electronics"
      - generic [ref=f2e10]:
        - combobox [ref=f2e11]
        - img [aria-hidden] [ref=f2e12] [cursor=pointer]
    - generic [ref=f2e14]:
      - heading "Hello, playwright" [level=3] [ref=f2e15]
      - link "2" [ref=f2e16] [cursor=pointer]:
        - /url: /cart
      - button "Account settings" [ref=f2e21] [cursor=pointer]:
        - generic [ref=f2e22]: p
  - navigation "breadcrumb" [ref=f2e28]:
    - list [ref=f2e29]:
      - listitem [ref=f2e30]:
        - link "Home" [ref=f2e31] [cursor=pointer]:
          - /url: /
      - listitem [aria-hidden] [ref=f2e32]
      - listitem [ref=f2e35]:
        - link "Login" [ref=f2e36] [cursor=pointer]:
          - /url: /user-signin
  - generic [ref=f2e37] [cursor=pointer]
  - article [ref=f2e43]:
    - generic [ref=f2e44]:
      - generic [ref=f2e45]:
        - generic [ref=f2e46]:
          - heading "about" [level=1] [ref=f2e47]
          - link "contact us" [ref=f2e48] [cursor=pointer]:
            - /url: /
          - link "about us" [ref=f2e49] [cursor=pointer]:
            - /url: /
          - link "careers" [ref=f2e50] [cursor=pointer]:
            - /url: /
          - link "ShoppersStack stories" [ref=f2e51] [cursor=pointer]:
            - /url: /
          - link "press" [ref=f2e52] [cursor=pointer]:
            - /url: /
          - link "ShoppersStack wholesale" [ref=f2e53] [cursor=pointer]:
            - /url: /
          - link "corporate information" [ref=f2e54] [cursor=pointer]:
            - /url: /
        - generic [ref=f2e55]:
          - heading "help" [level=1] [ref=f2e56]
          - link "payments" [ref=f2e57] [cursor=pointer]:
            - /url: /
          - link "shipping" [ref=f2e58] [cursor=pointer]:
            - /url: /
          - link "cancellation & returns" [ref=f2e59] [cursor=pointer]:
            - /url: /
          - link "FAQ" [ref=f2e60] [cursor=pointer]:
            - /url: /
          - link "report infringement" [ref=f2e61] [cursor=pointer]:
            - /url: /
          - link "Swagger documentation" [ref=f2e62] [cursor=pointer]:
            - /url: https://www.shoppersstack.com/shopping/swagger-ui.html#
          - link "Requirement documentation" [ref=f2e63] [cursor=pointer]:
            - /url: /requirement-document
        - generic [ref=f2e64]:
          - heading "policy" [level=1] [ref=f2e65]
          - link "return policy" [ref=f2e66] [cursor=pointer]:
            - /url: /
          - link "terms of use" [ref=f2e67] [cursor=pointer]:
            - /url: /
          - link "security" [ref=f2e68] [cursor=pointer]:
            - /url: /
          - link "privacy" [ref=f2e69] [cursor=pointer]:
            - /url: /
          - link "sitemap" [ref=f2e70] [cursor=pointer]:
            - /url: /
          - link "EPR compliance" [ref=f2e71] [cursor=pointer]:
            - /url: /
        - generic [ref=f2e72]:
          - heading "social" [level=1] [ref=f2e73]
          - link "facebook" [ref=f2e74] [cursor=pointer]:
            - /url: /
          - link "twitter" [ref=f2e75] [cursor=pointer]:
            - /url: /
          - link "youTube" [ref=f2e76] [cursor=pointer]:
            - /url: /
      - generic [ref=f2e77]:
        - generic [ref=f2e78]:
          - heading "mail us:" [level=1] [ref=f2e79]
          - generic [ref=f2e80]: shoppersstack@yahoo.in
        - generic [ref=f2e81]:
          - heading "registered office address:" [level=1] [ref=f2e82]
          - generic [ref=f2e83]: ShoppersStack private limited, gopalan coworks, kathreguppe, banashankari 3rd stage, bangalore, 560029, karnataka, india
    - generic [ref=f2e84]:
      - generic [ref=f2e85]:
        - paragraph [ref=f2e90]:
          - link "Create Admin Account" [ref=f2e91] [cursor=pointer]:
            - /url: /admin-signup
        - link "Advertise" [ref=f2e95] [cursor=pointer]:
          - /url: /advertisement
        - link "Voucher" [ref=f2e99] [cursor=pointer]:
          - /url: https://voucher.shoppersstack.com
        - link "Help Center" [ref=f2e103] [cursor=pointer]:
          - /url: /help
      - generic [ref=f2e104]:
        - link [ref=f2e105] [cursor=pointer]:
          - /url: /
          - img "logo" [ref=f2e106]
        - generic [ref=f2e107]: © 2007-2022 ShoppersStack.com
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