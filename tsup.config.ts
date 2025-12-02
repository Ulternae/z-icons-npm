import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/icon.ts"],
  format: ["esm", "cjs", "iife"],
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
      ".svg": "file",
    };
  },
  external: [
    "./core/core-sprite.svg",
    "./neo/neo-sprite.svg",
  ],
});
