FROM node

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "start"]