export class partnerUserSetupPage{
    visitUrl(){
        return cy.visit("/user-setup/partner/detail/basic")
    }
    partnerUserFullname() {
          return cy.get('[name="fullname"]');
          
        }
    partnerUsername() {
          return cy.get('[name="username"]');
        }
    partnerEmail() {
            return cy.get('[name="username"]');
          }
    partnerMobile(){
            return cy.get('[name="mobileNo"]')
        }
        loginBtn() {
          return cy.get('[type="submit"]').click();
        }
    waitPartner(){
          cy.intercept("GET", "middle/v1/module-information/module/PARTNERUSERSETUPBYPARTNER").as("partnerLoad");
          return cy.wait("@partnerLoad");
        }
      
}