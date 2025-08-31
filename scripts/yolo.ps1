param(
  [string]$Template = '01-ai-portfolio-agency',
  [switch]$AllBots
)

$ErrorActionPreference = 'Stop'

Write-Host "YOLO Mode: fake run (no deploy)" -ForegroundColor Yellow

function Run-Step {
  param(
    [string]$Name,
    [string]$Command
  )
  Write-Host "==> $Name" -ForegroundColor Cyan
  Write-Host "$Command" -ForegroundColor DarkGray
  & cmd /c $Command
  if ($LASTEXITCODE -ne 0) { throw "Step failed: $Name" }
}

if ($AllBots) {
  $bots = @(
    @{ name='openai'; template='01-ai-portfolio-agency' },
    @{ name='gemini'; template='02-saas-landing' },
    @{ name='claude'; template='03-startup-launch' },
    @{ name='grok'; template='04-nonprofit-cause' }
  )

  foreach ($b in $bots) {
    Write-Host "\n--- BOT: $($b.name) | TEMPLATE: $($b.template) ---" -ForegroundColor Green
    Run-Step "Generate ($($b.template))" "node agent-automation/generate-content.js --template=$($b.template) --verbose"
    Run-Step "Build ($($b.template))"     "node scripts/build-site.js --template=$($b.template)"
    Write-Host "FAKE DEPLOY: skipping push, logging outcome ✅" -ForegroundColor Magenta
  }

  Write-Host "\n🏁 YOLO(all) finished. Last build in ./generated-site (fake deploy)." -ForegroundColor Green
  exit 0
}

# Single-template YOLO
Run-Step "Generate ($Template)" "node agent-automation/generate-content.js --template=$Template --verbose"
Run-Step "Build ($Template)"     "node scripts/build-site.js --template=$Template"

Write-Host "\nFAKE DEPLOY ✅  (no network / no git)" -ForegroundColor Magenta
Write-Host "Output folder: ./generated-site" -ForegroundColor DarkGray
Write-Host "Tip: use 'npm run dev' to preview locally on http://localhost:3000" -ForegroundColor DarkGray
