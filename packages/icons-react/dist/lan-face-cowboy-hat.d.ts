import React from 'react';

export interface LanFaceCowboyHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceCowboyHat: React.FC<LanFaceCowboyHatProps>;
export default LanFaceCowboyHat;
