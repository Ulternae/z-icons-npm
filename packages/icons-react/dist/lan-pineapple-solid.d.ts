import React from 'react';

export interface LanPineappleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPineappleSolid: React.FC<LanPineappleSolidProps>;
export default LanPineappleSolid;
