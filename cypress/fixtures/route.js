/** This takes care of all the env variables and static datas 
 * which would be fed to the tests. 
 * This way is more efficient when we integrate the script in CI/CD
 * We ideally wwould seal all the credentials in the jenkins
 * We define the sealed credentials in the jenkins file as a env variable.
 * This route.js will be mapped with those env varibles through our docker-compose file
 */
export const baseUrl = Cypress.env('baseUrl')
export const landingPageUrl = Cypress.env('landingUrl');
export const userName = Cypress.env('userName');
export const password = Cypress.env('password');
export const productToSearch = 'Automated Software Testing with Cypress';
export const signInUrl = '/signin';
export const cartRemovedText = 'Your Amazon cart is empty.';
