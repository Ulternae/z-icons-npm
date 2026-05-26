import React from 'react';

export interface LanGridRound5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound5: React.FC<LanGridRound5Props>;
export default LanGridRound5;
