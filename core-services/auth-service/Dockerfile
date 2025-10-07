FROM golang:1.19-alpine AS builder
WORKDIR /app

COPY core-services/auth-service/go.mod ./

# COPY core-services/auth-service/go.sum ./

RUN go mod download

COPY core-services/auth-service/. ./

RUN CGO_ENABLED=0 GOOS=linux go build -v -o auth-service .

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/auth-service .
CMD ["./auth-service"]