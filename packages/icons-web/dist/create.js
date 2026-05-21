const DEFAULT_OPTIONS = {
  defaultVariant: 'light',
  fallbackVariant: undefined,
  fallbackPack: undefined,
  fallbackIcon: undefined,
  inputVariant: undefined,
  missing: 'null',
};

function normalizeRegistry(registry, inputVariant) {
  if (!inputVariant) {
    return registry;
  }

  return Object.fromEntries(
    Object.entries(registry).map(([pack, packIcons]) => [
      pack,
      {
        [inputVariant]: packIcons,
      },
    ])
  );
}

function resolveSvg(registry, type, name, variant, fallbackVariant, fallbackPack) {
  const candidates = [
    [type, variant],
    fallbackVariant ? [type, fallbackVariant] : undefined,
    fallbackPack ? [fallbackPack, variant] : undefined,
    fallbackPack && fallbackVariant ? [fallbackPack, fallbackVariant] : undefined,
  ].filter(Boolean);

  for (const [pack, currentVariant] of candidates) {
    const svg = registry[pack]?.[currentVariant]?.[name];

    if (typeof svg === 'string') {
      return svg;
    }
  }

  return undefined;
}

function handleMissingIcon({ type, name, variant, missing }) {
  const message = `[z-icons] Missing icon: type="${type}", name="${name}", variant="${variant}".`;

  if (missing === 'error') {
    throw new Error(message);
  }

  const isProduction = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production';

  if (missing === 'warn' && !isProduction) {
    console.warn(message);
  }

  return '';
}

function toCssSize(value) {
  if (value === null || value === undefined || value === '') {
    return undefined;
  }

  return /^\\d+(\\.\\d+)?$/.test(value) ? `${value}px` : value;
}

function applyPresentation(svg, host) {
  const size = toCssSize(host.getAttribute('size'));
  const color = host.getAttribute('color');
  const className = host.getAttribute('svg-class');

  return svg.replace(/<svg\\b([^>]*)>/, (_, attrs) => {
    const extraAttrs = [
      size ? ` width="${size}" height="${size}"` : '',
      color ? ` style="color: ${color};"` : '',
      className ? ` class="${className}"` : '',
      host.hasAttribute('aria-hidden') ? ' aria-hidden="true"' : '',
      host.getAttribute('aria-label') ? ` aria-label="${host.getAttribute('aria-label')}"` : '',
      host.getAttribute('role') ? ` role="${host.getAttribute('role')}"` : '',
    ].join('');

    return `<svg${attrs}${extraAttrs}>`;
  });
}

export function createZIconElement(registry, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const normalizedRegistry = normalizeRegistry(registry, config.inputVariant);
  const fixedType = config.type;
  const fixedVariant = config.variant;

  return class ZIconElement extends HTMLElement {
    static observedAttributes = [
      'type',
      'name',
      'variant',
      'size',
      'color',
      'svg-class',
      'aria-hidden',
      'aria-label',
      'role',
    ];

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      const type = fixedType ?? this.getAttribute('type') ?? config.defaultType;
      const name = this.getAttribute('name');
      const variant = fixedVariant ?? this.getAttribute('variant') ?? config.defaultVariant;

      if (!type || !name) {
        this.innerHTML = '';
        return;
      }

      const svg = resolveSvg(
        normalizedRegistry,
        type,
        name,
        variant,
        config.fallbackVariant,
        config.fallbackPack
      );

      if (svg) {
        this.innerHTML = applyPresentation(svg, this);
        return;
      }

      if (config.fallbackIcon) {
        this.innerHTML = applyPresentation(config.fallbackIcon, this);
        return;
      }

      this.innerHTML = handleMissingIcon({ type, name, variant, missing: config.missing });
    }
  };
}

export function defineZIconElement(tagName, registry, options = {}) {
  if (typeof window === 'undefined' || !window.customElements || typeof HTMLElement === 'undefined') {
    return undefined;
  }

  const existing = window.customElements.get(tagName);

  if (existing) {
    return existing;
  }

  const Element = createZIconElement(registry, options);
  window.customElements.define(tagName, Element);

  return Element;
}
