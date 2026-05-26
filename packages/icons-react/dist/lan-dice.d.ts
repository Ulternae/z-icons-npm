import React from 'react';

export interface LanDiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDice: React.FC<LanDiceProps>;
export default LanDice;
