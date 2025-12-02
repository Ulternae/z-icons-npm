import React, { useRef } from 'react';

// Type definitions for icon names
export type CoreIconName = 
  | 'address-card'
  | 'alarm-clock'
  | 'anchor'
  | 'moon'
  | 'sun';

export type NeoIconName = 
  | 'address-card'
  | 'alarm-clock'
  | 'anchor'
  | 'moon'
  | 'sun';

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

export type IconProps = CoreIconProps | NeoIconProps;

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
      };
    }
  }
}

export const Icon: React.FC<IconProps> = ({
  name,
  type = 'core',
  size = '24',
  color = 'currentColor',
  className,
  style,
}) => {
  const iconRef = useRef<HTMLElement>(null);

  return (
    <z-icon
      ref={iconRef as any}
      name={name}
      type={type}
      size={String(size)}
      color={color}
      className={className}
      style={style}
    />
  );
};

export default Icon;
