const DEFAULT_OPTIONS = {
  defaultVariant: 'light',
  defaultVariants: undefined,
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

function getSpriteSymbolId(type, name, variant, defaultVariant = 'light') {
  return `${type}-${variant === defaultVariant ? name : `${name}-${variant}`}`;
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

function buildUseSvg(symbolId, host) {
  const size = toCssSize(host.getAttribute('size'));
  const color = host.getAttribute('color');
  const className = host.getAttribute('svg-class');
  const attrs = [
    'viewBox="0 0 24 24"',
    size ? `width="${size}" height="${size}"` : '',
    color ? `style="color: ${color};"` : '',
    className ? `class="${className}"` : '',
    host.hasAttribute('aria-hidden') ? 'aria-hidden="true"' : '',
    host.getAttribute('aria-label') ? `aria-label="${host.getAttribute('aria-label')}"` : '',
    host.getAttribute('role') ? `role="${host.getAttribute('role')}"` : '',
  ].filter(Boolean).join(' ');

  return `<svg ${attrs}><use href="#${symbolId}"></use></svg>`;
}

export function injectZIconSprite(spriteId, sprite) {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const existing = document.querySelector(`svg[data-zcorvus-sprite="${spriteId}"]`);

  if (existing) {
    return existing;
  }

  const template = document.createElement('template');
  template.innerHTML = sprite.trim();
  const element = template.content.firstElementChild;

  if (!element) {
    return undefined;
  }

  element.setAttribute('aria-hidden', 'true');
  element.setAttribute('data-zcorvus-sprite', spriteId);
  element.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  document.body.prepend(element);

  return element;
}

export function createZIconElement(registry, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const normalizedRegistry = normalizeRegistry(registry, config.inputVariant);
  const fixedType = config.type;
  const fixedVariant = config.variant;
  const spriteMode = config.mode === 'sprite';
  const spriteId = config.spriteId;
  const sprite = config.sprite;

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
      if (spriteMode && spriteId && sprite) {
        injectZIconSprite(spriteId, sprite);
      }

      this.render();
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      const type = fixedType ?? this.getAttribute('type') ?? config.defaultType;
      const name = this.getAttribute('name');
      const variant = fixedVariant ?? this.getAttribute('variant') ?? config.defaultVariants?.[type] ?? config.defaultVariant;

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
        if (spriteMode) {
          this.innerHTML = buildUseSvg(getSpriteSymbolId(type, name, variant, config.defaultVariant), this);
          return;
        }

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
