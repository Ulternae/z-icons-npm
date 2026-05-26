import React from 'react';

export interface LanPigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPigSolid: React.FC<LanPigSolidProps>;
export default LanPigSolid;
