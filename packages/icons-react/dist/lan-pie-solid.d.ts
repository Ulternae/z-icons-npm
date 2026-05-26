import React from 'react';

export interface LanPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPieSolid: React.FC<LanPieSolidProps>;
export default LanPieSolid;
