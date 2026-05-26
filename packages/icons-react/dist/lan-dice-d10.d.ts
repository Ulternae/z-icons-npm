import React from 'react';

export interface LanDiceD10Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD10: React.FC<LanDiceD10Props>;
export default LanDiceD10;
