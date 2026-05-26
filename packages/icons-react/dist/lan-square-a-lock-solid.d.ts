import React from 'react';

export interface LanSquareALockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareALockSolid: React.FC<LanSquareALockSolidProps>;
export default LanSquareALockSolid;
