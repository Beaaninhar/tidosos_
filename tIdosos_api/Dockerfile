FROM node:14.20.0-alpine3.15

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD [ "node", "/src/server.js" ]