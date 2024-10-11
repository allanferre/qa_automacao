import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
/*
Given('que eu acesso a URL', (url) => {
  cy.visit(url);
});

When('eu acessar o menu Guide', (menu) => {
  cy.contains(menu).click();
});
*/

Given('que eu acesso a URL {string}', (url) => {
  cy.visit(url);
});

When('eu acessar o menu {string}', (menu) => {
  cy.contains(menu).click();
});


