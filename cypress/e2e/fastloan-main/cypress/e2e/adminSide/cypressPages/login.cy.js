import { LoginPage } from "../pomPages/loginPage";
const Login = new LoginPage();
const users = require('../../fixtures/login.json');


describe('Login Page', () => {
  users.forEach(userData => {
    it(userData.testCase, () => {
      
      Login.loginUrl();

      Login.usernameField().type(userData.username).eq(0);
      Login.passwordField().type(userData.password);
      Login.loginBtn().click();
    
      Login.waitLogin()
     
      cy.get('.sc-jrQzAO').should('have.text',"Dashboard")
    });
  });
  
});
