class ProductPage {
  openProductPage(value) {
    cy.get(
      `[data-asin="${value}"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image`,
    ).click({ timeout: 2000 });
  }

  assertProductPageTitle(value) {
    cy.get('#titleSection')
      .invoke('text')
      .then(text => {
        expect(text.toLowerCase().includes(value));
      });
  }

  assertProductASIN(value) {
    cy.get('#prodDetails').should('be.visible');
    cy.get('#productDetails_detailBullets_sections1').should('contain', value);
  }
}
export default new ProductPage();
