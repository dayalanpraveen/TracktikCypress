/**
 * CASE 1: Verify_sign_in
 *  pre-requisite: user should have a valid username and password
 *  step 1: Navigate to the site https://amazon.ca 
 *  step 2: Verify the site is loaded by validating the site url
 *  step 3: click the sign-in button
 *  step 4: Enter the email id
 *  step 5: Enter the password
 *  step 6: click the sign-in button
 *  step 7: Verify the log-in is successful
 *  Expected Result: user is logged in
 */

/**
 * CASE 2: Verify_landing_page
 *  pre-requisite: user should be logged in
 *  step 1: Navigate to the navigation header of the site
 *  Step 2: Verify the userName is displayed with a prefix "Hello"
 *  Expected Result: userName is displayed with a prefix "Hello"
 */

/**
 * CASE 3: Verify_search_product
 *  pre-requisite: user should be logged in
 *  step 1: Navigate to the search tab
 *  step 2: Enter any product name
 *  step 3: click the search icon
 *  step 4: Verify the serached product is displayed
 *  Expected Result: serached product is displayed
 *  
 */

/**
 * CASE 4: Verify_add_the_product_to_cart
 *  pre-requisite: CASE 3
 *  step 1: click on the Add to cart
 *  step 2: Verify the cart count it equal to the product added
 *  Expected Result: Cart count is equal to the product added
 */

/**
 * CASE 5: Verify_go_to_cart
 *  pre-requisite: CASE 4
 *  step 1: click the cart icon
 *  step 2: verify the product added to the cart is displayed
 *  Expected Result: prodct added to the cart is displayed
 */

/**
 * CASE 6: Verify_Delete_product
 *  pre-requisite: CASE 5
 *  step 1: verify the product added to cart is displayed
 *  step 2: click on the delete button for that product
 *  step 3: verify the product which was added to cart is not displayed.
 *  Expected Result: prodct added to the cart is not displayed
 * 
 */

/**
 * CASE 7: Verify_sign_out
 *  pre-requisite: user should be logged in
 *  step 1: Hover on the your accounts navigation link
 *  step 2: click the signout button
 *  step 3: verify the user lands on the /signin page
 *  Expected Result: user lands on the /signin page
 */
