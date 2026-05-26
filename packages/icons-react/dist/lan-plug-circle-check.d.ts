import React from 'react';

export interface LanPlugCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleCheck: React.FC<LanPlugCircleCheckProps>;
export default LanPlugCircleCheck;
