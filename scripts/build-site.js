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
    await this.copyTemplate(templatePath, outputPath, content);
    
    console.log(`✅ Site built successfully for ${templateName}`);
    return outputPath;
  }

  async copyTemplate(src, dest, content) {
    const files = fs.readdirSync(src);
    
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);

      if (stat.isDirectory()) {
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        await this.copyTemplate(srcPath, destPath, content);
      } else if (file.endsWith('.html')) {
        let fileContent = fs.readFileSync(srcPath, 'utf8');
        
        // Replace placeholders with content from JSON
        fileContent = this.transformContent(fileContent, content);
        
        fs.writeFileSync(destPath, fileContent);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  transformContent(htmlContent, data) {
    // Replace simple placeholders like {{title}}
    let newContent = htmlContent.replace(/\{\{([^}]+)\}\} /g, (match, placeholder) => {
      const keys = placeholder.split('.');
      let value = data;
      for (const key of keys) {
        value = value ? value[key] : undefined;
      }
      return value !== undefined ? value : match;
    });

    return newContent;
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
