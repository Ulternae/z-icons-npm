import React from 'react';

export interface LanBillboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBillboardSolid: React.FC<LanBillboardSolidProps>;
export default LanBillboardSolid;
