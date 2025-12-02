import React from 'react';
// Auto-register the Web Component
import ZIconWebComponent from '../index';
// Import generated types
import type { CoreIconName } from '../core/types';
import type { NeoIconName } from '../neo/types';

type IconType = 'core' | 'neo';

interface BaseIconProps {
  size?: string | number;
  color?: string;
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

export type ZIconProps = CoreIconProps | NeoIconProps;

// Re-export types for convenience
export type { CoreIconName, NeoIconName };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'z-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
        type?: IconType;
        size?: string | number;
        color?: string;
        class?: string;
      };
    }
  }
}

/**
 * ZIcon - React wrapper for the z-icon Web Component
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
  size = '24',
  color = 'currentColor',
  className,
  style,
}) => {
  return (
    <z-icon
      name={name}
      type={type}
      size={String(size)}
      color={color}
      class={className}
      style={style}
    />
  );
};

export default ZIcon;

