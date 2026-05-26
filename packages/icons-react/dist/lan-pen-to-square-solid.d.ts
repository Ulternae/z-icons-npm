import React from 'react';

export interface LanPenToSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenToSquareSolid: React.FC<LanPenToSquareSolidProps>;
export default LanPenToSquareSolid;
