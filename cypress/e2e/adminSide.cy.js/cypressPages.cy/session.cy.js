///<reference types="cypress"/>
describe('ORMS',()=>{
     it('login with valid credentials',()=>{
       cy.visit('/')
       cy.intercept("POST", 'http://192.168.50.167:8070/cms/count').as("prelogin");
       cy.wait("@prelogin");

        cy.get('h4').should('have.text', 'लग-इन');
      // translate
        cy.get(':nth-child(1) > label').eq(0). as('username_label')
        cy.get('@username_label').should('exist').and('have.text', 'PMIS कोड');
        cy.get('#username').type('admin')
      
        cy.get('.form-group> .rft> .text-coolGray600').should('have.class', 'text-coolGray600').click()
        cy.get('#password').should('be.visible').type('Test@123')
        cy.get('.btn-primary').click()
        cy.wait(2000);

    //    cy.intercept("GET", 'http://192.168.50.167:8070/internal/privileges/get/init').as("postlogin");
    //    cy.wait("@postlogin");

    //    cy.intercept("GET", "http://192.168.50.167/#/admin/dashboard").as("dashboard");
    //    cy.wait("@dashboard")
    describe('Create Vacancy',()=>{
        // beforeEach( ()=> {
        //          cy.visit('/')
        // })
            it('create vacancy',() => {
        
        // cy.get('#advertisementCode').type(Adv028)
                function generateRandomNumericCode() {
                 const randomCode = Math.floor(Math.random() * 10000); // Adjust the range as needed
                   return randomCode;
        }
                const advertisementCode = 'adv_'+generateRandomNumericCode();
               
                // Log the generated advertisement code
                cy.get('#advertisementCode').eq(0).type(advertisementCode);
        
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
                cy.get('[type="submit"]').click();
              //   cy.wait(2000);s
                //quota
                
                 cy.get('#css-g4f4k3-indicatorContainer').click();
                // cy.wait(1000);
                cy.get('.react-select-10-option-0').click();
                cy.get('#vacancy').type('2');
                cy.get('.btn-icon').click();
      
                cy.get('.css-g4f4k3-indicatorContainer').click();
              //   cy.wait(1000);
                cy.get('#react-select-10-option-1').click();
                cy.get('#vacancy').type('1');
                cy.get('.btn-icon').click();
      })
      })
      


   
      
    
  
  })

})