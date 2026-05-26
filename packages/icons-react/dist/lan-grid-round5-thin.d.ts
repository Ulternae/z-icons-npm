import React from 'react';

export interface LanGridRound5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound5Thin: React.FC<LanGridRound5ThinProps>;
export default LanGridRound5Thin;
