import React from 'react';

export interface LanPodiumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodium: React.FC<LanPodiumProps>;
export default LanPodium;
