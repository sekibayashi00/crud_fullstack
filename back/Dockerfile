FROM node:20.11.0

# Set working directory to /app
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Run the backend entry point
CMD ["node", "src/index.js"]
