import React from 'react';

export interface LanPinataSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPinataSolid: React.FC<LanPinataSolidProps>;
export default LanPinataSolid;
