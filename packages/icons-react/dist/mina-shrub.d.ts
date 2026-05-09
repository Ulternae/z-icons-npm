import React from 'react';

export interface MinaShrubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShrub: React.FC<MinaShrubProps>;
export default MinaShrub;
