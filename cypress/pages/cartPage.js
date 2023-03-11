class CartPage {

    addToCart() {
        cy.get('#add-to-cart-button')
            .should('be.visible')
            .click({ timeout: 8000 });
        cy.wait(2500);
        cy.get('a > #attach-string-cart-try-again')
            .should('be.visible')
            .click({ force: true });
    }

    assertItemAddedToCart(value){
        cy.get('#nav-cart')
            .click({ timeout: 8000 });
        cy.get(`[data-asin="${value}"]`)
            .should('be.visible');
        cy.get('#sc-subtotal-label-activecart')
            .should('contain.text', 'item');
    }

    deleteFromCart(value, message){
        cy.get('#nav-cart').should('be.visible').click();
        cy.get(`[data-asin="${value}"]`).then(()=>{
            cy.get('[value="Delete"]').first().should('be.visible').click();
            cy.contains(message,{timeout:5000}).should('be.visible');
        })
    }

}
export default new CartPage();