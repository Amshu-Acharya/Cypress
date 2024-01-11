export class groupCreate {
    visitURL(){
       cy.visit("/create-product-group")
    }
    waitPage(){
        cy.intercept('GET',"/middle/v1/module-information/module/PRODUCTTYPE").as("waitPage")
        cy.wait("@waitPage")
    }   
    chosingProductHomeloan(){
        return cy.get('.list > :nth-child(2)')
    }
    chosingProductEMI(){
        return cy.get('.list > :nth-child(3)')
    }
    clickAdd(){
        cy.get(".sc-bdvvtL").eq(0).click()
    }
    groupTitle(){
        return cy.get('[name="title"]')
    }
    groupCode(){
        return cy.get('[name="code"]')
    }
    groupName(){
        return cy.get('[name="name"]')
    }
    groupScoreGrid(){
        return cy.get('.css-inline-cache-key-xqn7vz')
            .eq(0)
            .click(), 
            cy.
            contains("COUNTRY")
            .click()    
    }
    startDate(){
        cy.get('[id="effectiveDateStart"]').click()
        cy.get(':nth-child(5) > .react-datepicker__day--029').click()
    }
    endDate(){
        cy.get('#effectiveDateEnd').click()
        cy.get(':nth-child(5) > .react-datepicker__day--030').click()
    }
    offerPeriod(){
        return cy.get('.css-inline-cache-key-xqn7vz').eq(1).as('period'),
        cy.get('@period').type("16",{delay:100}),
       cy.wait(1000),
        cy.get('@period').focused().tab()     
    }
    descriptionField(){
        return cy.get('#description')
    }
    imageUpload(){    
        return cy.get('#file').invoke('show')
    }
    eligibleCriteria(){
        cy.get('.css-inline-cache-key-xqn7vz > .mr-2').click(),
        cy.get('#react-select-4-option-0 > .form-check > .form-check-input').click(),
        cy.get(':nth-child(9) > .mb-4 > :nth-child(1) > .d-flex').click()
    }
    eligibleMessage(){
       return cy.get('[name="eligibleMessage"]')
    } 
    nonEligibleMessage(){
       return cy.get('[name="notEligibleMessage"]')
    }
    submitButton(){
        cy.get('.QPYIf > span').click()
    }
}       