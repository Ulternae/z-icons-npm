import React from 'react';

export interface LanImageCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleCheckThin: React.FC<LanImageCircleCheckThinProps>;
export default LanImageCircleCheckThin;
