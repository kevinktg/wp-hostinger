@echo off
echo Starting Omnara AI Agent Command Center...
echo.

REM Set UTF-8 encoding for Unicode support
chcp 65001 >nul

REM Set environment variables for optimal flow
set PYTHONIOENCODING=utf-8
set OMNARA_CONFIG_FILE=omnara-config.json
set OMNARA_LOG_LEVEL=INFO

echo ⚡ Optimal Flow Settings Active
echo 🔧 Hardware: RYZEN 5 5500 (6 cores, 32GB RAM)
echo 📊 Performance Mode: Development
echo.

REM Start Omnara with webhook server for real-time monitoring
echo Starting webhook server with dashboard sync...
omnara serve --port 8080

pause