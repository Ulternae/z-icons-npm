import React from 'react';

export interface LanGridRound2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2Thin: React.FC<LanGridRound2ThinProps>;
export default LanGridRound2Thin;
