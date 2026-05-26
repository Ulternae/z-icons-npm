import React from 'react';

export interface LanSquareYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYSolid: React.FC<LanSquareYSolidProps>;
export default LanSquareYSolid;
