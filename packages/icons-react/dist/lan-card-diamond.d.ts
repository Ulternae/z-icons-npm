import React from 'react';

export interface LanCardDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardDiamond: React.FC<LanCardDiamondProps>;
export default LanCardDiamond;
