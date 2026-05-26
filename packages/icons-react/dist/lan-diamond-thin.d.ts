import React from 'react';

export interface LanDiamondThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondThin: React.FC<LanDiamondThinProps>;
export default LanDiamondThin;
