import React from 'react';

export interface LanUserHairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHair: React.FC<LanUserHairProps>;
export default LanUserHair;
