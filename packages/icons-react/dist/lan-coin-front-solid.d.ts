import React from 'react';

export interface LanCoinFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinFrontSolid: React.FC<LanCoinFrontSolidProps>;
export default LanCoinFrontSolid;
