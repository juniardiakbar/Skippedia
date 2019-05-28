FROM node:12.3

WORKDIR /starter
ENV NODE_ENV development

COPY package.json /starter/package.json

RUN npm i --save
RUN npm install -g nodemon
RUN npm install jquery-bar-rating

COPY .env.example /starter/.env.example
COPY . /starter

CMD ["nodemon"]