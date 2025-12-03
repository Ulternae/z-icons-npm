import React from 'react';

type CoreIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'language' | 'moon' | 'sun';

type NeoIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'language' | 'moon' | 'sun';

type IconName = CoreIconName;
type IconType = 'core' | 'neo';
interface ZIconProps {
    name: IconName;
    type?: IconType;
    size?: string | number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
}

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
declare const ZIcon: React.FC<ZIconProps>;

export { type CoreIconName, type NeoIconName, ZIcon, type ZIconProps };
