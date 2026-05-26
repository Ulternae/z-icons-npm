import React from 'react';

export interface LanStarshipFreighterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipFreighterThin: React.FC<LanStarshipFreighterThinProps>;
export default LanStarshipFreighterThin;
