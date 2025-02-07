# Use Node.js image to build React
FROM --platform=linux/amd64 node:18-alpine AS build
#FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --production

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Use Nginx to serve the static frontend
FROM --platform=linux/amd64 nginx:alpine
#FROM nginx:alpine

# Copy the built frontend files to Nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]