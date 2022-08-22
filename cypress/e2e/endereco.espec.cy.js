/// <reference types="cypress"/>

describe('Fuincionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        // cy.login('aluno35@teste.com', 'teste@teste123')
        cy.fixture('perfil').then(login =>{
            (login.usuario, login.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        
    });
    
});