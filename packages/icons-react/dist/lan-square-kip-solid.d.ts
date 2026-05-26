import React from 'react';

export interface LanSquareKipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKipSolid: React.FC<LanSquareKipSolidProps>;
export default LanSquareKipSolid;
