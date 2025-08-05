# Sofy Basir - Professional Portfolio

A clean, modern Hugo-based portfolio website showcasing 25+ years of technical leadership and AWS infrastructure expertise.

## 🚀 Quick Start

### Local Development with Docker
```bash
# Start Hugo development server
docker-compose up -d

# View site at http://localhost:1313
# Auto-reloads on file changes
```

### Production Deployment to Cloudflare Workers
```bash
# 1. Build the Hugo site
docker run --rm -v $(pwd)/site:/src -w /src ghcr.io/gohugoio/hugo:v0.148.2 --gc --minify

# 2. Deploy to Cloudflare
npx wrangler deploy

# Live at: https://sofybasir.me
```

### Local Development with Hugo CLI
```bash
# If you have Hugo installed locally
hugo server --buildDrafts --buildFuture

# Build for production
hugo --gc --minify

# View site at http://localhost:1313
```

## 📁 Project Structure

```
├── site/                # Hugo website
│   ├── layouts/         # Hugo templates
│   ├── static/          # Static assets (images, files)
│   ├── content/         # Markdown content files
│   ├── archetypes/      # Content templates
│   └── hugo.toml        # Site configuration
├── src/                 # Cloudflare Worker code
├── wrangler.jsonc       # Cloudflare Workers configuration
├── docker-compose.yml   # Docker development setup
├── README.md           # Documentation
└── .gitignore          # Git ignore rules
```

## ✨ Features

- **Responsive Design**: Works on all devices
- **Dark/Light Mode**: Toggle theme preference
- **Performance Optimized**: Fast loading with Tailwind CSS
- **Professional Layout**: Clean, modern interface
- **Interactive Elements**: Smooth scrolling navigation
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Built With

- **Hugo**: Fast static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, consistent icons
- **Docker**: Containerized development environment

## 📝 Content

The portfolio highlights:
- 25+ years of progressive industry experience
- AWS Pioneer status since 2013
- 3,500+ verified commits and 830,000+ lines of code since 2018 in GyG demonstrating technical excellence
- Technical leadership at Guzman y Gomez (Primary AWS Infrastructure Architect)
- International team management experience (FDA-regulated environments)
- Industry-first implementations and innovations (Australian-first Oracle ATG cloud migration)

## 🚀 Deployment

**Current Setup:** Deployed on **Cloudflare Workers** with static assets at [https://sofybasir.me](https://sofybasir.me)

**Alternative Platforms:** This Hugo site can also be deployed on:
- Netlify
- Vercel  
- GitHub Pages
- AWS S3 + CloudFront

**Prerequisites for Cloudflare Workers:**
```bash
# Authenticate once
npx wrangler login

# Then deploy using the commands above
```

---

*DevSecOps Professional & AWS Infrastructure Architect*