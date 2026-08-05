import React from 'react';

export interface LanRankingStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRankingStar(props: LanRankingStarProps): React.ReactElement;
export default LanRankingStar;
