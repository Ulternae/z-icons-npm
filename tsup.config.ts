import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/icon.ts"],
  format: ["esm", "cjs", "iife"],
  dts: false, // NO queremos que tsup genere dts porque tú ya tienes uno personalizado
  minify: true,
  splitting: false, // Web Components no deben dividirse
  sourcemap: false,
  clean: true,
  target: "es2020",
  globalName: "ZIconComponent"
});
