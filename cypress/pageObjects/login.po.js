class LoginPage {

    getUsername(){
        return cy.get('#username');
    }

    getPassword(){
        return cy.get('#password')
    }

    getLoginBtn(){
        return cy.get('[type="submit"]')
    }

    getFlashMessage(){
        return cy.get('#flash')
    }

    getLogoutBtn(){
        return cy.get('.icon-signout')
    }
}

export default LoginPage