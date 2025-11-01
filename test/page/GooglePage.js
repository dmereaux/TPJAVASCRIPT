const {Key, By} = require('selenium-webdriver');


class GooglePage {
    constructor(driver){
        this.driver = driver;
    }

    async enter_url(theURL){
        await this.driver.get(theURL);
    }

    async enter_search(searchText){
        var searchField = 'input[name=q]';
        await this.driver.findElement(By.css(searchField)).sendKeys(searchText);
        await this.driver.findElement(By.css(searchField)).sendKeys(Key.RETURN);

    }
}

module.exports = GooglePage;