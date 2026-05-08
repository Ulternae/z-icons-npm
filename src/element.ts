import { coreIcons } from './core/icons';
import { minaIcons } from './mina/icons';
import { neoIcons } from './neo/icons';

const ICON_PACKS = {
  core: coreIcons,
  neo: neoIcons,
  mina: minaIcons,
};

type IconPack = keyof typeof ICON_PACKS;

function canUseCustomElements() {
  return (
    typeof window !== 'undefined' &&
    typeof HTMLElement !== 'undefined' &&
    typeof customElements !== 'undefined'
  );
}

export function defineZIcon(tagName = 'z-icon'): CustomElementConstructor | undefined {
  if (!canUseCustomElements()) {
    return undefined;
  }

  const existingElement = customElements.get(tagName);
  if (existingElement) {
    return existingElement;
  }

  class ZIconElement extends HTMLElement {
    private shadow: ShadowRoot;
    private lastRenderedKey = '';

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
      return ['name', 'type', 'size', 'color', 'variant'];
    }

    attributeChangedCallback() {
      this.render();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const name = this.getAttribute('name') || '';
      const type = (this.getAttribute('type') || 'core') as IconPack;
      const variant = this.getAttribute('variant') || 'light';
      const size = this.getAttribute('size') || '24';
      const color = this.getAttribute('color') || 'currentColor';

      const renderKey = `${name}-${type}-${variant}-${size}-${color}`;
      if (renderKey === this.lastRenderedKey) return;
      this.lastRenderedKey = renderKey;

      const iconPack = ICON_PACKS[type];
      const variantPack = iconPack?.[variant] as Record<string, string> | undefined;
      const svgContent = variantPack?.[name] || '';

      if (!svgContent) {
        this.shadow.innerHTML = '';
        return;
      }

      this.shadow.innerHTML = svgContent.replace(
        '<svg',
        `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" style="color: ${color}; display: block;"`
      );
    }
  }

  customElements.define(tagName, ZIconElement);
  return ZIconElement;
}

export default defineZIcon;
