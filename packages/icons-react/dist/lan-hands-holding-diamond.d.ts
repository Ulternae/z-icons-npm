import React from 'react';

export interface LanHandsHoldingDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingDiamond: React.FC<LanHandsHoldingDiamondProps>;
export default LanHandsHoldingDiamond;
