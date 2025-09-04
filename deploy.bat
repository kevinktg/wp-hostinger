@echo off
echo ⚠️  DEPLOYMENT SCRIPT DISABLED TO PREVENT AUTOMATED RUNS
echo 🚀 Starting 2025 Bootstrap Sites Deployment
echo ==========================================

set /p GITHUB_USER="Enter your GitHub username: "
set /p REPO_NAME="Enter repository name: "
echo Select template (1-5):
echo 1. AI Portfolio Agency
echo 2. SaaS Landing
echo 3. Startup Launch
echo 4. Nonprofit Cause
echo 5. E-commerce Marketplace
set /p TEMPLATE_NUM="> "

if "%TEMPLATE_NUM%"=="1" set TEMPLATE_DIR=01-ai-portfolio-agency
if "%TEMPLATE_NUM%"=="2" set TEMPLATE_DIR=02-saas-landing
if "%TEMPLATE_NUM%"=="3" set TEMPLATE_DIR=03-startup-launch
if "%TEMPLATE_NUM%"=="4" set TEMPLATE_DIR=04-nonprofit-cause
if "%TEMPLATE_NUM%"=="5" set TEMPLATE_DIR=05-ecommerce-marketplace

echo 📦 Deploying %TEMPLATE_DIR% to https://%GITHUB_USER%.github.io/%REPO_NAME%/

if not exist ".git" (
    git init
    git branch -m main
)

echo ✅ Deployment setup complete!
echo 🌐 Your site template is ready for GitHub Pages
echo.
echo 💡 Next steps:
echo   1. Create new GitHub repository: https://github.com/new
echo   2. Copy %TEMPLATE_DIR% contents to new repository
echo   3. Enable GitHub Pages in repository settings
echo   4. Customize content using Agents.md guides