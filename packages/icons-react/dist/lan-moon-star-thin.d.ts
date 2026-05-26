import React from 'react';

export interface LanMoonStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStarThin: React.FC<LanMoonStarThinProps>;
export default LanMoonStarThin;
