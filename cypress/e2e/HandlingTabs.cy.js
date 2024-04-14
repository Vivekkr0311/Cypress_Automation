/// <reference types="Cypress" />

describe('Handle tab', () => {
    it('Approach 1', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")

        // removing target attribute from the web element so that the new page will open in
        // current tab, and we will verify the new url.
        cy.get(".example>a").invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        cy.go('back')
    })

    it('Approach 2', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")

        // We are taking the value of href tag, and putting it with the base url, and the visiting that url
        // This approach is only applicable for the cases where base url is same for the new tab also.
        cy.get('.example>a').then( (e) => {
            let url = e.prop('href')
            cy.visit(url)
        })

        cy.wait(5000)
        cy.go('back')
    })
})