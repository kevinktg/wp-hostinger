# 🚀 Omnara + Flow - Quick Start Guide

## ✅ Status: READY TO GO!

- **Omnara**: v1.6.1 ✅ Installed
- **Crush CLI**: v0.7.4 ✅ Installed  
- **Claude Code**: Active ✅
- **System**: RYZEN 5 5500 optimized ✅

## 🎯 Optimal Settings for Flow

### **Start Omnara (3 modes)**

1. **Webhook Server** (Real-time monitoring)
   ```bash
   start-omnara.bat
   ```
   - Dashboard sync enabled
   - Real-time agent monitoring
   - Perfect for development

2. **Headless Mode** (Dashboard controlled)
   ```bash
   start-omnara-headless.bat
   ```
   - Controlled via https://app.omnara.ai
   - Mobile app access
   - Best for remote work

3. **MCP Server** (Claude Code integration)
   ```bash
   start-omnara-mcp.bat
   ```
   - Enhanced Claude Code features
   - Git diff tracking
   - File system integration

### **Use Crush CLI**
```bash
# Interactive mode
crush

# Direct prompt
echo "your question" | crush

# With file input
crush < input.txt
```

### **Access Dashboard**
- **Web**: https://app.omnara.ai
- **Features**: Multi-agent monitoring, cross-platform sync
- **Mobile**: Full mobile app support

## 🔧 Troubleshooting

### **Unicode Issues (Windows)**
If you see encoding errors:
1. Run `chcp 65001` in terminal
2. Use the provided .bat files (encoding pre-configured)

### **Authentication**
If auth fails:
1. Visit: https://omnara.com/cli-auth
2. Copy API key manually
3. Set via environment: `set OMNARA_API_KEY=your_key`

### **Performance Optimization**
Current optimal settings for your RYZEN 5 5500:
- **CPU Usage**: Target 60% (current optimal)
- **RAM**: Using ~21GB/32GB (excellent)
- **Concurrent Agents**: Max 4 (configured)
- **Threading**: 8 threads (optimal for 6-core CPU)

## 🎮 Ready Commands

```bash
# Start full AI ecosystem
start-omnara.bat

# Quick Claude Code enhancement  
start-omnara-mcp.bat

# Remote dashboard control
start-omnara-headless.bat

# Terminal AI assistant
crush

# Check everything is working
omnara --version && crush --version
```

**Your optimal flow setup is complete! 🎉**