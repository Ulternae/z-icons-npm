declare class ZIcon extends HTMLElement {
    private shadow;
    private lastRenderedKey;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(): void;
    connectedCallback(): void;
    render(): void;
}

export { ZIcon as default };
