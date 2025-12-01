import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/icon.ts"],
  format: ["esm"],
  dts: false,
  minify: true,
  splitting: false,
  sourcemap: false,
  clean: false,
  target: "es2020",
  globalName: "ZIconComponent"
});
