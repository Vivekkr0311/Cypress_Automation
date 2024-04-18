/// <reference types="Cypress" />

describe("Tags", () => {
    it.skip('skip tag', () => {
        cy.log("This test will be skipped")
    });

    it('Extra test', () => {
        cy.log("This will not execute")
    })

    it.only('only tag', () => {
        cy.log("Execute from only tag")
    });
});