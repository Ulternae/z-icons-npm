import React from 'react';

export interface LanUserHairRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHairRegular: React.FC<LanUserHairRegularProps>;
export default LanUserHairRegular;
