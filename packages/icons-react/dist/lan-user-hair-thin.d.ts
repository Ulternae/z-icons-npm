import React from 'react';

export interface LanUserHairThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHairThin: React.FC<LanUserHairThinProps>;
export default LanUserHairThin;
