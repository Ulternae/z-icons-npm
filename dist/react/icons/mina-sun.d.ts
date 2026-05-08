import React from 'react';

export interface MinaSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSun: React.FC<MinaSunProps>;
export default MinaSun;
