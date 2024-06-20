import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
// import eslint from 'vite-plugin-eslint'
// import less from '@vitejs/plugin-less';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": env,
    },
    server: {
      host: "localhost",
      port: 3000,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      istanbul({
        include: ["src/*"],
        exclude: ["node_modules"],
        extension: [".js", ".jsx"],
        requireEnv: false,
        cypress: true,
        forceBuildInstrument: true,
      }),
      // eslint({
      //   exclude: ['/virtual:/**', 'node_modules/**'],
      // })
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "@primary-color": "#003da5",
          },
          javascriptEnabled: true,
          math: "always",
          relativeUrls: true,
        },
      },
    },
    build: {
      outDir: "build",
      cssCodeSplit: true,
      assetsDir: "static",
      minify: true,
      sourcemap: true,
      rollupOptions: {
        cache: true,
        // output: {
        //   entryFileNames: 'assets/app.js',
        //   chunkFileNames: 'assets/[name].js',
        //   sourcemap: false,
        //   format: 'iife',
        //   amd: true
        // },
        // preserveEntrySignatures: true
      },
      // rollupOptions: {
      //   input: {
      //     main: './src/index.jsx',
      //   },
      //   alias: {
      //     '@components': './src/components', // Use relative paths for aliases
      //     '@utils': './src/utils',
      //     '@styles': './src/styles',
      //   },
      // },
    },
  };
});
