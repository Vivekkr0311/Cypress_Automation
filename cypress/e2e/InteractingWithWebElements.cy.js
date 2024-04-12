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

    it('Clicking Checkbox Buttons', () => {
        cy.visit("https://www.iteara-qa.azurewebsites.net/home/automation")
        // Checking visibility of the UI Elements
        cy.get("input#monday").should('be.visible')

        // Selecting the checkbox button
        cy.get("input#monday").check().should('be.checked')
        // Unselecting the checkbox button
        cy.get("input#monday").uncheck().should("not.be.checked")

        // Selecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        // Deselecting all checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Selecting first and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
        
    })
}) 