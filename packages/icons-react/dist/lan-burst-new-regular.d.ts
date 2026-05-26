import React from 'react';

export interface LanBurstNewRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstNewRegular: React.FC<LanBurstNewRegularProps>;
export default LanBurstNewRegular;
