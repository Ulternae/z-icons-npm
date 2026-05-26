import React from 'react';

export interface LanRankingStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRankingStar: React.FC<LanRankingStarProps>;
export default LanRankingStar;
