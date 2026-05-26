import React from 'react';

export interface LanHatCowboyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatCowboyThin: React.FC<LanHatCowboyThinProps>;
export default LanHatCowboyThin;
