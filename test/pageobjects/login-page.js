 //creating a class for this page
 class LoginPage {
    //getting locators of all objects in this page
    get usernameTextboxLocator() {
        return $('#username');
    };
    get passwordTextboxLocator(){
        return $('#password');
    };
    get loginButtonLocator(){
        return $('button[type="submit"]');
    };
    get validationMessageLocator(){
        return $('#flash');
    };

    //creating methods/actions performed on these objects
    async performLogin(username, password) {
        await this.usernameTextboxLocator.setValue(username);
        await this.passwordTextboxLocator.setValue(password);
        await this.loginButtonLocator.click();
    };
    async valiDationLogin(msg){
        await expect(this.validationMessageLocator).toHaveTextContaining(msg); //validation after login
    };

};
export default new LoginPage();