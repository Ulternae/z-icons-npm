import React from 'react';

export interface LanPodiumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPodiumThin: React.FC<LanPodiumThinProps>;
export default LanPodiumThin;
