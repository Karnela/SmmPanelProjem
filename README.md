Proje Henüz Tamamlanmamış %10 Seviyesindedir.

Eklenecek Özellikler;

Gmail Kayıt Olma (Proxy Ve Kimlik Bilgileri İle Database Kayıt Olunarak, SmmProjeyeEntegre)

Gelişmiş Dil Modeli (Kullanıcılar Ve Kendi Aralarında Kişilik Modellerine Göre Yorum Ekleyebilme)

Ses İşleme (Video Üzerindeki Kısımları Text Çıktısı Alarak Yorum Modelini Güçlendirme)

Docker User Kurulumu İle İş Yükü Seçilecek Makine İçin Yönetici veya Admin Sunucusu Üzerinde Serverlara Dağılarak İş Yükü Paylaşabilme

Admin Paneli (Kurulum Alınan Cihazın Dinamik Olarak Admin Panel Üzerinde Görev-İş Yükü-Özellikleri'nin Görüntülenmesi)

Aylık Abonelik Sistemi (Özel Anlaşmalı İçerik Üretici Desteklenmesi, Seçili Hesapların Geçmişe Dönük ve Seçilen Platforumlar için İzlenmesi)
Para Kazanma (İçerik Üreticisi Olmayan Kullanıcılar için Gmail Hesapları Sisteme Girildiği Zaman, Gmail İle Kayıtlı Oldukları Platforumların Kontrolü ve Kayıtlı Olmadıkları Platforumlara Kayıt Olunarak, SmmPanele Aktarılacak, Harici Olarak Telefon Numaraları İle Girdikleri Zaman Desteklenen Sayı Kadar Gmail Hesabı ile Platforumlara Kayıt Olunarak Hesapları İle Para Kazanabilme Fırsatı, Ve Panel Üzerinden Açılan Hesapların Takibi ile Aylık Pasif Gelir İmkanı Premium Hesaplar İçin Fazladan Kazanç Sistemi)


🚀 Proje Adı: SMM Panel Platformu
✨ Genel Bakış
Bu proje, güçlü ve ölçeklenebilir bir Sosyal Medya Pazarlama (SMM) paneli platformudur. Mikroservis mimarisini kullanarak sipariş işleme, ödeme yönetimi, kullanıcı kimlik doğrulaması ve asenkron işçi süreçlerini (workers) birbirinden bağımsız hale getirir. Frontend uygulaması modern bir React arayüzü ile geliştirilmiştir.

🏗️ Teknoloji Yığını (Tech Stack)
Bu platform, performans ve ölçeklenebilirlik için çeşitli diller ve araçlar kullanılarak inşa edilmiştir:

Kategori	Teknolojiler	Kullanım Amacı
Backend Servisleri	Python (FastAPI, Celery, SQLAlchemy), Go (Auth Service)	Sipariş yönetimi, ödeme işleme ve yüksek performanslı kimlik doğrulama.
Frontend	React, TypeScript, Vite (Monorepo içinde)	Kullanıcı ve Admin arayüzleri.
Veritabanı	PostgreSQL	Güvenilir ve ilişkisel veri depolama.
Mesaj Kuyruğu	RabbitMQ / Redis (Celery için)	Asenkron görevler (sipariş işleme, medya).
Altyapı	Docker, Docker Compose	Yerel geliştirme ve Dağıtım (Deployment) yönetimi.
DevOps/Güvenlik	Falco, Vector, Grafana	Gözetim (Monitoring), log toplama ve güvenlik.

E-Tablolar'a aktar
⚙️ Kurulum ve Çalıştırma
Yerel geliştirme ortamını kurmak için Docker Compose kullanıyoruz.

1. Ön Gereksinimler
Projenizi çalıştırmak için sisteminizde kurulu olması gerekenler:

Git

Docker

Docker Compose (Veya Docker Desktop ile birlikte gelir.)

2. Ortam Değişkenleri
Kök dizindeki .env dosyasını, env.example dosyasını temel alarak oluşturun ve gerekli tüm sırları (API anahtarları, veritabanı şifreleri vb.) doldurun.

Bash

cp .env.example .env
# .env dosyasını düzenleyin ve gizli anahtarları girin
3. Projeyi Başlatma
Projenin tüm servislerini (Postgres, RabbitMQ, Backend, Frontend, Workers) tek bir komutla başlatın:

Bash

.\start.ps1
.\stop.ps1 
.\reload.ps1
.\deep-clean.ps1 


Servis	Bağlantı Noktası (Port)
API Gateway	http://localhost:<PORT_NUMARASI>
Frontend (Geliştirme)	http://localhost:<VITE_DEV_PORT>
Grafana	http://localhost:3000

E-Tablolar'a aktar
4. Geliştirme Ortamı Temizliği
Tüm container'ları durdurmak ve temizlemek için:

Bash

docker-compose down
(Ya da kök dizinindeki stop.ps1 dosyasını kullanabilirsin.)

🤝 Katkıda Bulunma
Proje geliştirmeye katkıda bulunmak istersen, lütfen aşağıdaki adımları takip et:

Bu depoyu (repository) çatallayın (fork).

Yeni bir özellik dalı (feature branch) oluşturun: git checkout -b ozellik/yeni-ozellik

Değişikliklerinizi yapın ve commit atın: git commit -m 'feat: yeni özellik eklendi'

Dalı orijinal depoya itin (push): git push origin ozellik/yeni-ozellik

Bir Pull Request (PR) açın.

📝 Lisans
Bu proje <Lisans GPLv3 > ile lisanslanmıştır.

📧 İletişim
Proje Sahibi: Karnela

E-posta: Kocahestiyayabedenem@gmail.com



MIT License

Copyright (c) 2025 Karnela

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.