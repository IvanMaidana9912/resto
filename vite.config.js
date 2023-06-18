import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
console.log(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: 3000
  },
  //base: "/resto/",
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // }
})