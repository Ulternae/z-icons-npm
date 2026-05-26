import React from 'react';

export interface LanDiceD12Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD12: React.FC<LanDiceD12Props>;
export default LanDiceD12;
