# Stage 1: Build the Node.js application
FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:latest

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
