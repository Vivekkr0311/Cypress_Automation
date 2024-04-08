describe('my first test', ()=>{
    it('test1', ()=>{
        cy.visit("https://google.com")
        cy.title().should('eq', "Google")
    })
})