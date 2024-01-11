import {performLogin} from "../pomPages/loginPage";
import { partnerUserPage } from "../pomPages/partnerUserPage";
const partnerInfo = new partnerUserPage
const url = "/user-setup/system/detail/basic"
describe('Partner User Page', () => {
    it('Creation of User', () => {
        performLogin()
        cy.visit(url)

        cy.intercept("GET", "middle/v1/module-information/module/SYSTEMUSERSETUP").as("systemLoad");
        cy.wait("@systemLoad");

        partnerInfo.userFullname().type("Ranjan Dhakal")
        partnerInfo.userUsername().type("ranjandhakal")
        partnerInfo.userId().type("raj@gmail.com")
        partnerInfo.userMobile().type("9860656565")
        cy.get('#isTwoFactorAuthenticationEnabled').click();
        
        partnerInfo.loginBtn()      
    });
});