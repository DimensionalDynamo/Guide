import { defineConfig } from 'vite'

// Use dynamic imports in an async config function to avoid CJS/ESM interop issues
export default defineConfig(async () => {
  const reactModule = await import('@vitejs/plugin-react')
  const { VitePWA } = await import('vite-plugin-pwa')
  const react = (reactModule as any).default || reactModule

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'icons/*.png'],
        manifest: {
          name: 'FocusFlow 2026',
          short_name: 'FocusFlow',
          theme_color: '#6EE7B7',
          background_color: '#0f172a',
          display: 'standalone',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/icons/icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icons/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    server: {
      port: 5173
    }
  }
})
