import React from 'react';

export interface LanDiceD4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD4: React.FC<LanDiceD4Props>;
export default LanDiceD4;
