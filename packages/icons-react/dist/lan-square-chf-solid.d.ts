import React from 'react';

export interface LanSquareChfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareChfSolid: React.FC<LanSquareChfSolidProps>;
export default LanSquareChfSolid;
