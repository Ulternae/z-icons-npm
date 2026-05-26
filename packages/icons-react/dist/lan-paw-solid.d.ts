import React from 'react';

export interface LanPawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawSolid: React.FC<LanPawSolidProps>;
export default LanPawSolid;
