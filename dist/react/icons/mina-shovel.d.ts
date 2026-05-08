import React from 'react';

export interface MinaShovelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShovel: React.FC<MinaShovelProps>;
export default MinaShovel;
