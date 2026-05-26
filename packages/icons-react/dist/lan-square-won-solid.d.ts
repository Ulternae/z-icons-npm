import React from 'react';

export interface LanSquareWonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWonSolid: React.FC<LanSquareWonSolidProps>;
export default LanSquareWonSolid;
