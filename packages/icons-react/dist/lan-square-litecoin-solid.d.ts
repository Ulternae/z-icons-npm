import React from 'react';

export interface LanSquareLitecoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLitecoinSolid: React.FC<LanSquareLitecoinSolidProps>;
export default LanSquareLitecoinSolid;
