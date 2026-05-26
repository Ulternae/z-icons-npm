import React from 'react';

export interface LanPodiumStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumStar: React.FC<LanPodiumStarProps>;
export default LanPodiumStar;
