import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import './apiDisponivel';


//-------------------------------------------------------------------------- GET -------------------------------------------------------------------------------------------
// Verifica se a API comments "https://jsonplaceholder.typicode.com/comments" está disponível
Given('que a API comments {string} está disponível', (apiUrl) => {
   // Faz a requisição HTTP e verifica o status da resposta
   cy.request(apiUrl).then((response) => {
    // Verifica se o status da resposta é 200 (OK)
    expect(response.status).to.eq(200)
  })  
});

// Realiza uma requisição GET com um parâmetro específico (no caso o atributo "name" igual a "alias odio sit")
When('eu fizer uma requisição GET para {string} com atributo {string} igual a {string}', (endpoint, attribute, value) => {
  cy.request({
    method: 'GET',
    url: endpoint,
    qs: { [attribute]: value } // aqui envia o atributo "alias odio sit"
  }).as('apiResponse'); //aqui salva a resposta da requisição
});

// Valida o status da resposta
Then('a resposta deve ter status {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode); // status=200
});

// a resposta deve conter um campo "email"
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
// Verifica se a API "https://jsonplaceholder.typicode.com/users" está disponível
Given('que a API users {string} está disponível', (apiUrl) => {
  // Faz a requisição HTTP e verifica o status da resposta
  cy.request(apiUrl).then((response) => {
   // Verifica se o status da resposta é 200 (OK)
   expect(response.status).to.eq(200)
 })  
});

// requisição POST para "/users" com os dados
When('eu fizer uma requisição POST para {string} com os seguintes dados:', (endpoint, dataTable) => {
  const data = dataTable.hashes()[0]; // Converte a tabela para um array de hashes e pega o primeiro elemento
  cy.request({
    method: 'POST',
    url: `https://jsonplaceholder.typicode.com${endpoint}`,
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).as('apiResponse');
});

// a resposta deve ter status 201
Then('a resposta deve ter status {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});

// a resposta deve validar o "id" retornado
And('a resposta deve validar o {string} retornado', (field) => {
  cy.get('@apiResponse').its('body').then((body) => {
    // Verifica se o campo está presente no corpo da resposta
    expect(body).to.have.property(field);

    //Imprime o valor do campo para validação
    cy.log(`O valor do campo ${field} é: ${body[field]}`);
  });
});

//-------------------------------------------------------------------------- PUT -------------------------------------------------------------------------------------------

// Valida se a API users "https://jsonplaceholder.typicode.com/users/5" está disponível
Given('que a API users {string} está disponível', (apiUrl) => {
  // Faz a requisição HTTP e verifica o status da resposta
  cy.request(apiUrl).then((response) => {
   // Verifica se o status da resposta é 200 (OK)
   expect(response.status).to.eq(200)
 })  
});

// Faz uma requisição  PUT para "https://jsonplaceholder.typicode.com/users/5" com os dados
When('eu fizer uma requisição PUT para {string} com os seguintes dados:', (endpoint, dataTable) => {
  const data = dataTable.hashes()[0]; // Converte a tabela para um array de hashes e pega o primeiro elemento
  cy.request({
    method: 'PUT',
    url: endpoint,
    body: {
      email: data.email,
      address: {
        geo: {
          lat: data.lat,
          lng: data.lng
        }
      }
    },
  }).as('apiResponse');
});

// a resposta deve ter status 200
Then('a resposta deve ter status {int}', (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});

// os campos "email", "lat" e "lng" devem estar atualizados conforme a requição
Then('os campos {string}, {string} e {string} devem estar atualizados', (field1, field2, field3) => {
  cy.get('@apiResponse').its('body').then(body => {
    expect(body.email).to.eq('updated@test.com');
    expect(body.address.geo.lat).to.eq('-23.55');
    expect(body.address.geo.lng).to.eq('-46.63');
  });

});
