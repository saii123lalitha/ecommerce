# Use official node image as the base image for building
FROM node:16 as build

# Set the working directory as app
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install the dependencies
RUN npm install

# Use official nginx image as the base image for serving
FROM nginx:latest

# Set the environment variable for the IP address
ENV BACKEND_IP=35.168.30.13

# Copy the build output for nginx contents
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Copy nginx configuration file with updated IP
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80