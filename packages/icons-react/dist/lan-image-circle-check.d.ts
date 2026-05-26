import React from 'react';

export interface LanImageCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleCheck: React.FC<LanImageCircleCheckProps>;
export default LanImageCircleCheck;
