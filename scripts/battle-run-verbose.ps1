# battle-run-verbose.ps1 - orchestrate Battle-of-the-Bots with verbose output

$ErrorActionPreference = "Stop"

# Timestamp for this run
$timestamp = Get-Date -UFormat "%Y%m%d-%H%M%S"

# Ensure log directory exists
$logDir = "battle-logs"
if (-not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Path $logDir | Out-Null
}

# Define agent commands (append --verbose flag for chattier output)
$agents = @(
    @{ name = "codex"; cmd = 'node agent-automation/generate-content.js --template=01-ai-portfolio-agency --verbose' },
    @{ name = "gemini"; cmd = 'node agent-automation/generate-content.js --template=02-saas-landing        --verbose' },
    @{ name = "claude"; cmd = 'node agent-automation/generate-content.js --template=03-startup-launch       --verbose' },
    @{ name = "qwen"; cmd = 'node agent-automation/generate-content.js --template=04-nonprofit-cause      --verbose' }
)

foreach ($a in $agents) {
    $log = "$logDir/$($a.name)-$timestamp.log"
    Write-Host "`u25B6 Launching $($a.name) → $log" -ForegroundColor Cyan

    # Run each agent synchronously, capturing combined stdout/stderr and teeing to log file
    # Using cmd /c ensures redirection works on both Windows PowerShell & pwsh
    cmd /c "${($a.cmd)} 2>&1 | tee $log"
}

Write-Host "`n`u1F3C1  All agents finished. Logs are in $logDir." -ForegroundColor Green
