export class PartnerLoginPage {
    loginUrl(){
      cy.visit("/login-partner");
    }
    partnerCode(){
      return cy.get('#partnerCode')
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
      cy.intercept("GET", "/report/v1/dashboard/summary").as("dashboard");
      return cy.wait("@dashboard");
    }
  }

