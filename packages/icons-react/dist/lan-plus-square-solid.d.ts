import React from 'react';

export interface LanPlusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusSquareSolid: React.FC<LanPlusSquareSolidProps>;
export default LanPlusSquareSolid;
