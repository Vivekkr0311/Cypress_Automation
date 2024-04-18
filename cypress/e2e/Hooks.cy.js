/// <reference types="Cypress" />

describe('Hooks Example', () => {

    before(() => {
        cy.log("***** Launch app *****")
    });

    after(() => {
        cy.log("***** Close app *****")
    });

    beforeEach(() => {
        cy.log("****** This will execute before each test *****")
    });

    afterEach(() => {
        cy.log("***** This will execute after each test *****")
    });

    it('Test 1', () => {
        cy.log("This is test 1")
    })

    it('Test 2', () => {
        cy.log("This is test 2")
    });
});