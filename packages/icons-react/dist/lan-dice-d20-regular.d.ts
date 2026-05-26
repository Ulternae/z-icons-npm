import React from 'react';

export interface LanDiceD20RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD20Regular: React.FC<LanDiceD20RegularProps>;
export default LanDiceD20Regular;
