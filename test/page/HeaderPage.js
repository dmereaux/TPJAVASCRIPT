const {Key, By} = require('selenium-webdriver');
const { locators } = require("../resources/locators");

class HeaderPage{
    constructor(driver){
        this.driver = driver;
    }


    async enter_search(searchText){
        await this.driver.findElement(By.css(locators.searchField)).sendKeys(searchText);
        await this.driver.findElement(By.css(locators.searchField)).sendKeys(Key.RETURN);

    }
}

module.exports = HeaderPage;