import React from 'react';

export interface LanCandyBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyBarSolid: React.FC<LanCandyBarSolidProps>;
export default LanCandyBarSolid;
