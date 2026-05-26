import React from 'react';

export interface LanGridRound4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound4Thin: React.FC<LanGridRound4ThinProps>;
export default LanGridRound4Thin;
