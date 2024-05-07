/// <reference types="Cypress" />
// $ npm i --save-dev cypress-mochawesome-reporter

describe('My Test', () => {
    it('verify title', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.title().should('eq', 'OrangeHRM123');
    })
});