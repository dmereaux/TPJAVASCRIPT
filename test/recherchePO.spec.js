
const { Builder, By, Key, until } = require('selenium-webdriver');
const HeaderPage = require('./page/HeaderPage');
const RechercherPage = require('./page/RechercherPage');
const assert = require('assert');
const { expect } = require("chai");

const { data } = require("./resources/locators");
describe('recherche PO', function() {
  this.timeout(30000)
  let driver
  let vars
  let hp
  
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build();
    driver.manage().setTimeouts( { implicit: 5000 } );
    driver.get(data.baseUrl);
    hp= new HeaderPage(driver);
    
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
// recherche MUG
    it('Recherche MUG', async function(){
        rp= await hp.enter_search(data.searchItem);
//      rp=  await new RechercherPage(driver);
        msg= await rp.returnMessage();
        assert.equal(msg, data.resultMessage,"Le message est incorrect:"+msg);
        expect(msg).to.equal(data.resultMessage);
        
    })
})