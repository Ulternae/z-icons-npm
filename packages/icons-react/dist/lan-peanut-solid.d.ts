import React from 'react';

export interface LanPeanutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeanutSolid: React.FC<LanPeanutSolidProps>;
export default LanPeanutSolid;
