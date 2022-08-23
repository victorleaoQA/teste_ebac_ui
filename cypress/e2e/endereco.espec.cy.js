/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page';
import enderecos from '../fixtures/enderecos.json'

describe('Fuincionalidade Endereços - Faturamento e Entrega', () => {
	beforeEach(() => {
		cy.visit('minha-conta');
		cy.fixture('login').then((dados) => {
			cy.login(dados.email, dados.senha);
		});
		// cy.login('aluno35@teste.com', 'teste@teste123') foi passado na forma supracitada
	});

	it('Deve fazer cadastro de faturamento com sucesso', () => {
		EnderecoPage.editarEnderecoFaturamento(
			'Victor',
			'Leao',
			'Amazon',
			'Brasil',
			'Rua Umm',
			'Bem depois da Rua Dois',
			'Rio de Janeiro',
			'Rio de Janeiro',
			'24412000',
			'8199998888',
			'teste@teste.com'
		);
		cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.');
	});

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de Massa de Dados', () => {
		EnderecoPage.editarEnderecoFaturamento(
			enderecos[1].nome,
            enderecos[1].sobrenome,
            enderecos[1].empresa,
            enderecos[1].pais,
            enderecos[1].endereco,
            enderecos[1].complemento,
            enderecos[1].cidade,
            enderecos[1].estado,
            enderecos[1].cep,
            enderecos[1].telefone,
            enderecos[1].email
		);
		cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.');
	});
});
