# 2025 Bootstrap Sites

This repository contains a collection of award-winning Bootstrap templates with AI agent automation for 2025.

## Project Structure

- **Static Sites**: The numbered directories (`01-ai-portfolio-agency`, `02-saas-landing`, etc.) are static HTML websites.
- **Next.js Site**: The `06-architect` directory contains a Next.js project.
- **Content**: The `.agent-content` directory holds the JSON files that populate the content of the static sites.
- **Build Script**: The `scripts/build-site.js` script is a custom tool to build the static sites from the templates and content files.
- **Generated Sites**: The `generated-site` directory is where the built sites are placed.

## Build Process

To build a single site, run the following command:

```bash
node scripts/build-site.js --template=<template-name> --content=.agent-content/<template-name>-content.json
```

Replace `<template-name>` with the name of the site you want to build (e.g., `01-ai-portfolio-agency`).

## Deployment

This project is set up for automatic deployment to GitHub Pages. To deploy the sites, simply push your changes to the `main` branch. A GitHub Actions workflow will automatically build and deploy the sites.

The sites will be available at `https://<your-username>.github.io/wp-hostinger`.
