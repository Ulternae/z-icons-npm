import React from 'react';

export interface LanPenLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenLineSolid: React.FC<LanPenLineSolidProps>;
export default LanPenLineSolid;
