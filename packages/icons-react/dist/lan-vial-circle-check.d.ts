import React from 'react';

export interface LanVialCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialCircleCheck: React.FC<LanVialCircleCheckProps>;
export default LanVialCircleCheck;
