import React from 'react';

export interface LanMoonStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStar: React.FC<LanMoonStarProps>;
export default LanMoonStar;
