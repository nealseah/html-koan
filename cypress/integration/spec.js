const BASE = Cypress.env('base')

describe('HTML', () => {
  it('basic html', () => {
    cy.visit(BASE + '01_basic.html')

    cy.get('html > head > meta')
      .should('have.attr', 'charset', 'utf-8')

    cy.title()
      .should('eq', 'My first html page')

    cy.get('body')
      .should('contain', 'This is my first html page.')
  })
})
