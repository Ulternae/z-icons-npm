import React from 'react';

export interface LanSquareUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUserSolid: React.FC<LanSquareUserSolidProps>;
export default LanSquareUserSolid;
