Write-Host "Sistemdeki TÜM Docker konteynerleri durduruluyor ve kaldırılıyor..." -ForegroundColor Red
docker-compose down -v --remove-orphans

Write-Host "`nProje dizinindeki __pycache__ klasörleri temizleniyor..." -ForegroundColor Cyan
Get-ChildItem -Path . -Filter "__pycache__" -Recurse -Directory | Remove-Item -Recurse -Force

Write-Host "`nDocker sistemi derinlemesine temizleniyor (imajlar, diskler, ağlar)..." -ForegroundColor Magenta
Write-Host "Bu işlem biraz zaman alabilir ve DİĞER PROJELERİNİZE ait kullanılmayan Docker verilerini de silebilir." -ForegroundColor Yellow
docker system prune -af --volumes

Write-Host "`nDocker build önbelleği (cache) tamamen temizleniyor..." -ForegroundColor Cyan
docker builder prune -af

Write-Host "`nTEMİZLİK TAMAMLANDI! Sistem sıfırlandı." -ForegroundColor Green
Write-Host "Şimdi 'start.ps1' veya 'reload.ps1' script'ini çalıştırarak sistemi yeniden başlatabilirsiniz."