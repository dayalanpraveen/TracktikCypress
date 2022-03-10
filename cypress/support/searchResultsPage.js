/**
 * This command/function verifies the searchTab is visible and verifies the desired product name is enetered
 * if yes, then resolve the promise, click the search Icon
 * if yes, verify the searched Row is returned with the link text 
 * link text is then compared using contains against the desired product name
 * if yes, click the prodcut
 * Verify the product title against the expected product title in the Add product cart page
 */
Cypress.Commands.add('verify_search_product',(productName) => {
  const getSearchTabElement = () => cy.get('#twotabsearchtextbox');
  const getSearchIconButtonElement = () => cy.get('#nav-search-submit-button');
  const getSearchResultRowElement = () => cy.get('[data-cel-widget="MAIN-SEARCH_RESULTS-1"] a');
  const getProductTitleElement = () => cy.get('#productTitle');

  getSearchTabElement().should('be.visible').clear()
    .type(productName)
    .should('have.value', productName).then(() => {
      getSearchIconButtonElement().click().then(() => {
        getSearchResultRowElement().should('be.visible')
            .contains(productName)
            .click().then(() => {
              getProductTitleElement().should('be.visible').then(($el) => {
                const actualProductTitle = $el.text();
                expect(actualProductTitle).to.contain(productName)
              })
            })
      })
    })
})

/** 
 * This command/function is to add a product to cart and do a basic assertion 
 * when the product is added to the cart.
 * The code verifies the add to cart button is visible then click 
 * if yes, then resolve the promise by verifying  the ladning page containing the text "Added to cart"
*/
Cypress.Commands.add('Verify_add_product_to_cart', (cartCount) => {
  const addCartButtonElement = () => cy.get('#add-to-cart-button');
  const carcountElement = () => cy.get('span#nav-cart-count');

  addCartButtonElement().should('be.visible').click().then(() => {
    carcountElement().should('be.visible').then(($el) => {
      const count = $el.text();
      expect(count).to.eq(cartCount);
    })
  })
})
