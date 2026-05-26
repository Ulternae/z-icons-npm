import React from 'react';

export interface LanDiceD12ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD12Thin: React.FC<LanDiceD12ThinProps>;
export default LanDiceD12Thin;
