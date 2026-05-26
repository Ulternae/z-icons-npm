import React from 'react';

export interface LanPawAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawAltSolid: React.FC<LanPawAltSolidProps>;
export default LanPawAltSolid;
