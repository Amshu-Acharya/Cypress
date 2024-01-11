export class manualApprovalPage{
    manualDisbursement(){
        return cy.get(':nth-child(3) > .sc-ieecCq > :nth-child(1) > .iHHwMj')//to click Manual Disbursement 
    } // click the Manual Disbursement Page
    approvedManual(){
        return cy.get(':nth-child(2) > .sc-eJwWfJ > :nth-child(1)')
    } //Click Approved Title
    selectDropdown(){
        return cy.get(':nth-child(1) > [data-sticky-td="true"] > .dropdown > .btn')
    } //Click to dropdown option
    viewDetail(){
        return cy.get('.dropdown-menu.show > :nth-child(1) > .sc-jRQBWg')
    } //select detail
    rejectManual(){
        return cy.get(':nth-child(3) > .sc-eJwWfJ > :nth-child(1)').click()
    }
}

export class productApprovalPage{
    productApprove(){
        return cy.get(':nth-child(1) > .sc-ieecCq > :nth-child(1) > .iHHwMj')
    } // click the Product Approved Page
    waitProduct(){
        cy.intercept('GET',"/middle/v1/product-setup/approval/counts").as("waitProduct")
        cy.wait("@waitProduct")
    }
}