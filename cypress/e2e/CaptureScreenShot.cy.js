/// <reference types="Cypress" />

describe('WebSite', () => {
    it('Capture screenshot and videos', () => {
        cy.visit("https://demo.opencart.com/");

        // The parameter passed 'homepage' here will be name of the image file.
        cy.screenshot("homepage");
        cy.wait(5000);

        cy.get("img[title='Your Scroe']").screenshot("logo");
    });

    it('Website', () => {
        it('Capture screenshot and video', () => {
            cy.visit("https://demo.opencart.com/");

            // Automaticall caputure screenshot and video on failure.
            // Only when you execute tests from CLI tool.

            cy.get("li:nth-child(7) a:nth-child(1)").click();
            cy.get("div[id='content'] h2").should('have.text', 'Tablets');
        })
    });
});