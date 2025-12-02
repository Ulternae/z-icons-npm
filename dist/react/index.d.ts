import React from 'react';

type CoreIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'moon' | 'sun';
type NeoIconName = 'address-card' | 'alarm-clock' | 'anchor' | 'moon' | 'sun';
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
type IconProps = CoreIconProps | NeoIconProps;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'z-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                name?: string;
                type?: IconType;
                size?: string | number;
                color?: string;
            };
        }
    }
}
declare const Icon: React.FC<IconProps>;

export { type CoreIconName, Icon, type IconProps, type NeoIconName };
