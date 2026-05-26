import React from 'react';

export interface LanMoonStarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStars: React.FC<LanMoonStarsProps>;
export default LanMoonStars;
