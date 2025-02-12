# Use an official Node.js runtime as a parent image
FROM arm64v8/node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

RUN uname

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application (production build)
RUN npm run build --dist

# Use NGINX to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app to the NGINX web directoryd
COPY --from=0 /app/dist/ /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
