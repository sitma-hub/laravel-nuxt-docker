FROM node:lts-alpine as build

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm run docs:build


FROM nginx:stable-alpine

COPY --from=build /app/.vitepress/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
