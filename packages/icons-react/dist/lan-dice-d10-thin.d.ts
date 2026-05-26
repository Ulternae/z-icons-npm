import React from 'react';

export interface LanDiceD10ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD10Thin: React.FC<LanDiceD10ThinProps>;
export default LanDiceD10Thin;
