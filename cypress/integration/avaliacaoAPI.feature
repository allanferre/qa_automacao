Feature: Testar API do JSONPlaceholder

  Scenario: Realizar uma requisição GET
    Given que a API comments "https://jsonplaceholder.typicode.com/comments" está disponível
    When eu fizer uma requisição GET para "/comments" com atributo "name" igual a "alias odio sit"
    Then a resposta deve ter status 200
    And a resposta deve conter um campo "email"

  Scenario: Realizar uma requisição POST
    Given que a API users "https://jsonplaceholder.typicode.com/users" está disponível
    When eu fizer uma requisição POST para "/users" com os seguintes dados:
    | id | name           | username | email            | address.street | address.suite | address.city  | address.zipcode | address.geo.lat | address.geo.lng | phone               | website       | company.name    | company.catchPhrase                      | company.bs                   |
    | 11 | Allan Ferreira | allan    | allan@gmail.com  | Rua Allan      | Apt. 999      | Campinas      | 13015-100       | -37.3159        | 81.1496         | +5548999999999      | allan.org     | Allan Limitada  | Multi-layered client-server neural-net   | harness real-time e-markets  |
    Then a resposta deve ter status 201
    And a resposta deve validar o "id" retornado

  Scenario: Realizar uma requisição PUT
    Given que a API users "https://jsonplaceholder.typicode.com/users/5" está disponível
    When eu fizer uma requisição PUT para "https://jsonplaceholder.typicode.com/users/5" com os seguintes dados:
      | email             | lat     | lng      |
      | updated@test.com  | -23.55  | -46.63   |
    Then a resposta deve ter status 200
    And os campos "email", "lat" e "lng" devem estar atualizados
    And eu salvo uma evidência do teste da api "https://jsonplaceholder.typicode.com/users/5"

