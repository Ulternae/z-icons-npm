import React from 'react';

export interface LanDiceD4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD4Regular: React.FC<LanDiceD4RegularProps>;
export default LanDiceD4Regular;
