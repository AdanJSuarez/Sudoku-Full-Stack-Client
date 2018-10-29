# Build SPA
FROM node:alpine
COPY . /build
WORKDIR /build
COPY ./serverweb.js ./
EXPOSE 9000
RUN npm install --production
CMD node serverweb.js

# Build Nginx reverse proxy
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]