// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../pageObjects/login.po'

Cypress.Commands.add('userLogin', (username, password) => {
       const page = new LoginPage();
       page.getUsername().clear().type(username);
       page.getPassword().clear().type(password);
       page.getLoginBtn().click()

})

Cypress.Commands.add('userLogout', () => {
    const page = new LoginPage();
    page.getLogoutBtn().click()
})

Cypress.Commands.add('verifyFlashMessage', (message) =>{
    const page = new LoginPage();
    page.getFlashMessage().then(($el) =>{
        const text = $el.text();
        const actual = text.replace(' ', '')
        expect(actual).to.include(message)
    })
})