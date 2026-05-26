import React from 'react';

export interface LanStarfighterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarfighterThin: React.FC<LanStarfighterThinProps>;
export default LanStarfighterThin;
