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
pnpm run build -- --target react
pnpm run build -- --target web
pnpm run build -- --target react --pack core
pnpm run build -- --target react --pack lan
pnpm run typecheck
pnpm run test
pnpm run check
```

`pnpm run optimize:icons` optimiza SVG fuente por pack antes de regenerar `dist`.

`pnpm run build` regenera `dist` para todos los paquetes publicables. No optimiza ni reescribe SVG fuente.

Targets disponibles:

```txt
all              -> react + web + standalone-react
react            -> icons-react; con --pack genera solo el paquete React indicado
web              -> icons-web
pack-react       -> paquetes React por pack
standalone-react -> todos los paquetes React por pack
```

Desde la version 0.2, React y Web generan sus propios tipos, datos SVG y sprites. `@zcorvus/icons` ya no forma parte del workspace. Usa `--target react --pack <nombre>` para regenerar un solo paquete React sin ejecutar el build completo. `pack-react` se conserva como alias explícito.

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
@zcorvus/icons-react
@zcorvus/icons-web
@zcorvus/core-react
@zcorvus/neo-react
@zcorvus/mina-react
@zcorvus/bru-react
@zcorvus/lan-react-light
@zcorvus/lan-react-regular
@zcorvus/lan-react-solid
@zcorvus/lan-react-thin
```
