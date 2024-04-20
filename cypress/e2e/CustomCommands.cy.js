/// <reference types="Cypress" />

describe('Custom Commands', () => {
    it('Handling links', () => {
        cy.visit("https://demo.nopcommerce.com/");

        // using custom commands
        cy.clickLink("Apple Macbook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', "Apple Macbook Pro 13-inch");
    })
});