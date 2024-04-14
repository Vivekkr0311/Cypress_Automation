/// <reference types="Cypress" />

describe('Handling iframes', () => {

    it('Apprach 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iFrame = cy.get("#mce_0_ifr")
                        .its('0.contentDocument.body')
                        .should('be.visible')
                        .then(cy.wrap)

        iFrame.clear().type("Welcome {cmd+a}")
        cy.get("[aria-label='Bold']").click()
    })
})