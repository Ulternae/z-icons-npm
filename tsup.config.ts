import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    icon: "src/index.ts",
  },
  format: ["esm"],
  outDir: "dist",
  globalName: "ZIcon",
  clean: false,
  splitting: false,
  minify: true,
  sourcemap: false,
  dts: false,
  target: "es2020",
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".svg": "text",
    };
  },
  external: [],
  publicDir: false,
});
