import React from 'react';

export interface LanGridRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRoundSolid: React.FC<LanGridRoundSolidProps>;
export default LanGridRoundSolid;
