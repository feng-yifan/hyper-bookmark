import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './framework/mainfest.config';
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from 'path';
import { PATH_ENTRANCE_POPUP } from "./framework/constant.ts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    crx({manifest}),
  ],
  server: {
    port: 3000,
    hmr: {port: 3000},
  },
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, PATH_ENTRANCE_POPUP),
      },
    },
  },
});
