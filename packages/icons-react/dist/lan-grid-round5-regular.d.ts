import React from 'react';

export interface LanGridRound5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound5Regular: React.FC<LanGridRound5RegularProps>;
export default LanGridRound5Regular;
