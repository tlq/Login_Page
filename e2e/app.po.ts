export class LoginPagePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('login-page-app h1')).getText();
  }
}
