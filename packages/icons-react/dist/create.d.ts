import React from 'react';
import type { IconPack, IconVariant } from './types/index.js';

export type IconComponent = React.FC<Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  size?: string | number;
}>;

export type IconVariantMap = Record<string, IconComponent>;
export type IconPackMap = Record<string, IconVariantMap>;
export type IconRegistry = Record<string, IconPackMap>;
export type FlatIconRegistry = Record<string, IconVariantMap>;
export type MissingIconBehavior = 'null' | 'warn' | 'error';

type IconSvgProps = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  size?: string | number;
};
type RegistryPackName<TRegistry> = Extract<keyof TRegistry, string>;
type RegistryVariantName<
  TRegistry extends IconRegistry,
  TPack extends RegistryPackName<TRegistry>,
> = Extract<keyof TRegistry[TPack], string>;
type RegistryIconName<
  TRegistry extends IconRegistry,
  TPack extends RegistryPackName<TRegistry>,
  TVariant extends RegistryVariantName<TRegistry, TPack>,
> = Extract<keyof TRegistry[TPack][TVariant], string>;
type RegistryPackIconName<
  TRegistry extends IconRegistry,
  TPack extends RegistryPackName<TRegistry>,
> = {
  [TVariant in RegistryVariantName<TRegistry, TPack>]: RegistryIconName<TRegistry, TPack, TVariant>;
}[RegistryVariantName<TRegistry, TPack>];
type FlatPackName<TRegistry> = Extract<keyof TRegistry, string>;

export interface CreateZIconOptions {
  defaultVariant?: IconVariant | string;
  defaultVariants?: Record<string, IconVariant | string>;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: IconComponent;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
}

export type CreatedZIconProps<TRegistry extends IconRegistry> = {
  [TPack in RegistryPackName<TRegistry>]:
    | (IconSvgProps & {
        type: TPack;
        variant?: undefined;
        name: RegistryPackIconName<TRegistry, TPack>;
      })
    | {
        [TVariant in RegistryVariantName<TRegistry, TPack>]: IconSvgProps & {
          type: TPack;
          variant: TVariant;
          name: RegistryIconName<TRegistry, TPack, TVariant>;
        };
      }[RegistryVariantName<TRegistry, TPack>];
}[RegistryPackName<TRegistry>];

export type CreatedFlatZIconProps<TRegistry extends FlatIconRegistry> = {
  [TPack in FlatPackName<TRegistry>]: IconSvgProps & {
    type: TPack;
    name: Extract<keyof TRegistry[TPack], string>;
    variant?: IconVariant | string;
  };
}[FlatPackName<TRegistry>];

export declare function createZIcon<const TRegistry extends IconRegistry>(
  registry: TRegistry,
  options?: CreateZIconOptions
): React.FC<CreatedZIconProps<TRegistry>>;

export declare function createZIcon<const TRegistry extends FlatIconRegistry>(
  registry: TRegistry,
  options: CreateZIconOptions & { inputVariant: IconVariant | string }
): React.FC<CreatedFlatZIconProps<TRegistry>>;
