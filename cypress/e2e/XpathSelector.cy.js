describe('Xpath Locator', () => {
    it('Xpath', () => {
        cy.visit("https://www.google.com")
        cy.xpath("//textarea[@title='Search']").type('beyblade')
        cy.xpath("//input[@name='btnK']").eq(0).click().wait(2000)

        cy.title().should('eq', 'beyblade - Google Search')
    })
})