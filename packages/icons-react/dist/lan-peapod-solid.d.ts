import React from 'react';

export interface LanPeapodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeapodSolid: React.FC<LanPeapodSolidProps>;
export default LanPeapodSolid;
