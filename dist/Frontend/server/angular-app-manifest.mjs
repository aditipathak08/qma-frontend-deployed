
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BKBC4CUA.js",
      "chunk-MIV74FJG.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CS4SF6TQ.js",
      "chunk-MIV74FJG.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PEUR3DKR.js",
      "chunk-MIV74FJG.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1019, hash: '420cbafb113c93a3215b5f192e7de822875ac7c1d65f7ba7e41bd78ab59e6cc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '494af3784ef7e8c392fc8a1cabf31ebce7de7411432eb39dc2b09d28ab673bd8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 5187, hash: 'dceea7bf1f6435be07eecde9dcd58d41f09fb87ea27e2d89dae4da80ea1dd02e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4851, hash: 'd07997e1f086feeb8aad6d58f52c2f438e6de9a8d44ff188150e6fce7d3e61ba', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-ED4XJ7WR.css': {size: 1030, hash: 'v8khHtvuAMU', text: () => import('./assets-chunks/styles-ED4XJ7WR_css.mjs').then(m => m.default)}
  },
};
