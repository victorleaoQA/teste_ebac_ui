/// <reference types="cypress" />

import ProdutoPage from "../support/page_objects/produtos.page";
import produtos from "../fixtures/produtos.json";

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    ProdutoPage.adicionarProduto(
      produtos[0].nome,
      produtos[0].tamanho,
      produtos[0].cor
    );

    ProdutoPage.adicionarProduto(
      produtos[1].nome,
      produtos[1].tamanho,
      produtos[1].cor
    );

    ProdutoPage.adicionarProduto(
      produtos[2].nome,
      produtos[2].tamanho,
      produtos[2].cor
    );

    ProdutoPage.adicionarProduto(
        produtos[3].nome,
        produtos[3].tamanho,
        produtos[3].cor
      );

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain.text", "4");

    cy.get('.woocommerce-message > .button').click()
    cy.get('#main').should("contain.text", produtos[0].nome)
    cy.get('#main').should("contain.text", produtos[1].nome)
    cy.get('#main').should("contain.text", produtos[2].nome)
    cy.get('#main').should("contain.text", produtos[3].nome)


  });
});
