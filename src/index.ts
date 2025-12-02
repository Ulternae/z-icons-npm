// Get the base path from where this script is loaded
const getBasePath = () => {
  const scripts = document.querySelectorAll('script[src*="icon.js"]');
  if (scripts.length > 0) {
    const scriptSrc = (scripts[0] as HTMLScriptElement).src;
    return scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));
  }
  return './dist';
};

// Sprite paths - will be resolved relative to the script location
const SPRITES = {
  core: `${getBasePath()}/core/core-sprite.svg`,
  neo: `${getBasePath()}/neo/neo-sprite.svg`,
};

class ZIcon extends HTMLElement {
  static get observedAttributes() {
    return ["name", "type", "size", "color", "class"];
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
    const className = this.getAttribute("class") || "";

    const spriteUrl = SPRITES[type];
    if (!spriteUrl || !name) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("fill", "none");
    svg.setAttribute("color", color);
    svg.setAttribute("class", className);

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `${spriteUrl}#${name}`);

    svg.appendChild(use);
    this.innerHTML = "";
    this.appendChild(svg);
  }
}

customElements.define("z-icon", ZIcon);

export default ZIcon;
