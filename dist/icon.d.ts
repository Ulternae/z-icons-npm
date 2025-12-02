declare class ZIcon extends HTMLElement {
    static get observedAttributes(): string[];
    attributeChangedCallback(): void;
    connectedCallback(): void;
    render(): void;
}

export { ZIcon as default };
