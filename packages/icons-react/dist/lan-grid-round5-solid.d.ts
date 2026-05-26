import React from 'react';

export interface LanGridRound5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound5Solid: React.FC<LanGridRound5SolidProps>;
export default LanGridRound5Solid;
