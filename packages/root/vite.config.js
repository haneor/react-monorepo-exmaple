import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@packages/newOne",
        replacement: path.resolve(__dirname, "../../packages/newOne"),
      },
      {
        find: "@packages/legacy",
        replacement: path.resolve(__dirname, "../../packages/legacy"),
      },
    ],
  },
});
