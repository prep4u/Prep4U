export async function onRequest(context) {
    const url = new URL(context.request.url);

    // 1. If someone requests a .html URL,
    // redirect them to the clean URL.
    if (url.pathname.toLowerCase().endsWith(".html")) {
        const cleanUrl = new URL(url);

        cleanUrl.pathname = cleanUrl.pathname.slice(0, -5);

        return Response.redirect(cleanUrl.toString(), 302);
    }

    // 2. If someone requests a clean URL,
    // internally load the corresponding .html file.
    if (
        url.pathname !== "/" &&
        !url.pathname.endsWith("/") &&
        !url.pathname.includes(".")
    ) {
        url.pathname += ".html";
    }

    // 3. Serve the file.
    return context.env.ASSETS.fetch(url);
}
