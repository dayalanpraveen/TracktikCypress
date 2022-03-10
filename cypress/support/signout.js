/**
 * This command/function is used to logout the user
 * check for the accounts navigation to be visible
 * if yes, hover over the accounts button 
 * check for the signout button to visible
 * if yes, click the signout button. 
 */
Cypress.Commands.add('verify_signout', () => {
  const signoutButtonElement = () => cy.get('#nav-item-signout');
  const userAccountElement = () => cy.get('[data-nav-ref="nav_youraccount_btn"]');

  userAccountElement().should('be.visible').trigger('mouseover').then(() => {
    signoutButtonElement().should('be.visible').click();
  })
})
