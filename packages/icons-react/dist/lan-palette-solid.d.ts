import React from 'react';

export interface LanPaletteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaletteSolid: React.FC<LanPaletteSolidProps>;
export default LanPaletteSolid;
