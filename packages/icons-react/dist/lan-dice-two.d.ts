import React from 'react';

export interface LanDiceTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceTwo: React.FC<LanDiceTwoProps>;
export default LanDiceTwo;
