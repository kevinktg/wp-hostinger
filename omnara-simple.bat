@echo off
REM Simple Omnara launcher that bypasses encoding issues

echo === Omnara Simple Setup ===
echo.

REM Set UTF-8 environment
set PYTHONIOENCODING=utf-8
set PYTHONLEGACYWINDOWSSTDIO=1

echo Choose an option:
echo 1. Manual Auth (recommended)
echo 2. Start Headless Mode  
echo 3. Start MCP Server
echo 4. Check Status
echo.

set /p choice="Enter choice (1-4): "

if %choice%==1 goto manual_auth
if %choice%==2 goto headless
if %choice%==3 goto mcp
if %choice%==4 goto status
goto end

:manual_auth
echo.
echo === Manual Authentication ===
echo 1. Open: https://omnara.com/cli-auth
echo 2. Sign in and generate API key
echo 3. Run: omnara --api-key YOUR_KEY_HERE
echo.
echo Alternative: Set environment variable
echo set OMNARA_API_KEY=your_key_here
echo.
pause
goto end

:headless
echo Starting Omnara Headless Mode...
echo Control via: https://app.omnara.ai
echo.
omnara headless --permission-mode default
goto end

:mcp
echo Starting Omnara MCP Server...
echo.
omnara mcp --git-diff
goto end

:status
echo Checking Omnara status...
echo.
python -c "import omnara; print('Omnara version:', omnara.__version__)"
omnara --version
goto end

:end
echo.
echo Done!
pause