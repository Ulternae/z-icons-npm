import React from 'react';

export interface LanUserHardHatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHardHatThin: React.FC<LanUserHardHatThinProps>;
export default LanUserHardHatThin;
