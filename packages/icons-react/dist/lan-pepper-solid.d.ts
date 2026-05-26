import React from 'react';

export interface LanPepperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperSolid: React.FC<LanPepperSolidProps>;
export default LanPepperSolid;
