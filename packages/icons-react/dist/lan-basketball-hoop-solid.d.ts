import React from 'react';

export interface LanBasketballHoopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballHoopSolid: React.FC<LanBasketballHoopSolidProps>;
export default LanBasketballHoopSolid;
