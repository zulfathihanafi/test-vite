# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the built files
RUN npm install -g serve

# Define the build argument
ARG ALLOWED_ORIGIN

# Echo the value during the build process to verify
RUN echo "Building with ALLOWED_ORIGIN=${ALLOWED_ORIGIN}"

# Define the command to run the application
CMD ["serve", "-s", "dist"]

# Expose the port the app will run on
EXPOSE 3000
