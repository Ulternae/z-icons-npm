import React from 'react';

export interface LanPercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPercentSolid: React.FC<LanPercentSolidProps>;
export default LanPercentSolid;
