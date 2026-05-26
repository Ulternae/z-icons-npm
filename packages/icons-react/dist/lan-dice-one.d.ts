import React from 'react';

export interface LanDiceOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceOne: React.FC<LanDiceOneProps>;
export default LanDiceOne;
