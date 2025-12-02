import React, { useEffect, useRef } from 'react';
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
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the Web Component element
    const iconElement = document.createElement('z-icon');
    iconElement.setAttribute('name', name);
    iconElement.setAttribute('type', type);
    iconElement.setAttribute('size', String(size));
    iconElement.setAttribute('color', color);
    if (className) iconElement.setAttribute('class', className);
    if (style) {
      Object.assign(iconElement.style, style);
    }

    // Clear and append
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(iconElement);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [name, type, size, color, className, style]);

  // Return a span container for SSR compatibility
  return <span ref={containerRef} style={{ display: 'inline-block', lineHeight: 0 }} />;
};

export default ZIcon;

