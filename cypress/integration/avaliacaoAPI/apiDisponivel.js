import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('que a API {string} está disponível', (apiUrl) => {
   // Faz a requisição HTTP e verifica o status da resposta
   cy.request(apiUrl).then((response) => {
    // Verifica se o status da resposta é 200 (OK)
    expect(response.status).to.eq(200)
  })  
});