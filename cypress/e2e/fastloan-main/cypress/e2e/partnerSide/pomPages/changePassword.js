class changePasswordPage {

elements = {
    currentPassword : () => cy.get('input[name="oldPassword"]'),
    newPassword : () => cy.get('input[name="newPassword"]'),
    confirmPassword : () => cy.get('input[name="confirmNewPassword"]'),


}
    changePassword(){

        this.elements.currentPassword().type("Test@123123")
        this.elements.newPassword().type("Test@123")
        this.elements.confirmPassword().type("Test@123")

    }

}
module.exports = new changePasswordPage();