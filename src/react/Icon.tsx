import React from 'react';

import { CoreIcons } from '../core/react';
import { NeoIcons } from '../neo/react';
import { MinaIcons } from '../mina/react';

import type { CoreIconName } from '../core/types';
import type { NeoIconName } from '../neo/types';
import type { MinaIconName } from '../mina/types';

const ICON_COMPONENTS = {
  core: CoreIcons,
  neo: NeoIcons,
  mina: MinaIcons,
};

interface BaseIconProps {
  size?: string | number;
  color?: string;
  variant?: 'light' | 'solid' | 'regular' | 'thin' | string;
  className?: string;
  style?: React.CSSProperties;
}

interface CoreIconProps extends BaseIconProps {
  name: CoreIconName;
  type?: 'core';
}

interface NeoIconProps extends BaseIconProps {
  name: NeoIconName;
  type: 'neo';
}
interface MinaIconProps extends BaseIconProps {
  name: MinaIconName;
  type: 'mina';
}

export type ZIconProps = CoreIconProps | NeoIconProps | MinaIconProps;

// Re-export types for convenience
export type { CoreIconName, NeoIconName, MinaIconName };

/**
 * ZIcon - React icon component with full type safety
 * 
 * @example
 * ```tsx
 * import { ZIcon } from '@zcorvus/z-icons/react';
 * 
 * function App() {
 *   return <ZIcon name="moon" type="core" size={32} color="blue" />;
 * }
 * ```
 */
export const ZIcon: React.FC<ZIconProps> = ({
  name,
  type = 'core',
  variant = 'light',
  size = 24,
  color,
  className,
  style,
}) => {
  const iconSet = ICON_COMPONENTS[type];
  const IconComponent = iconSet?.[variant]?.[name] as React.FC<React.SVGProps<SVGSVGElement>> | undefined;

  if (!IconComponent) {
    return null;
  }

  const colorStyle = color ? { color } : {};

  const params =
    variant === 'solid'
      ? { fill: 'currentColor' as const }
      : {
        fill: 'none' as const,
        stroke: 'currentColor' as const,
        strokeWidth: 2,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
      };

  return (
    <IconComponent
      width={size}
      height={size}
      {...params}
      style={{ ...colorStyle, ...style }}
      className={className}
    />
  );
};

export default ZIcon;
