import React from 'react';

export interface LanMoonStarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStarsThin: React.FC<LanMoonStarsThinProps>;
export default LanMoonStarsThin;
