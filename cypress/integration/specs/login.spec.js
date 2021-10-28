
describe('login feature', () =>{

    const username = Cypress.env('username');
    const password = Cypress.env('password')

    beforeEach( function() {
        cy.visit('/login')
        cy.fixture('example.json').then((data) => {
            this.data = data;
        })
    })

    it('test valid login successfully', function()  {
        cy.userLogin(username, password);
        cy.verifyFlashMessage(this.data.loginMessage)
    })

    it('test Invalid login', function()  {
        cy.userLogin(Cypress.env('invalidUsername'), Cypress.env('invalidPassword'));
        cy.verifyFlashMessage(this.data.invalidLogin)
    })

    it('test user logout successfully', function() {
        cy.userLogin(username, password);
        cy.userLogout()
        cy.verifyFlashMessage(this.data.logoutMessage)
    })
})