import time
from api_client import get_task_from_admin, report_task_result_to_admin

def perform_video_watch_task(url, duration):
    """Simülasyon: Video izleme görevini yapar."""
    print(f"Görev: {url} adresindeki video {duration} saniye izleniyor...")

    time.sleep(duration)
    print("Video izleme tamamlandı.")
    return "success", f"{duration} saniye izlendi."

def main_loop():
    print("Harici İşçi (User PC) başlatıldı. Admin PC'den görev bekleniyor...")
    while True:
        task = get_task_from_admin()
        if task:
            print(f"Yeni görev alındı: ID={task['id']}, Tip={task['type']}")
            
            status = "failed"
            message = "Bilinmeyen görev tipi"

            if task['type'] == 'video_watch':
                status, message = perform_video_watch_task(task['payload']['url'], task['payload']['duration'])
            

            print(f"Görev sonucu Admin'e bildiriliyor: Durum={status}")
            report_task_result_to_admin(task['id'], status, message)
        else:
            print("Uygun görev bulunamadı. 5 saniye sonra tekrar denenecek.")
            time.sleep(5)

if __name__ == "__main__":
    main_loop()