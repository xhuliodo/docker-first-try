FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD chmod +x wait-for.sh
CMD node index.js
EXPOSE 8082