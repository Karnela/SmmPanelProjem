# SMM PANEL PLATFORMU

# GENEL BAKIŞ
Bu proje, güçlü ve ölçeklenebilir bir Sosyal Medya Yönetim (SMM) paneli için mikroservis mimarisine dayalı bir platformdur. Çözüm, sipariş işleme, ödeme yönetimi, kullanıcı kimlik doğrulaması ve asenkron iş akışlarını kapsar. Ön yüz (Frontend) modern bir React arayüzü kullanılarak geliştirilmiştir.

# PROJE DURUMU VE YOL HARİTASI
Mevcut Durum: %10 TAMAMLANDI
Proje şu an prototip aşamasındadır. Temel servis altyapısı kurulmuş olup, belirtilen özelliklerin geliştirilmesine başlanmıştır.

# PLANLANAN GELİŞMİŞ ÖZELLİKLER
Projenin yol haritasındaki kritik geliştirme alanları şunlardır:

# Özellik Alanı	Açıklama
Yapay Zeka & NLP	Kişilik modellerine göre yorum ekleyebilme ve video içeriklerinden metin çıktısı (transcription) alarak yorum modelini güçlendirme.
Gelişmiş Kayıt Sistemi	Proxy ve Kimlik Bilgileri ile Gmail Kayıt Olma (SMM panele entegre veritabanı kaydı).
Docker İş Yükü Yönetimi	Kurulum alan cihazlar arasında, yönetici sunucusu üzerinden iş yükünü dinamik olarak dağıtarak paylaşabilme.
Dinamik Yönetim Paneli	Kurulum alınan cihazın Görev, İş Yükü ve Özelliklerini Admin Panel üzerinde anlık görüntüleyebilme.
Abonelik Sistemi	Özel anlaşmalı içerik üreticilerini destekleme, geçmişe dönük hesap izleme ve özel platformlar için takip yeteneği.
Para Kazanma Sistemi	Kullanıcı Gmail hesapları üzerinden kayıtlı olmadıkları platformlara otomatik kayıt ve pasif gelir akışı oluşturma fırsatı sunma.

# TEKNOLOJİ YIĞINI (TECH STACK)
Bu platformun altyapısı, performans ve ölçeklenebilirlik sağlamak için çeşitli diller ve araçlar kullanılarak inşa edilmiştir:

Kategori	Teknolojiler	Kullanım Amacı
Backend Servisleri	Python (FastAPI, Celery, SQLAlchemy), Go (Auth Service)	Sipariş yönetimi, ödeme işleme ve yüksek performanslı kimlik doğrulama.
Frontend	React, TypeScript, Vite (Monorepo içinde)	Kullanıcı ve Admin arayüzleri.
Veritabanı	PostgreSQL	Güvenilir ve ilişkisel veri depolama.
Asenkron İşlem	RabbitMQ / Redis	Arka plan görevleri ve mesaj kuyruğu yönetimi.
Altyapı	Docker, Docker Compose	Yerel geliştirme ve Dağıtım (Deployment) yönetimi.
Gözetim/Güvenlik	Falco, Vector, Grafana	Sistem gözetimi (Monitoring), log toplama ve güvenlik analizi.

# KURULUM VE ÇALIŞTIRMA
Yerel geliştirme ortamını kurmak için Docker Compose kullanınız.

# 1. Ön Gereksinimler
Git

Docker

Docker Compose

# 2. Ortam Değişkenleri
Kök dizinindeki env.example dosyasını temel alarak .env dosyasını oluşturun ve TÜM GİZLİ BİLGİLERİ doldurunuz.

Bash

cp .env.example .env
.env dosyasını hassas verilerle düzenleyiniz

# 3. Yönetim Komutları
Projenin temel yönetimini aşağıdaki PowerShell (PS1) dosyaları ile gerçekleştiriniz:

# Komut Dosyası	Açıklama
.\start.ps1	Tüm servisleri (Backend, DB, Workers, vb.) başlatır.
.\stop.ps1	Çalışan tüm Docker container'larını durdurur.
.\reload.ps1	Servisleri yeniden başlatır.
.\deep-clean.ps1	Tüm container'ları ve diskteki imajları temizler.


# 4. Bağlantı Bilgileri
Servis	Bağlantı Noktası
API Gateway	http://localhost:<PORT_NUMARASI>
Frontend (Geliştirme)	http://localhost:<VITE_DEV_PORT>
Grafana	http://localhost:3000

# KATKIDA BULUNMA
Proje geliştirmeye katkıda bulunmak isterseniz, lütfen standart Çatallama (Fork) ve Çekme İsteği (Pull Request) akışını takip ediniz.

# LİSANS
Bu proje GNU Genel Kamu Lisansı sürüm 3 (GPLv3) ile lisanslanmıştır.

# İLETİŞİM
Proje Sahibi: Karnela

E-posta: Kocahestiyayabedenem@gmail.com
