@echo off
echo Starting Omnara in Headless Mode...
echo.

REM Set UTF-8 encoding
chcp 65001 >nul
set PYTHONIOENCODING=utf-8

echo 🤖 Headless Mode: Controlled via https://app.omnara.ai
echo 🎯 Permission Mode: Default (secure)
echo 📱 Access: Web dashboard and mobile app
echo.

REM Start headless mode with optimal settings
omnara headless --permission-mode default --name "WP-Hostinger-Flow"

pause