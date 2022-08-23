/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page';

describe('Fuincionalidade Endereços - Faturamento e Entrega', () => {
	beforeEach(() => {
		cy.visit('minha-conta');
		cy.fixture('login').then((dados) => {
			cy.login(dados.email, dados.senha);
		});
		// cy.login('aluno35@teste.com', 'teste@teste123') foi passado na forma supracitada
	});

	it.only('Deve fazer cadastro de faturamento com sucesso', () => {
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
});
