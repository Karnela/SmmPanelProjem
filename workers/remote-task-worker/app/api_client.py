import os
import requests
from tenacity import retry, stop_after_attempt, wait_fixed

ADMIN_API_URL = os.environ.get("ADMIN_API_URL", "http://localhost:80/api/v1")
WORKER_API_KEY = os.environ.get("WORKER_API_KEY", "gizli_bir_anahtar")

headers = {
    "Authorization": f"Bearer {WORKER_API_KEY}"
}

@retry(stop=stop_after_attempt(3), wait=wait_fixed(5))
def get_task_from_admin():
    """Admin sunucusundan yeni bir görev talep eder."""
    try:
        response = requests.get(f"{ADMIN_API_URL}/tasks/get", headers=headers, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Admin API'den görev alınamadı: {e}")
        return None

@retry(stop=stop_after_attempt(3), wait=wait_fixed(5))
def report_task_result_to_admin(task_id: int, status: str, message: str):
    """Tamamlanan görevin sonucunu Admin sunucusuna bildirir."""
    payload = {"status": status, "result_message": message}
    try:
        response = requests.post(f"{ADMIN_API_URL}/tasks/{task_id}/report", json=payload, headers=headers, timeout=10)
        response.raise_for_status()
        return True
    except requests.exceptions.RequestException as e:
        print(f"Admin API'ye sonuç gönderilemedi: {e}")
        return False