describe('ORMS',()=>{
     
    it('login',()=>{
          cy.visit('http://192.168.50.167/#/login-admin')
          cy.get('#username').type('admin')
          cy.wait(5)
          cy.get('.form-group> .rft> .text-coolGray600').should('have.class', 'text-coolGray600').click()
         
          // cy.get('.d-block').type('Test@123')
          cy.get('#password').should('be.visible').type('Test@123')
          cy.wait(5)
          cy.get('.btn-primary').click()
         
          cy.get('a[href="#/vacancy-list"]').click()
          cy.get('.ic-add').click()
          cy.get('#advertisementCode').type('Adv002')
         
          //To Select Sewa
          cy.get('#serviceId > .css-7n61y8 > .css-5d61xs').click()
          cy.get('#react-select-4-option-0').click()
   
          //To Select Taha/Shreni
          cy.get('#classId > .css-7n61y8 > .css-5d61xs > .css-dl7eeo-placeholder').click()
          cy.get('#react-select-5-option-5').click()
         
   
          //To Select Samuha
          cy.get('#groupId > .css-7n61y8').click()
          cy.get('#react-select-6-option-0').click()
         
        //  //To select Upa Samuha
        //   cy.get('#subGroupId > .css-7n61y8 > .css-5d61xs > .css-dl7eeo-placeholder').click()
        //   cy.get('#react-select-7-option-0').click()
   
   
          //To select Sewa Prakar
          cy.get('#serviceType > .css-7n61y8 > .css-5d61xs > .css-dl7eeo-placeholder').click()
          cy.get('#react-select-8-option-0').click()
   
   
          //To select Rikta Pad
          cy.get('#postIdMasterCombinationId > .css-7n61y8 > .css-5d61xs').click()
          cy.get('#react-select-9-option-0').click()
   
   
          //To Type Jamma Pad
          cy.get('[name="totalVacancy"]').type("2")
   
   
          //To Add Tippani
          cy.get('[name="requisitionRemarks"]').type("This is just for testing procedures")
   
          //To Click Next
          cy.get('[type="submit"]')
         
      })
  })