import React from 'react';

export interface MinaSunSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunSnow: React.FC<MinaSunSnowProps>;
export default MinaSunSnow;
