#!/bin/bash
set -e

echo "🏗️ Building Hugo site with optimized Tailwind CSS..."

# Navigate to site directory
cd site

# Build with local Hugo and system-wide Tailwind CSS
hugo --gc --minify

echo "✅ Build complete! Output in site/public/"