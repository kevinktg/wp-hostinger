@echo off
echo Starting Omnara MCP Server for Claude Code Integration...
echo.

REM Set UTF-8 encoding
chcp 65001 >nul
set PYTHONIOENCODING=utf-8

echo 🔗 MCP Server: Model Context Protocol integration
echo 📂 Git Integration: Enabled with diff tracking
echo 🏗️ Claude Code: Enhanced with Omnara monitoring
echo.

REM Start MCP server with git integration
omnara mcp --git-diff

pause