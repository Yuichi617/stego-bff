FROM node:18-slim as builder
WORKDIR /usr/src/app
COPY ./ ./
RUN yarn install && yarn build

FROM node:18-slim as module
WORKDIR /usr/src/app
COPY ./ ./
RUN yarn install --prod

FROM node:18-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=module /usr/src/app/node_modules ./node_modules
CMD [ "node", "dist/main" ]