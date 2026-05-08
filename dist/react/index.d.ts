import React__default from 'react';
import { C as CoreIconName } from '../types-BFL-wEQu.js';
import { N as NeoIconName } from '../types-BcsLnsRh.js';
import { M as MinaIconName } from '../types-CTzkKYgQ.js';

interface BaseIconProps {
    size?: string | number;
    color?: string;
    variant?: 'light' | 'solid' | 'regular' | 'thin' | string;
    className?: string;
    style?: React__default.CSSProperties;
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
declare const ZIcon: React__default.FC<ZIconProps>;

export { CoreIconName, MinaIconName, NeoIconName, ZIcon, type ZIconProps };
