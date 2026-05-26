import React from 'react';

export interface LanStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStar: React.FC<LanStarProps>;
export default LanStar;
