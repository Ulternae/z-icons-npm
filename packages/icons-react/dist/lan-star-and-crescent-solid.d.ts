import React from 'react';

export interface LanStarAndCrescentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarAndCrescentSolid: React.FC<LanStarAndCrescentSolidProps>;
export default LanStarAndCrescentSolid;
