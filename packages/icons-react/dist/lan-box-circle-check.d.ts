import React from 'react';

export interface LanBoxCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCircleCheck: React.FC<LanBoxCircleCheckProps>;
export default LanBoxCircleCheck;
