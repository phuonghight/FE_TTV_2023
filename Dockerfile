FROM node:16-alpine AS builder

WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21.0-alpine as production
RUN touch /var/run/nginx.pid && \
    mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid
USER nginx
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
