import React from 'react';

export interface LanSquareAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAmpersandSolid: React.FC<LanSquareAmpersandSolidProps>;
export default LanSquareAmpersandSolid;
