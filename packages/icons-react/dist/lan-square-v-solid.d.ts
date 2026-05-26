import React from 'react';

export interface LanSquareVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVSolid: React.FC<LanSquareVSolidProps>;
export default LanSquareVSolid;
