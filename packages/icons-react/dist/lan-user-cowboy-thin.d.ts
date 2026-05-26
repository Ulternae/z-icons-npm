import React from 'react';

export interface LanUserCowboyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCowboyThin: React.FC<LanUserCowboyThinProps>;
export default LanUserCowboyThin;
