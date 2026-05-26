import React from 'react';

export interface LanPantsStraightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsStraightSolid: React.FC<LanPantsStraightSolidProps>;
export default LanPantsStraightSolid;
