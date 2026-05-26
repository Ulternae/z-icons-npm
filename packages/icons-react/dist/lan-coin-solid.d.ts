import React from 'react';

export interface LanCoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinSolid: React.FC<LanCoinSolidProps>;
export default LanCoinSolid;
