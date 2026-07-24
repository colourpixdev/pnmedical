param(
    [string]$DeployPath = ".deploy-tmp",
    [string]$RemoteUrl = "https://github.com/colourpixdev/pnmedical.git",
    [string]$Branch = "main",
    [string]$CommitMessage = "Deploy update",
    [switch]$SkipPush
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Invoke-Step {
    param(
        [string]$Name,
        [scriptblock]$Action
    )

    Write-Host "==> $Name"
    & $Action
}

function Assert-RequiredFiles {
    $required = @(
        "index.html",
        "products.html",
        "accreditation.html",
        "faq.html",
        "news.html",
        "contact.html",
        "admin.html",
        "site.js",
        "admin.js",
        "styles.css",
        "admin.css"
    )

    $missing = @($required | Where-Object { -not (Test-Path -Path $_) })
    if ($missing.Count -gt 0) {
        throw "Missing required files: $($missing -join ', ')"
    }
}

function Test-JavaScriptSyntax {
    $nodeCmd = Get-Command node -ErrorAction SilentlyContinue
    if (-not $nodeCmd) {
        Write-Host "Node not found. Skipping JS syntax check."
        return
    }

    foreach ($file in @("site.js", "admin.js", "app.js")) {
        node --check $file
        if ($LASTEXITCODE -ne 0) {
            throw "Syntax check failed for $file"
        }
    }

    Write-Host "JavaScript syntax check passed."
}

function Ensure-DeployRepo {
    param(
        [string]$Path,
        [string]$Remote,
        [string]$TargetBranch
    )

    $gitDir = Join-Path -Path $Path -ChildPath ".git"
    if (Test-Path -Path $gitDir) {
        return
    }

    if (Test-Path -Path $Path) {
        Remove-Item -Recurse -Force $Path
    }

    git clone --branch $TargetBranch $Remote $Path
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to clone deployment repository."
    }
}

function Sync-ToDeployRepo {
    param([string]$Path)

    # Use /E and explicit excludes to preserve deploy repo metadata.
    robocopy "." $Path /E /XO /XD ".deploy-tmp" ".deploy-tmp.bak" ".venv" ".git" /XF "*.pyc"
    $code = $LASTEXITCODE
    if ($code -ge 8) {
        throw "Robocopy failed with exit code $code"
    }
}

function Commit-AndPush {
    param(
        [string]$Path,
        [string]$Message,
        [string]$TargetBranch,
        [bool]$ShouldPush
    )

    Push-Location $Path
    try {
        $status = git status --porcelain
        if (-not $status) {
            Write-Host "No deployment changes detected."
            return
        }

        git add -A
        if ($LASTEXITCODE -ne 0) {
            throw "git add failed"
        }

        git commit -m $Message
        if ($LASTEXITCODE -ne 0) {
            throw "git commit failed"
        }

        if ($ShouldPush) {
            git push origin $TargetBranch
            if ($LASTEXITCODE -ne 0) {
                throw "git push failed"
            }
            Write-Host "Deployment pushed to origin/$TargetBranch."
        } else {
            Write-Host "Commit created locally (push skipped)."
        }
    }
    finally {
        Pop-Location
    }
}

Invoke-Step -Name "Validate required files" -Action { Assert-RequiredFiles }
Invoke-Step -Name "Run syntax checks" -Action { Test-JavaScriptSyntax }
Invoke-Step -Name "Ensure deploy repository" -Action {
    Ensure-DeployRepo -Path $DeployPath -Remote $RemoteUrl -TargetBranch $Branch
}
Invoke-Step -Name "Sync workspace to deploy repository" -Action {
    Sync-ToDeployRepo -Path $DeployPath
}
Invoke-Step -Name "Commit and deploy" -Action {
    Commit-AndPush -Path $DeployPath -Message $CommitMessage -TargetBranch $Branch -ShouldPush (-not $SkipPush)
}

Write-Host "Build + deploy flow complete."