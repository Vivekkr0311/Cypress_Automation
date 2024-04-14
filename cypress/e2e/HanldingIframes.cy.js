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

    it('Apprach 2', () => {
        // We are going to use custome commands
        // We will make our own command using command.js file
        cy.visit('https://the-internet.herokuapp.com/iframe')

        // Below function "getIframe()" we have specified it in our command.js file
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')
        cy.get("[aria-label='Bold']").click()
    })
})