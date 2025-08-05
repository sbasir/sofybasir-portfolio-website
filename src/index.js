// Cloudflare Worker for Sofy Basir Portfolio
// Serves static Hugo site with room for future API endpoints

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Future API routes can go here
    if (url.pathname.startsWith("/api/")) {
      return new Response(
        JSON.stringify({ 
          message: "API endpoints coming soon!",
          version: "1.0.0"
        }), 
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    
    // Serve static assets (Hugo site)
    return env.ASSETS.fetch(request);
  },
};