import React from 'react';

export interface LanLuchadorMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLuchadorMaskSolid: React.FC<LanLuchadorMaskSolidProps>;
export default LanLuchadorMaskSolid;
