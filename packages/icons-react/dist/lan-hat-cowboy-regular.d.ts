import React from 'react';

export interface LanHatCowboyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatCowboyRegular: React.FC<LanHatCowboyRegularProps>;
export default LanHatCowboyRegular;
