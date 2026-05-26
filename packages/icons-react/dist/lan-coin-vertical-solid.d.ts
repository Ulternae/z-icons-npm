import React from 'react';

export interface LanCoinVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinVerticalSolid: React.FC<LanCoinVerticalSolidProps>;
export default LanCoinVerticalSolid;
