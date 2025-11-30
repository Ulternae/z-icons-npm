/**
 * Icon Web Component
 * Technology-agnostic icon component using Web Components standard
 * 
 * Usage:
 * <z-icon name="home" type="core" size="24"></z-icon>
 * <z-icon name="arrow" type="neo" size="32" class="my-icon"></z-icon>
 */

class ZIcon extends HTMLElement {
  static get observedAttributes() {
    return ["name", "type", "size", "class", "color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name");
    const type = this.getAttribute("type") || "core";
    const size = this.getAttribute("size") || "24";
    const className = this.getAttribute("class") || "";
    const color = this.getAttribute("color") || "currentColor";

    if (!name) {
      console.warn("z-icon: 'name' attribute is required");
      return;
    }

    // Validate type
    if (type !== "core" && type !== "neo") {
      console.warn(`z-icon: 'type' must be 'core' or 'neo', got '${type}'`);
      return;
    }

    const href = `/node_modules/z-icons/dist/${type}/${type}-sprite.svg#${name}`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        svg {
          fill: ${color};
          width: ${size}px;
          height: ${size}px;
        }
      </style>
      <svg
        width="${size}"
        height="${size}"
        class="${className}"
        part="svg"
        aria-hidden="true"
      >
        <use href="${href}"></use>
      </svg>
    `;
  }
}

// Register the custom element
if (!customElements.get("z-icon")) {
  customElements.define("z-icon", ZIcon);
}

export default ZIcon;
