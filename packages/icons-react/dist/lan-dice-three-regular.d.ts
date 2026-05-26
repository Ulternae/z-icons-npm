import React from 'react';

export interface LanDiceThreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceThreeRegular: React.FC<LanDiceThreeRegularProps>;
export default LanDiceThreeRegular;
