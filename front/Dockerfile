# front/Dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build          # Vite → creates dist/
CMD ["npm","run","preview"]
