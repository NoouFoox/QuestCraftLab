import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/component/ui'),
    }
  },
  server:{
    port: 129,
    host:'0.0.0.0'
  }
})
