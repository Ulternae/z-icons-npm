import React from 'react';

export interface LanPinballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinballSolid: React.FC<LanPinballSolidProps>;
export default LanPinballSolid;
