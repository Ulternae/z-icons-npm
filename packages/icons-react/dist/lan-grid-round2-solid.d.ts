import React from 'react';

export interface LanGridRound2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2Solid: React.FC<LanGridRound2SolidProps>;
export default LanGridRound2Solid;
