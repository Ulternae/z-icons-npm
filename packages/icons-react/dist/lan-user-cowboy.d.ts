import React from 'react';

export interface LanUserCowboyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCowboy: React.FC<LanUserCowboyProps>;
export default LanUserCowboy;
