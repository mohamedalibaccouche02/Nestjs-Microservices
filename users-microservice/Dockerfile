FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .