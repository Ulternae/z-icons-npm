import React from 'react';

export interface LanGridRound2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2Regular: React.FC<LanGridRound2RegularProps>;
export default LanGridRound2Regular;
