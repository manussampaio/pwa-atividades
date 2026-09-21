self.addEventListener("install", event => {
    console.log("Service Worker instalado");
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});

self.addEventListener("fetch", event => {
    console.log("URL:");
    console.log(event.request.url);

    console. log("Método:");
    console.log(event.request.method) ;

    if (event.request.url.endsWith("/teste-sw")) {
        event. respondWith(new Response("Resposta criada pelo Service Worker!"));
        return;
    }
});
