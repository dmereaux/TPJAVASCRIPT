
// cet include ne devrait pas être nécessaire 
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
    // la creation du driver peut être factorisée ici et paramètrée avec le navigateur
    driver = await new Builder().forBrowser(data.navigateur).build();
    driver.manage().setTimeouts( { implicit: 5000 } );
    driver.get(data.baseUrl);
    hp= new HeaderPage(driver);
    vars = {}
  })
  afterEach(async function() {
    // la destruction du driver peut être factorisée ici
    await driver.quit();
  })
// recherche MUG.  
    it('Recherche MUG', async function(){
        rp= await hp.enter_search("Mug");
        msg= await rp.returnMessage();
        assert.equal(msg, "Il y a 5 produits.","Le message est incorrect:"+msg);
        assert.strictEqual(await rp.countProducts(),5,"Le nombre de produits est incorrect");
        expect( await rp.verifyAllProductsContain("Mug")).to.be.true;
        
    })
    it('Recherche T-shirt', async function(){
        rp= await hp.enter_search("T-shirt");
        msg= await rp.returnMessage();
        assert.equal(msg, "Il y a 1 produit.","Le message est incorrect:"+msg);
        assert.strictEqual(await rp.countProducts(),1,"Le nombre de produits est incorrect");
        expect( await rp.verifyAllProductsContain("T-shirt")).to.be.true;
        
    })
})