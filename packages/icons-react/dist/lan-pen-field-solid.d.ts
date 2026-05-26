import React from 'react';

export interface LanPenFieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFieldSolid: React.FC<LanPenFieldSolidProps>;
export default LanPenFieldSolid;
