export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Route /event/* to event/index.html
    if (url.pathname.startsWith('/event/')) {
      const newUrl = new URL('/event/index.html', url.origin);
      return env.ASSETS.fetch(newUrl.toString());
    }
    
    // Everything else serves normally
    return env.ASSETS.fetch(request);
  }
}
