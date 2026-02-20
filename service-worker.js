// ============================================================
// Service Worker — Cache-First PWA Strategy
// Version: v1.3.0
// ============================================================

const CACHE_VERSION = 'v1.3.0';
const CACHE_NAME = `aviation-quiz-${CACHE_VERSION}`;

// All app shell assets — these are pre-cached on install.
// Use relative paths so it works on any origin (file://, localhost, GitHub Pages, etc.)
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './questions.js',
    './a380-limits.html',
    './a380-limits-questions.js',
    './a380-limits-app.js',
    './memory-items.html',
    './memory-items-data.js',
    './memory-items-app.js',
    './manifest.json',
];

// External assets cached separately (failures here won't break install)
const EXTERNAL_ASSETS = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
];

// ── Install: pre-cache all app shell assets ───────────────────
self.addEventListener('install', (event) => {
    console.log(`[SW] Installing ${CACHE_VERSION}`);

    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {

            // Cache each local asset individually so one 404 doesn't abort all
            const localResults = await Promise.allSettled(
                ASSETS_TO_CACHE.map(url =>
                    cache.add(url).catch(err => {
                        console.warn(`[SW] Failed to cache: ${url}`, err.message);
                    })
                )
            );
            const localOk = localResults.filter(r => r.status === 'fulfilled').length;
            console.log(`[SW] Local assets cached: ${localOk}/${ASSETS_TO_CACHE.length}`);

            // Cache external assets (fonts etc.) — failures are non-fatal
            await Promise.allSettled(
                EXTERNAL_ASSETS.map(url =>
                    fetch(url, { mode: 'cors' })
                        .then(res => res.ok ? cache.put(url, res) : null)
                        .catch(err => console.warn(`[SW] External asset skipped: ${url}`, err.message))
                )
            );
        })
            .then(() => {
                console.log(`[SW] Install complete — skipping wait`);
                return self.skipWaiting(); // Activate immediately without waiting for old SW
            })
    );
});

// ── Activate: delete old caches, take control immediately ─────
self.addEventListener('activate', (event) => {
    console.log(`[SW] Activating ${CACHE_VERSION}`);

    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log(`[SW] Deleting old cache: ${key}`);
                        return caches.delete(key);
                    })
            ))
            .then(() => {
                console.log(`[SW] Now controlling all clients`);
                return self.clients.claim(); // Take control of ALL open pages immediately
            })
    );
});

// ── Fetch: Cache-First for app shell, Network-First for everything else ──
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // For navigation requests (page loads), always serve from cache first
    // with a network fallback — this is what makes page switching work offline
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) {
                    // Serve cached page, update cache in background
                    updateCache(event.request);
                    return cached;
                }
                // Not cached yet — try network
                return fetch(event.request)
                    .then(response => {
                        cacheResponse(event.request, response.clone());
                        return response;
                    })
                    .catch(() => {
                        // Last resort: serve index.html for SPA-style fallback
                        return caches.match('./index.html');
                    });
            })
        );
        return;
    }

    // For same-origin JS/CSS/HTML sub-resources: Cache-First
    if (url.origin === self.location.origin) {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) {
                    updateCache(event.request); // Background refresh
                    return cached;
                }
                // Not in cache — fetch and cache it
                return fetch(event.request).then(response => {
                    if (response && response.status === 200) {
                        cacheResponse(event.request, response.clone());
                    }
                    return response;
                });
            })
        );
        return;
    }

    // For external/cross-origin assets (fonts, CDNs): Cache-First, no background update
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request, { mode: 'cors' })
                .then(response => {
                    if (response && response.status === 200) {
                        cacheResponse(event.request, response.clone());
                    }
                    return response;
                })
                .catch(() => new Response('', { status: 408 }));
        })
    );
});

// ── Helpers ───────────────────────────────────────────────────

// Cache a response, silently ignoring errors
function cacheResponse(request, response) {
    if (!response || response.status !== 200) return;
    caches.open(CACHE_NAME)
        .then(cache => cache.put(request, response))
        .catch(err => console.warn('[SW] Cache put failed:', err));
}

// Background-update a cached resource without blocking the response
function updateCache(request) {
    fetch(request)
        .then(response => {
            if (response && response.status === 200) {
                cacheResponse(request, response);
            }
        })
        .catch(() => { }); // Offline — silent fail, we already served from cache
}

// ── Messages from the app ─────────────────────────────────────
self.addEventListener('message', (event) => {
    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    if (event.data?.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
});
