/**
 * This command/function is to navigate to the shopping cart
 * checks for the cartIcon to be visisble 
 * if yes, click the cart Icon and validate the item added to the cart is visible
 */
Cypress.Commands.add('verify_go_to_cart', () => {
  const cartIconElement = () => cy.get('#nav-cart');
  const activeCartElement = () => cy.get('#sc-active-cart');
  cartIconElement().should('be.visible').click().then(() => {
    activeCartElement().should('be.visible');
  })
})

/**
 * This command/function is to delete a cart
 * Make sure that the product added to the cart is visible
 * if yes, check for the delete button is visible
 * if yes, click the delete button 
 * verify the product added before does not exist
 * Also, resolve the promise to extract the empty cart text and perform an assertion
 */

Cypress.Commands.add('verify_delete_cart', (expectedMessage) => {
  const deleteButtonElement = () => cy.get('[data-name="Active Items"] input[data-action="delete"]');
  const emptyCartTextElement = () => cy.get('.sc-cart-header');
  const productImageElement = () => cy.get('[data-name="Active Items"] .sc-product-image');

  productImageElement().should('be.visible').then(() => {
    deleteButtonElement().should('be.visible').click().then(() => {
      productImageElement().should('not.exist');
      /** Tried cy.intercept() and cy.waituntill() methods to fix the time to load
       * Chrome has no issues
       * issue is happening only on firefox. So had to use cy.wait() 
       */
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(3000);
      emptyCartTextElement().should('be.visible').then(($el) => {
        const emptyCartText = $el.text();
        expect(emptyCartText).to.include(expectedMessage);
      })
    })
  })
})
