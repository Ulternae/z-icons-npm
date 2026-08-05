import React from 'react';

export interface MinaSunSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunSnow(props: MinaSunSnowProps): React.ReactElement;
export default MinaSunSnow;
