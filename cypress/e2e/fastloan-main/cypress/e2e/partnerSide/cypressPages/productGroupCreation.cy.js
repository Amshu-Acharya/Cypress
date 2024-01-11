import { groupCreate } from "../pomPages/productGroupCreation";
const group = new groupCreate()
import {partnerLoginFunction} from "./partnerLogin.cy"

const delayedType = (element, text,string) => {
    element.type(text,string, { delay: 50 });
};
beforeEach(() => {
    partnerLoginFunction()
    cy.clearCookies()
    
        group.visitURL()

        group.waitPage()
});
export function formFill(){
        group.clickAdd()   

        group.imageUpload().selectFile('cypress/fixtures/partnerImage.png',{ force: true })

        delayedType(group.groupTitle(), "Aus Yatra"); 
        
        group.groupCode().type("AY")
        
        delayedType(group.groupName(), "Australia")
        
        group.groupScoreGrid()

        group.startDate()
        
        group.endDate()

        group.offerPeriod()
        cy.wait(1000)

        group.descriptionField().type("This is the description for the Australia yatra")

        group.eligibleCriteria()
        
        group.eligibleMessage().type("You are eligible to apply for loan")

        group.nonEligibleMessage().type("You are not eligible to apply loan")

        group.submitButton()
}
describe('Create Product Group', () => {
    it.only('product under EQI', () => {
        formFill()
    });
    it.only('product under HOME LOAN', () => {
        group.chosingProductHomeloan().click()
        formFill()
    });
    it.only('product under EMI', () => {
        group.chosingProductEMI().click()
        formFill()
    });
});