import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
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
  external: [],
});
