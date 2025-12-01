
import type { CoreIconName } from '../core';
import type { NeoIconName } from '../neo';

export type IconPack = 'core' | 'neo';
export type IconName = CoreIconName | NeoIconName;

export default class ZIcon extends HTMLElement {
  /**
   * Observed attributes that trigger re-rendering
   */
  static get observedAttributes(): string[];

  /**
   * Called when an observed attribute changes
   */
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void;

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
        name?: IconName;
        type?: IconPack;
        size?: string | number;
        color?: string;
        class?: string;
      };
    }
  }
}