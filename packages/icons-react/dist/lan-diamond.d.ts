import React from 'react';

export interface LanDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamond: React.FC<LanDiamondProps>;
export default LanDiamond;
