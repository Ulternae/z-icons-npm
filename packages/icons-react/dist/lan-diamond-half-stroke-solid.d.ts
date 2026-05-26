import React from 'react';

export interface LanDiamondHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalfStrokeSolid: React.FC<LanDiamondHalfStrokeSolidProps>;
export default LanDiamondHalfStrokeSolid;
