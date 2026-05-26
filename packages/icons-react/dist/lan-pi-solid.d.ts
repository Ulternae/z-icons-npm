import React from 'react';

export interface LanPiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiSolid: React.FC<LanPiSolidProps>;
export default LanPiSolid;
