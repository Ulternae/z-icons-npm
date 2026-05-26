import React from 'react';

export interface LanRingDiamondThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingDiamondThin: React.FC<LanRingDiamondThinProps>;
export default LanRingDiamondThin;
