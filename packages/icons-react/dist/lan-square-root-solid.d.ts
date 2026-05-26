import React from 'react';

export interface LanSquareRootSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRootSolid: React.FC<LanSquareRootSolidProps>;
export default LanSquareRootSolid;
