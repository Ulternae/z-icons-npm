import React from 'react';

export interface LanDiceD6RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD6Regular: React.FC<LanDiceD6RegularProps>;
export default LanDiceD6Regular;
