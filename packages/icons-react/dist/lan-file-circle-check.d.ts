import React from 'react';

export interface LanFileCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleCheck: React.FC<LanFileCircleCheckProps>;
export default LanFileCircleCheck;
