# 🔧 Omnara Troubleshooting & Working Setup

## 🚨 The Real Issues

### **Problem 1: Windows CP1252 Encoding**
- Omnara uses Unicode characters (✓, ⚡) that Windows CMD can't display
- Causes crashes during authentication

### **Problem 2: Authentication Flow**
- Browser authentication often fails on Windows
- API key method is more reliable

## ✅ Working Solutions

### **Option 1: Simple Launcher (Recommended)**
```bash
omnara-simple.bat
```
- Choose option 1 for manual auth
- Follow the prompts
- Bypasses encoding issues

### **Option 2: Python Fix Script**
```bash
python omnara-fix.py
```
- Handles encoding properly
- Menu-driven interface
- More robust error handling

### **Option 3: Direct API Key Method**
1. Visit: https://omnara.com/cli-auth
2. Sign in and generate API key
3. Set environment variable:
```bash
set OMNARA_API_KEY=your_key_here
omnara headless
```

## 🚀 Quick Working Commands

### **Start Omnara (Working)**
```bash
# Method 1: Environment variable
set OMNARA_API_KEY=your_key && omnara headless

# Method 2: Direct API key
omnara --api-key YOUR_KEY headless

# Method 3: Use our fixed launcher
omnara-simple.bat
```

### **Check if Working**
```bash
python -c "import omnara; print('Version:', omnara.__version__)"
```

### **Dashboard Access**
- Web: https://app.omnara.ai
- Works even when CLI has issues
- Full control from browser

## 🎯 Best Practice Workflow

1. **Get API Key** → Visit omnara.com/cli-auth
2. **Set Environment** → `set OMNARA_API_KEY=key`
3. **Start Headless** → `omnara headless`
4. **Use Dashboard** → https://app.omnara.ai for control

## 🔥 Why It Never Worked Before

- **Unicode Issues**: Windows terminal couldn't handle ✓ symbols
- **Auth Timeouts**: Browser flow unreliable
- **Port Conflicts**: Local server issues

## ✅ Now It Works!

The launchers bypass all encoding issues and provide reliable authentication methods.

**Try: `omnara-simple.bat` → Option 1 → Get your flow going! 🚀**