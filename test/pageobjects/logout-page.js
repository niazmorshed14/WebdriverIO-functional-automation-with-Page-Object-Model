//creating a class for logout page
class LogOutPage {

    //getting locators of all objects in this page
    get logoutButton(){
        return $("//i[contains(text(),'Logout')]");
    };
    get logoutValidation(){
        return $("//div[@id='flash']");
    };

    //creating methods/actions performed on these objects
    async performLogout(){
        await this.logoutButton.click();
    };
    async validatingLogoutMessage(logoutmsg){
        await expect(this.logoutValidation).toHaveTextContaining(logoutmsg); //validation after logout
    };

};
export default new LogOutPage();