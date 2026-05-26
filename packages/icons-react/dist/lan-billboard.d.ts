import React from 'react';

export interface LanBillboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBillboard: React.FC<LanBillboardProps>;
export default LanBillboard;
