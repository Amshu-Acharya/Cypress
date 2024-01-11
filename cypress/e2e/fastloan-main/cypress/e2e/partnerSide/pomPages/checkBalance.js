const users = require('../../../fixtures/balanceCheckDetails.json');
class balanceCheck{

    elements ={
        mobileNumber : () => cy.get('#mobileNumber'),
        accountNumber : () => cy.get('#accountNumber'),
        accountName : () => cy.get('#accountName')
    }

    balanceCheckPage(){

        users.forEach(userData => {
            
        cy.visit('/balance/check')

        this.elements.mobileNumber().type(userData.Mobilenumber);

        this.elements.accountNumber().type(userData.Accountnumber);

        this.elements.accountName().type(userData.Accountname);

    });
    }
}


module.exports = new balanceCheck();

