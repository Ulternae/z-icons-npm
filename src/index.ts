const SPRITES = {
  core: new URL("./core/core-sprite.svg", import.meta.url).toString(),
  neo: new URL("./neo/neo-sprite.svg", import.meta.url).toString(),
};

class ZIcon extends HTMLElement {
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
    const name = this.getAttribute("name");
    const type = (this.getAttribute("type") || "core") as keyof typeof SPRITES;
    const size = this.getAttribute("size") || "24";
    const color = this.getAttribute("color") || "currentColor";

    // Optimization: skip re-render if nothing changed
    const renderKey = `${name}-${type}-${size}-${color}`;
    if (renderKey === this.lastRenderedKey) return;
    this.lastRenderedKey = renderKey;

    const spriteUrl = SPRITES[type];
    if (!spriteUrl || !name) {
      this.shadow.innerHTML = '';
      return;
    }

    // Use Shadow DOM for better encapsulation and performance
    this.shadow.innerHTML = `
      <svg 
        width="${size}" 
        height="${size}" 
        fill="none" 
        style="color: ${color}; display: block;"
      >
        <use href="${spriteUrl}#${name}"></use>
      </svg>
    `;
  }
}

// SSR-safe registration (Next.js compatibility)
if (typeof window !== 'undefined' && !customElements.get('z-icon')) {
  customElements.define("z-icon", ZIcon);
}

export default ZIcon;

