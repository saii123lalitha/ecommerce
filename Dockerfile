# Use official node image as the base image
FROM node:16 as build

# Set the working directory as app
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install the dependencies
RUN npm install

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output for nginx contents
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

