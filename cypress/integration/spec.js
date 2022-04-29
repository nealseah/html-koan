const BASE = Cypress.env('base')

describe('HTML', () => {
  it('01_basic.html', () => {
    cy.visit(BASE + '01_basic.html')

    cy.get('html > head > meta')
      .should('have.attr', 'charset', 'utf-8')
    cy.title()
      .should('eq', 'My first html page')
    cy.get('body')
      .should('contain', 'This is my first html page.')
  })

  it('02_basic_body.html', () => {
    cy.visit(BASE + '02_basic_body.html')

    cy.get('body > header')
      .should('contain', 'This is the header of this website')
    cy.get('body > main')
      .should('contain', 'This is the main content of this page')
    cy.get('body > footer')
      .should('contain', 'This is the footer of this website')
  })

  it('03_list.html', () => {
    cy.visit(BASE + '03_list.html')

    cy.get('main > ul > li')
      .should('have.length', 3)
    cy.get('main > ol > li')
      .should('have.length', 3)
  })

  it('04_nested_list.html', () => {
    cy.visit(BASE + '04_nested_list.html')

    cy.get('main > ol > li')
      .should('have.length', 2)
    cy.get('main > ol > li > ul > li')
      .should('have.length', 3)
    cy.get('main > ol > li > ol > li')
      .should('have.length', 3)
  })
})
