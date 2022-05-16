FROM node:18-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "npm", "start" ]