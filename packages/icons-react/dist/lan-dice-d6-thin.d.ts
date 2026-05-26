import React from 'react';

export interface LanDiceD6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD6Thin: React.FC<LanDiceD6ThinProps>;
export default LanDiceD6Thin;
