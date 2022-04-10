FROM node:alpine as build


EXPOSE 3000
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY ./ ./

RUN npm run build


# production env
FROM nginx:stable-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]