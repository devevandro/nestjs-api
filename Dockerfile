FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install --frozen-lockfile && yarn cache clean

RUN yarn build

USER node

CMD [ "yarn", "start:prod" ]
