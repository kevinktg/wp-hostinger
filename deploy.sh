# Quick Deploy Script

echo "🚀 Starting 2025 Bootstrap Sites Deployment"
echo "=========================================="

# Get user input
GITHUB_USER=${GITHUB_USER:-"$1"}
REPO_NAME=${REPO_NAME:-"$2"}
TEMPLATE_NUM=${TEMPLATE_NUM:-"$3"}

if [ -z "$GITHUB_USER" ] || [ -z "$REPO_NAME" ] || [ -z "$TEMPLATE_NUM" ]; then
  echo "Usage: GITHUB_USER=<user> REPO_NAME=<repo> TEMPLATE_NUM=1 bash deploy.sh"
  echo "Or: bash deploy.sh <user> <repo> <template_num>"
  exit 1
fi

# Map template numbers to directories
case $TEMPLATE_NUM in
  1) TEMPLATE_DIR="01-ai-portfolio-agency" ;;
  2) TEMPLATE_DIR="02-saas-landing" ;;
  3) TEMPLATE_DIR="03-startup-launch" ;;
  4) TEMPLATE_DIR="04-nonprofit-cause" ;;
  5) TEMPLATE_DIR="05-ecommerce-marketplace" ;;
  *) echo "❌ Invalid template number!"; exit 1 ;;
esac

echo "📦 Building $TEMPLATE_DIR to generated-site and deploying to https://$GITHUB_USER.github.io/$REPO_NAME/"

# Build selected template into generated-site
node scripts/build-site.js --template=$TEMPLATE_DIR || { echo "❌ Build failed"; exit 1; }

# Prepare a temporary publish directory
PUBLISH_DIR=$(mktemp -d)
cp -r generated-site/* "$PUBLISH_DIR/" 2>/dev/null || true

# Create a .nojekyll to avoid Jekyll processing issues
touch "$PUBLISH_DIR/.nojekyll"

# Initialize a throwaway repo for the pages deploy if needed
pushd "$PUBLISH_DIR" >/dev/null
git init >/dev/null
git add .
git commit -m "Deploy $TEMPLATE_DIR" >/dev/null || true
popd >/dev/null

# Create the GitHub repository if it doesn't exist and set origin
if ! gh repo view $GITHUB_USER/$REPO_NAME >/dev/null 2>&1; then
  echo "🔗 Creating GitHub repository..."
  gh repo create $REPO_NAME --public --source=. --remote=origin --push || true
fi

echo "🛰️ Deploying static site to GitHub Pages..."
gh pages deploy --repo "$GITHUB_USER/$REPO_NAME" --branch gh-pages --dist "$PUBLISH_DIR" --message "Deploy $TEMPLATE_DIR" || {
  echo "❌ gh pages deploy failed. Ensure GitHub CLI is authenticated."
  exit 1
}

echo "✅ Deployment complete!"
echo "🌐 Your site is available at: https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "💡 Tips:"
echo "  - Custom domain: Configure in repository settings"
echo "  - Branding: Use shared-assets/branding-toolkit.html"
echo "  - Agents: Check Agents.md files for automation tips"