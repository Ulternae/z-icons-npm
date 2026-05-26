import React from 'react';

export interface LanDongSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDongSignSolid: React.FC<LanDongSignSolidProps>;
export default LanDongSignSolid;
