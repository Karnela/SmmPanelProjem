FROM python:3.10-slim

WORKDIR /app

COPY ./workers/base-smm-worker/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .