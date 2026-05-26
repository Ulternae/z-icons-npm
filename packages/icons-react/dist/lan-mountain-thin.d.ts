import React from 'react';

export interface LanMountainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainThin: React.FC<LanMountainThinProps>;
export default LanMountainThin;
