import React from 'react';

export interface LanBillboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBillboardThin: React.FC<LanBillboardThinProps>;
export default LanBillboardThin;
