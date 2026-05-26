import React from 'react';

export interface LanSquareRupiahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupiahSolid: React.FC<LanSquareRupiahSolidProps>;
export default LanSquareRupiahSolid;
