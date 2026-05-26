import React from 'react';

export interface LanDiceD8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD8Thin: React.FC<LanDiceD8ThinProps>;
export default LanDiceD8Thin;
