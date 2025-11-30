// types/icon.d.ts
/**
 * Z-Icon Web Component
 * A custom element for displaying SVG icons from sprite sheets
 */

/**
 * Tipos de Iconos - Generado automáticamente
 * No editar manualmente - usar build-sprites.js
 */

export type coreSpriteIconName =
  | 'moon'
  | 'sun';

export const coreSpriteIcons = [
  'moon',
  'sun'
] as const;

/**
 * Tipos de Iconos - Generado automáticamente
 * No editar manualmente - usar build-sprites.js
 */

export type neoSpriteIconName =
  | 'moon'
  | 'sun';

export const neoSpriteIcons = [
  'moon',
  'sun'
] as const;


export default class ZIcon extends HTMLElement {
  /**
   * Observed attributes that trigger re-rendering
   */
  static get observedAttributes(): string[];

  /**
   * Called when an observed attribute changes
   */
  attributeChangedCallback(): void;

  /**
   * Called when the element is inserted into the DOM
   */
  connectedCallback(): void;

  /**
   * Renders the icon based on current attributes
   */
  render(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'z-icon': ZIcon;
  }

  namespace JSX {
    interface IntrinsicElements {
      'z-icon': {
        name?: coreSpriteIconName | neoSpriteIconName;
        type?: 'core' | 'neo';
        size?: string | number;
        color?: string;
        class?: string;
      };
    }
  }
}
