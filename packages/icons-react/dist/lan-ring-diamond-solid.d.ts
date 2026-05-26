import React from 'react';

export interface LanRingDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingDiamondSolid: React.FC<LanRingDiamondSolidProps>;
export default LanRingDiamondSolid;
