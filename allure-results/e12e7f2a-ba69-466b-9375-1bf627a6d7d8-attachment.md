# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestCustomFix.spec.ts >> T3_ValidateLoginJSONFile-undefined_admin112233
- Location: tests\LoginTestCustomFix.spec.ts:15:19

# Error details

```
Error: The username & password from JSON file is Null
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
  1   | import process from 'node:process';
  2   | import { customDataTest } from '../src/fixtures/DataFixtures';
  3   | import { customtest } from '../src/fixtures/CustomFixtures';
  4   | import { CsvHelper } from '../src/utilities/CSVHelper';
  5   | import { ExcelHelper } from '../src/utilities/ExcelHelper';
  6   | import test from '@playwright/test';
  7   | import { CLIENT_RENEG_LIMIT } from 'node:tls';
  8   | import { JSONHelper } from '../src/utilities/JSONHelper';
  9   | 
  10  | 
  11  | let filepath = './src/testdata/credentials.json';
  12  | let jsonHelper = new JSONHelper();
  13  | let jsonData = jsonHelper.readJson(filepath);
  14  | for (const test1 of jsonData) {
  15  |     customDataTest(`T3_ValidateLoginJSONFile-${test1.username}_${test1.password}`, async ({ loginPage }) => {
  16  |         await loginPage.navigateToLoginPage();
  17  |         if (test1.username == null || test1.password == null) {
> 18  |             throw Error("The username & password from JSON file is Null");
      |                   ^ Error: The username & password from JSON file is Null
  19  |         }
  20  |        
  21  | 
  22  |         await loginPage.doLogin(test1.username, test1.password);
  23  |     });
  24  | }
  25  | 
  26  | 
  27  | 
  28  | 
  29  | 
  30  | 
  31  | 
  32  | const path = './src/testdata/credentials.xlsx';
  33  | const data1 = ExcelHelper.readExcel(path, 'credentials');
  34  | for (const test1 of data1) {
  35  |     customDataTest(`T3_ValidateLoginExcelFile-${test1.username}_${test1.password}`, async ({ loginPage }) => {
  36  |         await loginPage.navigateToLoginPage();
  37  |         await loginPage.doLogin(test1.username, test1.password);
  38  |     });
  39  | }
  40  | 
  41  | 
  42  | 
  43  | 
  44  | 
  45  | 
  46  | 
  47  | 
  48  | const data = CsvHelper.readCsv('./src/testdata/NegativeCredentials.csv');
  49  | for (const test1 of data) {
  50  |     customDataTest(`T3_ValidateLoginCSVFileWOFixtures-${test1.username}_${test1.password}`, async ({ loginPage }) => {
  51  |         await loginPage.navigateToLoginPage();
  52  |         await loginPage.doLogin(test1.username, test1.password);
  53  |     }
  54  |     );
  55  | }
  56  | 
  57  | customDataTest('T3_ValidateLoginCSVFile', async ({ loginPage, testData }) => {
  58  |     for (const row of testData) {
  59  |         await loginPage.navigateToLoginPage();
  60  |         await loginPage.doLogin(row.username, row.password);
  61  |     }
  62  | });
  63  | 
  64  | 
  65  | 
  66  | 
  67  | 
  68  | 
  69  | 
  70  | 
  71  | 
  72  | customtest('T3_ValidateLoginEnvFile', async ({ loginPage }) => {
  73  |     await loginPage.navigateToLoginPage();
  74  |     await loginPage.doLogin(process.env.qaUsn!, process.env.qaPsw!);
  75  | });
  76  | 
  77  | 
  78  | 
  79  | 
  80  | 
  81  | customtest('T3_ValidateLoginHardCodedValues', async ({ loginPage }) => {
  82  |     await loginPage.navigateToLoginPage();
  83  |     await loginPage.doLogin("shopperplaywright@gmail.com", "PlayWright@34");
  84  | });
  85  | 
  86  | 
  87  | 
  88  | 
  89  | 
  90  | 
  91  | 
  92  | 
  93  | 
  94  | 
  95  | 
  96  | customtest('T1_ValidateTitle1', async ({ loginPage }) => {
  97  |     await loginPage.navigateToLoginPage();
  98  |     let title = await loginPage.fetchLoginPageTitle();
  99  |     console.log(title);
  100 | });
  101 | customtest('T2_ValidateURL', async ({ loginPage }) => {
  102 |     await loginPage.navigateToLoginPage();
  103 |     let URL = await loginPage.fetchLoginPageUrl();
  104 |     console.log(URL);
  105 | });
  106 | 
```