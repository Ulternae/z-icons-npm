import React from 'react';

export interface LanFaceCowboyHatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceCowboyHatThin: React.FC<LanFaceCowboyHatThinProps>;
export default LanFaceCowboyHatThin;
