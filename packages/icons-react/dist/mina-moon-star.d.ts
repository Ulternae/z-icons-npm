import React from 'react';

export interface MinaMoonStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoonStar: React.FC<MinaMoonStarProps>;
export default MinaMoonStar;
