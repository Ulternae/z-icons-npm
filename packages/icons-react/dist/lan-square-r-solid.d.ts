import React from 'react';

export interface LanSquareRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRSolid: React.FC<LanSquareRSolidProps>;
export default LanSquareRSolid;
