const BASE = Cypress.env('base')

describe('HTML', () => {
  it('01_head.html', () => {
    cy.visit(BASE + '01_head.html')

    cy.get('html > head > meta')
      .should('have.attr', 'charset', 'utf-8')
    cy.title()
      .should('eq', 'My first html page')
    cy.get('body')
      .should('contain', 'This is my first html page.')
  })

  it('02_structure.html', () => {
    cy.visit(BASE + '02_structure.html')

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

  it('05_navigation.html', () => {
    cy.visit(BASE + '05_navigation.html')

    cy.get('body > nav > ol > li')
      .should('have.length', 3)
  })

  it('06_text.html', () => {
    cy.visit(BASE + '06_text.html')

    cy.get('main').within(() => {
      cy.get('h1')
        .should('have.text', '{book name}')
      cy.get('h2:nth-of-type(1)')
        .should('include.text', "Chapter 1: I'm a chapter")
      cy.get('h2:nth-of-type(2)')
        .should('include.text', "Chapter 2: I'm another chapter")
      cy.get('h3')
        .should('have.text', "Sub-Chapter 2.1: I'm the first part of chapter 2")
      cy.get('p:nth-of-type(1)')
        .should('include.text', "I'm a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
      cy.get('p:nth-of-type(2)')
        .should('include.text', "I'm a paragraph. Donec vel tellus sem. Donec in lorem quis arcu viverra accumsan vitae tempus augue.")
      cy.get('p:nth-of-type(3)')
        .should('include.text', "I'm a paragraph. Quisque commodo leo a")
    })
  })

  it('07_form_basic.html', () => {
    cy.visit(BASE + '07_form_basic.html')

    cy.get('body > form').within(() => {
      cy.get('label[for="fruit"]')
      cy.get('input[type="text"][name="the_fruit"]')
      cy.get('input[type="submit"][value="submit"]')
      cy.get('input[type="reset"][value="clear all"]')
    })
  })

  it('08_form_with_types_of_fields.html', () => {
    cy.visit(BASE + '08_form_with_types_of_fields.html')

    cy.get('body > form').within(() => {
      cy.get('label[for="fullname"]+input#fullname[type="text"][placeholder]')
      cy.get('label[for="password"]+input#password[type="password"][minlength="8"]')
      cy.get('label[for="keyword"]+input#keyword[type="search"]')
      cy.get('label[for="blog"]+input#blog[type="url"]')
      cy.get('label[for="phone"]+input#phone[type="tel"]')
      cy.get('label[for="email"]+input#email[type="email"]')
      cy.get('label[for="age"]+input#age[type="number"]')
      cy.get('label[for="bio"]+textarea#bio')
      cy.get('p#season input[type="radio"][name="season"]').should('have.length', 4)
      cy.get('p#season input[type="radio"][name="season"]').eq(0).should('have.attr', 'checked')
      cy.get('p#lang input[type="checkbox"][name="language"]').should('have.length', 3)
      cy.get('p#lang input[type="checkbox"][name="language"]').eq(1).should('have.attr', 'checked')
      cy.get('label[for="fruit"]+select#fruit[name="fruit"] > option').should('have.length', 3)
      cy.get('label[for="fruit"]+select#fruit[name="fruit"] > option').last().should('have.attr', 'selected')
      cy.get('label[for="brightness"]+input#brightness[type="range"][min="0"][max="100"]')
      cy.get('label[for="birthday"]+input#birthday[type="date"]')
    })
  })
})
