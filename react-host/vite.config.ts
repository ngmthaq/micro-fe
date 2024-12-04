import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { name, dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: name,
        filename: "remote-entry.js",
        shared: Object.keys(dependencies),
        remotes: {
          "react-remote-1": env.VITE_SERVICE_REMOTE_1_ENTRY,
        },
      }),
    ],
    server: {
      strictPort: true,
      port: parseInt(env.VITE_HOST_PORT, 10),
    },
    preview: {
      strictPort: true,
      port: parseInt(env.VITE_HOST_PORT, 10),
    },
    build: {
      target: "esnext",
      minify: true,
      cssCodeSplit: false,
    },
  };
});
