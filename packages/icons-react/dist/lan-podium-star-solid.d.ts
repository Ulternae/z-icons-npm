import React from 'react';

export interface LanPodiumStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumStarSolid: React.FC<LanPodiumStarSolidProps>;
export default LanPodiumStarSolid;
