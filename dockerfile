# Use an official Node.js runtime as a parent image
FROM arm64v8/node:23-alpine AS build
# Set the working directory inside the container
WORKDIR /app

#Check if the directory exists
#RUN ls -l /
# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# Install dependencies
RUN npm install
#RUN npx ngcc --properties es2023 browser module main --first-only --create-invy-entry-points
# Copy the rest of the application code
COPY . .
# Generate the build of the application
RUN npm run build


# Use NGINX to serve the Angular app (ARM architecture version)
FROM arm64v8/nginx:alpine

# Copy the built Angular app to the NGINX web directory
#COPY --from=0 /app/dist/CyberpunkGame/ /usr/share/nginx/html
COPY --from=build /app/dist/CyberpunkGame/browser /usr/share/nginx/html
# Expose the port the app will run on
EXPOSE 80

# Start NGINX
#CMD ["nginx", "-g", "daemon off;"]
