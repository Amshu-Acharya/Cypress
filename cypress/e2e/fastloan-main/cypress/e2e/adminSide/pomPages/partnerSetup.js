export class partnerSetup {
    partnerName(){
         return cy.get('[name="name"]')                                                                 
    }
    partnerTypeDrop(){
        return cy.get('.css-inline-cache-key-xqn7vz')
            .eq(0)
            .click(), 
            cy
            .contains("NON-BANK")
            .click()    
    }
    transactionBank(){
        return cy.get('.css-inline-cache-key-xqn7vz')
            .eq(1)
            .click(), 
            cy.
            contains("NMB Bank Ltd.")
            .click()    
    }
    partnerEmail(){
        return cy.get('[name="email"]')
    }
    officeNumber(){
        return cy.get('[name="phoneNumber"]')
    }
    userAddress(){
        return cy.get('.css-inline-cache-key-xqn7vz')
            .eq(2)
            .click(), 
            cy.
            contains("Bagmati Pradesh")
            .click() ,
            cy.get('.css-inline-cache-key-xqn7vz')
            .eq(3)
            .click(), 
            cy.
            contains("KATHMANDU")
            .click(),
            cy.get('.css-inline-cache-key-xqn7vz')
            .eq(4)
            .click(), 
            cy.
            contains("Kageshwori Manahara Municipality")
            .click()  
         }
    partnerWard(){
            return cy.get('[name="wardNumber"]')                                                                 
       }
    partnerAddress(){
        return cy.get('[name="streetName"]')
    }

    imageUpload(){
        
        return cy.get('#logo').invoke('show')
    }
    checkBox(){
        return cy.get('[type="checkbox"]')
    }
    setupWait(){
        return cy.intercept('GET',"/middle/v1/module-information/module/PARTNERSETUP").as("partnerPageWait"),
        cy.wait("@partnerPageWait")
    }
    submitButton(){
        cy.get('.text-end > .sc-bdvvtL').click()
    }
}