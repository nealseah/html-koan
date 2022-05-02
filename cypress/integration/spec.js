const BASE = Cypress.env('base')

describe('HTML', () => {
  it('01_head.html', () => {
    cy.visit(BASE + '01_head.html')

    cy.get('html > head > meta').should('have.attr', 'charset', 'utf-8')
    cy.title().should('eq', 'My first html page')
    cy.contains('body', 'This is my first html page.')
  })

  it('02_structure.html', () => {
    cy.visit(BASE + '02_structure.html')

    cy.get('body').within(() => {
      cy.contains('header', 'This is the header of this website')
      cy.contains('main', 'This is the main content of this page')
      cy.contains('footer', 'This is the footer of this website')
    })
  })

  it('03_list.html', () => {
    cy.visit(BASE + '03_list.html')

    cy.get('main').within(() => {
      cy.get('> ul > li').should('have.length', 3)
      cy.get('> ol > li').should('have.length', 3)
    })
  })

  it('04_nested_list.html', () => {
    cy.visit(BASE + '04_nested_list.html')

    cy.get('main > ol').within(() => {
      cy.get('> li').should('have.length', 2)
      cy.get('> li > ul > li').should('have.length', 3)
      cy.get('> li > ol > li').should('have.length', 3)
    })
  })

  it('05_navigation.html', () => {
    cy.visit(BASE + '05_navigation.html')

    cy.get('body > nav > ol > li').should('have.length', 3)
  })

  it('06_text.html', () => {
    cy.visit(BASE + '06_text.html')

    cy.get('main').within(() => {
      cy.contains('> h1', '{book name}')
      cy.contains('> h2', "Chapter 1: I'm a chapter")
      cy.contains('> h2', "Chapter 2: I'm another chapter")
      cy.contains('> h3', "Sub-Chapter 2.1: I'm the first part of chapter 2")
      cy.contains('> p', "I'm a paragraph. Lorem ipsum dolor sit amet")
      cy.contains('> p', "I'm a paragraph. Donec vel tellus sem.")
      cy.contains('> p', "I'm a paragraph. Quisque commodo leo a")
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
