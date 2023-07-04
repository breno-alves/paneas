########################################### DEV IMAGE ##########################################
FROM node:18-alpine as dev

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY . .

RUN yarn

CMD ["yarn", "start:dev"]

########################################## PRODUCTION BUILD IMAGE ##########################################

FROM node:18-alpine as build

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY --chown=node:node --from=dev /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build

RUN yarn --frozen-lockfile --production && yarn cache clean

USER node

########################################### PROD IMAGE ##########################################
FROM node:18-alpine as prod

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY --chown=node:node --from=build /usr/src/app/dist dist
COPY --chown=node:node --from=build /usr/src/app/node_modules node_modules

USER node

CMD ["node", "dist/main.js"]