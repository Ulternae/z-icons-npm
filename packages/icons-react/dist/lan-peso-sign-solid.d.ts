import React from 'react';

export interface LanPesoSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesoSignSolid: React.FC<LanPesoSignSolidProps>;
export default LanPesoSignSolid;
