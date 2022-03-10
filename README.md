# TracktikCypress

# [MANDATORY]install dependencies
Run this command: npm install

# To Run locally with your username and password:
   # To run the "amazon.ca" test in chrome
     npm run headless:chrome:run:ca -- --env userName={replace_userName},password={replace_password}
   # To run the "amazon.com" test in firefox
     npm run headless:firefox:run:ca -- --env userName={replace_userName},password={replace_password}
   # To run the "amazon.com" test in chrome
     npm run headless:chrome:run:com -- --env userName={replace_userName},password={replace_password}
   # To run the "amazon.com" test in firefox
     npm run headless:firefox:run:com -- --env userName={replace_userName},password={replace_password}
     

# To run the test using docker
  # Pre-requisite:
  As we dint integrate the CI/CD its little difficult to pass the username and password in run time locally to be used by cypress.If we can integrate with CI then we can seal the credentials and use them in the environment variable and pass it to docker-compose.
  Please Make sure to add the usrename and password in cypress\config\cypress.ca.json
  # NOTE:
   The test inside the docker containers runs both chrome and firefox simultaneously
   Running the docker test produces an html report which can be accessed here cypress\reports\mochareports\report.html. please open in your desired browser to see the report. 
  # Run these commands:
  1. docker-compose build --pull
  2. docker-compose -f docker-compose.yml up

 # To run the test and generate report locally
    # To run the "amazon.ca" test in chrome
     npm run cypress:chrome:ca:test -- --env userName={replace_userName},password={replace_password}
   # To run the "amazon.com" test in firefox
     npm run cypress:firefox:ca:test -- --env userName={replace_userName},password={replace_password}
   # To run the "amazon.com" test in chrome
     npm run cypress:chrome:com:test -- --env userName={replace_userName},password={replace_password}
   # To run the "amazon.com" test in firefox
     npm run cypress:firefox:com:test -- --env userName={replace_userName},password={replace_password}


