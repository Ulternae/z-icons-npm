import React from 'react';
import type { IconPack, IconVariant } from '@zcorvus/icons/types';

export type IconComponent = React.FC<Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  size?: string | number;
}>;

export type IconVariantMap = Record<string, IconComponent>;
export type IconPackMap = Record<string, IconVariantMap>;
export type IconRegistry = Record<string, IconPackMap>;
export type FlatIconRegistry = Record<string, IconVariantMap>;
export type MissingIconBehavior = 'null' | 'warn' | 'error';

type RegistryPackName<TRegistry> = Extract<keyof TRegistry, string>;
type RegistryVariantName<TRegistry> = TRegistry extends Record<string, infer TPack>
  ? Extract<keyof TPack, string>
  : string;
type RegistryIconName<TRegistry> = TRegistry extends Record<string, infer TPack>
  ? TPack extends Record<string, infer TVariant>
    ? Extract<keyof TVariant, string>
    : string
  : string;
type FlatPackName<TRegistry> = Extract<keyof TRegistry, string>;
type FlatIconName<TRegistry> = TRegistry extends Record<string, infer TPack>
  ? Extract<keyof TPack, string>
  : string;

export interface CreateZIconOptions {
  defaultVariant?: IconVariant | string;
  fallbackVariant?: IconVariant | string;
  fallbackPack?: IconPack | string;
  fallbackIcon?: IconComponent;
  inputVariant?: IconVariant | string;
  missing?: MissingIconBehavior;
}

export type CreatedZIconProps<TRegistry> = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  type: RegistryPackName<TRegistry>;
  name: RegistryIconName<TRegistry>;
  variant?: RegistryVariantName<TRegistry> | IconVariant | string;
  size?: string | number;
};

export type CreatedFlatZIconProps<TRegistry> = Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & {
  type: FlatPackName<TRegistry>;
  name: FlatIconName<TRegistry>;
  variant?: IconVariant | string;
  size?: string | number;
};

export declare function createZIcon<const TRegistry extends IconRegistry>(
  registry: TRegistry,
  options?: CreateZIconOptions
): React.FC<CreatedZIconProps<TRegistry>>;

export declare function createZIcon<const TRegistry extends FlatIconRegistry>(
  registry: TRegistry,
  options: CreateZIconOptions & { inputVariant: IconVariant | string }
): React.FC<CreatedFlatZIconProps<TRegistry>>;
