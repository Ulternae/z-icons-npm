declare class ZIconElement extends HTMLElement {
    private shadow;
    private lastRenderedKey;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(): void;
    connectedCallback(): void;
    render(): void;
}

export { ZIconElement as default };
