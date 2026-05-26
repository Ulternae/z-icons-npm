import React from 'react';

export interface LanRankingStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRankingStarThin: React.FC<LanRankingStarThinProps>;
export default LanRankingStarThin;
