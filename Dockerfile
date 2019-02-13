FROM node:9

WORKDIR /usr/src/ecommerceBakeryApi/

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
