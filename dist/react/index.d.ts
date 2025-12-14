import React from 'react';
import { C as CoreIconName, N as NeoIconName, M as MinaIconName } from '../types-Hclbz-Cy.js';

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
type ZIconProps = CoreIconProps | NeoIconProps | MinaIconProps;

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

export { CoreIconName, MinaIconName, NeoIconName, ZIcon, type ZIconProps };
