import React from 'react';

export interface LanCircleStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStar: React.FC<LanCircleStarProps>;
export default LanCircleStar;
