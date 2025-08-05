#!/bin/bash
set -e

echo "🏗️ Building Hugo site with optimized CSS..."
./scripts/build.sh

echo "🚀 Deploying to Cloudflare Workers..."
npx wrangler deploy

echo "✅ Deployment complete: https://sofybasir.me"