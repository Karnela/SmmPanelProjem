from celery import Celery

celery_app = Celery(
    'smm_api_client',
    broker='amqp://guest:guest@rabbitmq:5672//'
)

def send_twitch_follow_task(order_id: int, username: str, amount: int):
    """
    Twitch takipçi gönderme görevini Celery kuyruğuna ekler.
    """
    celery_app.send_task(
        'tasks.twitch_tasks.send_followers', 
        args=[order_id, username, amount]     
    )