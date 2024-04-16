/// <reference types="Cypress" />

describe('MouseOperations', () => {
    it('MouseHover', () => {
        cy.visit("http://demo.opencart.com")
        cy.get("cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')")
        .should('not.be.visible')

        cy.get("cy.get('.nav > :nth-child(1) > .dropdown-toggle')")
        .trigger('mouseover')
        .click()

        cy.get("cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')")
        .should('be.visible')
    })

    it('Right click', () => {
        cy.visit("http:swisnl.github.io/jQuery-contextMouse/demo.html")

        // Approach 1
        cy.get(".context-menu-one.btn.btn-newtral").trigger('contextmenu')
        cy.get(".context-menu-icon-copy > span").should('be.visible')

        // Approach 2
        cy.get(".context-menu-one.btn.btn-newtral").rightclick()
        cy.get(".context-menu-icon-copy > span").should('be.visible')
    })

    it('Double Click', () => {
        cy.visit("https://www.w3school.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")

        cy.frameLoaded("#frameResult")

        // Approach 1
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello, World!')

        // Approach 2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello, World!')
    })

    it('Drag and Drop using plugin', () => {
        cy.visit("https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        cy.get("#box6").should("be.visible")
        cy.get("#box106").should("be.visible")

        cy.wait(3000)
        cy.get("#box6").drag("#box106", {force: true})
    })

    it("Scrolling Page", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        cy.get(":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img").scrollIntoView({duration:2000})
        cy,get(":nth-child(1) > tbody > : nth-child(86) > :nth-child(1) > img").should("be.visible")
        cy.get("#footer").scrollIntoView()
    })
})