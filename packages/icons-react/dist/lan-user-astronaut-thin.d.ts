import React from 'react';

export interface LanUserAstronautThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAstronautThin: React.FC<LanUserAstronautThinProps>;
export default LanUserAstronautThin;
