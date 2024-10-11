Feature: Acessar e validar dados do JSONPlaceholder

  Scenario: Acessar e validar dados do endpoint /albums/1/photos
    Given que eu acesso a URL "https://jsonplaceholder.typicode.com/guide/"
    When eu acessar o menu "Guide"
    And eu navegar até o link "/albums/1/photos" e abri-lo
    Then eu capturo os dados exibidos em tela e salvo num array JSON
    And eu valido os dados do objeto com id = 6
    And eu salvo uma evidência do teste