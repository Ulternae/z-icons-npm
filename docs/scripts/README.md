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
pnpm run build -- --target icons
pnpm run build -- --target react
pnpm run build -- --target web
pnpm run typecheck
pnpm run test
pnpm run check
```

`pnpm run optimize:icons` optimiza SVG fuente por pack antes de regenerar `dist`.

`pnpm run build` regenera `dist` para todos los paquetes publicables. No optimiza ni reescribe SVG fuente.

Targets disponibles:

```txt
all    -> icons + react + web
icons  -> icons
react  -> icons + react
web    -> icons + web
```

`@zcorvus/icons` es la dependencia raiz. Por eso los targets `react` y `web` regeneran primero `icons`, evitando que tipos, SVG raw, sprites y wrappers queden desalineados.

## Release

Antes de publicar:

```bash
pnpm run check
```

Luego revisar cada paquete con:

```bash
npm pack --dry-run
```

El orden de publicacion sigue siendo:

```txt
@zcorvus/icons
@zcorvus/icons-react
@zcorvus/icons-web
```
