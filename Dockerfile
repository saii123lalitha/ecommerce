# Use official node image as the base image for building
FROM node:16 as build

# Set the working directory as app
WORKDIR /usr/src/app

# Add the source code to app
COPY . .

# Install the dependencies
RUN npm install

# Build the application
RUN npm run build

# Use official nginx image as the base image for serving
FROM nginx:latest

# Copy the build output for nginx contents
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy nginx configuration file with updated IP
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
