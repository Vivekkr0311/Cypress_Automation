describe('My First Test', () => {
    it('verify title-positive', () => {
        cy.visit("https://www.google.com")
        cy.title().should('eq', "Google")
    })
})