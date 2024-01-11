import {performLogin} from "../pomPages/loginPage";
import { partnerUserPage } from "../pomPages/partnerUserPage";
const partnerInfo = new partnerUserPage

describe('Partner User Page', () => {
    it('Creation of User', () => {
        performLogin()
        partnerInfo.partnerUrl()
        partnerInfo.waitPartner() 
        partnerInfo.userFullname().type("Ranjan Dhakal")
        partnerInfo.userUsername().type("ranjandhakal")
        partnerInfo.userId().type("raj@gmail.com")
        partnerInfo.userMobile().type("9860656565")
        partnerInfo.userDropdown() 
        partnerInfo.loginBtn()      
    });
});