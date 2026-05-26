import React from 'react';

export interface LanDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondSolid: React.FC<LanDiamondSolidProps>;
export default LanDiamondSolid;
