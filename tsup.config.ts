import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    icon: "src/index.ts",
    "react/index": "src/react/index.ts",
    "core/icons": "src/core/icons.js",
    "core/react": "src/core/react.js",
    "neo/icons": "src/neo/icons.js",
    "neo/react": "src/neo/react.js",
  },
  format: ["esm"],
  outDir: "dist",
  globalName: "ZIcon",
  clean: false,
  splitting: false,
  minify: true,
  sourcemap: false,
  dts: true,
  target: "es2020",
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".svg": "text",
    };
  },
  external: ["react", "react-dom"],
  publicDir: false,
});
