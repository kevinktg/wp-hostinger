<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# SillyTavern ↔ ComfyUI Integration Guide: Complete Setup for 12GB VRAM \& 32GB RAM

## Executive Summary

This comprehensive guide provides the complete step-by-step process for connecting SillyTavern to ComfyUI with optimal configurations for systems with 12GB VRAM and 32GB RAM. The setup leverages SillyTavern v1.13.1 (latest as of August 2025) with built-in ComfyUI integration, eliminating the need for deprecated SillyTavern-Extras. Key optimizations include VRAM management settings, workflow configurations, and performance tweaks specifically designed for mid-tier GPU setups.[^1_1][^1_2][^1_3]

## Core Analysis

### Prerequisites \& System Requirements

**Hardware Specifications:**

- **Minimum**: 8GB VRAM, 16GB RAM[^1_4]
- **Recommended**: 12GB VRAM, 32GB RAM (optimal for this guide)[^1_3][^1_5]
- **Storage**: 50GB+ free space for models
- **GPU**: NVIDIA RTX 3000+ series recommended[^1_4]

**Software Dependencies:**

- **Node.js**: v20+ LTS (v18 reached EOL)[^1_6]
- **Git**: Latest version for repository management[^1_2][^1_7]
- **Python**: 3.10+ (for ComfyUI)[^1_8][^1_9]
- **Windows/Linux/macOS**: Cross-platform compatible[^1_10]


### Installation Sequence Overview

The integration process follows a specific order to prevent conflicts:

1. **Update System Dependencies** → Node.js \& Git
2. **Install/Update SillyTavern** → v1.13.1 with built-in image generation[^1_6]
3. **Install/Update ComfyUI** → Latest version with Manager[^1_11]
4. **Configure VRAM Optimization** → 12GB VRAM settings[^1_12][^1_13]
5. **Setup Workflow Integration** → API format workflows[^1_14][^1_15]
6. **Test \& Optimize Performance** → Final tweaks

## Key Data

**Performance Benchmarks (12GB VRAM/32GB RAM):**

- **Model Loading Time**: 30-120 seconds (depending on model)[^1_16][^1_3]
- **Generation Speed**: 1.5-3.0s/iteration with optimized settings[^1_12]
- **VRAM Usage**: 8-11GB peak (with 1-4GB reserved)[^1_13]
- **RAM Utilization**: 15-25GB during active generation[^1_16]

**Compatible Models for 12GB VRAM:**

- **FLUX Schnell**: 11GB (fast, 4-step generation)[^1_5][^1_3]
- **SDXL**: 6-8GB (versatile, good quality)[^1_17]
- **SD 1.5**: 2-4GB (lightweight, fast)[^1_17]
- **FLUX Dev FP8**: 12GB (high quality, slower)[^1_18][^1_19]


## Strategic Implementations

### Step 1: System Preparation

**Update Node.js:**

```bash
# Check current version
node --version

# Download Node.js v20+ LTS from nodejs.org
# Install with default settings
```

**Install/Update Git:**

```bash
# Windows: Download from git-scm.com
# Linux: sudo apt update && sudo apt install git
# macOS: brew install git
```


### Step 2: SillyTavern Installation/Update

**Fresh Installation (Recommended Method):**

```bash
# Clone SillyTavern repository
git clone https://github.com/SillyTavern/SillyTavern -b release

cd SillyTavern

# Install dependencies
npm install

# Start SillyTavern
npm start
```

**Update Existing Installation:**

```bash
cd SillyTavern

# Pull latest changes
git pull

# Update dependencies if needed
npm install

# Start updated version
npm start
```

**Alternative: SillyTavern Launcher Method:**

```bash
# Download launcher
git clone https://github.com/SillyTavern/SillyTavern-Launcher.git

cd SillyTavern-Launcher

# Windows: Run installer.bat
# Linux/macOS: chmod +x install.sh && ./install.sh
```


### Step 3: ComfyUI Installation \& VRAM Optimization

**Install ComfyUI:**

```bash
# Clone ComfyUI repository
git clone https://github.com/comfyanonymous/ComfyUI.git

cd ComfyUI

# Install Python dependencies
pip install -r requirements.txt

# Launch ComfyUI with optimized settings
python main.py --listen 127.0.0.1 --port 8188 --reserve-vram 2.0 --normalvram --fp16-vae
```

**Install ComfyUI Manager (Essential):**

```bash
cd ComfyUI/custom_nodes

# Clone ComfyUI Manager
git clone https://github.com/ltdrdata/ComfyUI-Manager.git

# Restart ComfyUI to load the manager
```

**VRAM Optimization Launch Parameters:**

