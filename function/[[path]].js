
export async function onRequest(context) { const url = new URL(context.request.url); // Redirect .html URLs to clean URLs if (url.pathname.toLowerCase().endsWith(".html")) { const cleanUrl = new URL(url); cleanUrl.pathname = cleanUrl.pathname.slice(0, -5); return Response.redirect(cleanUrl.toString(), 302); } // Let Cloudflare Pages serve the HTML file normally return context.next(); }
