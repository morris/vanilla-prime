# Build stage
FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=optional --no-audit --no-fund --ignore-scripts

COPY public ./public
COPY scripts ./scripts
COPY src ./src
COPY tsconfig.json tsconfig.build.json .

RUN npm run build

# Server stage
FROM nginxinc/nginx-unprivileged:stable-alpine-slim

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
