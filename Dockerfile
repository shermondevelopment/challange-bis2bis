FROM node:14

WORKDIR WORKDIR /usr/app

COPY ./package.json .

COPY . ./

RUN npm i 

RUN npm run build


CMD ["npm", "start"]