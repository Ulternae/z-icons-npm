# Icon Maintenance Scripts

Estos scripts preparan los SVG fuente antes de regenerar y publicar paquetes. Funcionan con cualquier pack bajo `icons/{pack}/{variant}`.

## 1. Detectar SVG duplicados exactos

Genera un reporte con grupos de iconos que tienen el mismo SVG despues de pasar por SVGO en memoria.

```bash
pnpm run duplicates -- --pack lan --variant light
```

Salida por defecto:

```txt
metadata/icon-duplicates/lan-light.json
```

Para otro pack o variante:

```bash
pnpm run duplicates -- --pack mina --variant solid
pnpm run duplicates -- --pack bru --variant solid
```

## 2. Eliminar duplicados usando el reporte

Elimina fisicamente los archivos listados como `aliasFiles` en el reporte. Conserva el `canonicalFile`.

```bash
pnpm run dedupe -- --pack lan --variant light
```

Esto lee por defecto:

```txt
metadata/icon-duplicates/lan-light.json
```

Tambien puedes pasar un reporte explicito:

```bash
pnpm run dedupe -- --report metadata/icon-duplicates/lan-light.json
```

Dry-run, sin borrar:

```bash
pnpm run dedupe -- --pack lan --variant light --dry-run
```

## 3. Sincronizar variantes contra una variante de referencia

Sirve cuando una variante define el catalogo oficial de nombres y las demas variantes deben conservar solo esos nombres.

Dry-run:

```bash
pnpm run sync:variants -- --pack lan --reference light
```

Si no pasas `--variants`, el script detecta todas las carpetas de variantes del pack y excluye la referencia.

Con variantes explicitas:

```bash
pnpm run sync:variants -- --pack lan --reference light --variants regular,solid,thin
```

## 4. Eliminar iconos sobrantes en variantes sincronizadas

Cuando el dry-run sea correcto:

```bash
pnpm run sync:variants:write -- --pack lan --reference light
```

Para otro pack:

```bash
pnpm run sync:variants:write -- --pack mina --reference light --variants solid
```

## Flujo recomendado para un pack nuevo

Ejemplo con `lan`, usando `light` como referencia:

```bash
pnpm run duplicates -- --pack lan --variant light
pnpm run dedupe -- --pack lan --variant light
pnpm run duplicates -- --pack lan --variant light
pnpm run sync:variants -- --pack lan --reference light
pnpm run sync:variants:write -- --pack lan --reference light
pnpm run sync:variants -- --pack lan --reference light
pnpm run build
```

Antes de publicar, el segundo `duplicates` deberia mostrar `0` grupos duplicados y el ultimo `sync:variants` deberia mostrar `0` iconos extra.

## Notas de seguridad

- `dedupe` solo elimina archivos listados en el reporte de duplicados.
- `sync:variants` nunca borra sin usar el comando `sync:variants:write`.
- Ambos scripts validan que los archivos a borrar esten dentro del directorio fuente esperado.
- Despues de eliminar SVGs, siempre corre `pnpm run build` para que `dist` refleje el nuevo catalogo.
