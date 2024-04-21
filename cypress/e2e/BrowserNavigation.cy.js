/// <reference types="Cypress" />

describe('mysuite', () => {
    it('Navigation Test', () => {
        cy.visit("https://demo.opencart.com/");

        cy.title().should('eq', "Your Store");
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', "Cameras");

        cy.go('back');
        cy.title().should('have.text', "Your Store");

        cy.go('forward');
        cy.get("div[id='content'] h1").should('have.text', "Cameras");

        // back
        cy.go(-1);

        // forward
        cy.go(1);

        // reload page
        cy.reload();
    });
});