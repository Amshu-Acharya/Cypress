describe('Loan List API Fast Loan', () => {
    it('POST method is used', () => {
        cy.request({
          method: "POST",
          url: "https://fastloan.infodev.com.np/middle/v1/loan/list",
          body: {
            "searchParam": "ACCOUNT_CODE",
            "searchParamValue": "5707010011186",
            "status": "ACTIVE"
          },
          headers: {
            "partnerCode": "FL-IME113",
            "Content-Type": "application/json",
          }
        }).then((response) => {
          console.log(response);
          cy.log(response);
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq("Loan Detail fetched successfully.");
          expect(response.body.status).to.eq(200); 
          expect(response.body.success).to.eq(true);
        });
      });
});