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
 * This command/function is to delete a product
 * Make sure that the product added to the cart is visible
 * if yes, check for the delete button is visible
 * if yes, click the delete button 
 * verify the product added before does not exist
 */

Cypress.Commands.add('verify_delete_product', () => {
  const deleteButtonElement = () => cy.get('[data-name="Active Items"] input[data-action="delete"]');
  const productAddedtoCartElement = () => cy.get('[data-name="Active Items"] .sc-product-image');

  productAddedtoCartElement().should('be.visible').then(() => {
    deleteButtonElement().should('be.visible').click().then(() => {
      productAddedtoCartElement().should('not.exist');
    })
  })
})
