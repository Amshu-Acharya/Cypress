
// describe('', () => {
//     it('', () => {
//         cy.intercept('POST', '/comments').as('postComment')
//         cy.get('.add-comment').click()
//         cy.wait('@postComment').then(({ response }) => {
//           cy.exec(
//             `echo ${JSON.stringify(response.body)} >cypress/fixtures/comment.json`
//           )
//           cy.fixture('comment.json').should('deep.eq', response.body)
//         })  
//     });
// });


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
      cy.visit('https://www.google.com/') // Replace with the URL of your website
        cy.lighthouse({
          performance: 60,
         
        }
        )
    });
  });
  