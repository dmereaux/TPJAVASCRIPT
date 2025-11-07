const {Key, By, until} = require('selenium-webdriver');
const { locators } = require("../resources/locators");

class RechercherPage{
    constructor(driver){
        this.driver = driver;
    }


    async returnMessage(searchText){
        return await this.driver.wait(until.elementLocated(By.css(locators.resultField)),5000).getText();
   
    }
    async countProducts(){
        let liste=await this.driver.findElements(By.xpath(locators.productList))
        return liste.length;
    }
    async verifyAllProductsContain(text){
        let liste=await this.driver.findElements(By.xpath(locators.productList))
        for (let elt of liste){
          let prodText= await elt.getText()
          if (!prodText.toLowerCase().includes(text.toLowerCase())){
              return false;
          }
        }
        return true;
    }
}
module.exports = RechercherPage;