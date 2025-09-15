#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const demoOrder = [
  '01-ai-portfolio-agency',
  '02-saas-landing',
  '03-startup-launch',
  '04-nonprofit-cause',
  '05-ecommerce-marketplace'
];

class SiteBuilder {
  constructor() {
    this.templatesDir = path.join(__dirname, '..');
    this.generatedDir = path.join(__dirname, '..', 'generated-site');
  }

  async build(templateName, contentPath) {
    const templatePath = path.join(this.templatesDir, templateName);
    const outputPath = path.join(this.generatedDir, templateName);

    // Ensure output directory exists
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    // Read content file
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

    // Copy template files
    await this.copyTemplate(templatePath, outputPath, content, templateName);
    
    console.log(`✅ Site built successfully for ${templateName}`);
    return outputPath;
  }

  async copyTemplate(src, dest, content, templateName) {
    const files = fs.readdirSync(src);
    
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);

      if (stat.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        await this.copyTemplate(srcPath, destPath, content, templateName);
      } else if (file.endsWith('.html')) {
        let fileContent = fs.readFileSync(srcPath, 'utf8');
        
        // Replace placeholders with content from JSON
        fileContent = this.transformContent(fileContent, content, templateName);
        // Inject next-demo navigation when applicable
        fileContent = this.injectNextDemoNav(fileContent, templateName);
        
        fs.writeFileSync(destPath, fileContent);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  transformContent(htmlContent, data, _templateName) {
    // Replace simple placeholders like {{title}}
    let newContent = htmlContent.replace(/\{\{([^}]+)\}\}/g, (match, placeholder) => {
      const keys = placeholder.split('.');
      let value = data;
      for (const key of keys) {
        value = value ? value[key] : undefined;
      }
      return value !== undefined ? value : match;
    });

    return newContent;
  }

  injectNextDemoNav(htmlContent, templateName) {
    try {
      const currentIndex = demoOrder.indexOf(templateName);
      if (currentIndex === -1) return htmlContent;
      const nextTemplate = demoOrder[(currentIndex + 1) % demoOrder.length];
      const href = `../${nextTemplate}/`;
      const snippet = `\n<!-- next-demo button injected -->\n<style>\n  .next-demo-btn{position:fixed;right:16px;bottom:16px;background:#1f6feb;color:#fff;font-weight:600;border-radius:999px;padding:10px 14px;text-decoration:none;box-shadow:0 6px 18px rgba(31,110,235,.35);z-index:9999;border:1px solid rgba(255,255,255,.15)}\n  .next-demo-btn:hover{background:#1a5ac3}\n</style>\n<a class=\"next-demo-btn\" href=\"${href}\" aria-label=\"Next demo\">Next ▶</a>\n`;
      if (htmlContent.includes('</body>')) {
        return htmlContent.replace('</body>', `${snippet}</body>`);
      }
      return htmlContent + snippet;
    } catch {
      return htmlContent;
    }
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const templateArg = args.find(arg => arg.startsWith('--template='));
  const contentArg = args.find(arg => arg.startsWith('--content='));
  
  if (!templateArg || !contentArg) {
    console.error('❌ Please specify template and content with --template=name and --content=path/to/content.json');
    process.exit(1);
  }
  
  const templateName = templateArg.split('=')[1];
  const contentPath = path.resolve(contentArg.split('=')[1]);
  
  const builder = new SiteBuilder();
  await builder.build(templateName, contentPath);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { SiteBuilder };
