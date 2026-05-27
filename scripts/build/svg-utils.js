import { isDefaultVariant, isFillIcon } from '../icon-config.js';

export function escapeJsString(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
}

export function parseSvg(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  const innerMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  const innerContent = innerMatch ? innerMatch[1].trim() : '';
  const elements = [];
  const elementRegex = /<(\w+)([^>]*)\/>/g;
  let match;

  while ((match = elementRegex.exec(innerContent)) !== null) {
    const tagName = match[1];
    const attrs = match[2].trim();
    const attrsObj = {};
    const attrRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrs)) !== null) {
      let key = attrMatch[1];
      const value = attrMatch[2];

      if (key.includes('-')) {
        key = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      }

      attrsObj[key] = value;
    }

    elements.push(`React.createElement('${tagName}', ${JSON.stringify(attrsObj)})`);
  }

  return { viewBox, children: elements };
}

function getSvgInnerContent(svgContent) {
  const innerMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);

  return innerMatch ? innerMatch[1].trim() : '';
}

function getSvgPresentationAttributes(svgContent) {
  const svgMatch = svgContent.match(/<svg\b([^>]*)>/s);
  const attrs = svgMatch ? svgMatch[1] : '';
  const allowedAttributes = [
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

  return allowedAttributes
    .map((attribute) => {
      const match = attrs.match(new RegExp(`${attribute}=["']([^"']+)["']`));
      return match ? `${attribute}="${match[1]}"` : undefined;
    })
    .filter(Boolean)
    .join(' ');
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
    const { viewBox } = parseSvg(icon.svg);
    const body = getSvgInnerContent(icon.svg);
    const presentationAttrs = getSvgPresentationAttributes(icon.svg);
    const id = `${pack}-${isDefaultVariant(pack, variant) ? icon.name : `${icon.name}-${variant}`}`;

    return `  <symbol id="${id}" viewBox="${viewBox}"${presentationAttrs ? ` ${presentationAttrs}` : ''}>\n    ${body}\n  </symbol>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join('\n')}\n</svg>\n`;
}
