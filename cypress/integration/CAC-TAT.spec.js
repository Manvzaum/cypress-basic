// <reference types="Cypress"

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () { //pré condição para os testes / não precisa repetir código
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.'

        cy.get('#firstName').type('Manuela')
        cy.get('#lastName').type('Bole')
        cy.get('#email').type('manuela@exemplo.com')
        cy.get('#open-text-area').type(longText, { delay: 0 }) //default é de 10ms
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Manuela')
        cy.get('#lastName').type('Bole')
        cy.get('#email').type('manuela@exemplo,com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone continuar vazio quando receber um valor não-numérico', function () {
        cy.get('#phone')
          .type('abcdefihgidh')
          .should('have.value', '')

    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Manuela')
        cy.get('#lastName').type('Bole')
        cy.get('#email').type('manuela@exemplo.com')
        cy.get('#phone-checkbox').check() 
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
          .type('Manuela')
          .should('have.value', 'Manuela')
          .clear()
          .should('have.value', '')
        
        cy.get('#lastName')
          .type('Bole')
          .should('have.value', 'Bole')
          .clear()
          .should('have.value', '')
        
        cy.get('#email')
          .type('manuela@exemplo.com')
          .should('have.value', 'manuela@exemplo.com')
          .clear()
          .should('have.value', '')
        
        cy.get('#phone')
          .type('9990909090')
          .should('have.value', '9990909090')
          .clear()
          .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
          .select('YouTube')
          .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor', function(){
        cy.get('#product')
          .select('mentoria')
          .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function(){
        cy.get('#product')
          .select(1)
          .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function(){
      cy.get('input[type="radio"]')
        .check("feedback")
        .should('have.value', 'feedback')
    })

    it('marca cada tipo de atendimento', function(){
      cy.get('input[type="radio"]')
        .should('have.length', 3)  
        .each(function($radio){ 
          cy.wrap($radio).check() 
          cy.wrap($radio).should('be.checked')
        })
    })

    it('marca ambos checkboxes, depois desmarca o último', function(){
      cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function(){
      cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input){
          console.log($input)
          expect($input[0].files[0].name).to.equal('example.json')
        })
    })        

})

