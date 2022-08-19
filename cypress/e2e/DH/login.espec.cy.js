/// <reference types="cypress" />

// import { Faker } from '@faker-js/faker';

const Login = require('../../fixtures/login.json')

describe('Funcionalidade Login na plataforma', () => {

    // let emailFaker = faker.internet.email() 

    beforeEach(() => {
        cy.visit('https://br-playground.digitalhouse.com/login')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com email e senha válida', () => {

        cy.get('[data-testid="emailInput"]').type(Login.email, {log:false})
        cy.get('[data-testid="pwInput"]').type(Login.senha, {log:false})
        cy.get('[data-testid="submitButton"]').click()

        cy.get('[data-testid="welcome-header"]').should('contain', 'VICTOR')

        cy.get('.d-header__right-toolbar > .dropdown-wrapper > [data-testid="buttonDropdown"]').click()
        cy.get('#signOut > .button__text > .dropdown-list__item').click()
        
    });

    // it('Deve exibir um alerta ao tentar fazer login com email válido e senha inválida', () => {
        // cy.get('[data-testid="emailInput"]').type(emailFaker)
        // cy.get('[data-testid="pwInput"]').type(Login.senha, {log:false})
        // cy.get('[data-testid="submitButton"]').click()

        // cy.get('.woocommerce-error').should('contain.text', 'Erro: A senha fornecida para o e-mail aluno35@teste.com está incorreta. Perdeu a senha?')
    // });
    
});