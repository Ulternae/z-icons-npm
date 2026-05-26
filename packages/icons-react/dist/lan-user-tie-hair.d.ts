import React from 'react';

export interface LanUserTieHairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTieHair: React.FC<LanUserTieHairProps>;
export default LanUserTieHair;
