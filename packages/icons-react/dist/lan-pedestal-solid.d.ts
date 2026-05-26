import React from 'react';

export interface LanPedestalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPedestalSolid: React.FC<LanPedestalSolidProps>;
export default LanPedestalSolid;
