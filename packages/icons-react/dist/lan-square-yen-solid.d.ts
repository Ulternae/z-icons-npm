import React from 'react';

export interface LanSquareYenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYenSolid: React.FC<LanSquareYenSolidProps>;
export default LanSquareYenSolid;
