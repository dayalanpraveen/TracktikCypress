FROM cypress/browsers:node16.13.0-chrome95-ff94

COPY --chown=node:node . /app
USER node
WORKDIR /app

# COPY package.json .
# COPY package-lock.json .

RUN npm install --save-dev cypress

RUN npx cypress verify

