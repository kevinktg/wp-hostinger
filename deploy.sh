# Quick Deploy Script - DISABLED FOR CI BREAK

echo "⚠️  DEPLOYMENT SCRIPT DISABLED TO PREVENT AUTOMATED RUNS"
echo "🚀 Starting 2025 Bootstrap Sites Deployment"
echo "=========================================="

# Get user input
read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter repository name: " REPO_NAME
read -p "Select template (1-5): 
1. AI Portfolio Agency
2. SaaS Landing
3. Startup Launch
4. Nonprofit Cause
5. E-commerce Marketplace
> " TEMPLATE_NUM

# Map template numbers to directories
case $TEMPLATE_NUM in
  1) TEMPLATE_DIR="01-ai-portfolio-agency" ;;
  2) TEMPLATE_DIR="02-saas-landing" ;;
  3) TEMPLATE_DIR="03-startup-launch" ;;
  4) TEMPLATE_DIR="04-nonprofit-cause" ;;
  5) TEMPLATE_DIR="05-ecommerce-marketplace" ;;
  *) echo "❌ Invalid template number!"; exit 1 ;;
esac

echo "📦 Deploying $TEMPLATE_DIR to https://$GITHUB_USER.github.io/$REPO_NAME/"

# Initialize git repository if needed
if [ ! -d ".git" ]; then
  git init
  git branch -m main
fi

# Create GitHub repository (requires authentication)
echo "🔗 Creating GitHub repository..."
gh repo create $REPO_NAME --public --source=. --remote=origin --push

# Enable GitHub Pages
gh pages deploy --branch=main

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://$GITHUB_USER.github.io/$REPO_NAME/"
echo ""
echo "💡 Tips:"
echo "  - Custom domain: Configure in repository settings"
echo "  - Branding: Use shared-assets/branding-toolkit.html"
echo "  - Agents: Check Agents.md files for automation tips"