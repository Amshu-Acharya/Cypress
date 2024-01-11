describe('It will push the code', () => {
    it('Git updated', () => {
        cy.exec('git add .',{failOnNonZeroExit: false})


        cy.exec('git commit -m "added git_push and error handling page"',{ failOnNonZeroExit: false })


        cy.exec('git push origin main',{failOnNonZeroExit: false})
    });
});