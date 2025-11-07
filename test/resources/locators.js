const locators = {
  searchField: "#search_widget > form > input.ui-autocomplete-input",
  resultField: "#js-product-list-top > div.col-lg-5.hidden-sm-down.total-products > p",
  productList: "//*[@id='js-product-list']/div[1]/div/article/div/div[2]/h2/a"
};

const data = {
  baseUrl: "http://www.qualifiez.fr/monPrestashop2/prestashop/index.php",
  pageTitleRechercher: "Rechercher",
  navigateur: "firefox"

};

module.exports = { locators, data };