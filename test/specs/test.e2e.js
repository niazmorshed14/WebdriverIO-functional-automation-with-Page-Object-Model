import { browser } from '@wdio/globals'
import  LoginPage from '../pageobjects/login-page.js'
import LogOutPage from '../pageobjects/logout-page.js'

describe("login & logout from heroku app", function(){

    it("peforming login", async function(){
        await browser.url("https://the-internet.herokuapp.com/login");
        await browser.maximizeWindow();
        await browser.pause(3000);

        //passing arguments
        await LoginPage.performLogin('tomsmith', 'SuperSecretPassword!');
        await LoginPage.valiDationLogin('You logged into a secure area!');
        
        //browser related tasks
        await browser.pause(3000);

    });

    it("pefroming logout", async function(){
        await LogOutPage.performLogout();
        await LogOutPage.validatingLogoutMessage("You logged out of the secure area!");
        
        //browser related tasks
        await browser.pause(3000);
        await browser.closeWindow();
    });
});