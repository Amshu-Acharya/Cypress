///<reference types="cypress"/>
describe('ORMS',()=>{
  
  // beforeEach( ()=> {
    // cy.visit('/')
  // })
     
   
  //   it('login with valid username and invalid password',()=>{
  //     cy.get('#username').type('admin')
  //     cy.get('.form-group> .rft> .text-coolGray600').should('have.class', 'text-coolGray600').click()
  //     cy.get('#password').should('be.visible').type('Test')
  //     cy.get('.btn-primary').click()

  //   })
  //   it('Login with invalid username and valid password',()=>{
  //     cy.get('#username').type('wewe')
  //     cy.get('.form-group> .rft> .text-coolGray600').should('have.class', 'text-coolGray600').click()
  //     cy.get('#password').should('be.visible').type('Test@123')
  //     cy.get('.btn-primary').click()
  //   })

  //   it('Login with invalid username and invalid password',()=>{
  //     cy.get('#username').type('Amshu')
  //     cy.get('.form-group> .rft> .text-coolGray600').should('have.class', 'text-coolGray600').click()
  //     cy.get('#password').should('be.visible').type('Test')
  //     cy.get('.btn-primary').click()
  // })
   it('login with valid credentials',()=>{
     cy.visit('/')
       cy.get('h4').should('have.text', 'लग-इन');
    // translate
      cy.get(':nth-child(1) > label').eq(0). as('username_label')
      cy.get('@username_label').should('exist').and('have.text', 'PMIS कोड');
      cy.get('#username').type('admin')
    
      cy.get('.form-group> .rft> .text-coolGray600').should('have.class', 'text-coolGray600').click()
      cy.get('#password').should('be.visible').type('Test@123')
      cy.get('.btn-primary').click()
      cy.wait(2000);
    
  

})
    // it('Check the localization of login page',()=>{
    //   cy.get('.select').click()
    })





  