import React from 'react';

export interface LanCardDiamondThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardDiamondThin: React.FC<LanCardDiamondThinProps>;
export default LanCardDiamondThin;
