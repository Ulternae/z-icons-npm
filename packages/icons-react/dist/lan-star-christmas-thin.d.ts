import React from 'react';

export interface LanStarChristmasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarChristmasThin: React.FC<LanStarChristmasThinProps>;
export default LanStarChristmasThin;
