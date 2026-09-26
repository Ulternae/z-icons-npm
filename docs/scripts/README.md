# Scripts

Documentacion interna para los comandos operativos del workspace.

## Icon maintenance

Usa esta guia para preparar SVG fuente antes de regenerar y publicar paquetes:

[Icon maintenance](./icon-maintenance.md)

Incluye:

- detectar SVG duplicados exactos con `pnpm run duplicates`;
- eliminar duplicados desde reportes con `pnpm run dedupe`;
- sincronizar variantes contra una variante de referencia con `pnpm run sync:variants`;
- eliminar iconos sobrantes en variantes con `pnpm run sync:variants:write`.

## Build

Comandos principales:

```bash
pnpm run optimize:icons -- lan
pnpm run optimize:icons -- lan light
pnpm run build
pnpm run typecheck
pnpm run test
pnpm run check
pnpm run pack:check
```

`pnpm run optimize:icons` optimiza SVG fuente por pack antes de regenerar `dist`.

`pnpm run build` genera `dist` para `@zcorvus/icons` y `@zcorvus/icons-react` desde los mismos SVG. No optimiza ni reescribe SVG fuente. La v3 genera siempre ambos paquetes para mantenerlos sincronizados.

## Release

Antes de publicar:

```bash
pnpm run check
```

Luego revisar ambos paquetes con:

```bash
pnpm run pack:check
```

Los paquetes publicables son:

```text
@zcorvus/icons
@zcorvus/icons-react
```
