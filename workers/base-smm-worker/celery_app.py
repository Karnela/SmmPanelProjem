from celery import Celery
import celery_config

celery_app = Celery(
    'smm_worker',
    broker=celery_config.CELERY_BROKER_URL,
    backend=celery_config.CELERY_RESULT_BACKEND,
    include=[
        'workers.base-smm-worker.tasks.twitch_tasks',
        'workers.base-smm-worker.tasks.system_tasks'
    ]
)

celery_app.config_from_object(celery_config)

celery_app.conf.beat_schedule = {
    'check-system-health-every-5-minutes': {
        'task': 'workers.base-smm-worker.tasks.system_tasks.check_system_health',
        'schedule': 300.0, 
    },
}

celery_app.conf.timezone = 'UTC'