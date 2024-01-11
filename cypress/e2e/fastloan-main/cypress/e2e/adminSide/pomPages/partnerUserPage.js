export class partnerUserPage {
    partnerUrl(){
      cy.visit("/user-setup/partner/detail/basic");
    }
    userFullname() {
      return cy.get('[name="fullname"]');
      
    }
    userUsername() {
      return cy.get('[name="username"]');
    }
    userId(){
        return cy.get('[name="email"]')
    }
    userMobile(){
        return cy.get('[name="mobileNo"]')
    }
    userDropdown(){
        return cy.get('.css-inline-cache-key-xqn7vz').click(), cy.contains("NIC ASIA").click()    
    }
    loginBtn() {
      return cy.get('[type="submit"]').click();
    }
    waitPartner(){
      cy.intercept("GET", "/middle/v1/partner/master").as("partnerLoad");
      return cy.wait("@partnerLoad");
    }
  }