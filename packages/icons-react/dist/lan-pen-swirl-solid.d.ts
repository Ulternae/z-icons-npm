import React from 'react';

export interface LanPenSwirlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSwirlSolid: React.FC<LanPenSwirlSolidProps>;
export default LanPenSwirlSolid;
