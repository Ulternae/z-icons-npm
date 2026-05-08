import React from 'react';

type IconVariant = 'light' | 'solid';
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface PackIconProps<IconName extends string>
  extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'name' | 'width'> {
  name: IconName;
  size?: string | number;
}

export function createPackIcon<IconName extends string>(
  icons: Record<string, IconComponent>,
  variant: IconVariant
) {
  const PackIcon: React.FC<PackIconProps<IconName>> = ({
    name,
    size = 24,
    style,
    color,
    ...svgProps
  }) => {
    const IconComponent = icons[name];

    if (!IconComponent) {
      return null;
    }

    const colorStyle = color ? { color } : {};
    const variantProps =
      variant === 'solid'
        ? { fill: 'currentColor' as const }
        : {
            fill: 'none' as const,
            stroke: 'currentColor' as const,
            strokeLinecap: 'round' as const,
            strokeLinejoin: 'round' as const,
            strokeWidth: 2,
          };

    return (
      <IconComponent
        width={size}
        height={size}
        {...variantProps}
        {...svgProps}
        style={{ ...colorStyle, ...style }}
      />
    );
  };

  return PackIcon;
}
