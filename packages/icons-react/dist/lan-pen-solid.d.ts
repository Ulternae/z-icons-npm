import React from 'react';

export interface LanPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSolid: React.FC<LanPenSolidProps>;
export default LanPenSolid;
