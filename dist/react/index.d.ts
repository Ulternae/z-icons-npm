import React from 'react';

type CoreIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'moon' | 'sun';

type NeoIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'moon' | 'sun';

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
type ZIconProps = CoreIconProps | NeoIconProps;

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
declare const ZIcon: React.FC<ZIconProps>;

export { type CoreIconName, type NeoIconName, ZIcon, type ZIconProps };
