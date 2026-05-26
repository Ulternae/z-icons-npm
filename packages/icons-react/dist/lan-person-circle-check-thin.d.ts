import React from 'react';

export interface LanPersonCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleCheckThin: React.FC<LanPersonCircleCheckThinProps>;
export default LanPersonCircleCheckThin;
