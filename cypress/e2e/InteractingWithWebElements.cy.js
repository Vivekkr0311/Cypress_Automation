/// <reference types= "Cypress" />

describe('Click UI Elements', () => {
    it('Clicking Radio Buttons', () => {
        cy.visit("https://www.iteara-qa.azurewebsites.net/home/automation")
        // Checking visibility of the UI Elements
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // Selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should("not.be.checked")
    })
}) 