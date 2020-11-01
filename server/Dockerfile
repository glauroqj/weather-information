FROM node:14.15.0-alpine3.10

# Defining the directory where the app will run inside docker image

RUN npm install --unsafe-perm -g full-icu@1.2.1 && \
    chmod +x /usr/local/bin/yarn
# Installing full-icu and yarn
# full-icu: support all locales of the world
# yarn: used to install owr dependencies and run some commands

COPY . server

ENTRYPOINT yarn && node server.js
