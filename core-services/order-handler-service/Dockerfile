FROM python:3.10-slim

WORKDIR /app

ENV PYTHONPATH "${PYTHONPATH}:/app"

COPY ./core-services/order-handler-service/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY ./core-services/order-handler-service/app /app
COPY ./infrastructure /app/infrastructure

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

