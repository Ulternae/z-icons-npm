import { defaultVariants } from './defaults.js';
import { renderSvg } from './render.js';

const tagName = 'z-icon';
const registry = Object.create(null);
let registered = false;

function resolveIcon(element) {
  const pack = element.getAttribute('pack');
  if (!Object.hasOwn(registry, pack)) return undefined;
  const variant = element.getAttribute('variant') || defaultVariants[pack];
  const variants = registry[pack];
  if (!Object.hasOwn(variants, variant)) return undefined;
  const names = variants[variant];
  const name = element.getAttribute('name');
  return Object.hasOwn(names, name) ? names[name] : undefined;
}

/** Register only the generated definitions supplied by the application. */
export function defineZIcon(icons) {
  if (typeof window === 'undefined') return;
  if (!window.customElements) throw new Error('defineZIcon requires Custom Elements support.');
  for (const [pack, variants] of Object.entries(icons)) {
    registry[pack] ??= Object.create(null);
    for (const [variant, names] of Object.entries(variants)) {
      registry[pack][variant] = { ...registry[pack][variant], ...names };
    }
  }
  if (registered) {
    document.querySelectorAll(tagName).forEach((element) => element.render());
    return;
  }
  if (window.customElements.get(tagName)) {
    throw new Error(`<${tagName}> is already registered by another library.`);
  }
  class ZIconElement extends HTMLElement {
    static observedAttributes = ['pack', 'variant', 'name', 'size', 'color', 'aria-label', 'class'];
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
    render() {
      const icon = resolveIcon(this);
      if (!icon) {
        this.innerHTML = '';
        return;
      }
      this.innerHTML = renderSvg(icon, {
        size: this.getAttribute('size') || 24,
        color: this.getAttribute('color') || undefined,
        ariaLabel: this.getAttribute('aria-label') || undefined,
      });
    }
  }
  window.customElements.define(tagName, ZIconElement);
  registered = true;
}
