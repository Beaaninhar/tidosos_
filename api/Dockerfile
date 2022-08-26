FROM node:14.20.0-alpine3.15

COPY ["package.json package-lock.json", "/usr/src"]

RUN mkdir -p /usr/src/app
COPY ./src /usr/src

RUN cd /usr/src && \
    npm install

CMD [ "node", "/src/server.js" ]