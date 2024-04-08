describe('CSS Selector', ()=> {
    it('CSS Id', ()=>{
        cy.visit("https://www.google.com")
        cy.get('#APjFqb').type("beyblade")
        cy.get("[name='btnK']").eq(0).click().wait(2000)
    })
})