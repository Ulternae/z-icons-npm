import React from 'react';

export interface LanPompebledSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPompebledSolid: React.FC<LanPompebledSolidProps>;
export default LanPompebledSolid;
