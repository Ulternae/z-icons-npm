import React from 'react';

export interface LanDiamonds4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamonds4Regular: React.FC<LanDiamonds4RegularProps>;
export default LanDiamonds4Regular;
