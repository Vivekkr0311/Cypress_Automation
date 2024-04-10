describe('Asserstions Demo', () => {
    it('Implicit Assertion Demo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'anyrandomstring')
    })

    // BDD approach
    it('Explicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = 'errt fgh'
        // BDD approach
        cy.get(".oxd-userdropdown-name").then( (x) => {
            let actName = x.text()
            expect(actName).to.equal(expName)
        })

        // TDD approach
        cy.get(".oxd-userdropdown-name").then( (x) => {
            let actName = x.text()
            assert.equal(actName, expName)
        })

        // Everytime you log in username is different so this test case will fail.
    })
})