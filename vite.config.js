import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise the warning limit to avoid noise (3D models are large by nature)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split heavy libraries into separate cacheable chunks
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-motion': ['framer-motion'],
          'vendor-ogl': ['ogl'],
        },
      },
    },
    // Enable minification
    minify: 'esbuild',
    target: 'es2020',
  },
  // Optimize deps to pre-bundle heavy packages
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'ogl'],
  },
})
