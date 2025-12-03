import React from 'react';
import { CoreIcons } from '../core/react';
import { NeoIcons } from '../neo/react';
import type { CoreIconName } from '../core/types';
import type { NeoIconName } from '../neo/types';

const ICON_COMPONENTS = {
  core: CoreIcons,
  neo: NeoIcons,
};

// Dado que core y neo tienen los mismos nombres de iconos, usamos un solo tipo
export type IconName = CoreIconName;
export type IconType = 'core' | 'neo';

export interface ZIconProps {
  name: IconName;
  type?: IconType;
  size?: string | number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Re-export para compatibilidad
export type { CoreIconName, NeoIconName };

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
  size = 24,
  color = 'currentColor',
  className,
  style,
}) => {
  const IconComponent = ICON_COMPONENTS[type]?.[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color, ...style }}
      className={className}
    />
  );
};

export default ZIcon;
