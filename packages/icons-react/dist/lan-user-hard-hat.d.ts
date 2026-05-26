import React from 'react';

export interface LanUserHardHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHardHat: React.FC<LanUserHardHatProps>;
export default LanUserHardHat;
