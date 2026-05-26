import React from 'react';

export interface LanPenSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSquareSolid: React.FC<LanPenSquareSolidProps>;
export default LanPenSquareSolid;
