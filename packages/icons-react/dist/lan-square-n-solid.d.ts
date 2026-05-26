import React from 'react';

export interface LanSquareNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNSolid: React.FC<LanSquareNSolidProps>;
export default LanSquareNSolid;
