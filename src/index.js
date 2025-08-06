// Cloudflare Worker for Sofy Basir Portfolio
// Serves static Hugo site with analytics tracking

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    let response;
    
    // Future API routes can go here
    if (url.pathname.startsWith("/api/")) {
      response = new Response(
        JSON.stringify({ 
          message: "API endpoints coming soon!",
          version: "1.0.0"
        }), 
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      // Serve static assets (Hugo site)
      response = await env.ASSETS.fetch(request);
    }

    return response;
  },
};