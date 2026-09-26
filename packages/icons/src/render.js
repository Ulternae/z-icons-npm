const escapeAttribute = (value) => String(value).replace(/[&"<>]/g, (char) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' })[char]);

/** Render a trusted, generated icon definition without a browser or framework. */
export function renderSvg(icon, options = {}) {
  if (!icon || typeof icon.body !== 'string' || typeof icon.viewBox !== 'string') {
    throw new TypeError('Expected a generated ZCorvus icon definition.');
  }

  const { size = 24, color, ariaLabel, className, ...rest } = options;
  const label = ariaLabel ?? rest['aria-label'];
  const attrs = { ...icon.attributes, xmlns: 'http://www.w3.org/2000/svg', viewBox: icon.viewBox, width: size, height: size };
  if (color !== undefined) attrs.color = color;
  if (className !== undefined) attrs.class = className;
  if (label) {
    attrs.role = 'img';
    attrs['aria-label'] = label;
    delete attrs['aria-hidden'];
  } else {
    attrs['aria-hidden'] = 'true';
    attrs.focusable = 'false';
  }
  for (const [key, value] of Object.entries(rest)) {
    if (key === 'class') attrs.class = value;
    else if (key === 'aria-label') attrs['aria-label'] = value;
    else if (/^(?:id|role|title|aria-[\w-]+|data-[\w-]+)$/.test(key)) attrs[key] = value;
  }
  const serialized = Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => ` ${key}="${escapeAttribute(value)}"`).join('');
  return `<svg${serialized}>${icon.body}</svg>`;
}
