FROM node:16-alpine

# Update dependencies
RUN apk update && apk add bash

# Set up the working directory
RUN mkdir -p /app
WORKDIR /app
# COPY ./package.json /app # evtl. for production

RUN echo "Hello World"
RUN yarn add --dev vitepress

# Expose the Vitepress port
EXPOSE 3000
# Export the Vite websocket port
# EXPOSE 24678
