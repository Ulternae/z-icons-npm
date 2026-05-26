import React from 'react';

export interface LanFaceCowboyHatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceCowboyHatRegular: React.FC<LanFaceCowboyHatRegularProps>;
export default LanFaceCowboyHatRegular;
