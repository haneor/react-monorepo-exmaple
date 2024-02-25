import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@packages/app1",
        replacement: path.resolve(__dirname, "../../packages/app1"),
      },
      {
        find: "@packages/app2",
        replacement: path.resolve(__dirname, "../../packages/app2"),
      },
    ],
  },
});
