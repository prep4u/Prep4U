export async function onRequest(context) {
    const url = new URL(context.request.url);

    if (
        url.pathname !== "/" &&
        !url.pathname.includes(".") &&
        !url.pathname.endsWith("/")
    ) {
        url.pathname += ".html";
    }

    return context.env.ASSETS.fetch(url);
}