FROM node:16-alpine

# Update dependencies
RUN apk update && apk add bash

# Set up the working directory
RUN mkdir -p /app
WORKDIR /app
# evtl. for production
COPY ./package.json /app
RUN yarn install

# RUN yarn add --dev vitepress
# RUN yarn docs:build
# Expose the Vitepress port
# EXPOSE 5173
EXPOSE 3000
# Export the Vite websocket port
# EXPOSE 24678
