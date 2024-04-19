/// <reference types="Cypress" />

describe('MyTestSuite', () => {
    it('FixtureDemoTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture('orangehrm').then( (data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);

            cy.get("button[type='submit]").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrymb-module").should('have.text', data.expected);
        });
    })

    // Access through hook for multiple 'it' blocks
    let userData;
    before(() => {
        cy.fixture('orangehrm').then( (data) => {
            userData = data;
        });
    });

    it('FixtureDemoTest 2', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);

        cy.get("button[type='submit]").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrymb-module").should('have.text', userData.expected);
    })

    // Multiple data
    it('DataDrivenTest', () => {
        cy.fixture('orangehrm2').then( (data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach( (userdata) => {
                cy.get("input[placehole='Username']").type(userData.username);
                cy.get("input[placeholder='Password']").type(userData.password);

                cy.get("button[type='submit']").click();

                if(userData.username == 'Admin' && userData.password == 'admin123'){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userData.expected);

                    // logging out
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4)>.oxd-userdropdown-link').click();
                }else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userData.expected);
                }
            });
        });
    });
});