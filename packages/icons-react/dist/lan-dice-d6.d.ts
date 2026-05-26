import React from 'react';

export interface LanDiceD6Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD6: React.FC<LanDiceD6Props>;
export default LanDiceD6;
