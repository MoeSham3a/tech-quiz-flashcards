// Service Worker Version - Update this when you want to force cache refresh
const CACHE_VERSION = 'v1.2.0';
const CACHE_NAME = `aviation-quiz-${CACHE_VERSION}`;

// Files to cache for offline support
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/questions.js',
    '/a380-limits.html',
    '/a380-limits-questions.js',
    '/a380-limits-app.js',
    '/memory-items.html',
    '/memory-items-data.js',
    '/memory-items-app.js',
    '/manifest.json',
    // Add font if using external fonts
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
    console.log(`[Service Worker] Installing version ${CACHE_VERSION}`);

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching app shell');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                // Force the waiting service worker to become active
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log(`[Service Worker] Activating version ${CACHE_VERSION}`);

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                // Take control of all pages immediately
                return self.clients.claim();
            })
    );
});

// Fetch event - network-first with ping verification, fallback to cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try network first with ping verification
        pingAndFetch(event.request)
            .catch(() => {
                // If network fails, try cache
                return caches.match(event.request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            console.log('[Service Worker] Serving from cache (offline):', event.request.url);
                            return cachedResponse;
                        }
                        // If not in cache either, fail gracefully
                        console.log('[Service Worker] No cache available for:', event.request.url);
                        return new Response('Offline - Resource not available', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Helper function: Ping and fetch with network validation
async function pingAndFetch(request) {
    try {
        // Try to fetch the actual request
        const response = await fetch(request);

        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
            });
        }

        return response;

    } catch (error) {
        console.log('[Service Worker] Network fetch failed, using cache');
        throw error;
    }
}

// Message event - handle messages from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
});

// Handle service worker updates
self.addEventListener('controllerchange', () => {
    console.log('[Service Worker] Controller changed, reloading...');
});
