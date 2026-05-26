import React from 'react';

export interface LanRingDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingDiamond: React.FC<LanRingDiamondProps>;
export default LanRingDiamond;
