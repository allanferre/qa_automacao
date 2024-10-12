Feature: Testar API do JSONPlaceholder

  Scenario: Realizar uma requisição GET
    Given que a API comments "https://jsonplaceholder.typicode.com/comments" está disponível
    When eu fizer uma requisição GET para "/comments" com atributo "name" igual a "alias odio sit"
    Then a resposta deve ter status 200
    And a resposta deve conter um campo "email"

  Scenario: Realizar uma requisição POST
    Given que a API users "https://jsonplaceholder.typicode.com/users" está disponível
    When eu fizer uma requisição POST para "/users" com os seguintes dados:
      | name     | username | email            |
      | Test User| testuser | testuser@test.com|
    Then a resposta deve ter status 201
    And a resposta deve conter um campo "id"

  Scenario: Realizar uma requisição PUT
    Given que a API users "https://jsonplaceholder.typicode.com/users" está disponível
    When eu fizer uma requisição PUT para "/users/5" com os seguintes dados:
      | email             | lat     | lng      |
      | updated@test.com | -23.55  | -46.63   |
    Then a resposta deve ter status 200
    And os campos "email", "lat" e "lng" devem estar atualizados

