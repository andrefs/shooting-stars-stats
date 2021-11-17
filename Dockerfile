# syntax=docker/dockerfile:1


# Build stage

FROM node:11 as build

ENV NODE_ENV=production
WORKDIR /app

COPY --chown=node:node ["package.json", "yarn.lock", "postinstall.js", "./"]
RUN yarn install --frozen-lockfile

COPY --chown=node:node ["script/build.js", "./script"]
COPY --chown=node:node ["webpack/production.js", "./webpack"]

CMD ["yarn", "run", "babel-node", "./script/build.js", "webpack/production.js"]


# Run stage

#FROM gcr.io/distroless/nodejs:12
FROM node:11
ENV NODE_ENV=production

COPY --from=build /app /usr/src/ss-stats
WORKDIR /usr/src/ss-stats/

COPY . ./

#CMD ["bin/manager.js"]
#CMD ["yarn", "run", "prod:build"]
ENTRYPOINT ["node", "server/index.js"]


