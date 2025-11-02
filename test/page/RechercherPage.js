const {Key, By, until} = require('selenium-webdriver');
const { locators } = require("../resources/locators");

class RechercherPage{
    constructor(driver){
        this.driver = driver;
    }


    async returnMessage(searchText){
//        return await this.driver.findElement(By.css(locators.resultField)).getText();
        return await this.driver.wait(until.elementLocated(By.css(locators.resultField)),5000).getText();
   
    }
}
module.exports = RechercherPage;