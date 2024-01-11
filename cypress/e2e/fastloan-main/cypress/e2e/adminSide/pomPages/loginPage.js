export class LoginPage {
    loginUrl(){
      cy.visit("/login");
    }
    usernameField() {
      return cy.get('#username');
    }
  
    passwordField() {
      return cy.get('#password');
    }
  
    loginBtn() {
      return cy.get('.sc-bdvvtL');
    }
    waitLogin(){
      cy.intercept("GET", "/report/v1/admin/dashboard/summary").as("dashboard");
      return cy.wait("@dashboard");
    }
  }

  const Login = new LoginPage();

  export function performLogin(){
   
      Login.loginUrl();
  
      Login.usernameField().type("ashish.shrestha").eq(0);
      Login.passwordField().type("Test@123456");
      Login.loginBtn().click();
    
      Login.waitLogin()
    
  }