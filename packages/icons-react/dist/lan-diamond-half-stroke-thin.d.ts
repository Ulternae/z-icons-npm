import React from 'react';

export interface LanDiamondHalfStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalfStrokeThin: React.FC<LanDiamondHalfStrokeThinProps>;
export default LanDiamondHalfStrokeThin;
