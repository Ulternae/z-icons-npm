const SPRITES = {
  core: new URL("./core/core-sprite.svg", import.meta.url).href,
  neo: new URL("./neo/neo-sprite.svg", import.meta.url).href,
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

    this.innerHTML = `
      <svg
        width="${size}"
        height="${size}"
        fill="none"
        color="${color}"
        class="${className}"
      >
        <use href="${spriteUrl}#${name}"></use>
      </svg>
    `;
  }
}

customElements.define("z-icon", ZIcon);

export default ZIcon;
