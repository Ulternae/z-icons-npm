import React from 'react';

export interface LanBillboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBillboardRegular: React.FC<LanBillboardRegularProps>;
export default LanBillboardRegular;
