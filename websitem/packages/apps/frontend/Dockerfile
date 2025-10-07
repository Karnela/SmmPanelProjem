FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock turbo.json ./
COPY packages/ ./packages/

RUN yarn install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5173

CMD ["yarn", "workspace", "frontend", "run", "dev", "--host"]
