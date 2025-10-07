Write-Host "Sistem tamamen durduruluyor ve temizleniyor..." -ForegroundColor Yellow
docker-compose down -v --remove-orphans

Write-Host "`n__pycache__ klasörleri temizleniyor..." -ForegroundColor Cyan
Get-ChildItem -Path . -Filter "__pycache__" -Recurse -Directory | Remove-Item -Recurse -Force

Write-Host "`nSistem yeniden inşa ediliyor ve başlatılıyor..." -ForegroundColor Green
docker-compose up --build