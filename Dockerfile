FROM node:lts-bullseye-slim As build
WORKDIR /app
RUN npm install -g npm
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist/users /usr/share/nginx/html/
COPY --from=build /app/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
