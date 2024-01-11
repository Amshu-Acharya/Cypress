export function testWelcomeBanner() {
   
    cy.get("div.welcomeBanner")
      .should("have.text", "welcome");
      
  }