- `--reserve-vram 2.0`: Reserves 2GB VRAM for system stability[^1_12]
- `--normalvram`: Balanced VRAM usage mode[^1_13]
- `--fp16-vae`: Uses 16-bit precision for VAE (saves VRAM)[^1_13]
- `--listen 127.0.0.1`: Allows external connections[^1_14]
- `--port 8188`: Default port for SillyTavern integration[^1_14]


### Step 4: SillyTavern-ComfyUI Connection

**Configure Image Generation Extension:**

1. Start SillyTavern and navigate to **Extensions** tab[^1_20]
2. Expand **"Image Generation"** section[^1_20]
3. **ComfyUI URL**: Enter `http://127.0.0.1:8188`[^1_14]
4. Click **"Connect"** (ensure ComfyUI is running)[^1_14]
5. Verify connection shows green status[^1_1]

### Step 5: Workflow Configuration

**Creating API-Format Workflows:**

1. **In ComfyUI**: Settings → Enable **"Dev Mode"**[^1_15][^1_14]
2. Build your desired workflow in ComfyUI
3. Use **"Save (API Format)"** to export JSON[^1_15][^1_14]
4. **In SillyTavern**: Create new workflow → Paste JSON[^1_14]

**Essential Placeholders for Integration:**

```json
{
  "positive_prompt": "{{prompt}}",
  "negative_prompt": "{{negative_prompt}}",
  "width": {{width}},
  "height": {{height}},
  "steps": {{steps}},
  "cfg": {{scale}},
  "seed": {{seed}},
  "sampler_name": "{{sampler}}",
  "scheduler": "{{scheduler}}"
}
```

**Optimized Settings for 12GB VRAM:**

- **Resolution**: 512×768 or 768×512 (balanced speed/quality)[^1_17]
- **Steps**: 20-30 for SDXL, 4-6 for FLUX Schnell[^1_3][^1_17]
- **CFG Scale**: 7-9 for SDXL, 1-2 for FLUX[^1_17]
- **Sampler**: Euler A or DPM++ 2M Karras[^1_17]
- **Scheduler**: Normal or Karras[^1_17]


### Step 6: Performance Optimization

**System-Level Optimizations:**

**Windows Virtual Memory:**

- Control Panel → System → Advanced → Performance → Virtual Memory
- Set pagefile to 1.5× RAM size (48GB for 32GB RAM)[^1_16]

**ComfyUI Launch Script for Windows:**

```batch
@echo off
cd /d "C:\path\to\ComfyUI"
python main.py --listen 127.0.0.1 --port 8188 --reserve-vram 2.0 --normalvram --fp16-vae --preview-method auto
pause
```

**SillyTavern Generation Settings:**

- **Edit prompts before generation**: ✓ (prevents poor LLM prompts)[^1_17]
- **Use function tool**: ✓ (enables natural language requests)[^1_1]
- **Interactive mode**: ✓ (allows conversational image requests)[^1_1]


### Troubleshooting Common Issues

**Connection Issues:**

- **Error**: "Could not validate ComfyUI API"[^1_21]
    - **Solution**: Ensure ComfyUI runs with `--listen` parameter
    - Check firewall settings for port 8188

**VRAM Issues:**

- **Error**: "CUDA out of memory"[^1_16]
    - **Solution**: Increase `--reserve-vram` value[^1_12]
    - Use `--lowvram` instead of `--normalvram`[^1_13]
    - Switch to FP8 models or smaller resolutions[^1_19][^1_18]

**Workflow Issues:**

- **Error**: "Node not found" in workflow[^1_22]
    - **Solution**: Install missing custom nodes via ComfyUI Manager[^1_11]
    - Update ComfyUI and restart


## Advanced Features \& Extensions

**ComfyUI Manager Integration:**

- **Auto-Update**: Keeps ComfyUI and nodes current[^1_11]
- **Missing Node Detection**: Automatically installs required nodes[^1_11]
- **Model Hub**: Direct model downloads from repositories[^1_11]

**SillyTavern Integration Benefits:**

- **Character-Aware Generation**: Uses character descriptions in prompts[^1_17]
- **Context-Aware Images**: Incorporates chat history for relevant images[^1_14]
- **Style Presets**: Quick switching between different art styles[^1_14]
- **Automatic Prompt Enhancement**: LLM improves user prompts before sending to ComfyUI[^1_17]


## Further Inquiry

**Performance Optimization**: How can workflow performance be further optimized for specific model types (FLUX vs SDXL) while maintaining quality standards for character generation in SillyTavern roleplay scenarios?

