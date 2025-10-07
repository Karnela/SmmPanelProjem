Write-Host 'Tüm SmmPanelDocker servisleri durduruluyor ve veritabanı verileri sıfırlanıyor...' -ForegroundColor Red

docker-compose --env-file '.\.env\' -f '.\docker-compose\docker-compose.yml' -f 