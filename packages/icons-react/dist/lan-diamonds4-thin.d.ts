import React from 'react';

export interface LanDiamonds4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamonds4Thin: React.FC<LanDiamonds4ThinProps>;
export default LanDiamonds4Thin;
