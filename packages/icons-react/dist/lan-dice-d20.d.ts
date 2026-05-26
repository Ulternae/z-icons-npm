import React from 'react';

export interface LanDiceD20Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD20: React.FC<LanDiceD20Props>;
export default LanDiceD20;
