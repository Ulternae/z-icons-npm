import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/icon.ts"],
  format: ["esm"],
  dts: {
    compilerOptions: {
      module: "esnext",
      target: "es2020"
    }
  },
  minify: true,
  splitting: false,
  sourcemap: false,
  clean: false,
  target: "es2020",
  globalName: "ZIcon"
});
