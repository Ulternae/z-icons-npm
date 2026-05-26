import React from 'react';

export interface LanBurstRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstRegular: React.FC<LanBurstRegularProps>;
export default LanBurstRegular;
