import React from 'react';

export interface LanPenAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenAltSolid: React.FC<LanPenAltSolidProps>;
export default LanPenAltSolid;
