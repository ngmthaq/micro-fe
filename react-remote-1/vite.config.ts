// import fs from "fs";
// import path from "path";
// import dts from "vite-plugin-dts";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { name, dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: name,
        filename: "remote-entry.js",
        shared: Object.keys(dependencies),
        exposes: {
          "./index": "./src/index.ts",
        },
      }),
      // dts({
      //   tsconfigPath: "./tsconfig.app.json",
      //   outDir: "./dist/@types",
      //   rollupTypes: true,
      //   afterBuild: (emittedFiles) => {
      //     const hostPath = path.resolve(__dirname, "..", env.VITE_HOST_NAME);
      //     if (fs.existsSync(hostPath)) {
      //       const typePath = `${hostPath}/src/@types/${name}`;
      //       if (!fs.existsSync(typePath)) fs.mkdirSync(typePath);
      //       fs.writeFileSync(
      //         `${hostPath}/src/@types/${name}/module.d.ts`,
      //         `declare module "${name}/index" {\n\n${
      //           emittedFiles.entries().next().value?.[1]
      //         }\n}`
      //       );
      //     }
      //   },
      // }),
    ],
    server: {
      strictPort: true,
      port: parseInt(env.VITE_SERVICE_PORT, 10),
    },
    preview: {
      strictPort: true,
      port: parseInt(env.VITE_SERVICE_PORT, 10),
    },
    build: {
      target: "esnext",
      cssCodeSplit: false,
      minify: mode === "production",
      sourcemap: mode !== "production",
    },
  };
});
