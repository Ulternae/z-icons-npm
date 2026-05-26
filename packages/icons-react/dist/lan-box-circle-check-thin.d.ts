import React from 'react';

export interface LanBoxCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCircleCheckThin: React.FC<LanBoxCircleCheckThinProps>;
export default LanBoxCircleCheckThin;
