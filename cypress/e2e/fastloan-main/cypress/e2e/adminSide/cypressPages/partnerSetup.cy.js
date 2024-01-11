import {performLogin} from "../pomPages/loginPage";
import { partnerSetup } from "../pomPages/partnerSetup";
const partner = new partnerSetup

const url = "/partner/setup/detail"
describe('Partner Setup Page', () => {
    it('First Screen Creation of Partner', () => {
        
        performLogin()
        cy.visit(url)
        partner.setupWait()
        partner.imageUpload().selectFile('cypress/fixtures/partnerImage.png',{ force: true })
        partner.partnerName()
        partner.partnerTypeDrop()
        partner.transactionBank()
        partner.partnerEmail()
        partner.officeNumber()
        partner.userAddress()
        partner.partnerWard().type('1')
        partner.partnerAddress().type("Info developers")
        partner.checkBox().click()
        partner.submitButton()
        });
    
        
   
});