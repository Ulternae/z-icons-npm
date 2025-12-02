import { coreIcons } from './core/icons';
import { neoIcons } from './neo/icons';

const ICON_PACKS = {
  core: coreIcons,
  neo: neoIcons,
};

class ZIconElement extends HTMLElement {
  private shadow: ShadowRoot;
  private lastRenderedKey: string = '';

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ["name", "type", "size", "color"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || ""
    const type = (this.getAttribute("type") || "core") as keyof typeof ICON_PACKS;
    const size = this.getAttribute("size") || "24";
    const color = this.getAttribute("color") || "currentColor";

    // Optimization: skip re-render if nothing changed
    const renderKey = `${name}-${type}-${size}-${color}`;
    if (renderKey === this.lastRenderedKey) return;
    this.lastRenderedKey = renderKey;

    const iconPack = ICON_PACKS[type];
    const svgContent = iconPack?.[name] || ""

    if (!svgContent) {
      this.shadow.innerHTML = '';
      return;
    }

    // Inject size and color into SVG
    this.shadow.innerHTML = svgContent
      .replace('<svg', `<svg width="${size}" height="${size}" style="color: ${color}; display: block;"`);
  }
}

// SSR-safe registration (Next.js compatibility)
if (typeof window !== 'undefined' && !customElements.get('z-icon')) {
  customElements.define("z-icon", ZIconElement);
}

export default ZIconElement;