**Future Compatibility**: What monitoring approach should be implemented to ensure continued compatibility as both SillyTavern and ComfyUI receive frequent updates, particularly regarding workflow format changes?

**Advanced Integration**: How might custom schedulers, samplers, or specialized nodes affect VRAM efficiency and generation quality for specific use cases in interactive AI character conversations?
<span style="display:none">[^1_23][^1_24][^1_25][^1_26][^1_27][^1_28][^1_29][^1_30][^1_31][^1_32][^1_33][^1_34][^1_35][^1_36][^1_37][^1_38][^1_39][^1_40]</span>

<div style="text-align: center">⁂</div>

[^1_1]: https://www.youtube.com/watch?v=bHqJ6mo1P-4

[^1_2]: https://docs.sillytavern.app/installation/windows/

[^1_3]: https://www.reddit.com/r/comfyui/comments/1ela10f/a_guide_for_running_the_new_flux_model_using_12gb/

[^1_4]: https://www.reddit.com/r/SillyTavernAI/comments/18toshx/silly_tavern_with_comfyui/

[^1_5]: https://aicharactercards.com/guides/sillytavern-installation-instructions/

[^1_6]: https://comfyui-wiki.com/en/tutorial/advanced/image/flux/flux-1-dev-t2i

[^1_7]: https://www.youtube.com/watch?v=JPiNFtoBi_Q

[^1_8]: https://docs.sillytavern.app/installation/

[^1_9]: https://www.youtube.com/watch?v=chfUGCE0AVY

[^1_10]: https://www.youtube.com/watch?v=LtzAbk6LIXA

[^1_11]: https://www.youtube.com/watch?v=gLigp7kimLg

[^1_12]: https://www.youtube.com/watch?v=0plLyIp1xbI

[^1_13]: https://www.reddit.com/r/SillyTavernAI/comments/1ko1zh3/optimized_comfyui_setup_workflow_for_st_image/

[^1_14]: https://github.com/SkinnyDevi/skdv_comfyui

[^1_15]: https://www.youtube.com/watch?v=5q_9JEbwKMQ

[^1_16]: https://docs.sillytavern.app/extensions/stable-diffusion/

[^1_17]: https://www.viewcomfy.com/blog/integrate-comfyui-workflows-into-your-apps-via-api

[^1_18]: https://openart.ai/workflows/gamingdaveuk/silly-tavern-character-image-creator-v2-with-all-32-emotion-images-withwithout-local-llm-wip/FpgWgMYEHq91GITLzpGU

[^1_19]: https://github.com/ceruleandeep/SillyTavern-ComfierPlaceholders

[^1_20]: https://news.ycombinator.com/item?id=40626014

[^1_21]: https://www.youtube.com/watch?v=nuAGOYxTfGc

[^1_22]: https://www.youtube.com/watch?v=7ODVE7So7j0

[^1_23]: https://github.com/SillyTavern/SillyTavern/issues/3208

[^1_24]: https://github.com/Comfy-Org/ComfyUI-Manager

[^1_25]: https://www.reddit.com/r/StableDiffusion/comments/1ewq140/manually_setting_vram_limits_in_comfy_for/

[^1_26]: https://docs.sillytavern.app/installation/updating/

[^1_27]: https://stable-diffusion-art.com/comfyui-manager-install/

[^1_28]: https://www.nextdiffusion.ai/tutorials/how-to-run-wan22-image-to-video-gguf-models-in-comfyui-low-vram

[^1_29]: https://docs.sillytavern.app

[^1_30]: https://www.youtube.com/watch?v=Sguq_I2uvt0

[^1_31]: https://docs.comfy.org/interface/settings/server-config

[^1_32]: https://github.com/SillyTavern/SillyTavern/releases

[^1_33]: https://github.com/comfyanonymous/ComfyUI/discussions/4457

[^1_34]: https://www.youtube.com/watch?v=kiWuQl2f_fs

[^1_35]: https://www.reddit.com/r/SillyTavernAI/comments/1864ulm/trying_to_get_image_generation_to_work/

[^1_36]: https://gitea.it/rixty/SillyTavern/commit/8036a07df4e5968b8a16df21400a3c9b96c026df?style=split\&whitespace=show-all\&show-outdated=

[^1_37]: https://github.com/comfyanonymous/ComfyUI/issues/4318

[^1_38]: https://www.reddit.com/r/SillyTavernAI/comments/189fq0b/comfyui_workflows/

[^1_39]: https://blogs.novita.ai/the-ultimate-guide-to-sillytavern-stable-diffusion/

[^1_40]: https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/be2fa7d1a2842e18336cda89c371081f/bf417861-a8c5-4ad4-8864-c9e19181b035/a54ff182.md

