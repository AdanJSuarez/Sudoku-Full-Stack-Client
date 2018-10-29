# Build Nginx reverse proxy
FROM nginx:alpine
# Overwrite default.conf with our specification
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy build folder to html allow work as spa server
COPY /build /usr/share/nginx/html
# Listen in port 80
EXPOSE 80
# Run gnix showing all messages.
CMD ["nginx", "-g", "daemon off;"]