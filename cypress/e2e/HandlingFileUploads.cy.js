/// <reference types="Cypress" />

import 'cypress-file-upload';

describe('File Upload', () => {
    it('Single File Upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get('#file-upload').attachFile('test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it('Single file upload-rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get('#file-upload').attachFile(
            {
                filepath: 'test1.pdf',
                fileName: 'myfilename.pdf'
            }
        );

        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it('File upload drag-n-drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get('#drag-drop-upload').attachFile(
            'test1.pdf',
            {
                subjectType: 'drag-n-drop'
            }
        );

        cy.wait(5000);

        cy.get("#drag-drop=upload> .d2-preview > .d2-details > .d2-filename > span").contains('test1.pdf');
    })

    it('Upload multiple files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get('#filesToUpload').attachFile(
            ['test1.pdf', 'test2.pdf']
        );

        cy.wait(5000);
        cy.get(":nth-child(6)>strong").should('contain.text', "File You Selected:");
    })

    it('File Upload Shadow DOM', () => {
        cy.visit("https://www.htmlelements.com/demos/fileUpload/shadow-dom/index.html");

        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('test1.pdf');

        cy.wait(5000);
        cy.get(".smart-item-name", {includeShadowDom: true}).contains('test1.pdf');
    })
})

