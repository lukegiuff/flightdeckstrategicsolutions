#!/bin/bash

echo "🚀 Deploying Cloudflare Worker for Decap CMS OAuth..."

# Navigate to worker directory
cd decap-proxy

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Deploy the worker
echo "🔧 Deploying worker..."
npx wrangler deploy

echo "✅ Worker deployed successfully!"
echo ""
echo "Next steps:"
echo "1. Go to https://dash.cloudflare.com"
echo "2. Navigate to Workers & Pages > Your Worker"
echo "3. Go to Settings > Environment Variables"
echo "4. Add OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET"
echo "5. Update public/config.yml with your worker URL"
echo ""
echo "Your worker URL: https://decap-proxy-flightdeck.YOUR_USERNAME.workers.dev"
