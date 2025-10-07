Write-Host "--- SİSTEM KAPATILIYOR VE TEMİZLENİYOR ---" -ForegroundColor Yellow
docker-compose down -v --remove-orphans

Write-Host "--- DOCKER ÖNBELLEĞİ TEMİZLENİYOR ---" -ForegroundColor Cyan
docker builder prune -f

Write-Host "--- __PYCACHE__ DOSYALARI SİLİNİYOR ---" -ForegroundColor Cyan
Get-ChildItem -Path . -Include __pycache__ -Recurse -Directory | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "--- SİSTEM YENİDEN İNŞA EDİLİYOR VE ARKA PLANDA BAŞLATILIYOR ---" -ForegroundColor Green
docker-compose up --build -d

Write-Host "`n--- BAŞLATMA TAMAMLANDI ---" -ForegroundColor Green
Write-Host "Servislerin son durumunu görmek için 'docker-compose ps' veya logları görmek için 'docker-compose logs -f' komutunu kullanabilirsin."