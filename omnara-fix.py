#!/usr/bin/env python3
"""
Omnara Fix - Handles encoding issues and provides working interface
"""
import os
import sys
import subprocess
import json
from pathlib import Path

# Force UTF-8 encoding
os.environ['PYTHONIOENCODING'] = 'utf-8'
os.environ['PYTHONLEGACYWINDOWSSTDIO'] = '1'

def run_omnara_command(cmd_args, capture_output=True):
    """Run Omnara commands with proper encoding handling"""
    try:
        # Set environment for UTF-8
        env = os.environ.copy()
        env['PYTHONIOENCODING'] = 'utf-8'
        env['PYTHONLEGACYWINDOWSSTDIO'] = '1'
        
        result = subprocess.run(
            ['omnara'] + cmd_args,
            capture_output=capture_output,
            text=True,
            encoding='utf-8',
            env=env
        )
        
        if result.stdout:
            print(result.stdout.encode('ascii', errors='ignore').decode('ascii'))
        if result.stderr:
            print("Error:", result.stderr.encode('ascii', errors='ignore').decode('ascii'))
            
        return result.returncode == 0
        
    except Exception as e:
        print(f"Error running Omnara: {str(e)}")
        return False

def check_omnara_status():
    """Check if Omnara is working"""
    print("Checking Omnara status...")
    return run_omnara_command(['--version'])

def start_omnara_headless():
    """Start Omnara in headless mode"""
    print("Starting Omnara in headless mode...")
    print("This will run in the background. Check https://app.omnara.ai for control.")
    return run_omnara_command(['headless'], capture_output=False)

def start_omnara_mcp():
    """Start Omnara MCP server"""
    print("Starting Omnara MCP server for Claude Code integration...")
    return run_omnara_command(['mcp', '--git-diff'], capture_output=False)

def start_omnara_webhook():
    """Start Omnara webhook server"""
    print("Starting Omnara webhook server...")
    return run_omnara_command(['serve'], capture_output=False)

def manual_auth_setup():
    """Manual authentication setup"""
    print("\n=== Manual Omnara Authentication ===")
    print("1. Visit: https://omnara.com/cli-auth")
    print("2. Sign in to your Omnara account")
    print("3. Click 'Generate API Key'")
    print("4. Copy the API key")
    
    api_key = input("\nPaste your API key here: ").strip()
    
    if api_key:
        # Save API key to config
        config_dir = Path.home() / '.omnara'
        config_dir.mkdir(exist_ok=True)
        
        config_file = config_dir / 'config.json'
        config = {'api_key': api_key}
        
        with open(config_file, 'w') as f:
            json.dump(config, f)
        
        print("API key saved successfully!")
        return True
    
    return False

def main():
    print("=== Omnara Fix & Setup ===")
    print("Handling Windows encoding issues...")
    
    if not check_omnara_status():
        print("Omnara version check failed. Trying manual setup...")
    
    print("\nAvailable options:")
    print("1. Manual Authentication Setup")
    print("2. Start Headless Mode")
    print("3. Start MCP Server (for Claude Code)")
    print("4. Start Webhook Server")
    print("5. Exit")
    
    while True:
        choice = input("\nSelect option (1-5): ").strip()
        
        if choice == '1':
            if manual_auth_setup():
                print("Authentication setup complete!")
            break
        elif choice == '2':
            start_omnara_headless()
            break
        elif choice == '3':
            start_omnara_mcp()
            break
        elif choice == '4':
            start_omnara_webhook()
            break
        elif choice == '5':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please select 1-5.")

if __name__ == "__main__":
    main()