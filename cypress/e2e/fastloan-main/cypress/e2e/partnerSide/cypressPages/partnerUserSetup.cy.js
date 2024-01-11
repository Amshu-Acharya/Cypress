import {partnerLoginFunction} from "./partnerLogin.cy"
import { partnerUserSetupPage } from "../pomPages/partnerUserSetup";
const partnerUSP = new partnerUserSetupPage()
describe('Partner Setup Page', () => {
    it.only('Partner Setup First Page', () => {
      partnerLoginFunction()
        partnerUSP.visitUrl()
        partnerUSP.waitPartner()
        partnerUSP.partnerUserFullname().type("Ranjan Dhakal")
        partnerUSP.partnerUsername()
        partnerUSP.partnerEmail()
        partnerUSP.partnerMobile()
        partnerUSP.loginBtn()
    });
});