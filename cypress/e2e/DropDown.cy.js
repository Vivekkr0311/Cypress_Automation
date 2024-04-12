/// <reference types="Cypress" />

describe('Handle Dropdowns', () => {

    it('Dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country').select('Italy')
        .should('have.value', 'Italy')
    })

    // Bootstrap dropdown
    it('Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search_field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country_container").should('have.text', 'Italy')
    })

    // Auto suggestion dropdown static
    it('Auto suggestion dropdown', () => {
        cy.visit("https://www.wikipedia.org")

        cy.get("#searchInput").type("Dehli")
        cy.get(".suggestion-title").contains("Dehli University").click()
    })

    // Auto suggestion dropdown dynamic
    it('Dynamic Dropdown', () => {
        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type("cypress automation")
        cy.wait(3000)
        // Checking if we are having 11 records suggested.
        cy.get("div.wM6W7d>span").should('have.length', 11)

        cy.get("div.wM6W7d>span").each(
            ($el, index, $list) => {
                if($el.text() == "cyoress automation tutorial"){
                    // You will have to wrap el into a web element in order to be able to click on it.
                    // This is why, we are using wrap() function.
                    cy.wrap($el).click()
                }
            }
        )

        // Checking if input field now contains the option that we clicked on.
        cy.get("textarea[name='q']").should('have.value', 'cypress automation tool')
    })
})