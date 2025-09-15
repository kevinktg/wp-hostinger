# Agent-Driven Content Workflow

This project uses an agent-driven workflow to manage the content of the static sites.

## How it Works

The `scripts/build-site.js` script acts as a build agent. It takes a template directory and a content file as input, and generates a static HTML site.

The content for each site is stored in a corresponding JSON file in the `.agent-content` directory. For example, the content for the `01-ai-portfolio-agency` site is in `.agent-content/01-ai-portfolio-agency-content.json`.

## Modifying Content

To modify the content of a site, simply edit the corresponding JSON file in the `.agent-content` directory. The JSON files contain structured data for the site's title, hero section, services, and more.

The build script replaces placeholders in the HTML templates (e.g., `{{hero.headline}}`) with the values from the JSON file.

## Rebuilding Sites

After modifying the content, you can rebuild a site using the build command specified in the `README.md` file.

When you push your changes to the `main` branch, the GitHub Actions workflow will automatically rebuild and deploy all the sites.
