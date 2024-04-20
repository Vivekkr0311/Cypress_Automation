/// <reference types="Cypress" />

describe('Custom Commands', () => {
    it('Handling links', () => {
        cy.visit("https://demo.nopcommerce.com/");

        // using custom commands
        cy.clickLink("Apple Macbook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', "Apple Macbook Pro 13-inch");
    })

    it('Overwriting existing commands', () => {
        cy.visit("https://demo.nopcommerce.com");

        cy.click("APPLE MACBOOK PRO 13-INCH");
        cy.get("div[class='product-name'] h1").should('have.text', "Apple Macbook Pro 13-inch");
    });

    it('Login Command', () => {
        cy.visit("https://demo.nopcommerce.com");

        cy.clickLink("Log in");
        cy.loginApp("testing@gmail.com", "test123");
        cy.get(".io-account").should('have.text', "My Account");
    });
});