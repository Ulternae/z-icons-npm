import type { IconPack, IconVariant } from '@zcorvus/icons/types';

export type SvgVariantMap = Record<string, string>;
export type SvgPackMap = Record<string, SvgVariantMap>;
export type SvgRegistry = Record<string, SvgPackMap>;
export type FlatSvgRegistry = Record<string, SvgVariantMap>;
export type MissingIconBehavior = 'null' | 'warn' | 'error';

export interface CreateZIconElementOptions {
  defaultType?: IconPack | string;
  defaultVariant?: IconVariant | string;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: string;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
  type?: IconPack | string;
  variant?: IconVariant | string;
}

export declare function createZIconElement(
  registry: SvgRegistry | FlatSvgRegistry,
  options?: CreateZIconElementOptions
): CustomElementConstructor;

export declare function defineZIconElement(
  tagName: string,
  registry: SvgRegistry | FlatSvgRegistry,
  options?: CreateZIconElementOptions
): CustomElementConstructor | undefined;
