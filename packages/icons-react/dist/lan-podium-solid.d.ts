import React from 'react';

export interface LanPodiumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumSolid: React.FC<LanPodiumSolidProps>;
export default LanPodiumSolid;
