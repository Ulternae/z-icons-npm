import React from 'react';

export interface LanDiceThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceThree: React.FC<LanDiceThreeProps>;
export default LanDiceThree;
