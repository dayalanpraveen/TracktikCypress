import {landingPageUrl, productToSearch
  , signInUrl, userName, password, baseUrl, 
  cartRemovedText } from '../../fixtures/route';

describe('Login test', () => {
  it('validate sign_in', () => {
    cy.visit_and_verify_url(baseUrl);
    cy.verify_login(userName, password);
    cy.verify_url(landingPageUrl);
  })

  it('validate landing page', () => {
    cy.print_logged_userName();
    cy.verify_search_product(productToSearch);
    cy.Verify_add_product_to_cart('1');
    cy.verify_go_to_cart();
    cy.verify_delete_product();
  })

  it('validate sign_out', () => {
    cy.verify_signout();
    cy.verify_url(signInUrl);
  })
})
