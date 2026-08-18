# Base stage for dependencies
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development stage with hot reloading
FROM base AS dev
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage for static production output
FROM base AS builder
COPY . .
RUN npm run build

# Ultra-lightweight production Caddy web server (~30MB) with automatic SSL
FROM caddy:2-alpine AS prod
COPY --from=builder /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
