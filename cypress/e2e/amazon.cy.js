import HomePage from '../pages/HomePage.js';
import productPage from '../pages/productPage.js';
import cartPage from '../pages/cartPage.js';
const home = require('../fixtures/amazonProduct.json');
const message = require('../fixtures/amazonMessages.json');

// ## E2E Testcases
//
// Select one specific product on https://amazon.com and:
//
// - [ ] search by product name/text and verify the expected product is found
// - [ ] search by product id (ASIN) and verify the expected product is found
// - [ ] verify product(s) can be added to cart
// - [ ] stretch goal: time permitting, whatever test you think appropriate/important

describe('Test Automation Amazon',  () => {
    before(() => {
        // visit Amazon.com
        cy.visit('/');
        cy.title().should('include', home.amazon);
    });

    it('search by product name/text and verify the expected product is found', () => {
        // add product name into inputSearch  and submit
        HomePage.searchProduct(home.productName);

        // verify the expected product is found
        HomePage.assertProductFound(home.productName);
    });

    it('search by product id (ASIN) and verify the expected product is found', () => {
        // refresh page for new search
        cy.visit('/');
        cy.wait(2500); // need that wait or amazon starts to block me

        // add id (ASIN) into inputSearch and submit
        HomePage.searchProduct(home.asin);

        // verify the expected product is found by Name
        HomePage.assertProductFound(home.asin);
    });

    it('open product page', function () {
        //open the product page
        productPage.openProductPage(home.asin);

        // assertion for title product name on product page
        productPage.assertProductPageTitle(home.productName);

        // go to Product information field to assert ID/ASIN
        productPage.assertProductASIN(home.asin);
    });

    it('verify product can be added to cart', () => {
        // clicking on add to cart button to add this particular item in our cart.
        cartPage.addToCart();

        // assert product was added to cart
        cartPage.assertItemAddedToCart(home.asin);
    });

    it('verify product can be deleted from the shopping cart', () => {
        cartPage.deleteFromCart(home.asin, message.deletedFromCart);
    });
});