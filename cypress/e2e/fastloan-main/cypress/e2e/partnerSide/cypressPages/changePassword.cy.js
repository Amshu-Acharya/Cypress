import {partnerLoginFunction} from "./partnerLogin.cy";
import changePasswordPage from '../pomPages/changePassword'



describe.only('change password page', () => {
    it('incorrect password', () => {
        partnerLoginFunction()
        cy.visit('/my-profile')
        cy.get('.imYPlL').click()
        changePasswordPage.changePassword()

        cy.get('[type="submit"]').click()


    });
});