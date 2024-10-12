import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import './apiDisponivel';


//-------------------------------------------------------------------------- GET -------------------------------------------------------------------------------------------
Given('que a API comments {string} está disponível', (apiUrl) => {
   // Faz a requisição HTTP e verifica o status da resposta
   cy.request(apiUrl).then((response) => {
    // Verifica se o status da resposta é 200 (OK)
    expect(response.status).to.eq(200)
  })  
});

When('eu fizer uma requisição GET para {string} com atributo {string} igual a {string}', (endpoint, attribute, value) => {
  cy.request({
    method: 'GET',
    url: endpoint,
    qs: { [attribute]: value }
  }).as('apiResponse');
});


Then('a resposta deve ter status {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});


And('a resposta deve conter um campo {string}', (field) => {
  cy.get('@apiResponse').its('body').then((body) => {
    if (Array.isArray(body)) {
      expect(body[0]).to.have.property(field);
    } else {
      expect(body).to.have.property(field);
    }
  });
});

//-------------------------------------------------------------------------- POST -------------------------------------------------------------------------------------------
Given('que a API users {string} está disponível', (apiUrl) => {
  // Faz a requisição HTTP e verifica o status da resposta
  cy.request(apiUrl).then((response) => {
   // Verifica se o status da resposta é 200 (OK)
   expect(response.status).to.eq(200)
 })  
});

When('eu fizer uma requisição POST para {string} com os seguintes dados:', (endpoint, dataTable) => {
  const data = dataTable.hashes()[0];
  cy.request({
    method: 'POST',
    url: endpoint,
    body: data,
    failOnStatusCode: false // Adicionado para ignorar status de erro
  }).as('apiResponse');
});

Then('a resposta deve ter status {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});

And('a resposta deve conter um campo {string}', (field) => {
  cy.get('@apiResponse').its('body').then((body) => {
    expect(body).to.have.property(field);
  });
});

//-------------------------------------------------------------------------- PUT -------------------------------------------------------------------------------------------
Given('que a API users {string} está disponível', (apiUrl) => {
  // Faz a requisição HTTP e verifica o status da resposta
  cy.request(apiUrl).then((response) => {
   // Verifica se o status da resposta é 200 (OK)
   expect(response.status).to.eq(200)
 })  
});

When('eu fizer uma requisição PUT para {string} com os seguintes dados:', (endpoint, dataTable) => {
  const data = dataTable.hashes()[0];
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

And('os campos {string}, {string} e {string} devem estar atualizados', (field1, field2, field3) => {
  cy.get('@apiResponse').its('body').then(body => {
    expect(body[field1]).to.exist;
    expect(body[field2]).to.exist;
    expect(body[field3]).to.exist;
  });
});
