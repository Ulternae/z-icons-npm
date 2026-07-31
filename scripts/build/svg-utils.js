import { optimize } from 'svgo';
import { isDefaultVariant, isFillIcon } from '../icon-config.js';

const DISALLOWED_ELEMENTS = new Set(['foreignObject', 'iframe', 'object', 'embed', 'script', 'style']);
const PRESENTATION_ATTRIBUTES = [
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-dasharray',
  'stroke-dashoffset',
  'fill-rule',
  'clip-rule',
];
const parsedSvgCache = new Map();

export function escapeJsString(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
}

function getSvgElement(svgContent) {
  let root;

  optimize(svgContent, {
    multipass: false,
    plugins: [
      {
        name: 'capture-zcorvus-svg-ast',
        fn(ast) {
          root = ast;
        },
      },
    ],
  });

  const svg = root?.children?.find((node) => node.type === 'element' && node.name === 'svg');

  if (!svg) {
    throw new Error('Invalid icon: expected a root <svg> element.');
  }

  return svg;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function serializeNode(node) {
  if (node.type === 'text') {
    return escapeXml(node.value);
  }

  if (node.type === 'cdata') {
    return `<![CDATA[${node.value}]]>`;
  }

  if (node.type !== 'element') {
    return '';
  }

  const attributes = Object.entries(node.attributes)
    .map(([name, value]) => ` ${name}="${escapeXml(value)}"`)
    .join('');

  if (node.children.length === 0) {
    return `<${node.name}${attributes}/>`;
  }

  return `<${node.name}${attributes}>${node.children.map(serializeNode).join('')}</${node.name}>`;
}

function toReactAttributeName(name) {
  if (name === 'class') return 'className';
  if (name === 'for') return 'htmlFor';
  if (name.startsWith('aria-') || name.startsWith('data-')) return name;

  return name.replace(/[:-]([a-z])/g, (_, char) => char.toUpperCase());
}

function parseStyle(value) {
  return Object.fromEntries(
    value
      .split(';')
      .map((declaration) => declaration.trim())
      .filter(Boolean)
      .map((declaration) => {
        const separator = declaration.indexOf(':');

        if (separator === -1) {
          throw new Error(`Invalid SVG style declaration: ${declaration}`);
        }

        const name = declaration.slice(0, separator).trim();
        const property = name.startsWith('--') ? name : toReactAttributeName(name);
        return [property, declaration.slice(separator + 1).trim()];
      })
  );
}

function validateElement(node) {
  if (DISALLOWED_ELEMENTS.has(node.name)) {
    throw new Error(`Unsafe SVG element <${node.name}> is not allowed in icons.`);
  }

  for (const [name, value] of Object.entries(node.attributes)) {
    if (/^on/i.test(name)) {
      throw new Error(`Unsafe SVG event attribute "${name}" is not allowed in icons.`);
    }

    if ((name === 'href' || name === 'xlink:href') && value && !value.startsWith('#')) {
      throw new Error(`External SVG reference "${value}" is not allowed in icons.`);
    }
  }

  for (const child of node.children) {
    if (child.type === 'element') {
      validateElement(child);
    }
  }
}

function toReactProps(attributes) {
  return Object.fromEntries(
    Object.entries(attributes).map(([name, value]) => [
      toReactAttributeName(name),
      name === 'style' ? parseStyle(value) : value,
    ])
  );
}

function toReactNode(node) {
  if (node.type === 'text' || node.type === 'cdata') {
    return node.value.trim() ? JSON.stringify(node.value) : undefined;
  }

  if (node.type !== 'element') {
    return undefined;
  }

  const props = toReactProps(node.attributes);
  const children = node.children.map(toReactNode).filter(Boolean);
  const childrenCode = children.length > 0 ? `, ${children.join(', ')}` : '';

  return `React.createElement(${JSON.stringify(node.name)}, ${Object.keys(props).length > 0 ? JSON.stringify(props) : 'null'}${childrenCode})`;
}

export function parseSvg(svgContent, sourceFile) {
  const cached = parsedSvgCache.get(svgContent);

  if (cached) {
    return cached;
  }

  try {
    const svg = getSvgElement(svgContent);
    validateElement(svg);

    const graphicalChildren = svg.children.filter(
      (node) => node.type === 'element' && !['defs', 'desc', 'title'].includes(node.name)
    );

    if (graphicalChildren.length === 0) {
      throw new Error('Invalid icon: the root <svg> has no graphical elements.');
    }

    const children = svg.children.map(toReactNode).filter(Boolean);
    const innerContent = svg.children.map(serializeNode).join('').trim();
    const presentationAttributes = PRESENTATION_ATTRIBUTES
      .filter((name) => svg.attributes[name] !== undefined)
      .map((name) => `${name}="${escapeXml(svg.attributes[name])}"`)
      .join(' ');

    const parsed = {
      viewBox: svg.attributes.viewBox ?? '0 0 24 24',
      children,
      innerContent,
      presentationAttributes,
    };

    parsedSvgCache.set(svgContent, parsed);
    return parsed;
  } catch (error) {
    if (!sourceFile) {
      throw error;
    }

    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse SVG at "${sourceFile}": ${message}`, { cause: error });
  }
}

function withSvgRootAttribute(svgContent, attribute, value) {
  return svgContent.replace(/<svg\b([^>]*)>/, (match, attrs) => {
    const attrRegex = new RegExp(`\\s${attribute}=["'][^"']*["']`);

    if (attrRegex.test(attrs)) {
      return match.replace(attrRegex, ` ${attribute}="${value}"`);
    }

    return `<svg${attrs} ${attribute}="${value}">`;
  });
}

export function normalizeSvgForIconStyle(svgContent, pack, variant) {
  if (!isFillIcon(pack, variant)) {
    return svgContent;
  }

  return withSvgRootAttribute(svgContent, 'fill', 'currentColor');
}

export function createSvgSprite(pack, variant, variantIcons) {
  const symbols = variantIcons.map((icon) => {
    const { viewBox, innerContent, presentationAttributes } = parseSvg(icon.svg, icon.sourceFile);
    const id = `${pack}-${isDefaultVariant(pack, variant) ? icon.name : `${icon.name}-${variant}`}`;

    return `  <symbol id="${id}" viewBox="${viewBox}"${presentationAttributes ? ` ${presentationAttributes}` : ''}>\n    ${innerContent}\n  </symbol>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join('\n')}\n</svg>\n`;
}
