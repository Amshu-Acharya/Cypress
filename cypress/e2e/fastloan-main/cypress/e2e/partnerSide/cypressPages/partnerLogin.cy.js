import { PartnerLoginPage } from "../../partnerSide/pomPages/partnerLogin";
const Login = new PartnerLoginPage();

export function partnerLoginFunction() {
    Login.loginUrl();
    Login.partnerCode().type("IME113");
    Login.usernameField().type("imepay.user.head").eq(0);
    Login.passwordField().type("Test@123456");
    Login.loginBtn().click();
    Login.waitLogin();
  }
  
  describe('Login Page', () => {
    it("Partner Login Page", () => {
      // partnerLoginFunction();

      cy.visit("www.google.com")
      cy.xpath('//div[@jsname="vdLsw"]')
    });
  });
  