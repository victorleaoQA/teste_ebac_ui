/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com suceso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20 (não é teste_aluno20? Sair)')
    })

    it('deve exibir uma mensagem de erro ao insrir usuario invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?')
                
    });

    it('deve exibir uma mensagem de erro ao insrir senha invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click() 

        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
                
    });
})