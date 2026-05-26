import React from 'react';

export interface LanPodiumStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumStarThin: React.FC<LanPodiumStarThinProps>;
export default LanPodiumStarThin;
