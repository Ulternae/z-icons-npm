export type IconPack = 'core' | 'neo' | 'mina' | 'bru' | 'lan';
export type IconVariant = 'light' | 'solid' | 'regular' | 'regular-duo' | 'thin';
export type IconStyle = 'fill' | 'stroke';

export interface IconConfig {
  sourceDir: string;
  packs: IconPack[];
  variants: IconVariant[];
  defaultVariants: Record<IconPack, IconVariant>;
  publicVariantSuffixes: Record<IconVariant, string>;
  iconStyles: Partial<Record<IconPack, Partial<Record<IconVariant, IconStyle>>>>;
}

export declare const iconConfig: IconConfig;
export declare function getDefaultVariant(pack: string): IconVariant;
export declare function isDefaultVariant(pack: string, variant: string): boolean;
export declare function getPublicVariantSuffix(pack: string, variant: string): string;
export declare function getIconStyle(pack: string, variant: string): IconStyle;
export declare function isFillIcon(pack: string, variant: string): boolean;
