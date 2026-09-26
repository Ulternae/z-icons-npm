import fs from 'node:fs';
import path from 'node:path';
import { iconConfig as config } from './icon-config.js';
import { collectIcons } from './build/collect-icons.js';
import { createOutputWriter } from './build/fs-utils.js';
import { parseSvg } from './build/svg-utils.js';

const root = process.cwd();
const core = createOutputWriter(path.join(root, 'packages/icons/dist'));
const react = createOutputWriter(path.join(root, 'packages/icons-react/dist'));
const write = (writer, file, content) => writer.writeFile(path.join(writer.root, file), content);
const source = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const declaration = 'import type * as React from "react";\nexport type IconProps = Omit<React.SVGProps<SVGSVGElement>, "size"> & { size?: number | string };\nexport type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;\n';

write(core, 'render.js', source('packages/icons/src/render.js'));
write(core, 'index.js', "export { renderSvg } from './render.js';\n");
write(core, 'index.d.ts', `export interface IconDefinition { readonly pack: string; readonly variant: string; readonly name: string; readonly viewBox: string; readonly attributes: Readonly<Record<string, string>>; readonly body: string; }\nexport interface RenderOptions { size?: number | string; color?: string; ariaLabel?: string; className?: string; id?: string; role?: string; title?: string; [attribute: \`aria-\${string}\`]: string | undefined; [attribute: \`data-\${string}\`]: string | undefined; }\nexport declare function renderSvg(icon: IconDefinition, options?: RenderOptions): string;\n`);
write(core, 'data/icon.d.ts', 'import type { IconDefinition } from "../index.js";\ndeclare const icon: IconDefinition;\nexport default icon;\n');
write(core, 'web.js', source('packages/icons/src/web.js'));
write(core, 'web.d.ts', 'import type { IconDefinition } from "./index.js";\nexport type IconRegistry = Record<string, Record<string, Record<string, IconDefinition>>>;\nexport declare function defineZIcon(icons: IconRegistry): void;\n');
write(react, 'index.js', source('packages/icons-react/src/create.js'));
write(react, 'index.d.ts', `${declaration}\nexport type IconRegistry = Record<string, Record<string, Record<string, IconComponent>>>;\ntype Defaults = typeof import("./defaults.js").defaultVariants;\ntype Selection<R extends IconRegistry> = { [P in keyof R & keyof Defaults]: { [V in keyof R[P] & string]: { [N in keyof R[P][V] & string]: { pack: P; name: N } & (V extends Defaults[P] ? { variant?: V } : { variant: V }) }[keyof R[P][V] & string] }[keyof R[P] & string] }[keyof R & keyof Defaults];\nexport declare function createZIcon<const R extends IconRegistry>(registry: R): React.ComponentType<Selection<R> & IconProps> & { has(pack: string, name: string, variant?: string): boolean };\n`);
write(react, 'react/icon.d.ts', `${declaration}declare const icon: IconComponent;\nexport default icon;\n`);
const defaults = `export const defaultVariants = ${JSON.stringify(config.defaultVariants)};\n`;
const defaultTypes = `export declare const defaultVariants: ${JSON.stringify(config.defaultVariants).replace(/"([^" ]+)":/g, 'readonly $1:')};\n`;
for (const writer of [core, react]) {
  write(writer, 'defaults.js', defaults);
  write(writer, 'defaults.d.ts', defaultTypes);
}

const { icons, packData } = collectIcons();
for (const icon of icons) {
  const parsed = parseSvg(icon.svg, icon.sourceFile);
  const { width, height, viewBox, xmlns, ...attributes } = parsed.rootAttributes;
  const identity = { pack: icon.pack, variant: icon.variant, name: icon.name, viewBox: parsed.viewBox, attributes, body: parsed.innerContent };
  write(core, `data/${icon.pack}/${icon.publicFileName}.js`, `export default ${JSON.stringify(identity)};\n`);
  const rootProps = { ...parsed.reactRootProps };
  delete rootProps.width;
  delete rootProps.height;
  const component = `import * as React from 'react';\nconst ${icon.componentName} = /*#__PURE__*/ React.forwardRef(function ${icon.componentName}({ size = 24, color, 'aria-label': ariaLabel, children, ...props }, ref) {\n  return React.createElement('svg', { ...${JSON.stringify(rootProps)}, width: size, height: size, color, role: ariaLabel ? 'img' : undefined, 'aria-label': ariaLabel, 'aria-hidden': ariaLabel ? undefined : true, focusable: ariaLabel ? undefined : false, ...props, ref }, ${parsed.children.join(', ')});\n});\nexport default ${icon.componentName};\n`;
  write(react, `react/${icon.pack}/${icon.publicFileName}.js`, component);
}

for (const pack of config.packs) {
  const names = [];
  const declarations = [declaration];
  for (const variantIcons of Object.values(packData[pack])) {
    for (const icon of variantIcons) {
      names.push(`export { default as ${icon.componentName} } from './${pack}/${icon.publicFileName}.js';`);
      declarations.push(`export declare const ${icon.componentName}: IconComponent;`);
    }
  }
  write(react, `react/${pack}.js`, names.join('\n') + '\n');
  write(react, `react/${pack}.d.ts`, declarations.join('\n') + '\n');
  for (const [variant, variantIcons] of Object.entries(packData[pack])) {
    const imports = variantIcons.map((icon, index) => `import i${index} from '../../react/${pack}/${icon.publicFileName}.js';`).join('\n');
    const entries = variantIcons.map((icon, index) => `${JSON.stringify(icon.name)}:i${index}`).join(',');
    write(react, `packs-data/${pack}/${variant}.js`, `${imports}\nexport default {${entries}};\n`);
    const typeEntries = variantIcons.map((icon) => `${JSON.stringify(icon.name)}: typeof Pack.${icon.componentName};`).join('\n');
    write(react, `packs-data/${pack}/${variant}.d.ts`, `import type * as Pack from '../../react/${pack}.js';\ndeclare const icons: {\n${typeEntries}\n};\nexport default icons;\n`);
    const dataImports = variantIcons.map((icon, index) => `import i${index} from '../../data/${pack}/${icon.publicFileName}.js';`).join('\n');
    write(core, `packs-data/${pack}/${variant}.js`, `${dataImports}\nexport default {${entries}};\n`);
    const dataTypes = variantIcons.map((icon) => `${JSON.stringify(icon.name)}: import('../../index.js').IconDefinition;`).join('\n');
    write(core, `packs-data/${pack}/${variant}.d.ts`, `declare const icons: {\n${dataTypes}\n};\nexport default icons;\n`);
  }
  const defaultVariant = config.defaultVariants[pack];
  write(react, `packs-data/${pack}.js`, `export { default } from './${pack}/${defaultVariant}.js';\n`);
  write(react, `packs-data/${pack}.d.ts`, `export { default } from './${pack}/${defaultVariant}.js';\n`);
  write(core, `packs-data/${pack}.js`, `export { default } from './${pack}/${defaultVariant}.js';\n`);
  write(core, `packs-data/${pack}.d.ts`, `export { default } from './${pack}/${defaultVariant}.js';\n`);
}

console.log(`Generated ${icons.length} icons`, { core: core.finish(), react: react.finish() });
