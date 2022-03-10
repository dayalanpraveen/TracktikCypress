/**
 * This command/function is used for logging in a user
 * checks for the sign-in buttton to visible
 * if yes, click the sign-in button and checks for the email input field
 * if yes, type the username and validates the username is entered correctly
 * if yes, checks for the password field is visible
 * if yes, type the password (password here is protected using the log command) and
 * validates the password is entered correctly
 * if yes, checks for the submit button to be visible
 * if yes, then click the button and verify the user is logged in
 */
Cypress.Commands.add('verify_login', (userName, password) => {
  const getSignInbuttonElement = () => cy.get('#nav-link-accountList');
  const getemailInputElement = () => cy.get('#ap_email');
  const getEmailContinueButtonElement = () => cy.get('input#continue');
  const getPasswordInputElement = () => cy.get('#ap_password');
  const getSignInContinueButtonElement = () => cy.get('input#signInSubmit');

  getSignInbuttonElement().should('be.visible').click().then(() => {
    getemailInputElement().should('be.visible').clear().type(userName)
      .should('have.value', userName).then(() => {
        getEmailContinueButtonElement().should('be.visible').click().then(() => {
          getPasswordInputElement().should('be.visible').type(password, { log: false })
            .should('have.value', password).then(() => {
              getSignInContinueButtonElement().should('be.visible').click().then(() => {
                cy.print_logged_userName();
              })
            })
        })
      })
  })
})

/**
 * This command/function is used to print the logged in user name. 
 * Due to the limitation of not having a CI/CD integration and the amazon website security limitation
 * I couldn't design in the way i want to. 
 * MY IDEA: I woould normally user a faker to generate random username and use that random name to log in. 
 * I would use that user name here to directly verify that particular user has logged in. 
 * CURRENT IMPLEMENTATION: Once the user gets logged in, we could see a navigation header 
 * with the inner text "Hello, user name"
 * i have resolved the promise and extracted the text from the header and am doing an assertion
 * to include the text "Hello"
 */
Cypress.Commands.add('print_logged_userName', () => {
  const getLandingPageElement = () => cy.get('#nav-link-accountList-nav-line-1')

  getLandingPageElement().should('be.visible').then(($el) => {
    const usrNameText = $el.text();
    expect(usrNameText).to.include('Hello');
    cy.log(`Printed user name is ${usrNameText}`);

  })

})
