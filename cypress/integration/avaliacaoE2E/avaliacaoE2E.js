import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que eu acesso a URL {string}', (url) => {
  cy.visit(url)
})

When('eu acessar o menu {string}', (menu) => {
  cy.contains(menu).click()
  cy.writeFile('cypress/fixtures/message.txt', 'Hello3')
})

And('eu navegar até o link {string} e abri-lo', (link) => {
  cy.writeFile('cypress/fixtures/message.txt', 'Hello4')
  cy.contains('a', link).click({ force: true })
  cy.writeFile('cypress/fixtures/message.txt', 'Hello5')
})

Then('eu capturo os dados exibidos em tela e salvo num array JSON', () => {  
  cy.request('https://jsonplaceholder.typicode.com/albums/1/photos').then((response) => {
    expect(response.status).to.eq(200)
    const data = response.body
  cy.writeFile('cypress/fixtures/message.txt', 'Hello6')
  const dataArray = data.map(item => ({
    albumId: item.albumId,
    id: item.id,
    title: item.title,
    url: item.url,
    thumbnailUrl: item.thumbnailUrl
  }))
  cy.writeFile('cypress/fixtures/message.txt', 'Hello7')
  cy.writeFile('cypress/fixtures/example.json', dataArray)
})
})

And('eu valido os dados do objeto com id = {int}', (id) => {
   // Carrega o arquivo JSON
   cy.fixture('example.json').then((data) => {
    // Encontra o objeto com id=6
    const objectToValidate = data.find(item => item.id === 6)
    
    // Valida se o objeto existe
    expect(objectToValidate).to.exist
    
    // Valida as informações do objeto
    expect(objectToValidate).to.deep.equal({
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    })
  })
})


And('eu salvo uma evidência do teste', () => {
  //cy.screenshot('evidencia-pagina-toda')
  //teste a existência
  cy.contains('"id": 6').should('exist');
  // Verificar se o elemento existe
  cy.contains(/"id": 6/).then($el => {
    if ($el.length > 0) {
      const rect = $el[0].getBoundingClientRect();
      cy.screenshot('evidencia-elemento-id6', {
        capture: 'viewport',
        clip: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }
      })
    } else {
      // Elemento não encontrado
      cy.log('Elemento com "id": 6 não encontrado');
    }
  });
})