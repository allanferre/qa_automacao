# Avaliação QA Automação

Este projeto implementa testes automatizados utilizando o Cypress usando BDD (Behavior-Driven Development) para validação de testes E2E Web e de APIs do serviço JSONPlaceholder.

Tecnologias Utilizadas:

Cypress: 13.15.0

Cypress Cucumber Preprocessor: 4.3.1

Node.js: 20.18.0

# Download e instalação:

Baixar e instalar o node.js(20.18.0 ou superior) e o cypress (13.15.0 ou superior)
https://nodejs.org/pt/download/package-manager
https://docs.cypress.io/guides/getting-started/installing-cypress

Na pasta onde será clonado o projeto instalar as dependencias com os comandos:

$ npm install --save-dev cypress-cucumber-preprocessor
$ npm install (pra atualizar)

Iniciar as etapas do git:

$ git init
$ git clone https://github.com/allanferre/qa_automacao.git

Acessar a pasta do projeto (qa_automação) e iniciar o Cypress com comando:

$ npx cypress open

Acessar o lado E2E do Cypress, escolher o browser e iniciar o Start E2E. O browser será aberto e os casos de testes estarão disponíveis para serem executados. Os asserts serão mostrado ao lado esquerdo e as evidências (reports) serão salvas dentro da pasta (reports>screenshots)
