import React from 'react';

export interface LanSquareCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCodeSolid: React.FC<LanSquareCodeSolidProps>;
export default LanSquareCodeSolid;
