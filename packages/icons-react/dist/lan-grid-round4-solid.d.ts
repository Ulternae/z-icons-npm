import React from 'react';

export interface LanGridRound4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound4Solid: React.FC<LanGridRound4SolidProps>;
export default LanGridRound4Solid;
