import React from 'react';

export interface LanMemoCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleCheck: React.FC<LanMemoCircleCheckProps>;
export default LanMemoCircleCheck;
