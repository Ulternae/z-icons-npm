import React from 'react';

export interface LanHatCowboyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatCowboy: React.FC<LanHatCowboyProps>;
export default LanHatCowboy;
