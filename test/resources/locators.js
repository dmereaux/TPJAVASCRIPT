const locators = {
  searchField: "#search_widget > form > input.ui-autocomplete-input",
  resultField: "#js-product-list-top > div.col-lg-5.hidden-sm-down.total-products > p",
};

const data = {
  baseUrl: "http://www.qualifiez.fr/monPrestashop2/prestashop/index.php",
  pageTitle: "Rechercher",
  searchItem: "MUG",
  errorMessage: "Your username is invalid!",
  resultMessage: "Il y a 5 produits.",
};

module.exports = { locators, data };