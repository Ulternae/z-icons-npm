import React from 'react';

export interface LanDiceD4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD4Thin: React.FC<LanDiceD4ThinProps>;
export default LanDiceD4Thin;
