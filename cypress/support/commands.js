// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';
/**
 * This command/function "verify_url" is to assert all the landing/navigating urls
 * This can be utilized more as a common function/utilities
 */

Cypress.Commands.add('visit_and_verify_url', (url) => {
  cy
    .visit(url)
    .url()
    .should('include', url)
})

Cypress.Commands.add('verify_url', (url) => {
  cy
    .url()
    .should('include', url)
})
