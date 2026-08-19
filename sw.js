// Service worker mínimo — solo existe para que el navegador considere el
// sitio "instalable". No cachea nada de forma agresiva: cada visita sigue
// pidiendo la versión más nueva del sitio a GitHub Pages / Supabase, como
// siempre. Esto evita el clásico problema de "PWA que muestra una versión
// vieja pegada" — acá eso no puede pasar.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough total: deja que cada pedido vaya directo a la red, sin
  // interceptar ni cachear nada.
  event.respondWith(fetch(event.request));
});
