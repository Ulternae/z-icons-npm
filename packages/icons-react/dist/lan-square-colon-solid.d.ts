import React from 'react';

export interface LanSquareColonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareColonSolid: React.FC<LanSquareColonSolidProps>;
export default LanSquareColonSolid;
