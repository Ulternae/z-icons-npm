import React from 'react';

export interface MinaStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStar: React.FC<MinaStarProps>;
export default MinaStar;
