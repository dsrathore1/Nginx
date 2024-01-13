FROM node:alpine3.19 as nodeBase

WORKDIR /app/server

COPY package*.json .

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "start" ]