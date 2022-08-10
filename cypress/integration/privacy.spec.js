it.only('validando o título da página de politica de privacidade', function(){
    cy.visit('./src/privacy.html')
    cy.contains('CAC TAT - Política de privacidade').should('be.visible')
})