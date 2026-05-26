import React from 'react';

export interface LanDiceD20ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD20Thin: React.FC<LanDiceD20ThinProps>;
export default LanDiceD20Thin;
