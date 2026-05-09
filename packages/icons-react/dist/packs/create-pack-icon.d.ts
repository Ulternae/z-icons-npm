import React from 'react';
import type { IconVariant } from '@zcorvus/icons/types';

export interface PackIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  variant?: IconVariant;
  size?: string | number;
}

export declare function createPackIcon<TName extends string>(
  iconMap: Record<string, Record<string, React.FC<Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> & { size?: string | number }>>>,
  defaultVariant?: IconVariant
): React.FC<PackIconProps<TName>>;
