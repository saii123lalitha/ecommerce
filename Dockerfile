# Use official node image as the base image for building
FROM node:16

# Set the working directory as app
WORKDIR /usr/src/app

# Add the source code to app
COPY . .

# Install the dependencies
RUN npm install

# Expose port 5173
EXPOSE 5173

# Run npm start in the background
CMD ["npm", "start"]
