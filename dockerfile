# Use an official Node.js runtime as a parent image
FROM arm64v8/node:23-alpine AS build
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# Install dependencies
RUN npm install

COPY . .
# Generate the build of the application
RUN npm run build


# Use NGINX to serve the Angular app (ARM architecture version)
FROM arm64v8/nginx:alpine

# Copy the built Angular app to the NGINX web directory
COPY --from=build /app/dist/CyberpunkGame/browser /usr/share/nginx/html
# Expose the port the app will run on
EXPOSE 80


