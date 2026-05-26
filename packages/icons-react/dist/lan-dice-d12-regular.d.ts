import React from 'react';

export interface LanDiceD12RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD12Regular: React.FC<LanDiceD12RegularProps>;
export default LanDiceD12Regular;
