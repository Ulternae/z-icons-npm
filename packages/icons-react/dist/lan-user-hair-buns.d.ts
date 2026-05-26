import React from 'react';

export interface LanUserHairBunsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHairBuns: React.FC<LanUserHairBunsProps>;
export default LanUserHairBuns;
