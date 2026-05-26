import React from 'react';

export interface LanSquareGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGSolid: React.FC<LanSquareGSolidProps>;
export default LanSquareGSolid;
