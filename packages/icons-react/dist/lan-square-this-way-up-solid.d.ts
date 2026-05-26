import React from 'react';

export interface LanSquareThisWayUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareThisWayUpSolid: React.FC<LanSquareThisWayUpSolidProps>;
export default LanSquareThisWayUpSolid;
