# Use official node image as the base image
FROM node:16 as build

# Set the working directory as app
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install the dependencies
RUN npm install

# Command to start the application
CMD ["npm", "start"]

# Expose port 80
EXPOSE 5173

