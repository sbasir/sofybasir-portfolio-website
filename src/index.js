// Cloudflare Worker for Sofy Basir Portfolio
// Serves static Hugo site with analytics tracking

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const startTime = Date.now();

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
    
    // Analytics data point
    const analyticsData = {
      responseTime: Date.now() - startTime,
      method: request.method,
      path: url.pathname,
      userAgent: request.headers.get('User-Agent') || 'unknown',
      country: request.cf?.country || 'unknown',
      city: request.cf?.city || 'unknown',
      referer: request.headers.get('Referer') || 'direct'
    };

    console.log(analyticsData);

    return response;
  },
};