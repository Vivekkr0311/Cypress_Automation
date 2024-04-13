/// <reference types="Cypress" />

describe('Alerts', () => {

    it('JS Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onClick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains("I am a JS Alert")
        })

        cy.get("#result").should('have.text', "You successfully clicked an alert")
    })

    // Clicking on Ok
    it('JS Confirmation alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onClick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })

        cy.get("#result").should('have.text', "You clicked: Ok")
    })

    // Clicking on Cancel
    it('JS Confirmation alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onClick='jsConfirm()']").click()
        cy.on('window:confirm', () => false)

        cy.get("#result").should('have.text', "You clicked: Cancel")
    })

    it('JS Prompt alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then( (win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        
        cy.get("button[onClick='jsPrompt()']").click()
        cy.get("#result").should('have.text', 'You entered: Welcome')
    })

    it('Authenticate alert', () => {
        // Approach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
             auth: {
                username: "admin",
                password: "admin"
             }
        })

        cy.get("div[class='example'] p").should('have.contain', "Congratulations")
    })

    it('Authenticate alert', () => {
        // Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get("div[class='example'] p").should('have.contain', "Congratulations")
    })
})