import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que a API está disponível', () => {
  // Nenhuma ação necessária, apenas uma pré-condição
});

When('eu fizer uma requisição GET para {string} com atributo {string} igual a {string}', (endpoint, attribute, value) => {
  cy.request({
    method: 'GET',
    url: endpoint,
    qs: { [attribute]: value }
  }).as('apiResponse');
});

When('eu fizer uma requisição POST para {string} com os seguintes dados:', (endpoint, dataTable) => {
  const data = dataTable.rowsHash();
  cy.request({
    method: 'POST',
    url: endpoint,
    body: data,
    failOnStatusCode: false // Adicionado para ignorar status de erro
  }).as('apiResponse');
});

When('eu fizer uma requisição PUT para {string} com os seguintes dados:', (endpoint, dataTable) => {
  const data = dataTable.rowsHash();
  cy.request({
    method: 'PUT',
    url: endpoint,
    body: data,
    failOnStatusCode: false // Adicionado para ignorar status de erro
  }).as('apiResponse');
});

Then('a resposta deve ter status {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});

Then('a resposta deve conter um campo {string}', (field) => {
  cy.get('@apiResponse').its('body').should('have.property', field);
});

Then('os campos {string}, {string} e {string} devem estar atualizados', (field1, field2, field3) => {
  cy.get('@apiResponse').its('body').then(body => {
    expect(body[field1]).to.exist;
    expect(body[field2]).to.exist;
    expect(body[field3]).to.exist;
  });
});
