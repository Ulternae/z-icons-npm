import React from 'react';

export interface LanSquareFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFullSolid: React.FC<LanSquareFullSolidProps>;
export default LanSquareFullSolid;
