import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    icon: "src/index.ts",
    register: "src/register.ts",
    "icons/index": "src/icons/index.ts",
    "react/index": "src/react/index.ts",
    "react/core": "src/react/core.tsx",
    "react/neo": "src/react/neo.tsx",
    "react/mina": "src/react/mina.tsx",
    "react/mina-solid": "src/react/mina-solid.tsx",
    "core/index": "src/core/index.ts",
    "neo/index": "src/neo/index.ts",
    "mina/index": "src/mina/index.ts",
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
