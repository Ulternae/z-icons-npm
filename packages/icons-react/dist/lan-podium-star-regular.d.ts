import React from 'react';

export interface LanPodiumStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumStarRegular: React.FC<LanPodiumStarRegularProps>;
export default LanPodiumStarRegular;
