import React from 'react';

export interface LanGridRound2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2: React.FC<LanGridRound2Props>;
export default LanGridRound2;
