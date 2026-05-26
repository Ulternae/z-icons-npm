import React from 'react';

export interface LanPearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPearSolid: React.FC<LanPearSolidProps>;
export default LanPearSolid;
