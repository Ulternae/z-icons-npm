import React from 'react';

export interface LanUserVneckHairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVneckHair: React.FC<LanUserVneckHairProps>;
export default LanUserVneckHair;
