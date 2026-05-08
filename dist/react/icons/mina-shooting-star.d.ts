import React from 'react';

export interface MinaShootingStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShootingStar: React.FC<MinaShootingStarProps>;
export default MinaShootingStar;
