import React from 'react';

export interface LanDiceD8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD8: React.FC<LanDiceD8Props>;
export default LanDiceD8;
