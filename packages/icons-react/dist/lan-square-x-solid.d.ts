import React from 'react';

export interface LanSquareXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareXSolid: React.FC<LanSquareXSolidProps>;
export default LanSquareXSolid;
