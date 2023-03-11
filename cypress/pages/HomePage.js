class HomePage {
    searchProduct(value) {
        cy.get('[role="search"]')
            .click()
            .type(value + '{enter}')
            .then(() => {
                cy.get('#nav-search-submit-button').dblclick();
            });
    }

    assertProductFound(value) {
        cy.get('[data-component-type="s-search-result"] h2 a')
            .first()
            .invoke('text')
            .then(text => {
                expect(text.toLowerCase().includes(value));
            });
    }
}
export default new HomePage();