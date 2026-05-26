import React from 'react';

export interface LanDiceD8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD8Regular: React.FC<LanDiceD8RegularProps>;
export default LanDiceD8Regular;
