#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SiteBuilder {
  constructor() {
    this.templatesDir = path.join(__dirname, '..');
    this.generatedDir = path.join(__dirname, '..', 'generated-site');
  }

  async build(templateName, config) {
    const templatePath = path.join(this.templatesDir, templateName);
    const outputPath = this.generatedDir;

    // Ensure output directory exists
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Copy template files
    await this.copyTemplate(templatePath, outputPath);
    
    // Apply customizations from agent
    await this.applyCustomizations(outputPath, config);
    
    console.log(`✅ Site built successfully for ${templateName}`);
    return outputPath;
  }

  async copyTemplate(src, dest) {
    const files = fs.readdirSync(src);
    
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);

      if (stat.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        await this.copyTemplate(srcPath, destPath);
      } else if (file.endsWith('.html')) {
        let content = fs.readFileSync(srcPath, 'utf8');
        
        // Replace placeholders with agent-generated content
        content = this.transformContent(content);
        
        fs.writeFileSync(destPath, content);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  transformContent(content) {
    // Replace template placeholders with actual content
    content = content.replace(/\{\{CONTENT\}\}/g, 'Custom Generated Content');
    content = content.replace(/\{\{TITLE\}\}/g, 'AI-Generated Site');
    content = content.replace(/\{\{DESCRIPTION\}\}/g, 'Powered by Agent Automation');
    
    return content;
  }

  async applyCustomizations(outputPath, config) {
    // Apply any custom configurations from the agent
    if (config && config.customStyles) {
      const stylePath = path.join(outputPath, 'custom-styles.css');
      fs.writeFileSync(stylePath, config.customStyles);
    }
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const templateArg = args.find(arg => arg.startsWith('--template='));
  
  if (!templateArg) {
    console.error('❌ Please specify template with --template=name');
    process.exit(1);
  }
  
  const templateName = templateArg.split('=')[1];
  
  const builder = new SiteBuilder();
  await builder.build(templateName, {});
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { SiteBuilder };